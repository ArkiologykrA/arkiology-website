import type { Metadata } from "next";
import { WorkClient } from "@/components/sections/work/work-client";
import { getCaseStudies } from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Our Work — Case Studies & Portfolio",
  description:
    "See how Arkiology builds digital infrastructure that drives results. Case studies featuring website design, AI employees, business automations, and conversion optimization for real businesses.",
  alternates: { canonical: "https://arkiology.com/work" },
};

export default async function WorkPage() {
  const caseStudies = await getCaseStudies();
  return <WorkClient caseStudies={caseStudies} />;
}
