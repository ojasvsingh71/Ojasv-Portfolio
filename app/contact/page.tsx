import Contact from "@/components/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ojasv Singh",
  description: "Get in touch with me for collaborations or queries.",
};

export default function ContactPage() {
  return <Contact />;
}
