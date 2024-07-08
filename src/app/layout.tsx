import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import "./globals.css";

const сormorant = Cormorant({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${сormorant.className} bg-[#50584B]` }>{children}</body>
    </html>
  );
}
