"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { FileText, Clock, CheckCircle, ShoppingBag, XCircle, ShoppingCart, Loader2 } from "lucide-react";
import { useHttp } from "@/hooks/useHttp";
import { ORDER_STATUS_COLOR, ORDER_STATUS_LABEL, type Order, type OrderStatus } from "@/types/order";
import type { ApiService } from "@/types/service";

interface Props {
  firstName: string;
  lastName: string;
  country: string | null;
  services: ApiService[];
}

export default function DashboardOverview({ firstName, lastName, country, services }: Props) {
  const router = useRouter();
  const { data: session } = useSession();
  const { get, patch } = useHttp();

  const [orders, setOrders] = useState<Order[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(true);
  const [cancellingId, setCancellingId] = useState<number | null>(null);

  useEffect(() => {
    if (!session?.user.apiToken) return;
    get<{ data: Order[] }>("/api/customer/orders", { token: session.user.apiToken })
      .then((res) => setOrders(res.data ?? []))
      .catch(() => setOrders([]));
      setOrdersLoading(false);
  }, [session]);

  async function handleCancel(orderId: number) {
    if (!session?.user.apiToken) return;
    setCancellingId(orderId);
    try {
      const res = await patch<{ data: Order }>(
        `/api/customer/orders/${orderId}/cancel`,
        {},
        { token: session.user.apiToken }
      );
      setOrders((prev) => prev.map((o) => (o.id === orderId ? res.data : o)));
    } finally {
      setCancellingId(null);
    }
  }

  const stats = [
    { label: "Total Orders",  value: orders.length,                                          icon: ShoppingBag, color: "#1B4FD8" },
    { label: "Pending",       value: orders.filter((o) => o.status === "pending").length,    icon: Clock,       color: "#F5A623" },
    { label: "Processing",    value: orders.filter((o) => o.status === "processing").length, icon: FileText,    color: "#8b5cf6" },
    { label: "Completed",     value: orders.filter((o) => o.status === "completed").length,  icon: CheckCircle, color: "#10b981" },
  ];

  const recent = orders.slice(0, 5);

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Welcome back</p>
        <h2 className="text-2xl font-bold text-gray-900">{firstName} {lastName}</h2>
        {country && <p className="text-sm text-gray-500 mt-0.5">{country}</p>}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}15` }}>
              <Icon className="w-5 h-5" style={{ color }} />
            </div>
            <div>
              {ordersLoading ? (
                <div className="h-7 w-8 bg-gray-200 rounded animate-pulse mb-1" />
              ) : (
                <p className="text-2xl font-bold text-gray-900">{value}</p>
              )}
              <p className="text-xs text-gray-500">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {services.length > 0 && (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="text-base font-bold text-gray-900">Available Services</h3>
            <p className="text-xs text-gray-500 mt-0.5">Click Order to go to checkout</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1B4FD8]/10 flex items-center justify-center shrink-0">
                  <ShoppingCart className="w-5 h-5 text-[#1B4FD8]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">{service.title}</p>
                  <p className="text-xs font-bold text-[#1B4FD8]">৳ {Number(service.price).toLocaleString()}</p>
                </div>
                <button
                  onClick={() => router.push(`/checkout?service=${service.slug}`)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-white bg-[#1B4FD8] hover:bg-[#1640b0] px-3 py-1.5 rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  Order
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 className="text-base font-bold text-gray-900">Recent Orders</h3>
          {orders.length > 5 && (
            <Link href="/dashboard/services" className="text-xs font-semibold text-[#1B4FD8] hover:underline">
              View all
            </Link>
          )}
        </div>

        {ordersLoading ? (
          <div className="flex items-center justify-center py-14">
            <Loader2 className="w-5 h-5 text-[#1B4FD8] animate-spin" />
          </div>
        ) : recent.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-14 text-center px-6">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
              <ShoppingBag className="w-5 h-5 text-gray-400" />
            </div>
            <p className="text-sm font-medium text-gray-500">No orders yet</p>
            <p className="text-xs text-gray-400 mt-1">Place your first order from the services above</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {recent.map((order) => {
              const { bg, text } = ORDER_STATUS_COLOR[order.status as OrderStatus];
              return (
                <div key={order.id} className="flex items-center gap-4 px-6 py-4">
                  <div className="w-9 h-9 rounded-xl bg-[#1B4FD8]/10 flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4 text-[#1B4FD8]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {order.service?.title ?? "Service"}
                    </p>
                    <p className="text-xs text-gray-400">
                      {order.order_number} · {new Date(order.created_at).toLocaleDateString("en-BD", { day: "numeric", month: "short", year: "numeric" })}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-sm font-bold text-gray-900">৳ {Number(order.price).toLocaleString()}</span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: bg, color: text }}>
                      {ORDER_STATUS_LABEL[order.status as OrderStatus]}
                    </span>
                    {order.status === "pending" && (
                      <button
                        onClick={() => handleCancel(order.id)}
                        disabled={cancellingId === order.id}
                        title="Cancel"
                        className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer disabled:opacity-50"
                      >
                        <XCircle className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
