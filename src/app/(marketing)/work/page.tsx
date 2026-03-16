import type { Metadata } from "next";
import { WorkClient } from "@/components/sections/work/work-client";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Case studies showcasing how Arkiology builds digital infrastructure that drives real business results.",
};

export default function WorkPage() {
  return <WorkClient />;
}
