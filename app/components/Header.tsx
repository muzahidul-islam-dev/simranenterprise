"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

const F = { fontFamily: "var(--font-main)" };

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed left-0 right-0 z-50 transition-all duration-300"
      style={{
        ...F,
        top: scrolled ? 0 : "48px",
        background: scrolled ? "#ffffff" : "transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        borderBottom: scrolled ? "1px solid #e5e7eb" : "none",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div
          className="flex justify-between items-center h-[80px]"
          style={{ borderBottom: scrolled ? "none" : "1px solid rgba(255,255,255,0.1)" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="Simran Enterprise"
              className="w-auto object-contain"
              style={{ height: scrolled ? "44px" : "48px", transition: "height 0.3s" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center">
            {["Home", "About", "Services", "Plan", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative group transition-colors px-5 py-2"
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  color: scrolled ? "#0d1b2a" : "rgba(255,255,255,0.8)",
                }}
              >
                {item}
                <span
                  className="absolute bottom-0 left-5 right-5 h-[2px] bg-[#F5A623] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="/user/login"
              className="transition-colors"
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: scrolled ? "#4b5563" : "rgba(255,255,255,0.6)",
              }}
            >
              Login
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-white! bg-[#F5A623] hover:bg-[#d4901e] transition-colors px-7 py-3"
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                borderRadius: "8px",
              }}
            >
              Get A Quote
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 transition-colors"
            style={{ color: scrolled ? "#0d1b2a" : "white" }}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-[#e5e7eb] py-4" style={{ borderRadius: "8px" }}>
            {["Home", "About", "Services", "Plan", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3 hover:text-[#1B4FD8] hover:bg-[#f8f9fa] transition-colors"
                style={{ fontSize: "15px", fontWeight: 600, color: "#0d1b2a" }}
              >
                {item}
              </Link>
            ))}
            <div className="px-6 pt-4 pb-2 border-t border-[#e5e7eb] mt-2">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#F5A623] text-white! hover:bg-[#d4901e] transition-colors"
                style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: "8px" }}
              >
                Get A Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
