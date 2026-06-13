import Link from "next/link";
import { ArrowRight, FileText, Shield, Award, CheckCircle, Phone, Clock } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const F = { fontFamily: "var(--font-main)" };

const services = [
  {
    title: "Import & Export Support",
    sub: "Most Popular",
    price: "৳ 10,000",
    desc: "Complete assistance for import-export documentation, licensing, and full compliance process.",
    features: ["IRC / ERC documentation", "Customs compliance support", "Import license processing", "End-to-end assistance", "Dedicated case handler", "After-sales support"],
    icon: Shield,
    featured: true,
  },
  {
    title: "Legal Documentation",
    sub: "Professional",
    price: "৳ 10,000",
    desc: "Preparation of affidavits, agreements, and all types of legal business documents.",
    features: ["Affidavit preparation", "Business agreements", "Notarization support", "Legal review", "Document filing", "Compliance advisory"],
    icon: FileText,
    featured: false,
  },
  {
    title: "Trade License & BIN/TIN",
    sub: "Business Setup",
    price: "৳ 10,000",
    desc: "Help with trade license, VAT (BIN), and tax (TIN) registration for new or existing businesses.",
    features: ["Trade license registration", "VAT (BIN) registration", "TIN certificate", "Business setup guidance", "Renewal support"],
    icon: Award,
    featured: false,
  },
  {
    title: "NOC & Registration",
    sub: "Government",
    price: "৳ 10,000",
    desc: "Fast processing of government NOC, approvals, and essential business registrations.",
    features: ["Government NOC processing", "Approval management", "Business registration", "Status tracking", "Priority handling"],
    icon: CheckCircle,
    featured: false,
  },
  {
    title: "IRC / ERC Registration",
    sub: "Trade Certificates",
    price: "৳ 10,000",
    desc: "Assistance in obtaining Import Registration Certificate (IRC) and Export Registration Certificate (ERC).",
    features: ["IRC application & filing", "ERC application & filing", "Document preparation", "Authority liaison", "Certificate delivery"],
    icon: Shield,
    featured: false,
  },
  {
    title: "DOF / DLS Consultancy",
    sub: "Starter",
    price: "৳ 1,000",
    desc: "Support for Fisheries (DOF) and Livestock (DLS) approvals, NOC, and import permissions.",
    features: ["DOF / DLS approval support", "NOC processing", "Import permission guidance", "Document checklist"],
    icon: FileText,
    featured: false,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white" style={F}>

      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0d1b2a] text-white py-3 px-6" data-dark style={F}>
        <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between items-center gap-3 text-[13px]">
          <a href="tel:+8801716672886" className="flex items-center gap-2 text-white/60 hover:text-[#F5A623] transition-colors">
            <Phone className="w-3.5 h-3.5" /><span>+880 1716 672886</span>
          </a>
          <div className="flex items-center gap-2 text-white/40 text-[12px]">
            <Clock className="w-3.5 h-3.5" />Mon–Sat: 9AM–6PM
          </div>
        </div>
      </div>
      <Header />

      {/* Page Hero */}
      <section className="relative h-[380px] flex items-center overflow-hidden" data-theme="dark" data-dark>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80"
            alt="Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0d1b2a]/82" data-dark />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full pt-36">
          <div className="flex items-center gap-2 text-white/50 text-[13px] mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </div>
          <h1 className="text-white font-extrabold text-[3rem] leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Our <span style={{ color: "#F5A623" }}>Services</span>
          </h1>
          <p className="text-white/60 text-[16px] mt-3 max-w-xl">
            End-to-end trade compliance solutions — transparent pricing, no hidden fees.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-[#f8f9fa]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <div className="sec-label justify-center">What We Offer</div>
            <h2 className="text-[2.5rem] font-extrabold text-[#0d1b2a] mb-4" style={{ lineHeight: 1.15, letterSpacing: "-0.02em" }}>Choose the Right Package</h2>
            <p className="text-[#4b5563] max-w-2xl mx-auto text-[15px] leading-relaxed">
              Pick the service you need — our experts handle every step with full legal compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((pkg, i) => (
              <div key={i} className={`relative flex flex-col transition-all duration-300 border ${pkg.featured ? "bg-[#1B4FD8] border-[#1B4FD8] shadow-2xl" : "bg-white border-[#e5e7eb] hover:shadow-lg hover:-translate-y-1"}`} style={{ borderRadius: "16px" }}>
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#F5A623] text-white text-[11px] font-bold px-5 py-1.5 uppercase tracking-widest" style={{ borderRadius: "20px" }}>Most Popular</span>
                  </div>
                )}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-11 h-11 flex items-center justify-center ${pkg.featured ? "bg-white/15" : "bg-[#eff6ff]"}`} style={{ borderRadius: "10px" }}>
                      <pkg.icon className={`w-5 h-5 ${pkg.featured ? "text-white" : "text-[#1B4FD8]"}`} />
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-[0.15em] ${pkg.featured ? "text-white/60" : "text-[#6b7280]"}`}>{pkg.sub}</span>
                  </div>
                  <h3 className={`text-[18px] font-extrabold mb-3 leading-tight ${pkg.featured ? "text-white" : "text-[#0d1b2a]"}`}>{pkg.title}</h3>
                  <div className="flex items-end gap-1 mb-4">
                    <span className={`text-[2rem] font-extrabold leading-none ${pkg.featured ? "text-white" : "text-[#0d1b2a]"}`}>{pkg.price}</span>
                    <span className={`text-[13px] mb-1 ${pkg.featured ? "text-white/50" : "text-[#6b7280]"}`}>/service</span>
                  </div>
                  <p className={`text-[14px] leading-relaxed mb-6 ${pkg.featured ? "text-white/65" : "text-[#4b5563]"}`}>{pkg.desc}</p>
                  <div className={`border-t mb-6 ${pkg.featured ? "border-white/15" : "border-[#e5e7eb]"}`} />
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className={`w-5 h-5 flex items-center justify-center shrink-0 ${pkg.featured ? "bg-white/20" : "bg-[#eff6ff]"}`} style={{ borderRadius: "50%" }}>
                          <svg className={`w-2.5 h-2.5 ${pkg.featured ? "text-white" : "text-[#1B4FD8]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className={`text-[14px] ${pkg.featured ? "text-white/75" : "text-[#4b5563]"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact"
                    className={`w-full flex items-center justify-center gap-2 py-[13px] text-[12px] font-bold tracking-widest uppercase transition-colors group ${pkg.featured ? "bg-white text-[#1B4FD8] hover:bg-[#eff6ff]" : "border border-[#e5e7eb] text-[#0d1b2a] hover:bg-[#1B4FD8] hover:text-white hover:border-[#1B4FD8]"}`}
                    style={{ borderRadius: "8px" }}>
                    Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#6b7280] text-[14px] mt-10">
            Need a custom package?{" "}
            <Link href="/contact" className="text-[#1B4FD8] font-bold hover:underline">Contact us</Link>
            {" "}and we&apos;ll build a solution tailored to your business.
          </p>
        </div>
      </section>

      {/* Why choose us strip */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "✅", title: "Government Approved", desc: "Fully licensed and recognized by relevant government bodies." },
              { icon: "⚡", title: "Fast Processing", desc: "3x faster than industry average with our government connections." },
              { icon: "🛡️", title: "100% Compliant", desc: "Every filing we submit is legally compliant and audit-ready." },
              { icon: "📞", title: "24/7 Support", desc: "Our consultants are always available when you need urgent help." },
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

      <Footer />
    </div>
  );
}
