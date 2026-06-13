"use client";

import dynamic from "next/dynamic";

const GlobeComponent = dynamic(() => import("./Globe"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full flex items-center justify-center"
      style={{ aspectRatio: "1/1", maxWidth: 600 }}
    >
      <div className="w-48 h-48 rounded-full border border-white/20 animate-pulse bg-white/5" />
    </div>
  ),
});

export default function GlobeWrapper() {
  return <GlobeComponent />;
}
