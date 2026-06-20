import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import ReduxProvider from "@/components/providers/ReduxProvider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Simran Enterprise — Import, Export & Trade Consultancy",
  description: "Trusted Import, Export & Consultancy firm based in Dhaka, Bangladesh.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
