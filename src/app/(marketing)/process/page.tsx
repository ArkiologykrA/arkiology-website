import type { Metadata } from "next";
import { ProcessClient } from "@/components/sections/process/process-client";

export const metadata: Metadata = {
  title: "Our Process — From Discovery to Launch & Beyond",
  description:
    "Arkiology's 8-step process: discovery, strategy, design, development, testing, launch, and ongoing optimization. Transparent timelines and deliverables at every stage.",
  alternates: { canonical: "https://arkiology.com/process" },
};

export default function ProcessPage() {
  return <ProcessClient />;
}
