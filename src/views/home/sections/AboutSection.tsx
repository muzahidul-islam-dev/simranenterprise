import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Phone } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-28 px-6 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Images column */}
          <div className="relative">
            <div className="overflow-hidden" style={{ borderRadius: "12px" }}>
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=85"
                alt="Shipping containers"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-6 w-52 h-44 overflow-hidden border-4 border-white shadow-2xl hidden sm:block" style={{ borderRadius: "12px" }}>
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80" alt="Business" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-6 -left-6 bg-[#1B4FD8] px-6 py-6 shadow-xl hidden sm:flex flex-col items-center" style={{ borderRadius: "12px" }}>
              <span className="text-5xl font-black text-white leading-none">15+</span>
              <span className="text-white/70 text-[11px] font-bold mt-2 uppercase tracking-widest text-center">Years of<br />Experience</span>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-5 bg-white shadow-xl px-4 py-4 hidden lg:flex items-center gap-3 border border-[#e5e7eb]" style={{ borderRadius: "12px" }}>
              <div className="w-10 h-10 bg-[#F5A623] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-[#0d1b2a] leading-none">5000+</div>
                <div className="text-[#6b7280] text-xs mt-1 font-medium">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div>
            <div className="sec-label">About Us</div>
            <h2
              className="mb-6"
              style={{ fontSize: "clamp(2rem,3.5vw,2.9rem)", fontWeight: 800, lineHeight: 1.12, color: "#0d1b2a", letterSpacing: "-0.02em" }}
            >
              The Best Solution For<br />
              <span style={{ color: "#1B4FD8" }}>Import, Export &amp;</span><br />
              Trade Compliance
            </h2>
            <p className="mb-8 text-[15px] leading-[1.85] text-[#4b5563]">
              M/S Simran Enterprise is a trusted Import, Export &amp; Consultancy firm based in Dhaka, Bangladesh. Since 2009, we have been simplifying global trade — from sourcing and compliance to licensing and market entry.
            </p>
            <div className="space-y-5 mb-10">
              {[
                { t: "Import & Export Licensing", d: "IRC / ERC registration, customs compliance and full documentation support." },
                { t: "Legal Documentation", d: "Affidavits, business agreements, NOC, BIN/TIN and all government filings." },
                { t: "Trade Consultancy", d: "Market research, compliance advisory, supply chain and logistics guidance." },
              ].map((x, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-9 h-9 bg-[#1B4FD8] flex items-center justify-center shrink-0 mt-0.5" style={{ borderRadius: "12px" }}>
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-[#0d1b2a]">{x.t}</div>
                    <div className="text-[14px] text-[#4b5563] mt-1 leading-[1.7]">{x.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-[#e5e7eb] mb-8" />
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-white bg-[#1B4FD8] hover:bg-[#1340B8] transition-colors px-8 py-[14px] text-[12px] font-bold tracking-widest uppercase shadow-lg"
                style={{ borderRadius: "8px" }}
              >
                Discover More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:+8801716672886" className="flex items-center gap-3 group">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-[#1B4FD8] group-hover:bg-[#1B4FD8] transition-colors" style={{ borderRadius: "50%" }}>
                  <Phone className="w-5 h-5 text-[#1B4FD8] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[11px] text-[#6b7280] font-semibold uppercase tracking-widest">Call Us Now</div>
                  <div className="text-[16px] font-extrabold text-[#0d1b2a] group-hover:text-[#1B4FD8] transition-colors">+880 1716 672886</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
