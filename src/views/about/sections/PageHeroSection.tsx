import Link from "next/link";
import { Phone, Clock } from "lucide-react";

export default function PageHeroSection() {
  return (
    <>
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0d1b2a] text-white py-3 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between items-center gap-3 text-[13px]">
          <a href="tel:+8801716672886" className="flex items-center gap-2 text-white/60 hover:text-[#F5A623] transition-colors">
            <Phone className="w-3.5 h-3.5" /><span>+880 1716 672886</span>
          </a>
          <div className="flex items-center gap-2 text-white/40 text-[12px]">
            <Clock className="w-3.5 h-3.5" />Mon–Sat: 9AM–6PM
          </div>
        </div>
      </div>

      {/* Page Hero */}
      <section className="relative h-[380px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0d1b2a]/80" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full pt-36">
          <div className="flex items-center gap-2 text-white/50 text-[13px] mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>
          <h1 className="text-white font-extrabold text-[3rem] leading-tight" style={{ letterSpacing: "-0.02em" }}>
            About <span style={{ color: "#F5A623" }}>Simran Enterprise</span>
          </h1>
          <p className="text-white/60 text-[16px] mt-3 max-w-xl">
            Bangladesh&apos;s trusted partner for import, export &amp; trade compliance since 2009.
          </p>
        </div>
      </section>
    </>
  );
}
