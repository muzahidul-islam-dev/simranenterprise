import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <Header forceScrolled />
      <main className="flex-1 flex items-center justify-center bg-[#f8f9fb] px-4 pt-52 pb-20">
        {children}
      </main>
      <Footer />
    </>
  );
}
