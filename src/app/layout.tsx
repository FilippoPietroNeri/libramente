import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "LibriMente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="synthwave">
      <head>
        <link rel="icon" href="favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <section className="flex-grow">
          <Suspense fallback={<div>Loading...</div>}>
            {children}
          </Suspense>
        </section>
        <Footer />
      </body>
    </html>
  );
}
