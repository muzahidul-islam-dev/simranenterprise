import Link from "next/link";
import { Award, Users, Shield, Clock } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section className="py-24 px-6 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
          <div>
            <div className="sec-label">Our Experience</div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.1, color: "#0d1b2a", letterSpacing: "-0.02em" }}>
              A Proven History of<br /><span style={{ color: "#1B4FD8" }}>Business Excellence</span>
            </h2>
          </div>
          <p className="text-[#4b5563] text-[16px] leading-[1.85]">
            Since 2009, we have helped thousands of businesses navigate Bangladesh&apos;s regulatory landscape with speed, precision, and full legal compliance.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#e5e7eb] border border-[#e5e7eb] overflow-hidden mb-14" style={{ borderRadius: "12px" }}>
          {[
            { n: "15+",   l: "Years of Experience", icon: Award },
            { n: "5000+", l: "Happy Clients",       icon: Users },
            { n: "100%",  l: "Legal Compliance",    icon: Shield },
            { n: "24/7",  l: "Expert Support",      icon: Clock },
          ].map((s, i) => (
            <div key={i} className="bg-white px-8 py-10 flex flex-col items-center text-center group hover:bg-[#1B4FD8] transition-colors duration-300">
              <s.icon className="w-7 h-7 text-[#1B4FD8] group-hover:text-white/60 mb-4 transition-colors" />
              <div className="text-[2.8rem] font-black text-[#0d1b2a] group-hover:text-white transition-colors leading-none mb-2">{s.n}</div>
              <div className="text-[13px] text-[#4b5563] group-hover:text-white/60 font-semibold uppercase tracking-wide transition-colors">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Timeline */}
          <div>
            <h3 className="text-[1.3rem] font-extrabold text-[#0d1b2a] mb-8">Our Journey</h3>
            <div className="relative pl-6 border-l-2 border-[#e5e7eb] space-y-8">
              {[
                { year: "2009", title: "Founded in Dhaka",     desc: "Started as a small import licensing consultancy in Babubazar, Dhaka." },
                { year: "2013", title: "Expanded Our Services", desc: "Added legal documentation, trade licensing, and BIN/TIN registration." },
                { year: "2018", title: "Crossed 1000+ Clients", desc: "Reached a major milestone with a fast-growing and trusted team." },
                { year: "2024", title: "5000+ Clients Served",  desc: "Now one of the most trusted consultancy firms across Bangladesh." },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[29px] w-4 h-4 bg-white border-2 border-[#1B4FD8]" style={{ borderRadius: "50%" }} />
                  <span className="inline-block text-[11px] font-bold text-white bg-[#F5A623] px-3 py-1 mb-2" style={{ borderRadius: "12px" }}>{item.year}</span>
                  <h4 className="text-[15px] font-extrabold text-[#0d1b2a] mb-1">{item.title}</h4>
                  <p className="text-[#4b5563] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-[#1B4FD8] p-10" style={{ borderRadius: "12px" }}>
            <div className="w-14 h-14 bg-white/15 flex items-center justify-center mb-7" style={{ borderRadius: "12px" }}>
              <Award className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-white font-extrabold text-[1.8rem] mb-4 leading-tight">Ready to take the next step?</h3>
            <p className="text-white/60 leading-relaxed mb-8 text-[15px]">
              Let our experienced team handle the paperwork so you can focus on growing your business.
            </p>
            <ul className="space-y-3 mb-10">
              {["Free initial consultation", "Fast document processing", "Dedicated case handler", "100% legally compliant"].map((p, i) => (
                <li key={i} className="flex items-center gap-3 text-[14px] text-white/70">
                  <div className="w-5 h-5 bg-white/20 flex items-center justify-center shrink-0" style={{ borderRadius: "12px" }}>
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {p}
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <Link href="/plan" className="flex-1 text-center py-[14px] bg-[#F5A623] text-white hover:bg-[#d4901e] transition-colors text-[12px] font-bold tracking-widest uppercase" style={{ borderRadius: "8px" }}>
                Get Started
              </Link>
              <Link href="/contact" className="flex-1 text-center py-[14px] bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors text-[12px] font-bold tracking-widest uppercase" style={{ borderRadius: "8px" }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
