import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeroSection from "./sections/PageHeroSection";
import WhoWeAreSection from "./sections/WhoWeAreSection";
import MissionVisionSection from "./sections/MissionVisionSection";
import CoreValuesSection from "./sections/CoreValuesSection";
import StatsSection from "./sections/StatsSection";
import LeadershipSection from "./sections/LeadershipSection";

const F = { fontFamily: "var(--font-main)" };

export default function AboutView() {
  return (
    <div className="min-h-screen bg-white" style={F}>
      <PageHeroSection />
      <Header />
      <WhoWeAreSection />
      <MissionVisionSection />
      <CoreValuesSection />
      <StatsSection />
      <LeadershipSection />
      <Footer />
    </div>
  );
}
