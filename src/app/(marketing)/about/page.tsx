import type { Metadata } from "next";
import { AboutClient } from "@/components/sections/about/about-client";

export const metadata: Metadata = {
  title: "About Arkiology — Digital Infrastructure Agency, South Florida",
  description:
    "Arkiology is a South Florida digital agency specializing in websites, AI employees, automations, and digital marketing. We build the infrastructure that protects and grows your business.",
  alternates: { canonical: "https://arkiology.com/about" },
};

export default function AboutPage() {
  return <AboutClient />;
}
