import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import BlogHeroSection from "./sections/BlogHeroSection";
import PostsGridSection from "./sections/PostsGridSection";

const F = { fontFamily: "var(--font-main)" };

export default function BlogView() {
  return (
    <div className="min-h-screen bg-white" style={F}>
      <TopBar />
      <BlogHeroSection />
      <Header />
      <PostsGridSection />
      <Footer />
    </div>
  );
}
