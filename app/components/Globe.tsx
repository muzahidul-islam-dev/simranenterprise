"use client";

import { World } from "@/components/ui/globe";

const globeConfig = {
  pointSize: 4,
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
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const colors = ["#F59E0B", "#1B4FD8", "#3B6FE8"];

const sampleArcs = [
  { order: 1,  startLat: 23.8103, startLng: 90.4125,   endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3,  color: colors[0] }, // Dhaka → Hong Kong
  { order: 2,  startLat: 23.8103, startLng: 90.4125,   endLat: 1.3521,  endLng: 103.8198, arcAlt: 0.3,  color: colors[1] }, // Dhaka → Singapore
  { order: 3,  startLat: 23.8103, startLng: 90.4125,   endLat: 51.5074, endLng: -0.1278,  arcAlt: 0.4,  color: colors[2] }, // Dhaka → London
  { order: 4,  startLat: 23.8103, startLng: 90.4125,   endLat: 40.7128, endLng: -74.006,  arcAlt: 0.45, color: colors[0] }, // Dhaka → New York
  { order: 5,  startLat: 23.8103, startLng: 90.4125,   endLat: 25.2048, endLng: 55.2708,  arcAlt: 0.2,  color: colors[1] }, // Dhaka → Dubai
  { order: 6,  startLat: 23.8103, startLng: 90.4125,   endLat: 35.6762, endLng: 139.6503, arcAlt: 0.35, color: colors[2] }, // Dhaka → Tokyo
  { order: 7,  startLat: 23.8103, startLng: 90.4125,   endLat: 48.8566, endLng: 2.3522,   arcAlt: 0.4,  color: colors[0] }, // Dhaka → Paris
  { order: 8,  startLat: 23.8103, startLng: 90.4125,   endLat: 28.6139, endLng: 77.2090,  arcAlt: 0.15, color: colors[1] }, // Dhaka → Delhi
  { order: 9,  startLat: 23.8103, startLng: 90.4125,   endLat: 31.2304, endLng: 121.4737, arcAlt: 0.3,  color: colors[2] }, // Dhaka → Shanghai
  { order: 10, startLat: 23.8103, startLng: 90.4125,   endLat: 37.7749, endLng: -122.4194,arcAlt: 0.45, color: colors[0] }, // Dhaka → San Francisco
];

export default function GlobeComponent() {
  return (
    <div style={{ width: "700px", height: "700px" }}>
      <World data={sampleArcs} globeConfig={globeConfig} />
    </div>
  );
}
