import type { Metadata } from "next";
import { WorkClient } from "@/components/sections/work/work-client";

export const metadata: Metadata = {
  title: "Our Work — Case Studies & Portfolio",
  description:
    "See how Arkiology builds digital infrastructure that drives results. Case studies featuring website design, AI employees, business automations, and conversion optimization for real businesses.",
  alternates: { canonical: "https://arkiology.com/work" },
};

export default function WorkPage() {
  return <WorkClient />;
}
