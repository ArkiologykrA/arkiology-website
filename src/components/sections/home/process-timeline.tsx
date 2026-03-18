"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/animations";

interface SanityProcessStep {
  _id: string;
  week: string;
  title: string;
  description: string;
  deliverables: string[];
}

export function ProcessTimeline({ processSteps }: { processSteps: SanityProcessStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const progressWidth = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section className="py-24 px-6 md:py-32 bg-surface" ref={containerRef}>
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>Our process</SectionLabel>
          <h2 className="font-heading text-3xl font-bold md:text-5xl">
            From discovery to launch.
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-2xl">
            A proven 8-week process refined over dozens of projects. Every step
            designed to minimize risk and maximize results.
          </p>
        </Reveal>

        {/* Progress bar */}
        <div className="mt-12 h-px bg-border relative overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-y-0 left-0 bg-accent rounded-full h-[2px]"
            style={{ width: progressWidth }}
          />
        </div>

        {/* Timeline grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.week} delay={i * 0.15}>
              <div className="group">
                <span className="text-xs uppercase tracking-[0.2em] text-accent">
                  {step.week}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-secondary leading-relaxed">
                  {step.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {step.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-muted">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
