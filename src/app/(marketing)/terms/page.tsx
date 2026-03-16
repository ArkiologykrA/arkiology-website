import type { Metadata } from "next";
import { TermsClient } from "@/components/sections/legal/terms-client";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Arkiology terms of service — the terms, conditions, and agreements governing use of our digital infrastructure services.",
  alternates: { canonical: "https://arkiology.com/terms" },
};

export default function TermsPage() {
  return <TermsClient />;
}
