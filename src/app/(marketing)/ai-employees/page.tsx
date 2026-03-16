import type { Metadata } from "next";
import { AIEmployeesClient } from "@/components/sections/ai-employees/ai-employees-client";

export const metadata: Metadata = {
  title: "24/7 AI Employees",
  description:
    "AI employees that respond to leads, answer questions, and book appointments. 24/7. In your brand voice.",
};

export default function AIEmployeesPage() {
  return <AIEmployeesClient />;
}
