import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80",
    cat: "Import Guide",
    catColor: "#F5A623",
    date: "June 5, 2026",
    read: "5 min",
    title: "How to Obtain an Import Registration Certificate (IRC) in Bangladesh — Step by Step",
    desc: "A complete walkthrough of the IRC application process — documents required, fees involved, and how to avoid common delays.",
    author: "Shariful Islam",
    ai: "S",
  },
  {
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    cat: "Compliance",
    catColor: "#1B4FD8",
    date: "May 20, 2026",
    read: "4 min",
    title: "BIN & TIN Registration: What Every Business Owner in Bangladesh Must Know",
    desc: "Understanding VAT (BIN) and Tax (TIN) registration requirements — why they matter and how to stay compliant.",
    author: "Simran Chowdhury",
    ai: "S",
  },
  {
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&q=80",
    cat: "Trade Tips",
    catColor: "#0d1b2a",
    date: "May 8, 2026",
    read: "6 min",
    title: "Top 5 Mistakes Importers Make When Applying for Trade Licenses in Bangladesh",
    desc: "Avoid costly mistakes and delays. Our consultants share the most common errors and how to get approved first time.",
    author: "Shariful Islam",
    ai: "S",
  },
];

export default function BlogSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="sec-label">Latest Articles</div>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", fontWeight: 800, lineHeight: 1.12, color: "#0d1b2a", letterSpacing: "-0.02em" }}>
              News &amp; <span style={{ color: "#1B4FD8" }}>Insights</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="shrink-0 inline-flex items-center gap-2 border border-[#e5e7eb] text-[#0d1b2a] hover:text-[#1B4FD8] transition-colors px-6 py-3 text-[13px] font-bold tracking-widest uppercase group"
            style={{ borderRadius: "12px" }}
          >
            View All Posts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <div key={i} className="group flex flex-col bg-white border border-[#e5e7eb] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden" style={{ borderRadius: "12px" }}>
              <div className="relative h-56 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                <span className="absolute top-5 left-5 text-white text-[11px] font-bold px-4 py-1.5 uppercase tracking-widest" style={{ background: p.catColor, borderRadius: "12px" }}>{p.cat}</span>
                <p className="absolute bottom-4 left-5 text-white/70 text-[12px] font-semibold">{p.date} · {p.read} read</p>
              </div>
              <div className="flex flex-col flex-1 p-7">
                <h3 className="text-[16px] font-extrabold text-[#0d1b2a] mb-3 group-hover:text-[#1B4FD8] transition-colors leading-snug">{p.title}</h3>
                <p className="text-[#4b5563] text-[14px] leading-relaxed flex-1 mb-6">{p.desc}</p>
                <div className="flex items-center justify-between pt-5 border-t border-[#e5e7eb]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-[#1B4FD8] flex items-center justify-center text-white text-[12px] font-black" style={{ borderRadius: "50%" }}>{p.ai}</div>
                    <span className="text-[13px] font-semibold text-[#4b5563]">{p.author}</span>
                  </div>
                  <Link href="/blog" className="inline-flex items-center gap-1 text-[13px] font-bold text-[#1B4FD8] hover:text-[#F5A623] transition-colors group/l">
                    Read More <ArrowRight className="w-3 h-3 group-hover/l:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
