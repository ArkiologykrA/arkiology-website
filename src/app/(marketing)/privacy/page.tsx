import type { Metadata } from "next";
import { PrivacyClient } from "@/components/sections/legal/privacy-client";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Arkiology privacy policy — how we collect, use, and protect your personal information. Transparency in data handling.",
  alternates: { canonical: "https://arkiology.com/privacy" },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
