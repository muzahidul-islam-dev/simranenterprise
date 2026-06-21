"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, MailCheck } from "lucide-react";
import { signIn } from "next-auth/react";
import { useHttp } from "@/hooks/useHttp";
import type { VerifyEmailPayload, ResendCodePayload } from "@/types/auth";

const CODE_LENGTH = 6;
const RESEND_COOLDOWN = 60;

export default function VerifyEmailView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";
  const password = searchParams.get("password") ?? "";

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
      await post<{ message: string }>(
        "/api/customer/auth/verify-email",
        { email, code } as VerifyEmailPayload
      );

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        router.push("/signin");
        return;
      }

      router.push("/dashboard");
      router.refresh();
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

  const isComplete = digits.join("").length === CODE_LENGTH;

  return (
    <div className="w-full max-w-md">
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <div className="mb-8 flex flex-col items-center text-center gap-3">
          <div className="w-14 h-14 rounded-full bg-[#1B4FD8]/10 border border-[#1B4FD8]/20 flex items-center justify-center">
            <MailCheck className="w-7 h-7 text-[#1B4FD8]" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Check your email</h1>
            <p className="text-gray-500 text-sm">
              We sent a 6-digit code to{" "}
              <span className="text-gray-800 font-medium">{email}</span>
            </p>
          </div>
        </div>

        {error && (
          <div className="mb-5 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm text-center">
            {error}
          </div>
        )}

        {successMessage && (
          <div className="mb-5 px-4 py-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm text-center">
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
                className="w-12 h-14 text-center text-xl font-bold text-gray-900 rounded-xl border border-gray-200 outline-none transition focus:border-[#1B4FD8] focus:ring-2 focus:ring-[#1B4FD8]/20 caret-[#1B4FD8]"
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={!isComplete || isLoading}
            className="w-full py-3.5 rounded-xl bg-[#1B4FD8] hover:bg-[#1640b0] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-white font-semibold text-sm transition flex items-center justify-center gap-2"
          >
            {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
            {isLoading ? "Verifying..." : "Verify Email"}
          </button>
        </form>

        {resendError && (
          <p className="mt-4 text-center text-xs text-red-500">{resendError}</p>
        )}

        <p className="mt-5 text-center text-sm text-gray-500">
          Didn&apos;t receive the code?{" "}
          <button
            onClick={handleResend}
            disabled={cooldown > 0 || resendLoading}
            className="text-[#1B4FD8] hover:text-[#1640b0] font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {resendLoading ? "Sending..." : cooldown > 0 ? `Resend in ${cooldown}s` : "Resend code"}
          </button>
        </p>

        <p className="mt-3 text-center text-xs text-gray-400">Code expires in 10 minutes</p>
      </div>
    </div>
  );
}
