"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardTopbar from "./DashboardTopbar";

interface Props {
  children: React.ReactNode;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string | null;
}

export default function DashboardShell({ children, firstName, lastName, email, avatar }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: session } = useSession();
  // Use live session avatar so topbar/sidebar update instantly after profile photo change
  const liveAvatar = session?.user?.avatar ?? avatar;

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8f9fb]" style={{ fontFamily: "var(--font-jakarta)" }}>
      <DashboardSidebar
        firstName={firstName}
        lastName={lastName}
        email={email}
        avatar={liveAvatar}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <DashboardTopbar
          firstName={firstName}
          avatar={liveAvatar}
          onMenuClick={() => setSidebarOpen(true)}
        />
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
