"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote: "Simran Enterprise transformed our international supply chain. Their expertise in import logistics saved us significant time and costs while ensuring full quality compliance.",
    name: "Ahmed Rahman",
    co: "CEO, TechBD Solutions",
    sector: "Technology Sector",
    initials: "A",
    color: "#1B4FD8",
  },
  {
    quote: "Professional, reliable, and deeply knowledgeable. Their consultancy helped us navigate complex export regulations seamlessly. I would highly recommend Simran Enterprise.",
    name: "Fatima Khatun",
    co: "Director, Dhaka Textiles",
    sector: "Textile Industry",
    initials: "F",
    color: "#F5A623",
  },
  {
    quote: "Outstanding service from start to finish. They handled our pharmaceutical imports with the precision and care our industry demands. Every document was perfect.",
    name: "Dr. Kamal Hossain",
    co: "Operations Manager",
    sector: "Healthcare Sector",
    initials: "K",
    color: "#1B4FD8",
  },
  {
    quote: "Getting our IRC done used to take months. Simran Enterprise completed it in under two weeks. Their connections and expertise are unmatched in the industry.",
    name: "Rahim Uddin",
    co: "MD, Jessore Impex",
    sector: "Import & Export",
    initials: "R",
    color: "#16a34a",
  },
  {
    quote: "We needed a trade license and BIN registration urgently. The team delivered on time and kept us informed at every step. Excellent, professional service.",
    name: "Nasrin Begum",
    co: "Owner, Rupali Enterprise",
    sector: "Retail & Trading",
    initials: "N",
    color: "#7c3aed",
  },
  {
    quote: "Simran Enterprise's legal documentation team is second to none. They prepared all our corporate filings with precision and handled everything within days.",
    name: "Karim Molla",
    co: "Director, Karim Industries",
    sector: "Manufacturing",
    initials: "K",
    color: "#0891b2",
  },
];

const F = { fontFamily: "var(--font-main)" };

export default function TestimonialSlider() {
  return (
    <div style={F}>
      <style>{`
        .t-swiper .swiper-pagination {
          position: static;
          margin-top: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .t-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background: #e5e7eb;
          opacity: 1;
          transition: all 0.3s;
          margin: 0 !important;
        }
        .t-swiper .swiper-pagination-bullet-active {
          width: 28px;
          background: #1B4FD8;
        }
        .t-swiper .swiper-slide {
          height: auto;
        }
      `}</style>

      <Swiper
        className="t-swiper"
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        breakpoints={{
          768:  { slidesPerView: 2, spaceBetween: 20 },
          1100: { slidesPerView: 3, spaceBetween: 24 },
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i} style={{ height: "auto" }}>
            <div
              className="flex flex-col justify-between bg-white border border-[#e5e7eb] p-7 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              style={{ borderRadius: "16px", minHeight: "300px" }}
            >
              <div>
                {/* Quote mark */}
                <svg className="w-8 h-8 mb-4" style={{ color: "#e5e7eb" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4" style={{ color: "#F5A623" }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-[14px] leading-[1.85] mb-6" style={{ color: "#4b5563" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t" style={{ borderColor: "#e5e7eb" }}>
                <div
                  className="w-10 h-10 flex items-center justify-center text-white font-extrabold text-[15px] shrink-0"
                  style={{ background: t.color, borderRadius: "50%" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-extrabold text-[14px]" style={{ color: "#0d1b2a" }}>{t.name}</div>
                  <div className="text-[12px] mt-0.5" style={{ color: "#6b7280" }}>{t.co}</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider mt-0.5" style={{ color: "#9ca3af" }}>{t.sector}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
