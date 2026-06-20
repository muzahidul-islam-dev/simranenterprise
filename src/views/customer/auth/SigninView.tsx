"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useHttp } from "@/hooks/useHttp";
import { useAppDispatch } from "@/store/hooks";
import { setCredentials, setError } from "@/store/slices/customerAuthSlice";
import type { AuthUser, LoginPayload } from "@/types/auth";

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export default function SigninView() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { post, isLoading, error } = useHttp();

  const [form, setForm] = useState<FormData>({ email: "", password: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);

  function validate(): boolean {
    const next: FormErrors = {};
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email.";
    if (!form.password) next.password = "Password is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await post<{ token: string; user: AuthUser; message?: string }>(
        "/api/customer/auth/login",
        form as LoginPayload
      );

      if (response.message) {
        router.push(`/verify-email?email=${encodeURIComponent(form.email)}`);
        return;
      }

      dispatch(setCredentials({ token: response.token, user: response.user }));
      router.push("/");
    } catch (err) {
      if (err instanceof Error) {
        dispatch(setError(err.message));
      }
    }
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome Back</h1>
          <p className="text-gray-500 text-sm">Sign in to your account</p>
        </div>

        {error && (
          <div className="mb-6 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border text-gray-900 text-sm placeholder-gray-400 outline-none transition focus:ring-2 focus:ring-[#1B4FD8]/20 ${
                errors.email
                  ? "border-red-400 focus:border-red-400"
                  : "border-gray-200 focus:border-[#1B4FD8]"
              }`}
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 pr-12 rounded-xl border text-gray-900 text-sm placeholder-gray-400 outline-none transition focus:ring-2 focus:ring-[#1B4FD8]/20 ${
                  errors.password
                    ? "border-red-400 focus:border-red-400"
                    : "border-gray-200 focus:border-[#1B4FD8]"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 rounded-xl bg-[#1B4FD8] hover:bg-[#1640b0] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition flex items-center justify-center gap-2"
          >
            {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-[#1B4FD8] hover:text-[#1640b0] font-medium transition">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
