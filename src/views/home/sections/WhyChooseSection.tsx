import Link from "next/link";
import { ArrowRight, Award, Clock, Shield, Users, FileText } from "lucide-react";

export default function WhyChooseSection() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="sec-label justify-center">Why Choose Us</div>
          <h2 className="text-[2.5rem] font-extrabold text-[#0d1b2a] mb-4" style={{ lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            The Simran Enterprise <span style={{ color: "#1B4FD8" }}>Advantage</span>
          </h2>
          <p className="text-[#4b5563] max-w-xl mx-auto text-[15px] leading-relaxed">
            15+ years of experience, 5000+ satisfied clients, and a team that treats your business as their own.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {/* Featured blue card */}
          <div className="bg-[#1B4FD8] p-10 flex flex-col justify-between" style={{ borderRadius: "12px" }}>
            <div>
              <div className="w-14 h-14 bg-white/15 flex items-center justify-center mb-7" style={{ borderRadius: "12px" }}>
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white font-extrabold text-[1.5rem] mb-3">Government Approved</h3>
              <p className="text-white/65 leading-relaxed text-[15px]">
                Fully licensed and recognized by relevant government bodies. Every filing is legally compliant and audit-ready.
              </p>
            </div>
            <div className="mt-10 pt-6 border-t border-white/20">
              <div className="text-[3.5rem] font-black text-white leading-none mb-1">15+</div>
              <div className="text-white/50 text-[13px] font-semibold uppercase tracking-wider">Years in operation</div>
            </div>
          </div>

          {/* 4 feature cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {[
              { icon: Clock,    title: "24/7 Support",           desc: "Our consultants are always available — even outside business hours when you need urgent help.", stat: "24/7",   statLabel: "Always on" },
              { icon: Shield,   title: "Risk-Free Service",      desc: "We guarantee our work. If there's an issue with any filing we handle, we fix it at no extra cost.", stat: "100%",   statLabel: "Satisfaction rate" },
              { icon: Users,    title: "Dedicated Case Handler", desc: "Every client gets a dedicated consultant who manages their case from start to finish.", stat: "5000+", statLabel: "Clients served" },
              { icon: FileText, title: "Fast Turnaround",        desc: "We process documents faster than industry average with our established government connections.", stat: "3x",    statLabel: "Faster processing" },
            ].map((c, i) => (
              <div key={i} className="bg-white border border-[#e5e7eb] p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group" style={{ borderRadius: "12px" }}>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-[#eff6ff] flex items-center justify-center group-hover:bg-[#1B4FD8] transition-colors" style={{ borderRadius: "12px" }}>
                    <c.icon className="w-5 h-5 text-[#1B4FD8] group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-right">
                    <div className="text-[1.6rem] font-black text-[#F5A623] leading-none">{c.stat}</div>
                    <div className="text-[12px] text-[#6b7280] mt-1 font-semibold uppercase tracking-wide">{c.statLabel}</div>
                  </div>
                </div>
                <h3 className="text-[16px] font-extrabold text-[#0d1b2a] mb-2">{c.title}</h3>
                <p className="text-[#4b5563] text-[14px] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="border border-[#e5e7eb] px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-6" style={{ borderRadius: "12px" }}>
          <div className="flex flex-wrap items-center gap-10">
            {[["0+", "Engineering Projects"], ["0+", "Legal Licenses Issued"], ["0+", "Corporate Registrations"], ["0+", "Trade Licenses Filed"]].map(([n, l], i) => (
              <div key={i} className={i > 0 ? "sm:border-l sm:border-[#e5e7eb] sm:pl-10" : ""}>
                <div className="text-[2rem] font-black text-[#0d1b2a]">{n}</div>
                <div className="text-[12px] text-[#6b7280] mt-0.5 font-semibold uppercase tracking-wide">{l}</div>
              </div>
            ))}
          </div>
          <Link
            href="/about"
            className="shrink-0 inline-flex items-center gap-2 text-white bg-[#1B4FD8] hover:bg-[#1340B8] transition-colors px-7 py-[14px] text-[12px] font-bold tracking-widest uppercase group"
            style={{ borderRadius: "8px" }}
          >
            Our Full Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
