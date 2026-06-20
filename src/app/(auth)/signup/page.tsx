import SignupView from "@/views/customer/auth/SignupView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up — Simran Enterprise",
};

export default function SignupPage() {
  return <SignupView />;
}
