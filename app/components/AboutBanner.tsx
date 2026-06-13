"use client";

import { useState } from "react";
import { Award } from "lucide-react";

export default function AboutBanner() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative rounded-lg overflow-hidden h-full min-h-[560px]">
      {imgError ? (
        <div className="w-full h-full min-h-[560px] bg-gradient-to-br from-[#0F172A] via-[#0d2a5e] to-[#0F172A] flex flex-col items-center justify-center text-white">
          <div className="w-24 h-24 bg-[#1B4FD8]/20 rounded-full flex items-center justify-center mb-6">
            <Award className="w-12 h-12 text-[#1B4FD8]" />
          </div>
          <p className="text-2xl font-bold mb-2">15+ Years of Excellence</p>
          <p className="text-white/50 text-sm">Trusted Import Consultancy</p>
        </div>
      ) : (
        <img
          src="https://simranenterprise.com.bd/assets/images/frontend/about/643517f4c3e7e1681201140.jpg"
          alt="Simran Enterprise Office"
          className="w-full h-full min-h-[560px] object-cover"
          onError={() => setImgError(true)}
        />
      )}
      {/* Dark overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      {/* Badge */}
      <div className="absolute bottom-6 left-6 bg-[#1B4FD8] text-white px-5 py-2.5 rounded-lg text-sm font-semibold">
        Since 2009
      </div>
    </div>
  );
}
