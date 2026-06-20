import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center bg-[#f8f9fb] px-4 py-32">
        {children}
      </main>
      <Footer />
    </>
  );
}
