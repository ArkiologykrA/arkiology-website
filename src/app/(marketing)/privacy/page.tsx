import type { Metadata } from "next";
import { PrivacyClient } from "@/components/sections/legal/privacy-client";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Arkiology privacy policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
