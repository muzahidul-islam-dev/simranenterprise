"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  LayoutDashboard,
  Briefcase,
  User,
  LogOut,
  X,
} from "lucide-react";

const NAV = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Services", href: "/dashboard/services", icon: Briefcase },
  { label: "My Profile", href: "/dashboard/profile", icon: User },
];

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string | null;
  open: boolean;
  onClose: () => void;
}

export default function DashboardSidebar({ firstName, lastName, email, avatar, open, onClose }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const initials = `${firstName[0] ?? ""}${lastName[0] ?? ""}`.toUpperCase();

  async function handleLogout() {
    await signOut({ redirect: false });
    router.push("/");
    router.refresh();
  }

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-[#0d1b2a] z-50 flex flex-col
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:z-auto
        `}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <Link href="/" className="block">
            <img src="/logo.png" alt="Simran Enterprise" className="h-9 w-auto object-contain" />
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden text-white/40 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-5 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            {avatar ? (
              <img src={avatar} alt={firstName} className="w-10 h-10 rounded-full object-cover ring-2 ring-[#F5A623]" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-[#1B4FD8] flex items-center justify-center text-white text-sm font-bold ring-2 ring-[#F5A623]">
                {initials}
              </div>
            )}
            <div className="min-w-0">
              <p className="text-white text-sm font-semibold truncate">{firstName} {lastName}</p>
              <p className="text-white/40 text-xs truncate">{email}</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {NAV.map(({ label, href, icon: Icon }) => {
            const active = href === "/dashboard" ? pathname === "/dashboard" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`
                  flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all
                  ${active
                    ? "bg-[#1B4FD8] text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="px-3 py-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-white/60 hover:bg-red-500/10 hover:text-red-400 transition-all cursor-pointer"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
