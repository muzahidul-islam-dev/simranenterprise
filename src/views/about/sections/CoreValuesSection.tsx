export default function CoreValuesSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-14">
          <div className="sec-label justify-center">What Drives Us</div>
          <h2 className="text-[2.2rem] font-extrabold text-[#0d1b2a]" style={{ lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Our Core Values
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { icon: "🤝", title: "Integrity",    desc: "Honest and transparent services in every transaction." },
            { icon: "⭐", title: "Excellence",   desc: "Professional, reliable, and timely solutions." },
            { icon: "💡", title: "Innovation",   desc: "Modern tools, research, and strategies." },
            { icon: "🎯", title: "Commitment",   desc: "Strong client focus & long-term partnerships." },
            { icon: "🌐", title: "Global Reach", desc: "Bridging businesses across borders." },
          ].map((v, i) => (
            <div
              key={i}
              className="bg-[#f8f9fa] border border-[#e5e7eb] p-7 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              style={{ borderRadius: "16px" }}
            >
              <div className="text-4xl mb-4">{v.icon}</div>
              <h3 className="text-[16px] font-extrabold text-[#0d1b2a] mb-2">{v.title}</h3>
              <p className="text-[#4b5563] text-[13px] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
