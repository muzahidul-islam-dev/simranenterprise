import Link from "next/link";
import { ArrowRight, CheckCircle, Users } from "lucide-react";

export default function WhoWeAreSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Images */}
          <div className="relative">
            <div className="overflow-hidden" style={{ borderRadius: "16px" }}>
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=85"
                alt="Shipping"
                className="w-full h-[480px] object-cover"
              />
            </div>
            <div className="absolute top-6 -left-6 bg-[#1B4FD8] px-6 py-6 shadow-xl hidden sm:flex flex-col items-center" style={{ borderRadius: "12px" }}>
              <span className="text-5xl font-black text-white leading-none">15+</span>
              <span className="text-white/70 text-[11px] font-bold mt-2 uppercase tracking-widest text-center">Years of<br />Experience</span>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white border border-[#e5e7eb] shadow-xl px-6 py-5 hidden sm:flex items-center gap-4" style={{ borderRadius: "12px" }}>
              <div className="w-12 h-12 bg-[#F5A623] flex items-center justify-center shrink-0" style={{ borderRadius: "10px" }}>
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-black text-[#0d1b2a] leading-none">5000+</div>
                <div className="text-[#6b7280] text-[12px] mt-1 font-semibold">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="sec-label">Who We Are</div>
            <h2
              className="text-[#0d1b2a] mb-6"
              style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.02em" }}
            >
              Bangladesh&apos;s Most Trusted<br />
              <span style={{ color: "#1B4FD8" }}>Trade Consultancy Firm</span>
            </h2>
            <p className="text-[#4b5563] text-[15px] leading-[1.85] mb-6">
              M/S Simran Enterprise is a trusted Import, Export &amp; Supplier and Consultancy firm based in Dhaka, Bangladesh. We are committed to simplifying global trade by offering end-to-end solutions.
            </p>
            <p className="text-[#4b5563] text-[15px] leading-[1.85] mb-8">
              From sourcing, compliance, and logistics to market entry consultancy, our mission is to help businesses expand globally with transparency, efficiency, and professionalism.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {["Licensed & Government Approved", "15+ Years of Experience", "5000+ Clients Served", "24/7 Expert Support", "BIN: 006635732-0205", "IRC: 260326112219025"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#eff6ff] flex items-center justify-center shrink-0" style={{ borderRadius: "50%" }}>
                    <CheckCircle className="w-3 h-3 text-[#1B4FD8]" />
                  </div>
                  <span className="text-[14px] text-[#4b5563] font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-white bg-[#1B4FD8] hover:bg-[#1340B8] transition-colors px-8 py-[14px] text-[12px] font-bold tracking-widest uppercase"
              style={{ borderRadius: "8px" }}
            >
              Get In Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
