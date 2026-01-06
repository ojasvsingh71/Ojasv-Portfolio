import Contact from "@/components/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ojasv Singh",
  description:
    "Get in touch with Ojasv Singh for collaborations, web development projects, or hiring opportunities.",
};

export default function ContactPage() {
  return <Contact />;
}
