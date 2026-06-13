import Link from "next/link";
import { ArrowRight, Phone, Clock } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const F = { fontFamily: "var(--font-main)" };

const posts = [
  { img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80", cat: "Import Guide", catColor: "#F5A623", date: "June 5, 2026", read: "5 min", title: "How to Obtain an Import Registration Certificate (IRC) in Bangladesh", desc: "A complete walkthrough of the IRC application process — documents required, fees involved, and how to avoid common delays at the licensing office.", author: "Shariful Islam" },
  { img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80", cat: "Compliance", catColor: "#1B4FD8", date: "May 20, 2026", read: "4 min", title: "BIN & TIN Registration: What Every Business Owner in Bangladesh Must Know", desc: "Understanding VAT (BIN) and Tax (TIN) registration requirements — why they matter, how to apply, and what happens if your business is non-compliant.", author: "Simran Chowdhury" },
  { img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&q=80", cat: "Trade Tips", catColor: "#0d1b2a", date: "May 8, 2026", read: "6 min", title: "Top 5 Mistakes Importers Make When Applying for Trade Licenses in Bangladesh", desc: "Avoid costly mistakes and delays. Our consultants share the most common errors businesses make and how to get your trade license approved on the first attempt.", author: "Shariful Islam" },
  { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", cat: "Legal", catColor: "#7c3aed", date: "April 15, 2026", read: "5 min", title: "Understanding NOC Requirements for Import Businesses in Bangladesh", desc: "A detailed guide on No Objection Certificates — when you need them, which government authority to approach, and how to expedite the process.", author: "Simran Chowdhury" },
  { img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80", cat: "Export Guide", catColor: "#059669", date: "March 28, 2026", read: "7 min", title: "How to Get Your Export Registration Certificate (ERC) in Bangladesh", desc: "Step-by-step guide for obtaining ERC — eligibility, required documents, fees, and the complete application procedure explained clearly.", author: "Shariful Islam" },
  { img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80", cat: "Compliance", catColor: "#1B4FD8", date: "March 10, 2026", read: "4 min", title: "DOF & DLS Approvals: A Complete Guide for Animal and Fishery Importers", desc: "Everything you need to know about getting approvals from the Department of Fisheries (DOF) and Department of Livestock Services (DLS).", author: "Simran Chowdhury" },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white" style={F}>
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0d1b2a] text-white py-3 px-6" style={F}>
        <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between items-center gap-3 text-[13px]">
          <a href="tel:+8801716672886" className="flex items-center gap-2 text-white/60 hover:text-[#F5A623] transition-colors">
            <Phone className="w-3.5 h-3.5" /><span>+880 1716 672886</span>
          </a>
          <div className="flex items-center gap-2 text-white/40 text-[12px]"><Clock className="w-3.5 h-3.5" />Mon–Sat: 9AM–6PM</div>
        </div>
      </div>
      <Header />

      {/* Hero */}
      <section className="relative h-[380px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1600&q=80" alt="Blog" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0d1b2a]/82" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full pt-36">
          <div className="flex items-center gap-2 text-white/50 text-[13px] mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span><span className="text-white">Blog</span>
          </div>
          <h1 className="text-white font-extrabold text-[3rem] leading-tight" style={{ letterSpacing: "-0.02em" }}>
            News &amp; <span style={{ color: "#F5A623" }}>Insights</span>
          </h1>
          <p className="text-white/60 text-[16px] mt-3 max-w-xl">Trade tips, compliance guides and regulatory updates for Bangladesh businesses.</p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {posts.map((p, i) => (
              <div key={i} className="group flex flex-col bg-white border border-[#e5e7eb] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden" style={{ borderRadius: "16px" }}>
                <div className="relative h-52 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <span className="absolute top-5 left-5 text-white text-[11px] font-bold px-4 py-1.5 uppercase tracking-widest" style={{ background: p.catColor, borderRadius: "20px" }}>{p.cat}</span>
                  <p className="absolute bottom-4 left-5 text-white/70 text-[12px] font-semibold">{p.date} · {p.read} read</p>
                </div>
                <div className="flex flex-col flex-1 p-7">
                  <h3 className="text-[16px] font-extrabold text-[#0d1b2a] mb-3 group-hover:text-[#1B4FD8] transition-colors leading-snug">{p.title}</h3>
                  <p className="text-[#4b5563] text-[14px] leading-relaxed flex-1 mb-6">{p.desc}</p>
                  <div className="flex items-center justify-between pt-5 border-t border-[#e5e7eb]">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-[#1B4FD8] flex items-center justify-center text-white text-[12px] font-black" style={{ borderRadius: "50%" }}>{p.author[0]}</div>
                      <span className="text-[13px] font-semibold text-[#4b5563]">{p.author}</span>
                    </div>
                    <Link href="#" className="inline-flex items-center gap-1 text-[13px] font-bold text-[#1B4FD8] hover:text-[#F5A623] transition-colors group/l">
                      Read More <ArrowRight className="w-3 h-3 group-hover/l:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
