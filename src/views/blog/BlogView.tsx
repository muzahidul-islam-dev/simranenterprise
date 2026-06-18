import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHeroSection from "./sections/BlogHeroSection";
import PostsGridSection from "./sections/PostsGridSection";

const F = { fontFamily: "var(--font-main)" };

export default function BlogView() {
  return (
    <div className="min-h-screen bg-white" style={F}>
      <BlogHeroSection />
      <Header />
      <PostsGridSection />
      <Footer />
    </div>
  );
}
