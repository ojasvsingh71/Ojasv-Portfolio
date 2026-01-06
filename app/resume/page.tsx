import Resume from "@/components/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Ojasv Singh",
  description: "View and download my professional resume.",
};

export default function ResumePage() {
  return <Resume />;
}
