"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle, ArrowRight, LayoutDashboard } from "lucide-react";

export default function CheckoutSuccessView() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") ?? "";
  const service = searchParams.get("service") ?? "Service";
  const price = searchParams.get("price") ?? "";

  return (
    <div className="max-w-lg mx-auto text-center">
      <div className="bg-white rounded-2xl border border-gray-100 p-10 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
        <p className="text-gray-500 text-sm mb-8">
          Thank you for your order. Our team will contact you within 24 hours to confirm and proceed.
        </p>

        <div className="bg-gray-50 rounded-xl p-5 text-left space-y-3 mb-8">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Order ID</span>
            <span className="font-mono font-semibold text-gray-900">{orderId}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Service</span>
            <span className="font-semibold text-gray-900 text-right max-w-[200px]">{service}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Amount</span>
            <span className="font-bold text-gray-900">{price}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Payment</span>
            <span className="font-semibold text-gray-900">Cash on Delivery</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Status</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">Pending</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/dashboard"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1B4FD8] hover:bg-[#1640b0] text-white text-sm font-semibold transition-colors"
          >
            <LayoutDashboard className="w-4 h-4" />
            My Dashboard
          </Link>
          <Link
            href="/services"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-semibold transition-colors"
          >
            Browse More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
