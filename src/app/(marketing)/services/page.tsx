import type { Metadata } from "next";
import { ServicesClient } from "@/components/sections/services/services-client";

export const metadata: Metadata = {
  title: "Services — Web Design, AI Employees, Automations & Digital Presence",
  description:
    "Custom website development, SEO & digital marketing, business automations, and 24/7 AI employees. We build the complete digital infrastructure for growing businesses in South Florida and beyond.",
  alternates: { canonical: "https://arkiology.com/services" },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
