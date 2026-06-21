import { Suspense } from "react";
import SigninView from "@/views/customer/auth/SigninView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In — Simran Enterprise",
};

export default function SigninPage() {
  return (
    <Suspense>
      <SigninView />
    </Suspense>
  );
}
