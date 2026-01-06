import About from "@/components/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Ojasv Singh",
  description:
    "Learn about Ojasv Singh, a B.Tech student and Web Developer with 800+ DSA problems solved and a passion for MERN stack.",
};

export default function AboutPage() {
  return <About />;
}
