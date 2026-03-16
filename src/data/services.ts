import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "websites",
    title: "Websites",
    description:
      "Custom-built, high-performance websites designed to convert visitors into customers. No templates. No page builders. Pure craftsmanship.",
    icon: "Globe",
    features: [
      "Custom design & development",
      "Mobile-first responsive",
      "SEO-optimized architecture",
      "Performance-tuned (<2.5s LCP)",
      "CMS integration",
      "Analytics & tracking",
    ],
  },
  {
    id: "presence",
    title: "Digital Presence",
    description:
      "Your brand across every touchpoint — search, social, and paid channels. Unified strategy that compounds over time.",
    icon: "Search",
    features: [
      "SEO strategy & execution",
      "Google Business optimization",
      "Social media management",
      "Paid advertising (Google/Meta)",
      "Content calendar",
      "Monthly reporting",
    ],
  },
  {
    id: "automations",
    title: "Automations",
    description:
      "Eliminate repetitive tasks. Route leads, send follow-ups, update your CRM, and trigger workflows — automatically.",
    icon: "Zap",
    features: [
      "Lead routing & notifications",
      "Email sequences",
      "CRM automation",
      "Appointment scheduling",
      "Invoice generation",
      "Custom workflows",
    ],
  },
  {
    id: "ai",
    title: "24/7 AI Employees",
    description:
      "AI that answers calls, books appointments, responds to leads, and handles customer inquiries — in your brand voice, around the clock.",
    icon: "Bot",
    features: [
      "Voice & chat AI",
      "Appointment booking",
      "Lead qualification",
      "CRM updates",
      "Multi-language support",
      "Human handoff when needed",
    ],
    featured: true,
  },
];
