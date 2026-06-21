"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useHttp } from "@/hooks/useHttp";
import { COUNTRY_NAMES } from "@/lib/countries";
import type { RegisterPayload } from "@/types/auth";

const COUNTRIES = COUNTRY_NAMES;

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  password: string;
  password_confirmation: string;
}

interface FormErrors {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  country?: string;
  password?: string;
  password_confirmation?: string;
}

export default function SignupView() {
  const router = useRouter();
  const { post, isLoading, error } = useHttp();

  const [form, setForm] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  function validate(): boolean {
    const next: FormErrors = {};
    if (!form.first_name.trim()) next.first_name = "First name is required.";
    if (!form.last_name.trim()) next.last_name = "Last name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email.";
    if (!form.phone.trim()) next.phone = "Phone number is required.";
    if (!form.country) next.country = "Please select a country.";
    if (!form.password) next.password = "Password is required.";
    else if (form.password.length < 8) next.password = "Minimum 8 characters.";
    if (!form.password_confirmation) next.password_confirmation = "Please confirm your password.";
    else if (form.password !== form.password_confirmation)
      next.password_confirmation = "Passwords do not match.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    try {
      await post<{ message: string }>("/api/customer/auth/register", form as RegisterPayload);
      router.push(`/verify-email?email=${encodeURIComponent(form.email)}&password=${encodeURIComponent(form.password)}`);
    } catch {
    }
  }

  return (
    <div className="w-full max-w-2xl">
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Create Account</h1>
          <p className="text-gray-500 text-sm">Join Simran Enterprise today</p>
        </div>

        {error && (
          <div className="mb-6 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field
              label="First Name"
              name="first_name"
              placeholder="John"
              value={form.first_name}
              error={errors.first_name}
              onChange={handleChange}
            />
            <Field
              label="Last Name"
              name="last_name"
              placeholder="Doe"
              value={form.last_name}
              error={errors.last_name}
              onChange={handleChange}
            />
          </div>

          <Field
            label="Email Address"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={form.email}
            error={errors.email}
            onChange={handleChange}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="+880 1700 000000"
              value={form.phone}
              error={errors.phone}
              onChange={handleChange}
            />

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">Country</label>
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border text-gray-900 text-sm outline-none transition focus:ring-2 focus:ring-[#1B4FD8]/20 bg-white ${
                  errors.country
                    ? "border-red-400 focus:border-red-400"
                    : "border-gray-200 focus:border-[#1B4FD8]"
                }`}
              >
                <option value="">Select country</option>
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errors.country && <p className="text-xs text-red-500">{errors.country}</p>}
            </div>
          </div>

          <PasswordField
            label="Password"
            name="password"
            placeholder="Min. 8 characters"
            value={form.password}
            error={errors.password}
            show={showPassword}
            onToggle={() => setShowPassword((v) => !v)}
            onChange={handleChange}
          />

          <PasswordField
            label="Confirm Password"
            name="password_confirmation"
            placeholder="Re-enter password"
            value={form.password_confirmation}
            error={errors.password_confirmation}
            show={showConfirm}
            onToggle={() => setShowConfirm((v) => !v)}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 rounded-xl bg-[#1B4FD8] hover:bg-[#1640b0] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer text-white font-semibold text-sm transition flex items-center justify-center gap-2"
          >
            {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
            {isLoading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/signin" className="text-[#1B4FD8] hover:text-[#1640b0] font-medium transition">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Field({ label, name, type = "text", placeholder, value, error, onChange }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-xl border text-gray-900 text-sm placeholder-gray-400 outline-none transition focus:ring-2 focus:ring-[#1B4FD8]/20 ${
          error
            ? "border-red-400 focus:border-red-400"
            : "border-gray-200 focus:border-[#1B4FD8]"
        }`}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

interface PasswordFieldProps extends Omit<FieldProps, "type"> {
  show: boolean;
  onToggle: () => void;
}

function PasswordField({ label, name, placeholder, value, error, show, onToggle, onChange }: PasswordFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-3 pr-12 rounded-xl border text-gray-900 text-sm placeholder-gray-400 outline-none transition focus:ring-2 focus:ring-[#1B4FD8]/20 ${
            error
              ? "border-red-400 focus:border-red-400"
              : "border-gray-200 focus:border-[#1B4FD8]"
          }`}
        />
        <button
          type="button"
          onClick={onToggle}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
        >
          {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
