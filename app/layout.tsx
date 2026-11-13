import Menu from "@/components/menu";
import { FavoritProvider } from "@/context/favorit-context";
import { TemaProvider } from "@/context/tema-context";
import Header from "@/components/header";
import { Suspense } from "react";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website Belajarku",
  description: "Website pribadi untuk belajar Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const namaUser = "Nisfa";

  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <TemaProvider>
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>
          <Header namaUser={namaUser} />
          <FavoritProvider>
            <Menu />
            {children}
          </FavoritProvider>
        </TemaProvider>
      </body>
    </html>
  );
}
