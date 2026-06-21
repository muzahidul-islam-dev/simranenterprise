import { Suspense } from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheckoutSuccessView from "@/views/customer/checkout/CheckoutSuccessView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Confirmed — Simran Enterprise",
};

export default function CheckoutSuccessPage() {
  return (
    <>
      <TopBar />
      <Header forceScrolled />
      <main className="flex-1 bg-[#f8f9fb] pt-52 pb-20 px-4">
        <Suspense>
          <CheckoutSuccessView />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
