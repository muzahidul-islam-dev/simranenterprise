import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHeroSection from "./sections/ServicesHeroSection";
import ServicesGridSection from "./sections/ServicesGridSection";
import WhyChooseStripSection from "./sections/WhyChooseStripSection";

const F = { fontFamily: "var(--font-main)" };

export default function ServicesView() {
  return (
    <div className="min-h-screen bg-white" style={F}>
      <ServicesHeroSection />
      <Header />
      <ServicesGridSection />
      <WhyChooseStripSection />
      <Footer />
    </div>
  );
}
