import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organisms/navbar/Navbar";

const league_Spartan = League_Spartan({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Invoice",
  description: "Invoice App Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${league_Spartan.className} flex max-md:flex-col`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
