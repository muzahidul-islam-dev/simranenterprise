import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import PlanHeroSection from "./sections/PlanHeroSection";
import PlanContentSection from "./sections/PlanContentSection";

const F = { fontFamily: "var(--font-main)" };

export default function PlanView() {
  return (
    <div className="min-h-screen bg-white" style={F}>
      <TopBar />
      <PlanHeroSection />
      <Header />
      <PlanContentSection />
      <Footer />
    </div>
  );
}
