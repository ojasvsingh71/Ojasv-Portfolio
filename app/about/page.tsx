import About from "@/components/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Ojasv Singh",
  description:
    "Learn about Ojasv Singh, a B.Tech student, AWS Certified Practitioner, and Full Stack MERN Developer with 1000+ DSA problems solved.",
};

export default function AboutPage() {
  return <About />;
}
