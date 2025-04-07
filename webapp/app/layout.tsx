import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "TGA Handyman",
  description: "Where we are dedicated to providing top-tier commercial construction and facility maintenance services that keep your properties running smoothly and looking their best.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
