import { FileText, Shield, Award, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  sub: string;
  price: string;
  priceValue: number;
  desc: string;
  features: string[];
  icon: LucideIcon;
  featured: boolean;
}

export const SERVICES: Service[] = [
  {
    id: "import-export-support",
    title: "Import & Export Support",
    sub: "Most Popular",
    price: "৳ 10,000",
    priceValue: 10000,
    desc: "Complete assistance for import-export documentation, licensing, and full compliance process.",
    features: ["IRC / ERC documentation", "Customs compliance support", "Import license processing", "End-to-end assistance", "Dedicated case handler", "After-sales support"],
    icon: Shield,
    featured: true,
  },
  {
    id: "legal-documentation",
    title: "Legal Documentation",
    sub: "Professional",
    price: "৳ 10,000",
    priceValue: 10000,
    desc: "Preparation of affidavits, agreements, and all types of legal business documents.",
    features: ["Affidavit preparation", "Business agreements", "Notarization support", "Legal review", "Document filing", "Compliance advisory"],
    icon: FileText,
    featured: false,
  },
  {
    id: "trade-license-bin-tin",
    title: "Trade License & BIN/TIN",
    sub: "Business Setup",
    price: "৳ 10,000",
    priceValue: 10000,
    desc: "Help with trade license, VAT (BIN), and tax (TIN) registration for new or existing businesses.",
    features: ["Trade license registration", "VAT (BIN) registration", "TIN certificate", "Business setup guidance", "Renewal support"],
    icon: Award,
    featured: false,
  },
  {
    id: "noc-registration",
    title: "NOC & Registration",
    sub: "Government",
    price: "৳ 10,000",
    priceValue: 10000,
    desc: "Fast processing of government NOC, approvals, and essential business registrations.",
    features: ["Government NOC processing", "Approval management", "Business registration", "Status tracking", "Priority handling"],
    icon: CheckCircle,
    featured: false,
  },
  {
    id: "irc-erc-registration",
    title: "IRC / ERC Registration",
    sub: "Trade Certificates",
    price: "৳ 10,000",
    priceValue: 10000,
    desc: "Assistance in obtaining Import Registration Certificate (IRC) and Export Registration Certificate (ERC).",
    features: ["IRC application & filing", "ERC application & filing", "Document preparation", "Authority liaison", "Certificate delivery"],
    icon: Shield,
    featured: false,
  },
  {
    id: "dof-dls-consultancy",
    title: "DOF / DLS Consultancy",
    sub: "Starter",
    price: "৳ 1,000",
    priceValue: 1000,
    desc: "Support for Fisheries (DOF) and Livestock (DLS) approvals, NOC, and import permissions.",
    features: ["DOF / DLS approval support", "NOC processing", "Import permission guidance", "Document checklist"],
    icon: FileText,
    featured: false,
  },
];
