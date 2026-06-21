import { Suspense } from "react";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { fetchServices } from "@/lib/services";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheckoutView from "@/views/customer/checkout/CheckoutView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout — Simran Enterprise",
};

interface Props {
  searchParams: Promise<{ service?: string }>;
}

export default async function CheckoutPage({ searchParams }: Props) {
  const session = await auth();
  const { service: serviceSlug } = await searchParams;

  if (!session) {
    const callbackUrl = `/checkout${serviceSlug ? `?service=${serviceSlug}` : ""}`;
    redirect(`/signin?callbackUrl=${encodeURIComponent(callbackUrl)}`);
  }

  const services = await fetchServices();
  const service = serviceSlug
    ? services.find((s) => s.slug === serviceSlug || String(s.id) === serviceSlug) ?? null
    : null;

  return (
    <>
      <TopBar />
      <Header forceScrolled />
      <main className="flex-1 bg-[#f8f9fb] pt-52 pb-20 px-4">
        <Suspense>
          <CheckoutView service={service} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
