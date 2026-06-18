import { Award, Users, Shield, Clock } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-16 px-6 bg-[#f8f9fa]">
      <div className="max-w-[1400px] mx-auto">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#e5e7eb] border border-[#e5e7eb] overflow-hidden"
          style={{ borderRadius: "16px" }}
        >
          {[
            { n: "500+", l: "Successful Trades", icon: Award },
            { n: "86+",  l: "Trusted Clients",  icon: Users },
            { n: "15+",  l: "Countries Served", icon: Shield },
            { n: "24/7", l: "Customer Support", icon: Clock },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white px-8 py-10 flex flex-col items-center text-center group hover:bg-[#1B4FD8] transition-colors duration-300"
            >
              <s.icon className="w-7 h-7 text-[#1B4FD8] group-hover:text-white/60 mb-4 transition-colors" />
              <div className="text-[2.5rem] font-black text-[#0d1b2a] group-hover:text-white leading-none mb-2 transition-colors">{s.n}</div>
              <div className="text-[13px] text-[#4b5563] group-hover:text-white/60 font-semibold uppercase tracking-wide transition-colors">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
