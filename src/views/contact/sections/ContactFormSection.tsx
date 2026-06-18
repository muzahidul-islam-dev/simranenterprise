"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from "lucide-react";

export default function ContactFormSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-14">

          {/* Left — Info */}
          <div>
            <div className="sec-label">Contact Information</div>
            <h2
              className="text-[#0d1b2a] mb-6"
              style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.02em" }}
            >
              Let&apos;s Start a <span style={{ color: "#1B4FD8" }}>Conversation</span>
            </h2>
            <p className="text-[#4b5563] text-[15px] leading-relaxed mb-10">
              Have a question or need a quote? Fill in the form or reach us directly — our team is available Monday to Saturday, 9AM–6PM.
            </p>
            <div className="space-y-5">
              {[
                { icon: Phone,  label: "Phone",   value: "+880 1716 672886",          href: "tel:+8801716672886" },
                { icon: Mail,   label: "Email",   value: "hello@simranenterprise.com", href: "mailto:hello@simranenterprise.com" },
                { icon: MapPin, label: "Address", value: "6, Sahajada Mialen, Badamtoli\nDhaka-1100, Bangladesh", href: "#" },
                { icon: Clock,  label: "Hours",   value: "Mon–Sat: 9:00 AM – 6:00 PM\nSunday: Closed", href: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-start gap-4 p-5 border border-[#e5e7eb] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
                  style={{ borderRadius: "12px" }}
                >
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
                  <input
                    required type="text" value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-[#e5e7eb] bg-white text-[#0d1b2a] placeholder-[#9ca3af] focus:outline-none focus:border-[#1B4FD8] text-[14px] transition-colors"
                    style={{ borderRadius: "8px", fontFamily: "var(--font-main)" }}
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-widest text-[#6b7280] mb-2">Email *</label>
                  <input
                    required type="email" value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-[#e5e7eb] bg-white text-[#0d1b2a] placeholder-[#9ca3af] focus:outline-none focus:border-[#1B4FD8] text-[14px] transition-colors"
                    style={{ borderRadius: "8px", fontFamily: "var(--font-main)" }}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-widest text-[#6b7280] mb-2">Phone</label>
                  <input
                    type="tel" value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="+880 ..."
                    className="w-full px-4 py-3 border border-[#e5e7eb] bg-white text-[#0d1b2a] placeholder-[#9ca3af] focus:outline-none focus:border-[#1B4FD8] text-[14px] transition-colors"
                    style={{ borderRadius: "8px", fontFamily: "var(--font-main)" }}
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-widest text-[#6b7280] mb-2">Subject *</label>
                  <select
                    required value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-[#e5e7eb] bg-white text-[#0d1b2a] focus:outline-none focus:border-[#1B4FD8] text-[14px] transition-colors"
                    style={{ borderRadius: "8px", fontFamily: "var(--font-main)" }}
                  >
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
                <textarea
                  required rows={5} value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 border border-[#e5e7eb] bg-white text-[#0d1b2a] placeholder-[#9ca3af] focus:outline-none focus:border-[#1B4FD8] text-[14px] resize-none transition-colors"
                  style={{ borderRadius: "8px", fontFamily: "var(--font-main)" }}
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 text-white bg-[#1B4FD8] hover:bg-[#1340B8] transition-colors py-4 text-[13px] font-bold tracking-widest uppercase"
                style={{ borderRadius: "8px" }}
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
