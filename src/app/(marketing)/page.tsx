import type { Metadata } from "next";
import ClientHome from "../client-home";
import { getServices, getTestimonials, getFaqsByPage, getProcessSteps } from "@/sanity/lib/fetch";

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

export default async function HomePage() {
  const [services, testimonials, faqs, processSteps] = await Promise.all([
    getServices(),
    getTestimonials(),
    getFaqsByPage("home"),
    getProcessSteps(),
  ]);

  return (
    <ClientHome
      services={services}
      testimonials={testimonials}
      faqs={faqs}
      processSteps={processSteps}
    />
  );
}
