import { ArrowRight, MapPin } from "lucide-react";

export default function MapSection() {
  return (
    <section className="pb-24 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div
          className="w-full h-[320px] bg-[#f8f9fa] border border-[#e5e7eb] flex items-center justify-center"
          style={{ borderRadius: "16px" }}
        >
          <div className="text-center">
            <MapPin className="w-10 h-10 text-[#1B4FD8] mx-auto mb-3" />
            <p className="text-[#0d1b2a] font-extrabold text-[16px]">6, Sahajada Mialen, Badamtoli</p>
            <p className="text-[#6b7280] text-[14px]">Dhaka-1100, Bangladesh</p>
            <a
              href="https://maps.google.com/?q=Badamtoli,Dhaka,Bangladesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-[#1B4FD8] font-bold text-[13px] hover:text-[#F5A623] transition-colors"
            >
              Open in Google Maps <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
