import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import VantaBackground from "@/components/vantaBackground";
import ChatWrapper from "@/components/chatWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ojasv Singh's Portfolio",
  description: "Portfolio converted to Next.js",
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
