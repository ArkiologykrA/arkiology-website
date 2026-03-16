import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    week: "Week 1–2",
    title: "Discovery & Strategy",
    description:
      "We learn your business inside out. Goals, audience, competitors, pain points. Then we map the strategy.",
    deliverables: [
      "Business audit",
      "Competitor analysis",
      "Site architecture",
      "Content strategy",
      "Technical spec",
    ],
  },
  {
    week: "Week 3–4",
    title: "Design & Prototyping",
    description:
      "We design every page, every interaction, every state. You see it before we build it.",
    deliverables: [
      "Wireframes",
      "High-fidelity mockups",
      "Animation prototypes",
      "Mobile designs",
      "Client review & approval",
    ],
  },
  {
    week: "Week 5–6",
    title: "Build & Integrate",
    description:
      "Custom development. Every line of code purpose-built. Integrations wired. Automations configured.",
    deliverables: [
      "Custom development",
      "CMS setup",
      "API integrations",
      "Automation workflows",
      "AI employee training",
    ],
  },
  {
    week: "Week 7–8",
    title: "Launch & Grow",
    description:
      "QA, performance audit, accessibility check, SEO setup. Then we launch and start measuring.",
    deliverables: [
      "QA & testing",
      "Performance optimization",
      "SEO configuration",
      "Analytics setup",
      "Launch & monitoring",
    ],
  },
];
