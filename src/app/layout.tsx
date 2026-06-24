import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiffany C. — Product Design Leader",
  description:
    "Product design leader with 10+ years at the executive table. Available for Director/Head of Design roles and consulting engagements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full`}>
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "#f5f1eb", color: "#0a0a0a" }}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
