import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import ProfileView from "@/views/customer/dashboard/ProfileView";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "My Profile — Dashboard" };

export default async function ProfilePage() {
  const session = await auth();
  if (!session) redirect("/signin");

  const { first_name, last_name, email, phone, avatar, apiToken, customer_profile } = session.user;

  return (
    <ProfileView
      firstName={first_name}
      lastName={last_name}
      email={email}
      phone={phone}
      avatar={avatar}
      customerProfile={customer_profile}
      apiToken={apiToken}
    />
  );
}
