"use client";

import { SectionLabel } from "@/components/ui";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations";

const reasons = [
  {
    number: "01",
    title: "Systems, not projects",
    description:
      "Everything we build is part of a connected system. Your website talks to your CRM, your CRM triggers automations, and your AI handles the rest.",
  },
  {
    number: "02",
    title: "Results, not deliverables",
    description:
      "We don't measure success by pages delivered. We measure it by leads generated, time saved, and revenue grown.",
  },
  {
    number: "03",
    title: "Partnership, not vendor",
    description:
      "We don't disappear after launch. We stay, optimize, and grow with you. Your success is our reputation.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>Why Arkiology</SectionLabel>
          <h2 className="font-heading text-3xl font-bold md:text-5xl">
            A different kind of agency.
          </h2>
        </Reveal>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3">
          {reasons.map((reason) => (
            <StaggerItem key={reason.number}>
              <div className="group border-l-2 border-border pl-8 transition-colors hover:border-accent">
                <span className="font-heading text-5xl font-bold text-ghost transition-colors group-hover:text-accent">
                  {reason.number}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm text-secondary leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
