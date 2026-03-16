"use client";

import { Clock, Shield, Target } from "lucide-react";
import { Card, SectionLabel } from "@/components/ui";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations";

const promises = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: "24-Hour Response",
    description:
      "Every message, every question, answered within 24 hours. Usually much faster.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "You Own Everything",
    description:
      "Your code, your domain, your data. No vendor lock-in. If you leave, everything goes with you.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Results-Focused",
    description:
      "We don't measure success by deliverables. We measure it by the impact on your business.",
  },
];

export function Promise() {
  return (
    <section className="py-24 px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>Our promise</SectionLabel>
          <h2 className="font-heading text-3xl font-bold md:text-5xl">
            We don&apos;t disappear after launch.
          </h2>
        </Reveal>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3">
          {promises.map((promise) => (
            <StaggerItem key={promise.title}>
              <Card className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-elevated text-accent mb-6">
                  {promise.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {promise.title}
                </h3>
                <p className="mt-3 text-sm text-secondary leading-relaxed">
                  {promise.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
