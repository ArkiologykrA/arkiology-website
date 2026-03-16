import type { Metadata } from "next";
import { ServicesClient } from "@/components/sections/services/services-client";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, digital presence, automations, and AI employees. The complete digital infrastructure for growing businesses.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
