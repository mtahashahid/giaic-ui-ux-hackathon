import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import '../styles/custom.scss';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Home from '../components/Hero/Hero';

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
  title: "E-Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col antialiased`}
      >
        <Navbar />
        <Home />
        <main className="flex-1 container mx-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
