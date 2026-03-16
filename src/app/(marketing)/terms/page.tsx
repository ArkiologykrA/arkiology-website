import type { Metadata } from "next";
import { TermsClient } from "@/components/sections/legal/terms-client";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Arkiology terms of service — the terms and conditions governing use of our services.",
};

export default function TermsPage() {
  return <TermsClient />;
}
