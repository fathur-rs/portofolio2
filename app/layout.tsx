import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fathurrahman Syarief - Resume",
  description: "Professional Resume and Portfolio",
  keywords: ['resume', 'portfolio', 'developer', 'Fathurrahman Syarief', 'Data Scientist', 'Auditor'],
  authors: [{ name: 'Fathurrahman Syarief' }],
  creator: 'Fathurrahman Syarief',
  openGraph: {
    title: 'Fathurrahman Syarief - Resume',
    description: 'Professional Resume and Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Theme color that matches your teal design */}
        <meta name="theme-color" content="#14b8a6" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}