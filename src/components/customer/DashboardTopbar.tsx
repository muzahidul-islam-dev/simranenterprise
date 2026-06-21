"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Menu, Bell, User, Settings, LogOut } from "lucide-react";

const TITLE_MAP: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/dashboard/services": "Services",
  "/dashboard/profile": "My Profile",
};

interface Props {
  firstName: string;
  avatar: string | null;
  onMenuClick: () => void;
}

export default function DashboardTopbar({ firstName, avatar, onMenuClick }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const initials = firstName[0]?.toUpperCase() ?? "U";
  const title = TITLE_MAP[pathname] ?? "Dashboard";

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  async function handleLogout() {
    setOpen(false);
    await signOut({ redirect: false });
    router.push("/");
    router.refresh();
  }

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="lg:hidden p-2 -ml-2 text-gray-500 hover:text-gray-800 transition-colors" aria-label="Open menu">
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-bold text-gray-900">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <button className="relative p-2 text-gray-400 hover:text-gray-700 transition-colors">
          <Bell className="w-5 h-5" />
        </button>

        <div ref={ref} className="relative">
          <button
            onClick={() => setOpen((v) => !v)}
            className="focus:outline-none"
            aria-label="Profile menu"
          >
            {avatar ? (
              <img src={avatar} alt={firstName} className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-200 hover:ring-[#1B4FD8] transition-all" />
            ) : (
              <div className="w-8 h-8 rounded-full bg-[#1B4FD8] flex items-center justify-center text-white text-xs font-bold ring-2 ring-gray-200 hover:ring-[#1B4FD8] transition-all">
                {initials}
              </div>
            )}
          </button>

          {open && (
            <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden z-50">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-900">{firstName}</p>
                <p className="text-xs text-gray-400 mt-0.5">Customer</p>
              </div>
              <div className="py-1">
                <Link
                  href="/dashboard/profile"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1B4FD8] transition-colors"
                >
                  <User className="w-4 h-4" />
                  My Profile
                </Link>
                <Link
                  href="/dashboard/profile"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1B4FD8] transition-colors"
                >
                  <Settings className="w-4 h-4" />
                  Settings
                </Link>
              </div>
              <div className="border-t border-gray-100 py-1">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
