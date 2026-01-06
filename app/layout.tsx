import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import VantaBackground from "@/components/vantaBackground";
import ChatWrapper from "@/components/chatWrapper";
import "./globals.css";

const BASE_URL = "https://ojasv-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Ojasv Singh | Full Stack Developer",
    template: "%s | Ojasv Singh", 
  },

  description:
    "Portfolio of Ojasv Singh, a passionate Full Stack Developer and B.Tech student at KIET. Specializing in MERN Stack, Next.js, and solving complex DSA problems (800+ Solved).",

  keywords: [
    "Ojasv Singh",
    "Full Stack Developer",
    "Web Developer",
    "MERN Stack",
    "Next.js Developer",
    "React Developer",
    "Software Engineer",
    "KIET Group of Institutions",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer",
  ],

  authors: [{ name: "Ojasv Singh", url: BASE_URL }],
  creator: "Ojasv Singh",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: "Ojasv Singh | Full Stack Developer",
    description:
      "Explore the projects and skills of Ojasv Singh, a Full Stack Developer with 800+ DSA problems solved.",
    siteName: "Ojasv Singh Portfolio",
    images: [
      {
        url: "/opengraph-image.png", 
        width: 1200,
        height: 630,
        alt: "Ojasv Singh Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ojasv Singh | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Node.js, and Next.js. View my projects and resume.",
    images: ["/opengraph-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <VantaBackground>
          <Navbar />
          {children}
          <ChatWrapper />
        </VantaBackground>
      </body>
    </html>
  );
}
