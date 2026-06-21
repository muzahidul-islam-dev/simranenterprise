import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import ContactHeroSection from "./sections/ContactHeroSection";
import ContactFormSection from "./sections/ContactFormSection";
import MapSection from "./sections/MapSection";

const F = { fontFamily: "var(--font-main)" };

export default function ContactView() {
  return (
    <div className="min-h-screen bg-white" style={F}>
      <TopBar />
      <ContactHeroSection />
      <Header />
      <ContactFormSection />
      <MapSection />
      <Footer />
    </div>
  );
}
