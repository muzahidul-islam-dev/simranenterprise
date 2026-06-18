import TestimonialSlider from "@/components/TestimonialSlider";

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-[#f8f9fa]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="sec-label">Client Success</div>
            <h2
              className="text-[#0d1b2a]"
              style={{ fontSize: "clamp(1.9rem,3vw,2.6rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.02em" }}
            >
              What Our <span style={{ color: "#1B4FD8" }}>Clients Say</span>
            </h2>
          </div>
          <div className="flex items-center gap-8 shrink-0">
            {[["5000+", "Happy Clients"], ["15+", "Years"], ["100%", "Satisfaction"]].map(([n, l]) => (
              <div key={l} className="text-center">
                <div className="text-[1.5rem] font-black leading-none" style={{ color: "#1B4FD8" }}>{n}</div>
                <div className="text-[11px] font-semibold uppercase tracking-wide mt-1" style={{ color: "#9ca3af" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
}
