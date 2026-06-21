"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { ArrowLeft, Loader2, ShieldCheck, Truck } from "lucide-react";
import { useHttp } from "@/hooks/useHttp";
import type { ApiService } from "@/types/service";
import type { Order } from "@/types/order";

interface FormData {
  full_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  note: string;
}

interface FormErrors {
  full_name?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
}

interface Props {
  service: ApiService | null;
}

export default function CheckoutView({ service }: Props) {
  const router = useRouter();
  const { data: session } = useSession();
  const { post, isLoading, error } = useHttp();

  const [form, setForm] = useState<FormData>({
    full_name: "",
    email: session?.user.email ?? "",
    phone: session?.user.phone ?? "",
    address: "",
    city: "",
    note: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  if (!service) {
    return (
      <div className="max-w-lg mx-auto text-center py-20">
        <p className="text-gray-500 mb-4">Service not found.</p>
        <Link href="/services" className="text-[#1B4FD8] font-semibold hover:underline">
          ← Back to Services
        </Link>
      </div>
    );
  }

  const priceFormatted = `৳ ${Number(service.price).toLocaleString()}`;

  function validate(): boolean {
    const next: FormErrors = {};
    if (!form.full_name.trim()) next.full_name = "Full name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email.";
    if (!form.phone.trim()) next.phone = "Phone number is required.";
    if (!form.address.trim()) next.address = "Address is required.";
    if (!form.city.trim()) next.city = "City is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate() || !service) return;

    try {
      const response = await post<{ data: Order; message: string }>(
        "/api/customer/orders",
        {
          service_slug:  service.slug,
          customer_name: form.full_name,
          email:         form.email,
          phone:         form.phone,
          city:          form.city,
          address:       form.address,
          note:          form.note || null,
        },
        { token: session?.user.apiToken }
      );

      router.push(
        `/checkout/success?orderId=${response.data.order_number}&service=${encodeURIComponent(service.title)}&price=${encodeURIComponent(priceFormatted)}`
      );
    } catch {
    }
  }

  return (
    <div className="max-w-5xl mx-auto">
      <Link href="/services" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Services
      </Link>

      <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-5">Your Details</h2>

          {error && (
            <div className="mb-5 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" name="full_name" placeholder="John Doe" value={form.full_name} error={errors.full_name} onChange={handleChange} />
              <Field label="Email Address" name="email" type="email" placeholder="john@example.com" value={form.email} error={errors.email} onChange={handleChange} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Phone Number" name="phone" type="tel" placeholder="+880 1700 000000" value={form.phone} error={errors.phone} onChange={handleChange} />
              <Field label="City" name="city" placeholder="Dhaka" value={form.city} error={errors.city} onChange={handleChange} />
            </div>
            <Field label="Full Address" name="address" placeholder="House, Road, Area..." value={form.address} error={errors.address} onChange={handleChange} />

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">
                Additional Note <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <textarea
                name="note"
                value={form.note}
                onChange={handleChange}
                placeholder="Any specific requirements or details..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none resize-none focus:border-[#1B4FD8] focus:ring-2 focus:ring-[#1B4FD8]/20 transition"
              />
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="text-sm font-bold text-gray-900 mb-4">Payment Method</h3>
              <label className="flex items-center gap-4 p-4 border-2 border-[#1B4FD8] bg-[#1B4FD8]/5 rounded-xl cursor-pointer">
                <div className="w-5 h-5 rounded-full border-2 border-[#1B4FD8] flex items-center justify-center shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1B4FD8]" />
                </div>
                <Truck className="w-5 h-5 text-[#1B4FD8] shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Cash on Delivery</p>
                  <p className="text-xs text-gray-500">Pay when our representative contacts you</p>
                </div>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 rounded-xl bg-[#1B4FD8] hover:bg-[#1640b0] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm transition flex items-center justify-center gap-2 cursor-pointer"
            >
              {isLoading ? <><Loader2 className="w-4 h-4 animate-spin" /> Processing...</> : <>Place Order — {priceFormatted}</>}
            </button>
          </form>
        </div>

        <div className="space-y-4 lg:sticky lg:top-[140px]">
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Order Summary</h3>
            <div className="flex items-start gap-4 mb-5">
              <div className="w-11 h-11 rounded-xl bg-[#1B4FD8]/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#1B4FD8]" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{service.title}</p>
                {service.sub_title && <p className="text-xs text-gray-500 mt-0.5">{service.sub_title}</p>}
              </div>
            </div>
            {service.features && service.features.length > 0 && (
              <ul className="space-y-1.5 mb-5">
                {service.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#1B4FD8]/10 flex items-center justify-center shrink-0">
                      <svg className="w-1.5 h-1.5 text-[#1B4FD8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {f}
                  </li>
                ))}
                {service.features.length > 4 && (
                  <li className="text-xs text-gray-400 pl-5">+{service.features.length - 4} more included</li>
                )}
              </ul>
            )}
            <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Total</span>
              <span className="text-xl font-extrabold text-gray-900">{priceFormatted}</span>
            </div>
          </div>

          <div className="bg-[#1B4FD8]/5 border border-[#1B4FD8]/20 rounded-2xl p-4 flex gap-3">
            <ShieldCheck className="w-5 h-5 text-[#1B4FD8] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-[#1B4FD8]">100% Secure Process</p>
              <p className="text-xs text-gray-500 mt-0.5">Our team will verify your details and contact you within 24 hours.</p>
            </div>
          </div>
        </div>
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
          error ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-[#1B4FD8]"
        }`}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
