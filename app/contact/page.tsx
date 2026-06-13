"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const F = { fontFamily: "var(--font-main)" };

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white" style={F}>

      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0d1b2a] text-white py-3 px-6" style={F}>
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
      <section className="relative h-[380px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
            alt="Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0d1b2a]/82" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full pt-36">
          <div className="flex items-center gap-2 text-white/50 text-[13px] mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Contact</span>
          </div>
          <h1 className="text-white font-extrabold text-[3rem] leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Get In <span style={{ color: "#F5A623" }}>Touch</span>
          </h1>
          <p className="text-white/60 text-[16px] mt-3 max-w-xl">
            We&apos;re here to help. Reach out and our experts will get back to you promptly.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-14">

            {/* Left — Info */}
            <div>
              <div className="sec-label">Contact Information</div>
              <h2 className="text-[#0d1b2a] mb-6" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.02em" }}>
                Let&apos;s Start a <span style={{ color: "#1B4FD8" }}>Conversation</span>
              </h2>
              <p className="text-[#4b5563] text-[15px] leading-relaxed mb-10">
                Have a question or need a quote? Fill in the form or reach us directly — our team is available Monday to Saturday, 9AM–6PM.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Phone,  label: "Phone",   value: "+880 1716 672886",           href: "tel:+8801716672886" },
                  { icon: Mail,   label: "Email",   value: "hello@simranenterprise.com",  href: "mailto:hello@simranenterprise.com" },
                  { icon: MapPin, label: "Address", value: "6, Sahajada Mialen, Badamtoli\nDhaka-1100, Bangladesh", href: "#" },
                  { icon: Clock,  label: "Hours",   value: "Mon–Sat: 9:00 AM – 6:00 PM\nSunday: Closed", href: "#" },
                ].map((item, i) => (
                  <a key={i} href={item.href}
                    className="flex items-start gap-4 p-5 border border-[#e5e7eb] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
                    style={{ borderRadius: "12px" }}>
                    <div className="w-11 h-11 bg-[#eff6ff] flex items-center justify-center shrink-0 group-hover:bg-[#1B4FD8] transition-colors" style={{ borderRadius: "10px" }}>
                      <item.icon className="w-5 h-5 text-[#1B4FD8] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold uppercase tracking-widest text-[#6b7280] mb-1">{item.label}</div>
                      <div className="text-[14px] text-[#0d1b2a] font-semibold whitespace-pre-line leading-relaxed">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-[#f8f9fa] border border-[#e5e7eb] p-10" style={{ borderRadius: "20px" }}>
              <h3 className="text-[1.4rem] font-extrabold text-[#0d1b2a] mb-2">Send Us a Message</h3>
              <p className="text-[#4b5563] text-[14px] mb-8">We&apos;ll get back to you within 24 hours.</p>

              {sent && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 text-[14px] font-semibold" style={{ borderRadius: "10px" }}>
                  ✓ Message sent successfully! We&apos;ll be in touch soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-widest text-[#6b7280] mb-2">Full Name *</label>
                    <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-[#e5e7eb] bg-white text-[#0d1b2a] placeholder-[#9ca3af] focus:outline-none focus:border-[#1B4FD8] text-[14px] transition-colors"
                      style={{ borderRadius: "8px", fontFamily: "var(--font-main)" }} />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-widest text-[#6b7280] mb-2">Email *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-[#e5e7eb] bg-white text-[#0d1b2a] placeholder-[#9ca3af] focus:outline-none focus:border-[#1B4FD8] text-[14px] transition-colors"
                      style={{ borderRadius: "8px", fontFamily: "var(--font-main)" }} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-widest text-[#6b7280] mb-2">Phone</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="+880 ..."
                      className="w-full px-4 py-3 border border-[#e5e7eb] bg-white text-[#0d1b2a] placeholder-[#9ca3af] focus:outline-none focus:border-[#1B4FD8] text-[14px] transition-colors"
                      style={{ borderRadius: "8px", fontFamily: "var(--font-main)" }} />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-widest text-[#6b7280] mb-2">Subject *</label>
                    <select required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-[#e5e7eb] bg-white text-[#0d1b2a] focus:outline-none focus:border-[#1B4FD8] text-[14px] transition-colors"
                      style={{ borderRadius: "8px", fontFamily: "var(--font-main)" }}>
                      <option value="">Select a service</option>
                      <option>Import &amp; Export Support</option>
                      <option>IRC / ERC Registration</option>
                      <option>Trade License &amp; BIN/TIN</option>
                      <option>Legal Documentation</option>
                      <option>NOC &amp; Registration</option>
                      <option>DOF / DLS Consultancy</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-widest text-[#6b7280] mb-2">Message *</label>
                  <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 border border-[#e5e7eb] bg-white text-[#0d1b2a] placeholder-[#9ca3af] focus:outline-none focus:border-[#1B4FD8] text-[14px] resize-none transition-colors"
                    style={{ borderRadius: "8px", fontFamily: "var(--font-main)" }} />
                </div>
                <button type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 text-white bg-[#1B4FD8] hover:bg-[#1340B8] transition-colors py-4 text-[13px] font-bold tracking-widest uppercase"
                  style={{ borderRadius: "8px" }}>
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="w-full h-[320px] bg-[#f8f9fa] border border-[#e5e7eb] flex items-center justify-center" style={{ borderRadius: "16px" }}>
            <div className="text-center">
              <MapPin className="w-10 h-10 text-[#1B4FD8] mx-auto mb-3" />
              <p className="text-[#0d1b2a] font-extrabold text-[16px]">6, Sahajada Mialen, Badamtoli</p>
              <p className="text-[#6b7280] text-[14px]">Dhaka-1100, Bangladesh</p>
              <a href="https://maps.google.com/?q=Badamtoli,Dhaka,Bangladesh" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-[#1B4FD8] font-bold text-[13px] hover:text-[#F5A623] transition-colors">
                Open in Google Maps <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
