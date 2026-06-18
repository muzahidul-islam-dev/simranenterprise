import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PlanContentSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto text-center">
        <div className="sec-label justify-center">Get Started</div>
        <h2 className="text-[2rem] font-extrabold text-[#0d1b2a] mb-4" style={{ letterSpacing: "-0.02em" }}>
          Our Service Plans
        </h2>
        <p className="text-[#4b5563] text-[15px] leading-relaxed mb-8 max-w-xl mx-auto">
          Browse our available service packages below or contact us for a custom plan tailored to your business needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-white bg-[#1B4FD8] hover:bg-[#1340B8] transition-colors px-8 py-4 text-[12px] font-bold tracking-widest uppercase"
            style={{ borderRadius: "8px" }}
          >
            View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-[#0d1b2a] bg-white border border-[#e5e7eb] hover:bg-[#f8f9fa] transition-colors px-8 py-4 text-[12px] font-bold tracking-widest uppercase"
            style={{ borderRadius: "8px" }}
          >
            Get Custom Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
