import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import DashboardShell from "@/components/customer/DashboardShell";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session) redirect("/signin");

  const { first_name, last_name, email, avatar } = session.user;

  return (
    <DashboardShell
      firstName={first_name}
      lastName={last_name}
      email={email}
      avatar={avatar}
    >
      {children}
    </DashboardShell>
  );
}
