import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "./components/Background";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Namita Mehra | Full Stack Developer & AI Enthusiast",
  description: "Portfolio of Namita Mehra, a Full Stack Developer building scalable web apps and intelligent AI systems. Specializing in Next.js, React, and Machine Learning.",
  keywords: ["Full Stack Developer", "Next.js", "React", "AI", "Machine Learning", "Web Development", "Python", "Software Engineer"],
  openGraph: {
    title: "Namita Mehra | Full Stack Developer & AI Enthusiast",
    description: "Building scalable web apps and intelligent AI systems.",
    type: "website",
    locale: "en_US",
    url: "https://namitamehra.com", // Placeholder, good practice
    siteName: "Namita Mehra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Namita Mehra | Full Stack Developer",
    description: "Building scalable web apps and intelligent AI systems.",
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
        <Background />
        {children}
        <Footer />
      </body>
    </html>
  );
}
