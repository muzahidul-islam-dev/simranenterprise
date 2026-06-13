"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What services does Simran Enterprise provide?",
    a: "We provide end-to-end consultancy for import & export licensing, trade license registration, BIN/TIN (VAT & tax) registration, NOC and government approvals, IRC/ERC certificates, DOF/DLS consultancy, and all types of legal business documentation.",
  },
  {
    q: "How long does it take to process an import license (IRC)?",
    a: "Typically, IRC processing takes 7–15 working days depending on the government authority's workload. With our established connections and proper documentation, we ensure the fastest possible turnaround.",
  },
  {
    q: "What documents are required to get started?",
    a: "Basic requirements include your NID/passport, trade license (if existing), TIN certificate, bank solvency certificate, and a passport-size photograph. The exact list varies by service — our team will provide a complete checklist after your initial consultation.",
  },
  {
    q: "Do you offer after-sales support once the license is obtained?",
    a: "Yes. We provide dedicated after-sales support including renewal reminders, document updates, compliance guidance, and any follow-up correspondence with government bodies — all at no extra cost.",
  },
  {
    q: "How much does your consultancy service cost?",
    a: "Our pricing starts from ৳1,000 for specialized services like DOF/DLS consultancy, and most standard services (trade license, NOC, IRC/ERC, legal documentation) are priced at ৳10,000. We offer transparent pricing with no hidden fees.",
  },
  {
    q: "Can I get a free consultation before committing?",
    a: "Absolutely. We offer a free initial consultation where our experts assess your requirements, explain the process, and recommend the right service package for your business — with no obligation.",
  },
  {
    q: "Is Simran Enterprise government approved?",
    a: "Yes. Simran Enterprise is a fully licensed consultancy firm recognized by relevant government bodies in Bangladesh. All filings and documents we prepare are legally compliant and audit-ready.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`border overflow-hidden transition-all duration-200 ${
            open === i
              ? "border-[#1B4FD8]"
              : "border-[#e5e7eb]"
          }`}
          style={{ borderRadius: "12px" }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer bg-white"
          >
            <span
              className="pr-4"
              style={{
                fontFamily: "var(--font-main)",
                fontSize: "15px",
                fontWeight: open === i ? 700 : 600,
                color: open === i ? "#1B4FD8" : "#0d1b2a",
                lineHeight: 1.5,
              }}
            >
              {faq.q}
            </span>
            <div
              className="shrink-0 w-8 h-8 flex items-center justify-center transition-colors"
              style={{
                background: open === i ? "#1B4FD8" : "#f3f4f6",
                borderRadius: "6px",
              }}
            >
              {open === i
                ? <Minus className="w-3.5 h-3.5 text-white" />
                : <Plus className="w-3.5 h-3.5 text-[#6b7280]" />
              }
            </div>
          </button>

          {open === i && (
            <div
              className="px-6 pb-6 bg-white border-t border-[#e5e7eb]"
            >
              <p
                className="pt-4"
                style={{
                  fontFamily: "var(--font-main)",
                  fontSize: "14px",
                  lineHeight: "1.85",
                  color: "#4b5563",
                }}
              >
                {faq.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
