import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "10 HVAC Inspections in 30 Days or You Don't Pay",
  description: "We handle lead response, qualification, and follow-up in under 60 seconds to add 10 additional inspections — you just show up and close.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
