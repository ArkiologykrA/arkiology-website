"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { useIntersection } from "@/hooks";

const stats = [
  { value: 3, suffix: "x", label: "More leads generated" },
  { value: 40, suffix: "%", label: "Time saved on operations" },
  { value: 5, prefix: "<", suffix: "s", label: "AI response time" },
];

function AnimatedCounter({
  target,
  prefix,
  suffix,
  inView,
}: {
  target: number;
  prefix?: string;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const animated = useRef(false);

  useEffect(() => {
    if (!inView || animated.current) return;
    animated.current = true;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="font-heading text-5xl font-bold text-foreground md:text-6xl">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const beforeAfter = [
  {
    before: "Missed calls after hours",
    after: "Every inquiry captured 24/7",
  },
  {
    before: "Manual follow-ups forgotten",
    after: "Automated sequences triggered instantly",
  },
  {
    before: "Generic chatbot that frustrates",
    after: "AI employee that books and converts",
  },
];

export function Results() {
  const { ref, isInView } = useIntersection({ threshold: 0.3 });

  return (
    <section className="py-24 px-6 md:py-32">
      <div className="mx-auto max-w-7xl" ref={ref}>
        <Reveal>
          <SectionLabel>Results</SectionLabel>
          <h2 className="font-heading text-3xl font-bold md:text-5xl">
            Numbers that matter.
          </h2>
        </Reveal>

        {/* Stat counters */}
        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center">
                <AnimatedCounter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  inView={isInView}
                />
                <p className="mt-2 text-sm text-secondary">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Before / After */}
        <div className="mt-20 grid gap-4 md:grid-cols-3">
          {beforeAfter.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="rounded-2xl border border-border overflow-hidden">
                <div className="bg-surface p-4 border-b border-border">
                  <span className="text-xs uppercase tracking-[0.15em] text-muted">
                    Before
                  </span>
                  <p className="mt-1 text-sm text-secondary line-through decoration-muted">
                    {item.before}
                  </p>
                </div>
                <motion.div
                  className="bg-accent/5 p-4"
                  whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                >
                  <span className="text-xs uppercase tracking-[0.15em] text-accent">
                    After
                  </span>
                  <p className="mt-1 text-sm text-foreground font-medium">
                    {item.after}
                  </p>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
