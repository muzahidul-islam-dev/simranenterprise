export default function WhyChooseStripSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "✅", title: "Government Approved", desc: "Fully licensed and recognized by relevant government bodies." },
            { icon: "⚡", title: "Fast Processing",     desc: "3x faster than industry average with our government connections." },
            { icon: "🛡️", title: "100% Compliant",     desc: "Every filing we submit is legally compliant and audit-ready." },
            { icon: "📞", title: "24/7 Support",        desc: "Our consultants are always available when you need urgent help." },
          ].map((c, i) => (
            <div key={i} className="flex gap-4 items-start p-6 bg-[#f8f9fa] border border-[#e5e7eb]" style={{ borderRadius: "12px" }}>
              <div className="text-2xl shrink-0 mt-1">{c.icon}</div>
              <div>
                <div className="font-extrabold text-[15px] text-[#0d1b2a] mb-1">{c.title}</div>
                <div className="text-[13px] text-[#4b5563] leading-relaxed">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
