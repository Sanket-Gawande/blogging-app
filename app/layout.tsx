import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>AuthorsLog</title>
        <meta
          name="description"
          content="Dive deep into insights, connect with diverse perspectives: Your destination for meaningful reading experiences that resonate and inspire."
        />
        <meta name="theme" content="#18181b" />
      </head>
      <body className="min-h-screen bg-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
