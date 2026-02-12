import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chabad Source – Design, CRM & Operations for Non-Profits",
  description:
    "You focus on your mission. We handle the systems, design, and operations. Professional services for non-profits, educational institutions, and mission-driven organizations.",
  openGraph: {
    title: "Chabad Source – Design, CRM & Operations for Non-Profits",
    description:
      "You focus on your mission. We handle the systems, design, and operations. Professional services for non-profits, educational institutions, and mission-driven organizations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
