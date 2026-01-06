import Projects from "@/components/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Ojasv Singh",
  description:
    "A showcase of my web development projects and technical experiments.",
};

export default function ProjectsPage() {
  return <Projects />;
}
