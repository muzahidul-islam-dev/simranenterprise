"use client";

import { useEffect, useState } from "react";
import { ShoppingBag, XCircle, Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useHttp } from "@/hooks/useHttp";
import { ORDER_STATUS_COLOR, ORDER_STATUS_LABEL, type Order, type OrderStatus } from "@/types/order";

export default function ServicesView() {
  const { data: session } = useSession();
  const { get, patch, isLoading } = useHttp();
  const [orders, setOrders] = useState<Order[]>([]);
  const [cancellingId, setCancellingId] = useState<number | null>(null);

  useEffect(() => {
    if (!session?.user.apiToken) return;
    get<{ data: Order[] }>("/api/customer/orders", { token: session.user.apiToken })
      .then((res) => setOrders(res.data ?? []))
      .catch(() => setOrders([]));
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
    } catch {
    } finally {
      setCancellingId(null);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">My Services</h2>
        <p className="text-sm text-gray-500 mt-1">All your service orders in one place.</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 className="text-base font-bold text-gray-900">Order History</h3>
          <span className="text-xs text-gray-400">{orders.length} total</span>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-6 h-6 text-[#1B4FD8] animate-spin" />
          </div>
        ) : orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center px-6">
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-3">
              <ShoppingBag className="w-6 h-6 text-gray-400" />
            </div>
            <p className="text-sm font-medium text-gray-500">No orders yet</p>
            <p className="text-xs text-gray-400 mt-1">Go to Dashboard and place your first order.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-left">
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">#</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Service</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Note</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {orders.map((order, index) => {
                  const { bg, text } = ORDER_STATUS_COLOR[order.status as OrderStatus];
                  return (
                    <tr key={order.id} className="hover:bg-gray-50/70 transition-colors">
                      <td className="px-6 py-4 text-xs text-gray-400">{index + 1}</td>
                      <td className="px-6 py-4 font-mono text-xs text-gray-500 whitespace-nowrap">{order.order_number}</td>
                      <td className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">
                        {order.service?.title ?? "—"}
                      </td>
                      <td className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap">
                        ৳ {Number(order.price).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-xs text-gray-500 whitespace-nowrap">
                        {new Date(order.created_at).toLocaleDateString("en-BD", { day: "numeric", month: "short", year: "numeric" })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: bg, color: text }}>
                          {ORDER_STATUS_LABEL[order.status as OrderStatus]}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs text-gray-500 max-w-[160px] truncate">
                        {order.note ?? <span className="text-gray-300">—</span>}
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap">
                        {order.status === "pending" && (
                          <button
                            onClick={() => handleCancel(order.id)}
                            disabled={cancellingId === order.id}
                            className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-red-500 transition-colors cursor-pointer disabled:opacity-50"
                          >
                            <XCircle className="w-4 h-4" />
                            Cancel
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
