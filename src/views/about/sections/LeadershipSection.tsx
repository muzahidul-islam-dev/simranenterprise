export default function LeadershipSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-14">
          <div className="sec-label justify-center">Our Leadership</div>
          <h2 className="text-[2.2rem] font-extrabold text-[#0d1b2a]" style={{ lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Meet the Team
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {[
            {
              name: "Md. Shariful Islam",
              role: "Owner & Founder",
              img:  "https://www.tas111.live/shariful-islam-owner.jpg",
              desc: "With deep expertise in global trade and strategic vision, he has established Simran Enterprise as a leading name in international business.",
            },
            {
              name: "Simran Chowdhury",
              role: "Chairman",
              img:  "https://www.tas111.live/simran-chowdhury-chairman.jpg",
              desc: "Leading the company to new heights with visionary direction and strategic guidance, driving expansion into international markets.",
            },
          ].map((m, i) => (
            <div
              key={i}
              className="group bg-white border border-[#e5e7eb] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              style={{ borderRadius: "16px" }}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#F5A623] text-white text-[11px] font-bold px-4 py-1.5 uppercase tracking-widest" style={{ borderRadius: "20px" }}>
                    {m.role}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-extrabold text-[1.2rem]">{m.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#4b5563] text-[14px] leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
