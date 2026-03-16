import type { Metadata } from "next";
import { ContactClient } from "@/components/sections/contact/contact-client";

export const metadata: Metadata = {
  title: "Contact Us — Start Your Digital Infrastructure Project",
  description:
    "Ready to build your digital infrastructure? Contact Arkiology for a free consultation. Websites, AI employees, automations, and digital marketing. 24-hour response guaranteed.",
  alternates: { canonical: "https://arkiology.com/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
