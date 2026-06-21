import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GlobeWrapper from "@/components/GlobeWrapper";

export default function HeroSection() {
  return (
    <>
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
