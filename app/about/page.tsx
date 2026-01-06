import About from "@/components/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Me | Ojasv Singh',
  description: 'Learn more about Ojasv Singh, a web developer specializing in React and Node.js.',
};

export default function AboutPage() {
  return <About />;
}