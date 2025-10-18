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
  title: "Ravtej Shah Singh - Portfolio",
  description: "Personal portfolio of Ravtej Shah Singh — full-stack developer and software engineer specializing in React, Django, and Java.",
  authors: [{ name: "Ravtej Shah Singh" }],
  openGraph: {
    title: "Ravtej Shah Singh - Portfolio",
    description: "Explore the projects, experience, and background of Ravtej Shah Singh.",
    url: "https://ravtej.com",
    siteName: "Ravtej Shah Singh",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/profile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
