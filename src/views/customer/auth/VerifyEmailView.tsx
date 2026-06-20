"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, MailCheck } from "lucide-react";
import { useHttp } from "@/hooks/useHttp";
import { useAppDispatch } from "@/store/hooks";
import { setCredentials } from "@/store/slices/customerAuthSlice";
import type { AuthUser, VerifyEmailPayload, ResendCodePayload } from "@/types/auth";

const CODE_LENGTH = 6;
const RESEND_COOLDOWN = 60;

export default function VerifyEmailView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const email = searchParams.get("email") ?? "";

  const { post, isLoading, error, clearError } = useHttp();
  const {
    post: resendPost,
    isLoading: resendLoading,
    error: resendError,
    clearError: clearResendError,
  } = useHttp();

  const [digits, setDigits] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const [cooldown, setCooldown] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (!email) router.replace("/signup");
  }, [email, router]);

  useEffect(() => {
    if (cooldown <= 0) return;
    const id = setInterval(() => setCooldown((c) => c - 1), 1000);
    return () => clearInterval(id);
  }, [cooldown]);

  function handleDigitChange(index: number, value: string) {
    const char = value.replace(/\D/, "").slice(-1);
    const next = [...digits];
    next[index] = char;
    setDigits(next);
    clearError();
    if (char && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  function handlePaste(e: React.ClipboardEvent) {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, CODE_LENGTH);
    const next = Array(CODE_LENGTH).fill("");
    pasted.split("").forEach((ch, i) => (next[i] = ch));
    setDigits(next);
    const focusIdx = Math.min(pasted.length, CODE_LENGTH - 1);
    inputRefs.current[focusIdx]?.focus();
  }

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    const code = digits.join("");
    if (code.length < CODE_LENGTH) return;

    try {
      const response = await post<{ token: string; user: AuthUser; message: string }>(
        "/api/customer/auth/verify-email",
        { email, code } as VerifyEmailPayload
      );
      dispatch(setCredentials({ token: response.token, user: response.user }));
      router.push("/");
    } catch {
    }
  }

  async function handleResend() {
    if (cooldown > 0 || resendLoading) return;
    clearResendError();
    setSuccessMessage("");
    try {
      await resendPost<{ message: string }>(
        "/api/customer/auth/resend-verification-code",
        { email } as ResendCodePayload
      );
      setCooldown(RESEND_COOLDOWN);
      setSuccessMessage("A new code has been sent to your email.");
      setDigits(Array(CODE_LENGTH).fill(""));
      inputRefs.current[0]?.focus();
    } catch {
    }
  }

  const code = digits.join("");
  const isComplete = code.length === CODE_LENGTH;

  return (
    <div className="w-full max-w-md">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
        <div className="mb-8 flex flex-col items-center text-center gap-3">
          <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
            <MailCheck className="w-7 h-7 text-amber-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Check your email</h1>
            <p className="text-slate-400 text-sm">
              We sent a 6-digit code to{" "}
              <span className="text-white font-medium">{email}</span>
            </p>
          </div>
        </div>

        {error && (
          <div className="mb-5 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        {successMessage && (
          <div className="mb-5 px-4 py-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm text-center">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleVerify} className="space-y-6">
          <div className="flex justify-center gap-3" onPaste={handlePaste}>
            {digits.map((digit, i) => (
              <input
                key={i}
                ref={(el) => { inputRefs.current[i] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleDigitChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className="w-12 h-14 text-center text-xl font-bold text-white rounded-xl bg-white/5 border border-white/10 outline-none transition focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/30 caret-amber-400"
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={!isComplete || isLoading}
            className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 font-semibold text-sm transition flex items-center justify-center gap-2"
          >
            {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
            {isLoading ? "Verifying..." : "Verify Email"}
          </button>
        </form>

        {resendError && (
          <p className="mt-4 text-center text-xs text-red-400">{resendError}</p>
        )}

        <p className="mt-5 text-center text-sm text-slate-400">
          Didn&apos;t receive the code?{" "}
          <button
            onClick={handleResend}
            disabled={cooldown > 0 || resendLoading}
            className="text-amber-400 hover:text-amber-300 font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {resendLoading
              ? "Sending..."
              : cooldown > 0
              ? `Resend in ${cooldown}s`
              : "Resend code"}
          </button>
        </p>

        <p className="mt-3 text-center text-xs text-slate-500">
          Code expires in 10 minutes
        </p>
      </div>
    </div>
  );
}
