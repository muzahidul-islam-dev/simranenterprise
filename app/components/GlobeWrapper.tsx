"use client";

import dynamic from "next/dynamic";

const GlobeComponent = dynamic(() => import("./Globe"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center" style={{ width: "100%", aspectRatio: "1/1", maxWidth: 700 }}>
      <div className="w-40 h-40 rounded-full border border-white/20 animate-pulse bg-white/5" />
    </div>
  ),
});

export default function GlobeWrapper() {
  return <GlobeComponent />;
}
