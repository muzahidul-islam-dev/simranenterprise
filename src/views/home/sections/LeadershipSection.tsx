import { ArrowRight, Award, Users, Shield, Clock, Mail, Phone } from "lucide-react";
import React from "react";

export default function LeadershipSection() {
  const members = [
    {
      name: "Md. Shariful Islam",
      role: "Owner & Founder",
      sub: "Owner & Founder",
      img: "https://www.tas111.live/shariful-islam-owner.jpg",
      desc: "With deep expertise in global trade and strategic vision, he has established Simran Enterprise as a leading name in international business operations.",
      contact: (
        <>
          <Phone className="w-4 h-4" />+880 1716 672 886
        </>
      ),
      href: "tel:+8801716672886",
    },
    {
      name: "Simran Chowdhury",
      role: "Chairman",
      sub: "Chairman",
      img: "https://www.tas111.live/simran-chowdhury-chairman.jpg",
      desc: "Leading the company to new heights with visionary direction and strategic guidance, driving expansion into international markets.",
      contact: (
        <>
          <Mail className="w-4 h-4" />hello@simranenterprise.com
        </>
      ),
      href: "mailto:hello@simranenterprise.com",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="sec-label justify-center">Our Leadership</div>
          <h2 className="text-[2.5rem] font-extrabold text-[#0d1b2a] mb-4" style={{ lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Meet the <span style={{ color: "#1B4FD8" }}>Leadership Team</span>
          </h2>
          <p className="text-[#4b5563] max-w-2xl mx-auto text-[15px] leading-relaxed">
            Guiding international trade with experience, integrity, and a vision for global growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {members.map((m, i) => (
            <div key={i} className="group bg-white border border-[#e5e7eb] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden" style={{ borderRadius: "12px" }}>
              <div className="relative h-[400px] overflow-hidden">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="bg-[#F5A623] text-white text-[11px] font-bold px-4 py-1.5 uppercase tracking-widest" style={{ borderRadius: "12px" }}>{m.sub}</span>
                </div>
                <div className="absolute top-5 right-5 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <a href="#" className="w-9 h-9 bg-white/15 hover:bg-[#1B4FD8] border border-white/25 flex items-center justify-center transition-colors" style={{ borderRadius: "12px" }}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="text-white font-extrabold text-[1.3rem] mb-1">{m.name}</h3>
                  <p className="text-white/55 text-[13px]">{m.role}</p>
                </div>
              </div>
              <div className="p-7 border-t border-[#e5e7eb]">
                <p className="text-[#4b5563] text-[14px] leading-relaxed mb-5">{m.desc}</p>
                <a href={m.href} className="inline-flex items-center gap-2 text-[13px] font-bold text-[#1B4FD8] hover:text-[#F5A623] transition-colors">
                  {m.contact} <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#e5e7eb] border border-[#e5e7eb] overflow-hidden" style={{ borderRadius: "12px" }}>
          {([["500+", "Successful Trades", Award], ["86+", "Trusted Clients", Users], ["15+", "Countries Served", Shield], ["24/7", "Customer Support", Clock]] as [string, string, React.ComponentType<React.SVGProps<SVGSVGElement>>][]).map(([v, l, Icon], i) => (
            <div key={i} className="flex flex-col items-center text-center py-10 px-6 bg-white hover:bg-[#1B4FD8] group transition-colors duration-300">
              <Icon className="w-6 h-6 text-[#1B4FD8] group-hover:text-white/60 mb-4 transition-colors" />
              <div className="text-[2rem] font-black text-[#0d1b2a] group-hover:text-white mb-1 transition-colors">{v}</div>
              <div className="text-[12px] text-[#4b5563] group-hover:text-white/60 font-semibold uppercase tracking-wide transition-colors">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
