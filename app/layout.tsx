import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/organisms/navbar/NavbarWrapper";
import AuthSync from "@/components/organisms/authSync/AuthSync";

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
        <AuthSync />
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
