import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import WhyChooseSection from "./sections/WhyChooseSection";
import ExperienceSection from "./sections/ExperienceSection";
import FAQSection from "./sections/FAQSection";
import LeadershipSection from "./sections/LeadershipSection";
import BlogSection from "./sections/BlogSection";
import TestimonialsSection from "./sections/TestimonialsSection";

const F = { fontFamily: "var(--font-main)" };

export default function HomeView() {
  return (
    <div className="min-h-screen bg-white" style={F}>
      <HeroSection />
      <Header />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ExperienceSection />
      <FAQSection />
      <LeadershipSection />
      <BlogSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
