import type { Metadata } from "next";
import { ProcessClient } from "@/components/sections/process/process-client";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "From discovery to launch and beyond — how Arkiology builds digital infrastructure that grows your business.",
};

export default function ProcessPage() {
  return <ProcessClient />;
}
