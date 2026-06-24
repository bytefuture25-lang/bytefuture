// @ts-ignore: global CSS import has no type declarations
import "./globals.css";

import type { Metadata } from "next";
import { Orbitron, Poppins } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuroraBackground from "@/components/background/AuroraBackground";

import PremiumCursor from "@/components/cursor/PremiumCursor";
import InteractionProvider from "@/components/interaction/InteractionProvider";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "ByteFuture",
    template: "%s | ByteFuture",
  },

  description:
    "ByteFuture is a technology platform focused on cybersecurity, artificial intelligence, development and digital creativity.",

  keywords: [
    "Cybersecurity",
    "Artificial Intelligence",
    "AI",
    "Programming",
    "Development",
    "Technology",
    "ByteFuture",
    "Next.js",
  ],

  authors: [
    {
      name: "Future Byte",
    },
  ],

  creator: "Future Byte",

  metadataBase: new URL("https://bytefuture.vercel.app"),

  openGraph: {
    title: "ByteFuture",
    description:
      "Cybersecurity • AI • Development • Content Creation",
    url: "https://bytefuture.vercel.app",
    siteName: "ByteFuture",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ByteFuture",
    description:
      "Cybersecurity • AI • Development • Content Creation",
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
        className={`${orbitron.variable} ${poppins.variable} bg-black text-white`}
      >
        <InteractionProvider>
          <AuroraBackground />

          <PremiumCursor />

          <Navbar />

          <main>{children}</main>

          <Footer />
        </InteractionProvider>
      </body>
    </html>
  );
}