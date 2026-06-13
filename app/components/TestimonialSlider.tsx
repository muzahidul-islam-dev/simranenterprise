"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Simran Enterprise transformed our international supply chain. Their expertise in import logistics saved us significant time and costs while ensuring full quality compliance.",
    name: "Ahmed Rahman",
    co: "CEO, TechBD Solutions",
    sector: "Technology Sector",
    initials: "A",
  },
  {
    quote: "Professional, reliable, and deeply knowledgeable. Their consultancy helped us navigate complex export regulations seamlessly. I would highly recommend Simran Enterprise.",
    name: "Fatima Khatun",
    co: "Director, Dhaka Textiles",
    sector: "Textile Industry",
    initials: "F",
  },
  {
    quote: "Outstanding service from start to finish. They handled our pharmaceutical imports with the precision and care our industry demands. Every document was perfect.",
    name: "Dr. Kamal Hossain",
    co: "Operations Manager",
    sector: "Healthcare Sector",
    initials: "K",
  },
  {
    quote: "Getting our IRC done used to take months. Simran Enterprise completed it in under two weeks. Their connections and expertise are unmatched in the industry.",
    name: "Rahim Uddin",
    co: "MD, Jessore Impex",
    sector: "Import & Export",
    initials: "R",
  },
  {
    quote: "We needed a trade license and BIN registration urgently. The team delivered on time and kept us informed at every step. Excellent, professional service.",
    name: "Nasrin Begum",
    co: "Owner, Rupali Enterprise",
    sector: "Retail & Trading",
    initials: "N",
  },
];

const F = { fontFamily: "var(--font-main)" };

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((index + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 200);
  }, [animating]);

  // Auto-advance every 5s
  useEffect(() => {
    const id = setInterval(() => go(current + 1), 5000);
    return () => clearInterval(id);
  }, [current, go]);

  const t = testimonials[current];
  // Show 3 cards: prev, current, next
  const indices = [
    (current - 1 + testimonials.length) % testimonials.length,
    current,
    (current + 1) % testimonials.length,
  ];

  return (
    <div style={F}>
      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {indices.map((idx, pos) => {
          const item = testimonials[idx];
          const isCenter = pos === 1;
          return (
            <div
              key={idx}
              className="flex flex-col justify-between p-8 border transition-all duration-300"
              style={{
                borderRadius: "16px",
                background: isCenter ? "#1B4FD8" : "#ffffff",
                borderColor: isCenter ? "#1B4FD8" : "#e5e7eb",
                opacity: isCenter ? 1 : 0.6,
                transform: isCenter ? "scale(1.02)" : "scale(1)",
              }}
            >
              {/* Stars */}
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[#F5A623]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote icon */}
                <div className="mb-4">
                  <svg className="w-8 h-8" style={{ color: isCenter ? "rgba(255,255,255,0.25)" : "#e5e7eb" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p
                  className="text-[15px] leading-[1.8] mb-7"
                  style={{ color: isCenter ? "rgba(255,255,255,0.9)" : "#4b5563" }}
                >
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div
                className="flex items-center gap-4 pt-5 border-t"
                style={{ borderColor: isCenter ? "rgba(255,255,255,0.2)" : "#e5e7eb" }}
              >
                <div
                  className="w-11 h-11 flex items-center justify-center text-white font-extrabold text-[16px] shrink-0"
                  style={{
                    background: isCenter ? "rgba(255,255,255,0.2)" : "#1B4FD8",
                    borderRadius: "50%",
                  }}
                >
                  {item.initials}
                </div>
                <div>
                  <div
                    className="font-extrabold text-[15px]"
                    style={{ color: isCenter ? "#ffffff" : "#0d1b2a" }}
                  >
                    {item.name}
                  </div>
                  <div
                    className="text-[13px] mt-0.5"
                    style={{ color: isCenter ? "rgba(255,255,255,0.55)" : "#6b7280" }}
                  >
                    {item.co}
                  </div>
                  <div
                    className="text-[11px] font-bold uppercase tracking-wider mt-0.5"
                    style={{ color: isCenter ? "rgba(255,255,255,0.35)" : "#9ca3af" }}
                  >
                    {item.sector}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="transition-all duration-300"
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                borderRadius: "8px",
                background: i === current ? "#1B4FD8" : "#e5e7eb",
                border: "none",
                cursor: "pointer",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <div className="flex gap-3">
          <button
            onClick={() => go(current - 1)}
            className="w-11 h-11 flex items-center justify-center border border-[#e5e7eb] hover:border-[#1B4FD8] hover:bg-[#1B4FD8] hover:text-white text-[#0d1b2a] transition-all"
            style={{ borderRadius: "8px" }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => go(current + 1)}
            className="w-11 h-11 flex items-center justify-center bg-[#1B4FD8] hover:bg-[#1340B8] text-white transition-colors"
            style={{ borderRadius: "8px" }}
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
