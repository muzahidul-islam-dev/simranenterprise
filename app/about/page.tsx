import Link from "next/link";
import { ArrowRight, CheckCircle, Award, Users, Shield, Clock, Phone, MapPin } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const F = { fontFamily: "var(--font-main)" };

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white" style={F}>

      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0d1b2a] text-white py-3 px-6" style={F}>
        <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between items-center gap-3 text-[13px]">
          <div className="flex flex-wrap items-center gap-6">
            <a href="tel:+8801716672886" className="flex items-center gap-2 text-white/60 hover:text-[#F5A623] transition-colors">
              <Phone className="w-3.5 h-3.5" /><span>+880 1716 672886</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-white/40 text-[12px]">
            <Clock className="w-3.5 h-3.5" />Mon–Sat: 9AM–6PM
          </div>
        </div>
      </div>
      <Header />

      {/* Page Hero */}
      <section className="relative h-[380px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80"
            alt="About Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0d1b2a]/80" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full pt-36">
          <div className="flex items-center gap-2 text-white/50 text-[13px] mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>
          <h1 className="text-white font-extrabold text-[3rem] leading-tight" style={{ letterSpacing: "-0.02em" }}>
            About <span style={{ color: "#F5A623" }}>Simran Enterprise</span>
          </h1>
          <p className="text-white/60 text-[16px] mt-3 max-w-xl">
            Bangladesh&apos;s trusted partner for import, export &amp; trade compliance since 2009.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="overflow-hidden" style={{ borderRadius: "16px" }}>
                <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=85"
                  alt="Shipping" className="w-full h-[480px] object-cover" />
              </div>
              <div className="absolute top-6 -left-6 bg-[#1B4FD8] px-6 py-6 shadow-xl hidden sm:flex flex-col items-center" style={{ borderRadius: "12px" }}>
                <span className="text-5xl font-black text-white leading-none">15+</span>
                <span className="text-white/70 text-[11px] font-bold mt-2 uppercase tracking-widest text-center">Years of<br />Experience</span>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white border border-[#e5e7eb] shadow-xl px-6 py-5 hidden sm:flex items-center gap-4" style={{ borderRadius: "12px" }}>
                <div className="w-12 h-12 bg-[#F5A623] flex items-center justify-center shrink-0" style={{ borderRadius: "10px" }}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black text-[#0d1b2a] leading-none">5000+</div>
                  <div className="text-[#6b7280] text-[12px] mt-1 font-semibold">Happy Clients</div>
                </div>
              </div>
            </div>

            <div>
              <div className="sec-label">Who We Are</div>
              <h2 className="text-[#0d1b2a] mb-6" style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.02em" }}>
                Bangladesh&apos;s Most Trusted<br /><span style={{ color: "#1B4FD8" }}>Trade Consultancy Firm</span>
              </h2>
              <p className="text-[#4b5563] text-[15px] leading-[1.85] mb-6">
                M/S Simran Enterprise is a trusted Import, Export &amp; Supplier and Consultancy firm based in Dhaka, Bangladesh. We are committed to simplifying global trade by offering end-to-end solutions.
              </p>
              <p className="text-[#4b5563] text-[15px] leading-[1.85] mb-8">
                From sourcing, compliance, and logistics to market entry consultancy, our mission is to help businesses expand globally with transparency, efficiency, and professionalism.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Licensed & Government Approved","15+ Years of Experience","5000+ Clients Served","24/7 Expert Support","BIN: 006635732-0205","IRC: 260326112219025"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#eff6ff] flex items-center justify-center shrink-0" style={{ borderRadius: "50%" }}>
                      <CheckCircle className="w-3 h-3 text-[#1B4FD8]" />
                    </div>
                    <span className="text-[14px] text-[#4b5563] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact"
                className="group inline-flex items-center gap-2 text-white bg-[#1B4FD8] hover:bg-[#1340B8] transition-colors px-8 py-[14px] text-[12px] font-bold tracking-widest uppercase"
                style={{ borderRadius: "8px" }}>
                Get In Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-[#f8f9fa]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#e5e7eb] p-10" style={{ borderRadius: "16px" }}>
              <div className="w-12 h-12 bg-[#1B4FD8] flex items-center justify-center mb-6" style={{ borderRadius: "12px" }}>
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[1.4rem] font-extrabold text-[#0d1b2a] mb-4">Our Mission</h3>
              <p className="text-[#4b5563] text-[15px] leading-[1.85]">
                To empower businesses by providing seamless international trade solutions and expert consultancy, ensuring transparency, efficiency, and profitability for every client we serve.
              </p>
            </div>
            <div className="bg-[#1B4FD8] p-10" style={{ borderRadius: "16px" }}>
              <div className="w-12 h-12 bg-white/20 flex items-center justify-center mb-6" style={{ borderRadius: "12px" }}>
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-extrabold text-[1.4rem] mb-4">Our Vision</h3>
              <p className="text-white/70 text-[15px] leading-[1.85]">
                To be recognized as a leading international trade &amp; consultancy partner, trusted for innovation, reliability, and long-term business growth across Bangladesh and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <div className="sec-label justify-center">What Drives Us</div>
            <h2 className="text-[2.2rem] font-extrabold text-[#0d1b2a]" style={{ lineHeight: 1.15, letterSpacing: "-0.02em" }}>Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: "🤝", title: "Integrity", desc: "Honest and transparent services in every transaction." },
              { icon: "⭐", title: "Excellence", desc: "Professional, reliable, and timely solutions." },
              { icon: "💡", title: "Innovation", desc: "Modern tools, research, and strategies." },
              { icon: "🎯", title: "Commitment", desc: "Strong client focus & long-term partnerships." },
              { icon: "🌐", title: "Global Reach", desc: "Bridging businesses across borders." },
            ].map((v, i) => (
              <div key={i} className="bg-[#f8f9fa] border border-[#e5e7eb] p-7 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300" style={{ borderRadius: "16px" }}>
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-[16px] font-extrabold text-[#0d1b2a] mb-2">{v.title}</h3>
                <p className="text-[#4b5563] text-[13px] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-[#f8f9fa]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#e5e7eb] border border-[#e5e7eb] overflow-hidden" style={{ borderRadius: "16px" }}>
            {[
              { n: "500+", l: "Successful Trades", icon: Award },
              { n: "86+",  l: "Trusted Clients",  icon: Users },
              { n: "15+",  l: "Countries Served", icon: Shield },
              { n: "24/7", l: "Customer Support", icon: Clock },
            ].map((s, i) => (
              <div key={i} className="bg-white px-8 py-10 flex flex-col items-center text-center group hover:bg-[#1B4FD8] transition-colors duration-300">
                <s.icon className="w-7 h-7 text-[#1B4FD8] group-hover:text-white/60 mb-4 transition-colors" />
                <div className="text-[2.5rem] font-black text-[#0d1b2a] group-hover:text-white leading-none mb-2 transition-colors">{s.n}</div>
                <div className="text-[13px] text-[#4b5563] group-hover:text-white/60 font-semibold uppercase tracking-wide transition-colors">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <div className="sec-label justify-center">Our Leadership</div>
            <h2 className="text-[2.2rem] font-extrabold text-[#0d1b2a]" style={{ lineHeight: 1.15, letterSpacing: "-0.02em" }}>Meet the Team</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { name: "Md. Shariful Islam", role: "Owner & Founder", img: "https://www.tas111.live/shariful-islam-owner.jpg", desc: "With deep expertise in global trade and strategic vision, he has established Simran Enterprise as a leading name in international business." },
              { name: "Simran Chowdhury",   role: "Chairman",        img: "https://www.tas111.live/simran-chowdhury-chairman.jpg", desc: "Leading the company to new heights with visionary direction and strategic guidance, driving expansion into international markets." },
            ].map((m, i) => (
              <div key={i} className="group bg-white border border-[#e5e7eb] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300" style={{ borderRadius: "16px" }}>
                <div className="relative h-72 overflow-hidden">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#F5A623] text-white text-[11px] font-bold px-4 py-1.5 uppercase tracking-widest" style={{ borderRadius: "20px" }}>{m.role}</span>
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

      <Footer />
    </div>
  );
}
