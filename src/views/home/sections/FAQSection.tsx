import { ArrowRight, Phone } from "lucide-react";
import FAQ from "@/components/FAQ";

export default function FAQSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="sec-label">FAQ</div>
            <h2
              className="mb-5"
              style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 800, lineHeight: 1.12, color: "#0d1b2a", letterSpacing: "-0.02em" }}
            >
              Frequently Asked <span style={{ color: "#1B4FD8" }}>Questions</span>
            </h2>
            <p className="text-[#4b5563] leading-relaxed mb-8 text-[15px]">
              Have questions? Find quick answers below, or feel free to reach out directly.
            </p>
            <div className="border border-[#e5e7eb] p-7" style={{ borderRadius: "12px" }}>
              <div className="w-10 h-10 bg-[#1B4FD8] flex items-center justify-center mb-5" style={{ borderRadius: "12px" }}>
                <Phone className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-extrabold text-[#0d1b2a] mb-2 text-[16px]">Still have questions?</h3>
              <p className="text-[#4b5563] text-[14px] mb-4">Our consultants are available 24/7 to help you.</p>
              <a href="tel:+8801716672886" className="inline-flex items-center gap-2 text-[14px] font-bold text-[#1B4FD8] hover:text-[#F5A623] transition-colors">
                +880 1716 672886 <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <FAQ />
        </div>
      </div>
    </section>
  );
}
