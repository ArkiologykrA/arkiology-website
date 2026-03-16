import type { Metadata } from "next";
import ClientHome from "../client-home";

export const metadata: Metadata = {
  title: "Arkiology | Digital Infrastructure Agency — Websites, AI Employees & Automations",
  description:
    "Arkiology builds the digital infrastructure that grows your business. Custom websites, 24/7 AI employees, business automations, SEO, and digital marketing. Based in South Florida, serving businesses nationwide.",
  alternates: {
    canonical: "https://arkiology.com",
  },
  openGraph: {
    title: "Arkiology | Digital Infrastructure Agency",
    description: "Custom websites, AI employees, automations, and digital marketing. We build infrastructure, not projects.",
    url: "https://arkiology.com",
  },
};

export default function HomePage() {
  return <ClientHome />;
}
