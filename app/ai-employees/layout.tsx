import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Employees — 24/7 Automation That Works While You Sleep",
  description: "Not chatbots. Real AI employees that answer calls, send emails, book appointments, and update your CRM. 24/7 customer response in your brand voice. Never miss another lead.",
  openGraph: {
    title: "AI Employees — 24/7 Business Automation | Arkiology",
    description: "AI employees that answer calls, book appointments, and close leads while you sleep. Never miss another customer inquiry.",
  },
};

export default function AIEmployeesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
