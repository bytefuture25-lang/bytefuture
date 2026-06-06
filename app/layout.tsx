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
  title: "ByteFuture | Cybersecurity • AI • Development",

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

  openGraph: {
    title: "ByteFuture",
    description:
      "Cybersecurity • AI • Development • Content Creation",

    type: "website",

    siteName: "ByteFuture",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ByteFuture",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${poppins.variable}`}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}

