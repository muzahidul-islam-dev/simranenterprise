"use client";

import { useEffect, useState } from "react";
import { World } from "@/components/ui/globe";

// ── PC config — full quality ──────────────────────────────────
const desktopConfig = {
  pointSize: 8,
  globeColor: "#0F2D6B",
  showAtmosphere: true,
  atmosphereColor: "#93C5FD",
  atmosphereAltitude: 0.15,
  emissive: "#0F172A",
  emissiveIntensity: 0.15,
  shininess: 0.9,
  polygonColor: "rgba(147,197,253,0.7)",
  ambientLight: "#BFDBFE",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#93C5FD",
  arcTime: 800,
  arcLength: 0.9,
  rings: 2,
  maxRings: 5,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.8,
};

// ── Mobile config — no rings, optimized performance ──────────
const mobileConfig = {
  pointSize: 4,
  globeColor: "#0F2D6B",
  showAtmosphere: true,
  atmosphereColor: "#93C5FD",
  atmosphereAltitude: 0.1,
  emissive: "#0F172A",
  emissiveIntensity: 0.08,
  shininess: 0.5,
  polygonColor: "rgba(147,197,253,0.45)",
  ambientLight: "#BFDBFE",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#93C5FD",
  arcTime: 2000,
  arcLength: 0.85,
  rings: 0,
  maxRings: 0,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.4,
};

const colors = ["#F59E0B", "#1B4FD8", "#3B6FE8"];

// PC — all 10 arcs
const desktopArcs = [
  { order: 1,  startLat: 23.8103, startLng: 90.4125, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3,  color: colors[0] },
  { order: 2,  startLat: 23.8103, startLng: 90.4125, endLat: 1.3521,  endLng: 103.8198, arcAlt: 0.3,  color: colors[1] },
  { order: 3,  startLat: 23.8103, startLng: 90.4125, endLat: 51.5074, endLng: -0.1278,  arcAlt: 0.4,  color: colors[2] },
  { order: 4,  startLat: 23.8103, startLng: 90.4125, endLat: 40.7128, endLng: -74.006,  arcAlt: 0.45, color: colors[0] },
  { order: 5,  startLat: 23.8103, startLng: 90.4125, endLat: 25.2048, endLng: 55.2708,  arcAlt: 0.2,  color: colors[1] },
  { order: 6,  startLat: 23.8103, startLng: 90.4125, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.35, color: colors[2] },
  { order: 7,  startLat: 23.8103, startLng: 90.4125, endLat: 48.8566, endLng: 2.3522,   arcAlt: 0.4,  color: colors[0] },
  { order: 8,  startLat: 23.8103, startLng: 90.4125, endLat: 28.6139, endLng: 77.2090,  arcAlt: 0.15, color: colors[1] },
  { order: 9,  startLat: 23.8103, startLng: 90.4125, endLat: 31.2304, endLng: 121.4737, arcAlt: 0.3,  color: colors[2] },
  { order: 10, startLat: 23.8103, startLng: 90.4125, endLat: 37.7749, endLng: -122.4194,arcAlt: 0.45, color: colors[0] },
];

// Mobile — only 4 arcs
const mobileArcs = [
  { order: 1, startLat: 23.8103, startLng: 90.4125, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3,  color: colors[0] },
  { order: 2, startLat: 23.8103, startLng: 90.4125, endLat: 51.5074, endLng: -0.1278,  arcAlt: 0.4,  color: colors[1] },
  { order: 3, startLat: 23.8103, startLng: 90.4125, endLat: 25.2048, endLng: 55.2708,  arcAlt: 0.2,  color: colors[2] },
  { order: 4, startLat: 23.8103, startLng: 90.4125, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.35, color: colors[0] },
];

export default function GlobeComponent() {
  const [isMobile, setIsMobile] = useState(false);
  const [size, setSize] = useState(700);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const mobile = w < 1024;
      setIsMobile(mobile);
      if (mobile) setSize(Math.round(w * 1.8));
      else setSize(700);
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div style={{ width: `${size}px`, height: `${size}px`, maxWidth: "none" }}>
      <World
        data={isMobile ? mobileArcs : desktopArcs}
        globeConfig={isMobile ? mobileConfig : desktopConfig}
      />
    </div>
  );
}
