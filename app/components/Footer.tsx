import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const F = { fontFamily: "var(--font-main)" };

export default function Footer() {
  return (
    <footer className="bg-[#060e1a] text-white/40" style={F}>

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

            {/* Brand */}
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

            {/* Navigation */}
            <div>
              <h4 className="text-white font-extrabold text-[13px] mb-5 uppercase tracking-[0.15em]">Navigation</h4>
              <ul className="space-y-3 text-[14px]">
                {[["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Our Plans", "/plan"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([label, href]) => (
                  <li key={label}><Link href={href} className="hover:text-[#F5A623] hover:pl-1 transition-all duration-200">{label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-extrabold text-[13px] mb-5 uppercase tracking-[0.15em]">Services</h4>
              <ul className="space-y-3 text-[14px]">
                {["IRC / ERC Registration", "Trade License", "BIN / TIN Registration", "NOC & Approvals", "Legal Documentation", "DOF / DLS Consultancy"].map((s) => (
                  <li key={s}><Link href="/services" className="hover:text-[#F5A623] hover:pl-1 transition-all duration-200">{s}</Link></li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-extrabold text-[13px] mb-5 uppercase tracking-[0.15em]">Company</h4>
              <ul className="space-y-3 text-[14px]">
                {["Privacy Policy", "Terms of Service", "Cookie Policy", "Portfolio", "Careers"].map((s) => (
                  <li key={s}><Link href="#" className="hover:text-[#F5A623] hover:pl-1 transition-all duration-200">{s}</Link></li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
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
                  { label: "Facebook", d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                  { label: "LinkedIn", d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                  { label: "Twitter", d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
                ].map((s) => (
                  <a key={s.label} href="#" aria-label={s.label}
                    className="w-9 h-9 flex items-center justify-center bg-white/5 border border-white/10 hover:bg-[#F5A623] hover:border-[#F5A623] transition-all"
                    style={{ borderRadius: "50%" }}>
                    <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24"><path d={s.d} /></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
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
  );
}
