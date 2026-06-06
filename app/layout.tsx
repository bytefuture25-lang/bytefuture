import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import { Orbitron, Poppins } from "next/font/google";

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
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}