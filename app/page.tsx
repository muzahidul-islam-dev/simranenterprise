import Link from "next/link";
import {
  ArrowRight, CheckCircle, FileText, Shield,
  Users, Award, Phone, Mail, MapPin, Clock,
} from "lucide-react";
import GlobeWrapper from "./components/GlobeWrapper";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import TestimonialSlider from "./components/TestimonialSlider";

const F = { fontFamily: "var(--font-main)" };

export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={F}>

      {/* TOP BAR */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0d1b2a] text-white py-3 px-6" style={F}>
        <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between items-center gap-3 text-[13px]">
          <div className="flex flex-wrap items-center gap-6">
            <a href="tel:+8801716672886" className="flex items-center gap-2 text-white/60 hover:text-[#F5A623] transition-colors">
              <Phone className="w-3.5 h-3.5" /><span>+880 1716 672886</span>
            </a>
            <a href="mailto:hello@simranenterprise.com" className="hidden sm:flex items-center gap-2 text-white/60 hover:text-[#F5A623] transition-colors">
              <Mail className="w-3.5 h-3.5" /><span>hello@simranenterprise.com</span>
            </a>
            <span className="hidden md:flex items-center gap-2 text-white/40">
              <MapPin className="w-3.5 h-3.5" />6, Sahajada Mialen, Badamtoli, Dhaka-1100
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="hidden sm:flex items-center gap-2 text-white/40">
              <Clock className="w-3.5 h-3.5" />Mon–Sat: 9AM–6PM
            </span>
            <div className="flex gap-3">
              {[
                "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
              ].map((d, i) => (
                <a key={i} href="#" className="text-white/40 hover:text-[#F5A623] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={d} /></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Header />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85"
            alt="Shipping port" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a1628]/83" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(110deg,rgba(27,79,216,0.2) 0%,transparent 55%)" }} />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 pt-44 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-8 h-[3px] bg-[#F5A623]" />
                <span className="text-white/60 text-[11px] font-bold tracking-[0.2em] uppercase">Bangladesh&apos;s Trusted Trade Consultancy</span>
              </div>
              <h1 className="text-white mb-7" style={{ fontFamily:"var(--font-main)", fontSize:"clamp(2.8rem,5vw,4.4rem)", fontWeight:800, lineHeight:1.08, letterSpacing:"-0.025em" }}>
                Expert Solutions<br/>
                for <span style={{ color:"#F5A623" }}>Global Trade</span><br/>
                &amp; Compliance
              </h1>
              <p className="text-white/55 mb-10 max-w-[480px]" style={{ fontSize:"17px", lineHeight:"1.8" }}>
                From import registration to legal documentation — we handle every step so your business moves faster with full compliance across Bangladesh.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact"
                  className="group inline-flex items-center gap-2 text-white bg-[#F5A623] hover:bg-[#d4901e] transition-colors px-8 py-[15px] text-[12px] font-bold tracking-widest uppercase"
                  style={{ borderRadius:"12px" }}>
                  Get A Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                </Link>
                <Link href="/services"
                  className="inline-flex items-center gap-2 text-white hover:text-[#F5A623] hover:border-[#F5A623] transition-colors px-8 py-[15px] text-[12px] font-bold tracking-widest uppercase"
                  style={{ border:"2px solid rgba(255,255,255,0.3)", borderRadius:"12px" }}>
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <GlobeWrapper />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-28 px-6 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="overflow-hidden" style={{ borderRadius:"12px" }}>
                <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=85"
                  alt="Shipping containers" className="w-full h-[500px] object-cover"/>
              </div>
              <div className="absolute -bottom-8 -right-6 w-52 h-44 overflow-hidden border-4 border-white shadow-2xl hidden sm:block" style={{ borderRadius:"12px" }}>
                <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80" alt="Business" className="w-full h-full object-cover"/>
              </div>
              <div className="absolute top-6 -left-6 bg-[#1B4FD8] px-6 py-6 shadow-xl hidden sm:flex flex-col items-center" style={{ borderRadius:"12px" }}>
                <span className="text-5xl font-black text-white leading-none">15+</span>
                <span className="text-white/70 text-[11px] font-bold mt-2 uppercase tracking-widest text-center">Years of<br/>Experience</span>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-5 bg-white shadow-xl px-4 py-4 hidden lg:flex items-center gap-3 border border-[#e5e7eb]" style={{ borderRadius:"12px" }}>
                <div className="w-10 h-10 bg-[#F5A623] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-white"/>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-[#0d1b2a] leading-none">5000+</div>
                  <div className="text-[#6b7280] text-xs mt-1 font-medium">Happy Clients</div>
                </div>
              </div>
            </div>
            <div>
              <div className="sec-label">About Us</div>
              <h2 className="mb-6" style={{ fontSize:"clamp(2rem,3.5vw,2.9rem)", fontWeight:800, lineHeight:1.12, color:"#0d1b2a", letterSpacing:"-0.02em" }}>
                The Best Solution For<br/>
                <span style={{ color:"#1B4FD8" }}>Import, Export &amp;</span><br/>
                Trade Compliance
              </h2>
              <p className="mb-8 text-[15px] leading-[1.85] text-[#4b5563]">
                M/S Simran Enterprise is a trusted Import, Export &amp; Consultancy firm based in Dhaka, Bangladesh. Since 2009, we have been simplifying global trade — from sourcing and compliance to licensing and market entry.
              </p>
              <div className="space-y-5 mb-10">
                {[
                  { t: "Import & Export Licensing", d: "IRC / ERC registration, customs compliance and full documentation support." },
                  { t: "Legal Documentation", d: "Affidavits, business agreements, NOC, BIN/TIN and all government filings." },
                  { t: "Trade Consultancy", d: "Market research, compliance advisory, supply chain and logistics guidance." },
                ].map((x,i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-9 h-9 bg-[#1B4FD8] flex items-center justify-center shrink-0 mt-0.5" style={{ borderRadius:"12px" }}>
                      <CheckCircle className="w-4 h-4 text-white"/>
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-[#0d1b2a]">{x.t}</div>
                      <div className="text-[14px] text-[#4b5563] mt-1 leading-[1.7]">{x.d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#e5e7eb] mb-8" />
              <div className="flex flex-wrap items-center gap-6">
                <Link href="/about"
                  className="group inline-flex items-center gap-2 text-white bg-[#1B4FD8] hover:bg-[#1340B8] transition-colors px-8 py-[14px] text-[12px] font-bold tracking-widest uppercase shadow-lg"
                  style={{ borderRadius:"8px" }}>
                  Discover More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                </Link>
                <a href="tel:+8801716672886" className="flex items-center gap-3 group">
                  <div className="w-12 h-12 flex items-center justify-center border-2 border-[#1B4FD8] group-hover:bg-[#1B4FD8] transition-colors" style={{ borderRadius:"50%" }}>
                    <Phone className="w-5 h-5 text-[#1B4FD8] group-hover:text-white transition-colors"/>
                  </div>
                  <div>
                    <div className="text-[11px] text-[#6b7280] font-semibold uppercase tracking-widest">Call Us Now</div>
                    <div className="text-[16px] font-extrabold text-[#0d1b2a] group-hover:text-[#1B4FD8] transition-colors">+880 1716 672886</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-[#f8f9fa] overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="sec-label justify-center">Our Services</div>
            <h2 className="text-[2.5rem] font-extrabold text-[#0d1b2a] mb-4" style={{ lineHeight:1.15, letterSpacing:"-0.02em" }}>Choose the Right Package</h2>
            <p className="text-[#4b5563] max-w-2xl mx-auto text-[15px] leading-relaxed">
              Transparent pricing with no hidden fees. Pick the service you need and our experts handle the rest.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title:"DOF / DLS Consultancy", sub:"Starter", price:"৳ 1,000", desc:"Support for Fisheries (DOF) and Livestock (DLS) approvals, NOC, and import permissions.", features:["DOF / DLS approval support","NOC processing","Import permission guidance","Document checklist"], icon:FileText, featured:false },
              { title:"Import & Export Support", sub:"Most Popular", price:"৳ 10,000", desc:"Complete assistance for import-export documentation, licensing, and full compliance process.", features:["IRC / ERC documentation","Customs compliance support","Import license processing","End-to-end assistance","Dedicated case handler"], icon:Shield, featured:true },
              { title:"Legal Documentation", sub:"Professional", price:"৳ 10,000", desc:"Preparation of affidavits, agreements, and all types of legal business documents.", features:["Affidavit preparation","Business agreements","Notarization support","Legal review","Document filing"], icon:FileText, featured:false },
              { title:"Trade License & BIN/TIN", sub:"Business Setup", price:"৳ 10,000", desc:"Help with trade license, VAT (BIN), and tax (TIN) registration for businesses.", features:["Trade license registration","VAT (BIN) registration","TIN certificate","Business setup guidance"], icon:Award, featured:false },
              { title:"NOC & Registration", sub:"Government", price:"৳ 10,000", desc:"Fast processing of government NOC, approvals, and essential business registrations.", features:["Government NOC processing","Approval management","Business registration","Status tracking","Priority handling"], icon:CheckCircle, featured:false },
              { title:"IRC / ERC Registration", sub:"Trade Certificates", price:"৳ 10,000", desc:"Assistance in obtaining Import Registration Certificate (IRC) and Export Registration Certificate (ERC).", features:["IRC application & filing","ERC application & filing","Document preparation","Authority liaison","Certificate delivery"], icon:Shield, featured:false },
            ].map((pkg, i) => (
              <div key={i} className={`relative flex flex-col transition-all duration-300 border ${pkg.featured ? "bg-[#1B4FD8] border-[#1B4FD8] shadow-2xl" : "bg-white border-[#e5e7eb] hover:shadow-xl"}`} style={{ borderRadius:"12px" }}>
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#F5A623] text-white text-[11px] font-bold px-5 py-1.5 uppercase tracking-widest" style={{ borderRadius:"12px" }}>Most Popular</span>
                  </div>
                )}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-11 h-11 flex items-center justify-center ${pkg.featured ? "bg-white/15" : "bg-[#eff6ff]"}`} style={{ borderRadius:"12px" }}>
                      <pkg.icon className={`w-5 h-5 ${pkg.featured ? "text-white" : "text-[#1B4FD8]"}`}/>
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-[0.15em] ${pkg.featured ? "text-white/60" : "text-[#6b7280]"}`}>{pkg.sub}</span>
                  </div>
                  <h3 className={`text-[19px] font-extrabold mb-3 leading-tight ${pkg.featured ? "text-white" : "text-[#0d1b2a]"}`}>{pkg.title}</h3>
                  <div className="flex items-end gap-1 mb-4">
                    <span className={`text-[2.2rem] font-extrabold leading-none ${pkg.featured ? "text-white" : "text-[#0d1b2a]"}`}>{pkg.price}</span>
                    <span className={`text-[13px] mb-1 ${pkg.featured ? "text-white/50" : "text-[#6b7280]"}`}>/service</span>
                  </div>
                  <p className={`text-[14px] leading-relaxed mb-6 ${pkg.featured ? "text-white/65" : "text-[#4b5563]"}`}>{pkg.desc}</p>
                  <div className={`border-t mb-6 ${pkg.featured ? "border-white/15" : "border-[#e5e7eb]"}`}/>
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((f,j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className={`w-[18px] h-[18px] flex items-center justify-center shrink-0 ${pkg.featured ? "bg-white/20" : "bg-[#eff6ff]"}`} style={{ borderRadius:"12px" }}>
                          <svg className={`w-2.5 h-2.5 ${pkg.featured ? "text-white" : "text-[#1B4FD8]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                          </svg>
                        </div>
                        <span className={`text-[14px] ${pkg.featured ? "text-white/75" : "text-[#4b5563]"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/services"
                    className={`w-full flex items-center justify-center gap-2 py-[13px] text-[12px] font-bold tracking-widest uppercase transition-colors group ${pkg.featured ? "bg-white text-[#1B4FD8] hover:bg-[#eff6ff]" : "bg-transparent border border-[#e5e7eb] text-[#0d1b2a] hover:text-[#1B4FD8]"}`}
                    style={{ borderRadius:"12px" }}>
                    Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
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

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="sec-label justify-center">Why Choose Us</div>
            <h2 className="text-[2.5rem] font-extrabold text-[#0d1b2a] mb-4" style={{ lineHeight:1.15, letterSpacing:"-0.02em" }}>
              The Simran Enterprise <span style={{ color:"#1B4FD8" }}>Advantage</span>
            </h2>
            <p className="text-[#4b5563] max-w-xl mx-auto text-[15px] leading-relaxed">
              15+ years of experience, 5000+ satisfied clients, and a team that treats your business as their own.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-[#1B4FD8] p-10 flex flex-col justify-between" style={{ borderRadius:"12px" }}>
              <div>
                <div className="w-14 h-14 bg-white/15 flex items-center justify-center mb-7" style={{ borderRadius:"12px" }}>
                  <Award className="w-7 h-7 text-white"/>
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
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {[
                { icon:Clock,    title:"24/7 Support",           desc:"Our consultants are always available — even outside business hours when you need urgent help.", stat:"24/7",   statLabel:"Always on" },
                { icon:Shield,   title:"Risk-Free Service",      desc:"We guarantee our work. If there's an issue with any filing we handle, we fix it at no extra cost.", stat:"100%",   statLabel:"Satisfaction rate" },
                { icon:Users,    title:"Dedicated Case Handler", desc:"Every client gets a dedicated consultant who manages their case from start to finish.", stat:"5000+", statLabel:"Clients served" },
                { icon:FileText, title:"Fast Turnaround",        desc:"We process documents faster than industry average with our established government connections.", stat:"3x",    statLabel:"Faster processing" },
              ].map((c,i) => (
                <div key={i} className="bg-white border border-[#e5e7eb] p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group" style={{ borderRadius:"12px" }}>
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 bg-[#eff6ff] flex items-center justify-center group-hover:bg-[#1B4FD8] transition-colors" style={{ borderRadius:"12px" }}>
                      <c.icon className="w-5 h-5 text-[#1B4FD8] group-hover:text-white transition-colors"/>
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
          <div className="border border-[#e5e7eb] px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-6" style={{ borderRadius:"12px" }}>
            <div className="flex flex-wrap items-center gap-10">
              {[["0+","Engineering Projects"],["0+","Legal Licenses Issued"],["0+","Corporate Registrations"],["0+","Trade Licenses Filed"]].map(([n,l],i) => (
                <div key={i} className={i>0?"sm:border-l sm:border-[#e5e7eb] sm:pl-10":""}>
                  <div className="text-[2rem] font-black text-[#0d1b2a]">{n}</div>
                  <div className="text-[12px] text-[#6b7280] mt-0.5 font-semibold uppercase tracking-wide">{l}</div>
                </div>
              ))}
            </div>
            <Link href="/about"
              className="shrink-0 inline-flex items-center gap-2 text-white bg-[#1B4FD8] hover:bg-[#1340B8] transition-colors px-7 py-[14px] text-[12px] font-bold tracking-widest uppercase group"
              style={{ borderRadius:"8px" }}>
              Our Full Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-24 px-6 bg-[#f8f9fa] overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
            <div>
              <div className="sec-label">Our Experience</div>
              <h2 style={{ fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, lineHeight:1.1, color:"#0d1b2a", letterSpacing:"-0.02em" }}>
                A Proven History of<br/><span style={{ color:"#1B4FD8" }}>Business Excellence</span>
              </h2>
            </div>
            <p className="text-[#4b5563] text-[16px] leading-[1.85]">
              Since 2009, we have helped thousands of businesses navigate Bangladesh&apos;s regulatory landscape with speed, precision, and full legal compliance.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#e5e7eb] border border-[#e5e7eb] overflow-hidden mb-14" style={{ borderRadius:"12px" }}>
            {[
              { n:"15+",   l:"Years of Experience", icon:Award },
              { n:"5000+", l:"Happy Clients",       icon:Users },
              { n:"100%",  l:"Legal Compliance",    icon:Shield },
              { n:"24/7",  l:"Expert Support",      icon:Clock },
            ].map((s,i) => (
              <div key={i} className="bg-white px-8 py-10 flex flex-col items-center text-center group hover:bg-[#1B4FD8] transition-colors duration-300">
                <s.icon className="w-7 h-7 text-[#1B4FD8] group-hover:text-white/60 mb-4 transition-colors"/>
                <div className="text-[2.8rem] font-black text-[#0d1b2a] group-hover:text-white transition-colors leading-none mb-2">{s.n}</div>
                <div className="text-[13px] text-[#4b5563] group-hover:text-white/60 font-semibold uppercase tracking-wide transition-colors">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-[1.3rem] font-extrabold text-[#0d1b2a] mb-8">Our Journey</h3>
              <div className="relative pl-6 border-l-2 border-[#e5e7eb] space-y-8">
                {[
                  { year:"2009", title:"Founded in Dhaka",     desc:"Started as a small import licensing consultancy in Babubazar, Dhaka." },
                  { year:"2013", title:"Expanded Our Services", desc:"Added legal documentation, trade licensing, and BIN/TIN registration." },
                  { year:"2018", title:"Crossed 1000+ Clients", desc:"Reached a major milestone with a fast-growing and trusted team." },
                  { year:"2024", title:"5000+ Clients Served",  desc:"Now one of the most trusted consultancy firms across Bangladesh." },
                ].map((item,i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[29px] w-4 h-4 bg-white border-2 border-[#1B4FD8]" style={{ borderRadius:"50%" }}/>
                    <span className="inline-block text-[11px] font-bold text-white bg-[#F5A623] px-3 py-1 mb-2" style={{ borderRadius:"12px" }}>{item.year}</span>
                    <h4 className="text-[15px] font-extrabold text-[#0d1b2a] mb-1">{item.title}</h4>
                    <p className="text-[#4b5563] text-[14px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1B4FD8] p-10" style={{ borderRadius:"12px" }}>
              <div className="w-14 h-14 bg-white/15 flex items-center justify-center mb-7" style={{ borderRadius:"12px" }}>
                <Award className="w-7 h-7 text-white"/>
              </div>
              <h3 className="text-white font-extrabold text-[1.8rem] mb-4 leading-tight">Ready to take the next step?</h3>
              <p className="text-white/60 leading-relaxed mb-8 text-[15px]">
                Let our experienced team handle the paperwork so you can focus on growing your business.
              </p>
              <ul className="space-y-3 mb-10">
                {["Free initial consultation","Fast document processing","Dedicated case handler","100% legally compliant"].map((p,i)=>(
                  <li key={i} className="flex items-center gap-3 text-[14px] text-white/70">
                    <div className="w-5 h-5 bg-white/20 flex items-center justify-center shrink-0" style={{ borderRadius:"12px" }}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <Link href="/plan" className="flex-1 text-center py-[14px] bg-[#F5A623] text-white hover:bg-[#d4901e] transition-colors text-[12px] font-bold tracking-widest uppercase" style={{ borderRadius:"8px" }}>Get Started</Link>
                <Link href="/contact" className="flex-1 text-center py-[14px] bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors text-[12px] font-bold tracking-widest uppercase" style={{ borderRadius:"8px" }}>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="sec-label">FAQ</div>
              <h2 className="mb-5" style={{ fontSize:"clamp(1.8rem,3vw,2.5rem)", fontWeight:800, lineHeight:1.12, color:"#0d1b2a", letterSpacing:"-0.02em" }}>
                Frequently Asked <span style={{ color:"#1B4FD8" }}>Questions</span>
              </h2>
              <p className="text-[#4b5563] leading-relaxed mb-8 text-[15px]">
                Have questions? Find quick answers below, or feel free to reach out directly.
              </p>
              <div className="border border-[#e5e7eb] p-7" style={{ borderRadius:"12px" }}>
                <div className="w-10 h-10 bg-[#1B4FD8] flex items-center justify-center mb-5" style={{ borderRadius:"12px" }}>
                  <Phone className="w-5 h-5 text-white"/>
                </div>
                <h3 className="font-extrabold text-[#0d1b2a] mb-2 text-[16px]">Still have questions?</h3>
                <p className="text-[#4b5563] text-[14px] mb-4">Our consultants are available 24/7 to help you.</p>
                <a href="tel:+8801716672886" className="inline-flex items-center gap-2 text-[14px] font-bold text-[#1B4FD8] hover:text-[#F5A623] transition-colors">
                  +880 1716 672886 <ArrowRight className="w-4 h-4"/>
                </a>
              </div>
            </div>
            <FAQ/>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24 px-6 bg-[#f8f9fa] overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="sec-label justify-center">Our Leadership</div>
            <h2 className="text-[2.5rem] font-extrabold text-[#0d1b2a] mb-4" style={{ lineHeight:1.15, letterSpacing:"-0.02em" }}>
              Meet the <span style={{ color:"#1B4FD8" }}>Leadership Team</span>
            </h2>
            <p className="text-[#4b5563] max-w-2xl mx-auto text-[15px] leading-relaxed">
              Guiding international trade with experience, integrity, and a vision for global growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {[
              { name:"Md. Shariful Islam", role:"Owner & Founder", sub:"Owner & Founder", img:"https://www.tas111.live/shariful-islam-owner.jpg", desc:"With deep expertise in global trade and strategic vision, he has established Simran Enterprise as a leading name in international business operations.", contact:<><Phone className="w-4 h-4"/>+880 1716 672 886</>, href:"tel:+8801716672886" },
              { name:"Simran Chowdhury", role:"Chairman", sub:"Chairman", img:"https://www.tas111.live/simran-chowdhury-chairman.jpg", desc:"Leading the company to new heights with visionary direction and strategic guidance, driving expansion into international markets.", contact:<><Mail className="w-4 h-4"/>hello@simranenterprise.com</>, href:"mailto:hello@simranenterprise.com" },
            ].map((m,i) => (
              <div key={i} className="group bg-white border border-[#e5e7eb] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden" style={{ borderRadius:"12px" }}>
                <div className="relative h-[400px] overflow-hidden">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"/>
                  <div className="absolute top-5 left-5">
                    <span className="bg-[#F5A623] text-white text-[11px] font-bold px-4 py-1.5 uppercase tracking-widest" style={{ borderRadius:"12px" }}>{m.sub}</span>
                  </div>
                  <div className="absolute top-5 right-5 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <a href="#" className="w-9 h-9 bg-white/15 hover:bg-[#1B4FD8] border border-white/25 flex items-center justify-center transition-colors" style={{ borderRadius:"12px" }}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
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
                    {m.contact} <ArrowRight className="w-3.5 h-3.5"/>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#e5e7eb] border border-[#e5e7eb] overflow-hidden" style={{ borderRadius:"12px" }}>
            {([["500+","Successful Trades",Award],["86+","Trusted Clients",Users],["15+","Countries Served",Shield],["24/7","Customer Support",Clock]] as [string, string, React.ComponentType<React.SVGProps<SVGSVGElement>>][]).map(([v,l,Icon],i)=>(
              <div key={i} className="flex flex-col items-center text-center py-10 px-6 bg-white hover:bg-[#1B4FD8] group transition-colors duration-300">
                <Icon className="w-6 h-6 text-[#1B4FD8] group-hover:text-white/60 mb-4 transition-colors"/>
                <div className="text-[2rem] font-black text-[#0d1b2a] group-hover:text-white mb-1 transition-colors">{v}</div>
                <div className="text-[12px] text-[#4b5563] group-hover:text-white/60 font-semibold uppercase tracking-wide transition-colors">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <div className="sec-label">Latest Articles</div>
              <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.5rem)", fontWeight:800, lineHeight:1.12, color:"#0d1b2a", letterSpacing:"-0.02em" }}>
                News &amp; <span style={{ color:"#1B4FD8" }}>Insights</span>
              </h2>
            </div>
            <Link href="/blog" className="shrink-0 inline-flex items-center gap-2 border border-[#e5e7eb] text-[#0d1b2a] hover:text-[#1B4FD8] transition-colors px-6 py-3 text-[13px] font-bold tracking-widest uppercase group" style={{ borderRadius:"12px" }}>
              View All Posts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img:"https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80", cat:"Import Guide", catColor:"#F5A623", date:"June 5, 2026", read:"5 min", title:"How to Obtain an Import Registration Certificate (IRC) in Bangladesh — Step by Step", desc:"A complete walkthrough of the IRC application process — documents required, fees involved, and how to avoid common delays.", author:"Shariful Islam", ai:"S" },
              { img:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80", cat:"Compliance", catColor:"#1B4FD8", date:"May 20, 2026", read:"4 min", title:"BIN & TIN Registration: What Every Business Owner in Bangladesh Must Know", desc:"Understanding VAT (BIN) and Tax (TIN) registration requirements — why they matter and how to stay compliant.", author:"Simran Chowdhury", ai:"S" },
              { img:"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&q=80", cat:"Trade Tips", catColor:"#0d1b2a", date:"May 8, 2026", read:"6 min", title:"Top 5 Mistakes Importers Make When Applying for Trade Licenses in Bangladesh", desc:"Avoid costly mistakes and delays. Our consultants share the most common errors and how to get approved first time.", author:"Shariful Islam", ai:"S" },
            ].map((p,i) => (
              <div key={i} className="group flex flex-col bg-white border border-[#e5e7eb] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden" style={{ borderRadius:"12px" }}>
                <div className="relative h-56 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"/>
                  <span className="absolute top-5 left-5 text-white text-[11px] font-bold px-4 py-1.5 uppercase tracking-widest" style={{ background:p.catColor, borderRadius:"12px" }}>{p.cat}</span>
                  <p className="absolute bottom-4 left-5 text-white/70 text-[12px] font-semibold">{p.date} · {p.read} read</p>
                </div>
                <div className="flex flex-col flex-1 p-7">
                  <h3 className="text-[16px] font-extrabold text-[#0d1b2a] mb-3 group-hover:text-[#1B4FD8] transition-colors leading-snug">{p.title}</h3>
                  <p className="text-[#4b5563] text-[14px] leading-relaxed flex-1 mb-6">{p.desc}</p>
                  <div className="flex items-center justify-between pt-5 border-t border-[#e5e7eb]">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-[#1B4FD8] flex items-center justify-center text-white text-[12px] font-black" style={{ borderRadius:"50%" }}>{p.ai}</div>
                      <span className="text-[13px] font-semibold text-[#4b5563]">{p.author}</span>
                    </div>
                    <Link href="/blog" className="inline-flex items-center gap-1 text-[13px] font-bold text-[#1B4FD8] hover:text-[#F5A623] transition-colors group/l">
                      Read More <ArrowRight className="w-3 h-3 group-hover/l:translate-x-0.5 transition-transform"/>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-[#f8f9fa]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <div className="sec-label">Client Success</div>
              <h2 className="text-[#0d1b2a]" style={{ fontSize: "clamp(1.9rem,3vw,2.6rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.02em" }}>
                What Our <span style={{ color: "#1B4FD8" }}>Clients Say</span>
              </h2>
            </div>
            <div className="flex items-center gap-8 shrink-0">
              {[["5000+", "Happy Clients"], ["15+", "Years"], ["100%", "Satisfaction"]].map(([n, l]) => (
                <div key={l} className="text-center">
                  <div className="text-[1.5rem] font-black leading-none" style={{ color: "#1B4FD8" }}>{n}</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide mt-1" style={{ color: "#9ca3af" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#060e1a] text-white/40" style={{ fontFamily: "var(--font-main)" }}>
        {/* Top CTA band */}
        <div className="bg-[#1B4FD8] py-14 px-6">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 mb-2">Ready to get started?</div>
              <h3 className="text-white font-extrabold text-[1.8rem] leading-tight" style={{ letterSpacing: "-0.02em" }}>
                Let&apos;s handle your compliance — so you can focus on growth.
              </h3>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <a href="tel:+8801716672886"
                className="inline-flex items-center gap-2 text-white border-2 border-white/30 hover:bg-white/10 transition-colors px-7 py-3 text-[12px] font-bold tracking-widest uppercase"
                style={{ borderRadius: "8px" }}>
                <Phone className="w-4 h-4" />+880 1716 672886
              </a>
              <Link href="/contact"
                className="inline-flex items-center gap-2 text-[#1B4FD8] bg-white hover:bg-[#f8f9fa] transition-colors px-7 py-3 text-[12px] font-bold tracking-widest uppercase"
                style={{ borderRadius: "8px" }}>
                Get A Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main footer body */}
        <div className="py-16 px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-[2fr_1fr_1fr_1fr_1.4fr] gap-10 mb-14">
              <div>
                <img src="/logo.png" alt="Simran Enterprise" className="h-12 w-auto object-contain mb-6" />
                <p className="text-white/40 text-[14px] leading-[1.85] mb-6 max-w-xs">
                  M/S Simran Enterprise is a trusted Import, Export &amp; Consultancy firm based in Dhaka, Bangladesh. Simplifying global trade since 2009.
                </p>
                <div className="space-y-2.5 text-[13px]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
                    <span>6, Sahajada Mialen, Badamtoli<br />Dhaka-1100, Bangladesh</span>
                  </div>
                  <a href="tel:+8801716672886" className="flex items-center gap-3 hover:text-white transition-colors">
                    <Phone className="w-4 h-4 text-[#F5A623] shrink-0" /><span>+880 1716 672886</span>
                  </a>
                  <a href="mailto:hello@simranenterprise.com" className="flex items-center gap-3 hover:text-white transition-colors">
                    <Mail className="w-4 h-4 text-[#F5A623] shrink-0" /><span>hello@simranenterprise.com</span>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-white font-extrabold text-[13px] mb-5 uppercase tracking-[0.15em]">Navigation</h4>
                <ul className="space-y-3 text-[14px]">
                  {[["Home","/"],["About","/about"],["Services","/services"],["Our Plans","/plan"],["Blog","/blog"],["Contact","/contact"]].map(([label,href])=>(
                    <li key={label}><Link href={href} className="hover:text-[#F5A623] hover:pl-1 transition-all duration-200">{label}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-extrabold text-[13px] mb-5 uppercase tracking-[0.15em]">Services</h4>
                <ul className="space-y-3 text-[14px]">
                  {["IRC / ERC Registration","Trade License","BIN / TIN Registration","NOC & Approvals","Legal Documentation","DOF / DLS Consultancy"].map((s)=>(
                    <li key={s}><Link href="/services" className="hover:text-[#F5A623] hover:pl-1 transition-all duration-200">{s}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-extrabold text-[13px] mb-5 uppercase tracking-[0.15em]">Company</h4>
                <ul className="space-y-3 text-[14px]">
                  {["Privacy Policy","Terms of Service","Cookie Policy","Portfolio","Careers"].map((s)=>(
                    <li key={s}><Link href="#" className="hover:text-[#F5A623] hover:pl-1 transition-all duration-200">{s}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-extrabold text-[13px] mb-5 uppercase tracking-[0.15em]">Newsletter</h4>
                <p className="text-white/40 text-[14px] leading-relaxed mb-5">Stay updated with the latest news, trade alerts and service updates.</p>
                <div className="flex">
                  <input type="email" placeholder="Your email address"
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[#1B4FD8] text-[13px] min-w-0"
                    style={{ borderRadius: "8px 0 0 8px" }} />
                  <button className="px-4 py-3 bg-[#F5A623] hover:bg-[#d4901e] transition-colors shrink-0" style={{ borderRadius: "0 8px 8px 0" }} aria-label="Subscribe">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
                <div className="flex gap-3 mt-6">
                  {[
                    { label:"Facebook", d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                    { label:"LinkedIn", d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                    { label:"Twitter", d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
                  ].map((s)=>(
                    <a key={s.label} href="#" aria-label={s.label}
                      className="w-9 h-9 flex items-center justify-center bg-white/5 border border-white/10 hover:bg-[#F5A623] hover:border-[#F5A623] transition-all"
                      style={{ borderRadius:"50%" }}>
                      <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24"><path d={s.d}/></svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px]">
              <p className="text-white/40">&copy; 2026 Simran Enterprise. All rights reserved.</p>
              <p className="text-white/25">BIN: 006635732-0205 &nbsp;·&nbsp; IRC: 260326112219025</p>
              <div className="flex gap-5">
                <Link href="#" className="hover:text-[#F5A623] transition-colors">Privacy</Link>
                <Link href="#" className="hover:text-[#F5A623] transition-colors">Terms</Link>
                <Link href="#" className="hover:text-[#F5A623] transition-colors">Cookies</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
