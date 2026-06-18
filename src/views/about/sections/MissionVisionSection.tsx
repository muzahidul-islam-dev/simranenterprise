import { Award, Shield } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="py-20 px-6 bg-[#f8f9fa]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#e5e7eb] p-10" style={{ borderRadius: "16px" }}>
            <div className="w-12 h-12 bg-[#1B4FD8] flex items-center justify-center mb-6" style={{ borderRadius: "12px" }}>
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-[1.4rem] font-extrabold text-[#0d1b2a] mb-4">Our Mission</h3>
            <p className="text-[#4b5563] text-[15px] leading-[1.85]">
              To empower businesses by providing seamless international trade solutions and expert consultancy, ensuring transparency, efficiency, and profitability for every client we serve.
            </p>
          </div>
          <div className="bg-[#1B4FD8] p-10" style={{ borderRadius: "16px" }}>
            <div className="w-12 h-12 bg-white/20 flex items-center justify-center mb-6" style={{ borderRadius: "12px" }}>
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-extrabold text-[1.4rem] mb-4">Our Vision</h3>
            <p className="text-white/70 text-[15px] leading-[1.85]">
              To be recognized as a leading international trade &amp; consultancy partner, trusted for innovation, reliability, and long-term business growth across Bangladesh and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
