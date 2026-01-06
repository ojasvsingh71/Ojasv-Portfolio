import Resume from "@/components/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Ojasv Singh",
  description:
    "View and download the professional resume of Ojasv Singh, featuring skills in MERN Stack, Next.js, and competitive programming.",
};

export default function ResumePage() {
  return <Resume />;
}
