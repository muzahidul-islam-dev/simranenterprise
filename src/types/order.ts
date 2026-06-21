export type OrderStatus = "pending" | "processing" | "completed" | "cancelled";

export interface Order {
  id: number;
  order_number: string;
  service_id: number;
  service?: { id: number; title: string; slug: string };
  customer_name: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  note: string | null;
  price: number;
  payment_method: string;
  status: OrderStatus;
  created_at: string;
}

export const ORDER_STATUS_LABEL: Record<OrderStatus, string> = {
  pending:    "Pending",
  processing: "Processing",
  completed:  "Completed",
  cancelled:  "Cancelled",
};

export const ORDER_STATUS_COLOR: Record<OrderStatus, { bg: string; text: string }> = {
  pending:    { bg: "#FEF9C3", text: "#854D0E" },
  processing: { bg: "#DBEAFE", text: "#1E40AF" },
  completed:  { bg: "#DCFCE7", text: "#166534" },
  cancelled:  { bg: "#FEE2E2", text: "#991B1B" },
};
