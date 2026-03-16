import type { Metadata } from "next";
import { ContactClient } from "@/components/sections/contact/contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Arkiology. Tell us about your business and we\u2019ll respond within 24 hours.",
};

export default function ContactPage() {
  return <ContactClient />;
}
