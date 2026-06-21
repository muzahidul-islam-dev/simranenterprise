import Link from "next/link";
import { ArrowRight, FileText, Shield, Award, CheckCircle } from "lucide-react";
import { fetchServices } from "@/lib/services";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<number, LucideIcon> = {};
const ICONS: LucideIcon[] = [Shield, FileText, Award, CheckCircle, Shield, FileText];

export default async function ServicesGridSection() {
  const services = await fetchServices();

  if (services.length === 0) {
    return (
      <section className="py-24 px-6 bg-[#f8f9fa]">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-gray-500">No services available at this time.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-[#f8f9fa]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-14">
          <div className="sec-label justify-center">What We Offer</div>
          <h2 className="text-[2.5rem] font-extrabold text-[#0d1b2a] mb-4" style={{ lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Choose the Right Package
          </h2>
          <p className="text-[#4b5563] max-w-2xl mx-auto text-[15px] leading-relaxed">
            Pick the service you need — our experts handle every step with full legal compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((pkg, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col transition-all duration-300 border ${
                  pkg.is_featured ? "bg-[#1B4FD8] border-[#1B4FD8] shadow-2xl" : "bg-white border-[#e5e7eb] hover:shadow-lg hover:-translate-y-1"
                }`}
                style={{ borderRadius: "16px" }}
              >
                {pkg.is_featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#F5A623] text-white text-[11px] font-bold px-5 py-1.5 uppercase tracking-widest" style={{ borderRadius: "20px" }}>
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-11 h-11 flex items-center justify-center ${pkg.is_featured ? "bg-white/15" : "bg-[#eff6ff]"}`} style={{ borderRadius: "10px" }}>
                      <Icon className={`w-5 h-5 ${pkg.is_featured ? "text-white" : "text-[#1B4FD8]"}`} />
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-[0.15em] ${pkg.is_featured ? "text-white/60" : "text-[#6b7280]"}`}>
                      {pkg.sub_title ?? "Service"}
                    </span>
                  </div>
                  <h3 className={`text-[18px] font-extrabold mb-3 leading-tight ${pkg.is_featured ? "text-white" : "text-[#0d1b2a]"}`}>{pkg.title}</h3>
                  <div className="flex items-end gap-1 mb-4">
                    <span className={`text-[2rem] font-extrabold leading-none ${pkg.is_featured ? "text-white" : "text-[#0d1b2a]"}`}>
                      ৳ {Number(pkg.price).toLocaleString()}
                    </span>
                    <span className={`text-[13px] mb-1 ${pkg.is_featured ? "text-white/50" : "text-[#6b7280]"}`}>/service</span>
                  </div>
                  {pkg.description && (
                    <p className={`text-[14px] leading-relaxed mb-6 ${pkg.is_featured ? "text-white/65" : "text-[#4b5563]"}`}>{pkg.description}</p>
                  )}
                  <div className={`border-t mb-6 ${pkg.is_featured ? "border-white/15" : "border-[#e5e7eb]"}`} />
                  {pkg.features && pkg.features.length > 0 && (
                    <ul className="space-y-3 mb-8 flex-1">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-center gap-3">
                          <div className={`w-5 h-5 flex items-center justify-center shrink-0 ${pkg.is_featured ? "bg-white/20" : "bg-[#eff6ff]"}`} style={{ borderRadius: "50%" }}>
                            <svg className={`w-2.5 h-2.5 ${pkg.is_featured ? "text-white" : "text-[#1B4FD8]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className={`text-[14px] ${pkg.is_featured ? "text-white/75" : "text-[#4b5563]"}`}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link
                    href={`/checkout?service=${pkg.slug}`}
                    className={`w-full flex items-center justify-center gap-2 py-[13px] text-[12px] font-bold tracking-widest uppercase transition-colors group ${
                      pkg.is_featured
                        ? "bg-white text-[#1B4FD8] hover:bg-[#eff6ff]"
                        : "border border-[#e5e7eb] text-[#0d1b2a] hover:bg-[#1B4FD8] hover:text-white hover:border-[#1B4FD8]"
                    }`}
                    style={{ borderRadius: "8px" }}
                  >
                    Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-[#6b7280] text-[14px] mt-10">
          Need a custom package?{" "}
          <Link href="/contact" className="text-[#1B4FD8] font-bold hover:underline">Contact us</Link>
          {" "}and we&apos;ll build a solution tailored to your business.
        </p>
      </div>
    </section>
  );
}
