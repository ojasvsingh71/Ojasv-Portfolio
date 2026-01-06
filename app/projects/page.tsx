import Projects from "@/components/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Ojasv Singh",
  description:
    "Showcase of full-stack projects including DSA Tracker, LawSetu, and MiniMoo Chatbot built with React, Node.js, and AI.",
};

export default function ProjectsPage() {
  return <Projects />;
}
