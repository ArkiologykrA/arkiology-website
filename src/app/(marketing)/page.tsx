import type { Metadata } from "next";
import ClientHome from "../client-home";

export const metadata: Metadata = {
  title: "Arkiology — Digital Infrastructure Agency | South Florida",
  description:
    "Stop paying for websites, agencies, and marketing. Build digital infrastructure that grows your business — websites, automations, AI employees, and digital presence. South Florida.",
  alternates: {
    canonical: "https://arkiology.com",
  },
};

export default function HomePage() {
  return <ClientHome />;
}
