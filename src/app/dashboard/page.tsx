import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { fetchServices } from "@/lib/services";
import DashboardOverview from "@/views/customer/dashboard/DashboardOverview";

export const metadata = { title: "Dashboard — Simran Enterprise" };

export default async function DashboardPage() {
  const session = await auth();
  if (!session) redirect("/signin");

  const services = await fetchServices();
  const { first_name, last_name, customer_profile } = session.user;

  return (
    <DashboardOverview
      firstName={first_name}
      lastName={last_name}
      country={customer_profile?.country ?? null}
      services={services}
    />
  );
}
