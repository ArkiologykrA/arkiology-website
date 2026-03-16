import type { Metadata } from "next";
import { AIEmployeesClient } from "@/components/sections/ai-employees/ai-employees-client";

export const metadata: Metadata = {
  title: "24/7 AI Employees — Automated Lead Response, Booking & Customer Support",
  description:
    "AI-powered virtual employees that respond to leads, answer customer questions, and book appointments 24/7 in your brand voice. Replace generic chatbots with intelligent automation.",
  alternates: { canonical: "https://arkiology.com/ai-employees" },
};

export default function AIEmployeesPage() {
  return <AIEmployeesClient />;
}
