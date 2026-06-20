import { Suspense } from "react";
import VerifyEmailView from "@/views/customer/auth/VerifyEmailView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Email — Simran Enterprise",
};

export default function VerifyEmailPage() {
  return (
    <Suspense>
      <VerifyEmailView />
    </Suspense>
  );
}
