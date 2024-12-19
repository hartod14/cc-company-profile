import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";

export const metadata: Metadata = {
  title: "Logistica - Shipping Company",
  description: "Logistica Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
