import type { Metadata } from "next";
import { AboutClient } from "@/components/sections/about/about-client";

export const metadata: Metadata = {
  title: "About",
  description:
    "The science of building digital foundations. We help businesses build infrastructure that grows.",
};

export default function AboutPage() {
  return <AboutClient />;
}
