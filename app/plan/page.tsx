import Link from "next/link";
import { ArrowRight, Phone, Clock } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const F = { fontFamily: "var(--font-main)" };

export default function PlanPage() {
  return (
    <div className="min-h-screen bg-white" style={F}>
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0d1b2a] text-white py-3 px-6" data-dark style={F}>
        <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between items-center gap-3 text-[13px]">
          <a href="tel:+8801716672886" className="flex items-center gap-2 text-white/60 hover:text-[#F5A623] transition-colors">
            <Phone className="w-3.5 h-3.5" /><span>+880 1716 672886</span>
          </a>
          <div className="flex items-center gap-2 text-white/40 text-[12px]"><Clock className="w-3.5 h-3.5" />Mon–Sat: 9AM–6PM</div>
        </div>
      </div>
      <Header />

      <section className="relative h-[380px] flex items-center overflow-hidden" data-theme="dark" data-dark>
        <div className="absolute inset-0 bg-[#0d1b2a]" data-dark />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full pt-36">
          <div className="flex items-center gap-2 text-white/50 text-[13px] mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span><span className="text-white">Plan</span>
          </div>
          <h1 className="text-white font-extrabold text-[3rem] leading-tight" style={{ letterSpacing: "-0.02em" }}>Our <span style={{ color: "#F5A623" }}>Plans</span></h1>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="sec-label justify-center">Get Started</div>
          <h2 className="text-[2rem] font-extrabold text-[#0d1b2a] mb-4" style={{ letterSpacing: "-0.02em" }}>Our Service Plans</h2>
          <p className="text-[#4b5563] text-[15px] leading-relaxed mb-8 max-w-xl mx-auto">
            Browse our available service packages below or contact us for a custom plan tailored to your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services" className="group inline-flex items-center gap-2 text-white bg-[#1B4FD8] hover:bg-[#1340B8] transition-colors px-8 py-4 text-[12px] font-bold tracking-widest uppercase" style={{ borderRadius: "8px" }}>
              View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="group inline-flex items-center gap-2 text-[#0d1b2a] bg-white border border-[#e5e7eb] hover:bg-[#f8f9fa] transition-colors px-8 py-4 text-[12px] font-bold tracking-widest uppercase" style={{ borderRadius: "8px" }}>
              Get Custom Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
