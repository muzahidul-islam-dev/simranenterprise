import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import GlobeWrapper from "@/components/GlobeWrapper";

export default function HeroSection() {
  return (
    <>
      {/* TOP BAR */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0d1b2a] text-white py-3 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between items-center gap-3 text-[13px]">
          <div className="flex flex-wrap items-center gap-6">
            <a href="tel:+8801716672886" className="flex items-center gap-2 text-white/60 hover:text-[#F5A623] transition-colors">
              <Phone className="w-3.5 h-3.5" /><span>+880 1716 672886</span>
            </a>
            <a href="mailto:hello@simranenterprise.com" className="hidden sm:flex items-center gap-2 text-white/60 hover:text-[#F5A623] transition-colors">
              <Mail className="w-3.5 h-3.5" /><span>hello@simranenterprise.com</span>
            </a>
            <span className="hidden md:flex items-center gap-2 text-white/40">
              <MapPin className="w-3.5 h-3.5" />6, Sahajada Mialen, Badamtoli, Dhaka-1100
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="hidden sm:flex items-center gap-2 text-white/40">
              <Clock className="w-3.5 h-3.5" />Mon–Sat: 9AM–6PM
            </span>
            <div className="flex gap-3">
              {[
                "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
              ].map((d, i) => (
                <a key={i} href="#" className="text-white/40 hover:text-[#F5A623] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={d} /></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85"
            alt="Shipping port"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a1628]/83" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(110deg,rgba(27,79,216,0.2) 0%,transparent 55%)" }} />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 pt-44 pb-16">
          {/* Mobile: globe large, center-bottom, behind text */}
          <div
            className="lg:hidden absolute pointer-events-none select-none"
            style={{ left: "50%", transform: "translateX(-50%)", bottom: "5%", width: "160vw", height: "160vw", opacity: 0.55 }}
          >
            <GlobeWrapper />
          </div>

          {/* Grid: PC = side-by-side */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — text */}
            <div>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-8 h-[3px] bg-[#F5A623]" />
                <span className="text-white/60 text-[11px] font-bold tracking-[0.2em] uppercase">Bangladesh&apos;s Trusted Trade Consultancy</span>
              </div>
              <h1
                className="text-white mb-7"
                style={{ fontFamily: "var(--font-main)", fontSize: "clamp(2.4rem,5vw,4.4rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.025em" }}
              >
                Expert Solutions<br />
                for <span style={{ color: "#F5A623" }}>Global Trade</span><br />
                &amp; Compliance
              </h1>
              <p className="text-white/55 mb-10 max-w-[480px]" style={{ fontSize: "17px", lineHeight: "1.8" }}>
                From import registration to legal documentation — we handle every step so your business moves faster with full compliance across Bangladesh.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-white bg-[#F5A623] hover:bg-[#d4901e] transition-colors px-8 py-[15px] text-[12px] font-bold tracking-widest uppercase"
                  style={{ borderRadius: "12px" }}
                >
                  Get A Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-white hover:text-[#F5A623] hover:border-[#F5A623] transition-colors px-8 py-[15px] text-[12px] font-bold tracking-widest uppercase"
                  style={{ border: "2px solid rgba(255,255,255,0.3)", borderRadius: "12px" }}
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right — globe, PC only */}
            <div className="hidden lg:flex items-center justify-center">
              <GlobeWrapper />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
