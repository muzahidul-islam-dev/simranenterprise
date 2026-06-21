"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { User, Briefcase, LogOut } from "lucide-react";

interface ProfileDropdownProps {
  firstName: string;
  lastName: string;
  avatar: string | null;
  scrolled: boolean;
}

export default function ProfileDropdown({ firstName, lastName, avatar, scrolled }: ProfileDropdownProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleLogout() {
    setOpen(false);
    await signOut({ redirect: false });
    router.push("/");
    router.refresh();
  }

  const initials = `${firstName[0] ?? ""}${lastName[0] ?? ""}`.toUpperCase();

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 cursor-pointer focus:outline-none"
        aria-label="Profile menu"
      >
        {avatar ? (
          <img
            src={avatar}
            alt={firstName}
            className="w-9 h-9 rounded-full object-cover border-2 border-[#F5A623]"
          />
        ) : (
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 border-[#F5A623]"
            style={{
              background: "#1B4FD8",
              color: "#fff",
            }}
          >
            {initials}
          </div>
        )}
        <span
          className="hidden lg:block text-sm font-semibold transition-colors"
          style={{ color: scrolled ? "#0d1b2a" : "rgba(255,255,255,0.9)" }}
        >
          {firstName}
        </span>
        <svg
          className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          style={{ color: scrolled ? "#6b7280" : "rgba(255,255,255,0.6)" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-3 w-52 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden z-50">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-semibold text-gray-900 truncate">
              {firstName} {lastName}
            </p>
          </div>

          <div className="py-1">
            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1B4FD8] transition-colors"
            >
              <User className="w-4 h-4" />
              My Profile
            </Link>
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1B4FD8] transition-colors"
            >
              <Briefcase className="w-4 h-4" />
              Services
            </Link>
          </div>

          <div className="border-t border-gray-100 py-1">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
