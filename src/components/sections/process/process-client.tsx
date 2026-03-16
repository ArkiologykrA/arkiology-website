"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight, MessageSquare, Lightbulb, Palette, Code2,
  TestTube, Rocket, TrendingUp, Headphones,
} from "lucide-react";
import { SectionLabel, Card, Button } from "@/components/ui";
import { Reveal, TextReveal, StaggerContainer, StaggerItem } from "@/components/animations";

const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    duration: "Day 1",
    icon: <MessageSquare className="h-6 w-6" />,
    description:
      "We learn your business. Goals, customers, what\u2019s working, what isn\u2019t. No assumptions \u2014 just understanding.",
    deliverables: ["Business analysis document", "Goals & KPI framework", "Project scope definition"],
  },
  {
    number: "02",
    title: "Strategy & Planning",
    duration: "Week 1",
    icon: <Lightbulb className="h-6 w-6" />,
    description:
      "We map out the complete digital infrastructure plan. Architecture, design direction, technology decisions, timeline, and milestones.",
    deliverables: ["Technical architecture plan", "Information architecture", "Content strategy outline"],
  },
  {
    number: "03",
    title: "Design",
    duration: "Week 2-3",
    icon: <Palette className="h-6 w-6" />,
    description:
      "Custom design tailored to your brand. Mobile-first wireframes, high-fidelity mockups, and interactive prototypes for your review.",
    deliverables: ["Wireframes & user flows", "High-fidelity mockups", "Interactive prototype"],
  },
  {
    number: "04",
    title: "Development",
    duration: "Week 3-6",
    icon: <Code2 className="h-6 w-6" />,
    description:
      "We build. Clean code, modern stack, blazing-fast performance. Weekly demos so you see progress in real time.",
    deliverables: ["Frontend development", "Backend integration", "CMS setup & configuration"],
  },
  {
    number: "05",
    title: "Testing & QA",
    duration: "Week 6-7",
    icon: <TestTube className="h-6 w-6" />,
    description:
      "Rigorous testing across devices, browsers, and screen sizes. Performance optimization, accessibility audit, and SEO verification.",
    deliverables: ["Cross-browser testing", "Performance optimization", "Accessibility audit"],
  },
  {
    number: "06",
    title: "Launch",
    duration: "Week 7-8",
    icon: <Rocket className="h-6 w-6" />,
    description:
      "Go live. DNS, SSL, analytics, tracking \u2014 everything configured and verified. Training session so you\u2019re confident managing your new infrastructure.",
    deliverables: ["Production deployment", "Analytics & tracking setup", "Team training session"],
  },
  {
    number: "07",
    title: "Optimization",
    duration: "Month 2-3",
    icon: <TrendingUp className="h-6 w-6" />,
    description:
      "We monitor performance, analyze user behavior, and continuously optimize. A/B testing, conversion improvements, and speed tuning.",
    deliverables: ["Monthly performance reports", "A/B test results", "Conversion optimization"],
  },
  {
    number: "08",
    title: "Ongoing Support",
    duration: "Ongoing",
    icon: <Headphones className="h-6 w-6" />,
    description:
      "We don\u2019t disappear after launch. Priority support, updates, feature additions, and strategic guidance. True partnership.",
    deliverables: ["Priority support access", "Feature updates", "Strategic growth consulting"],
    featured: true,
  },
];

function TimelineStep({
  step,
  index,
}: {
  step: (typeof processSteps)[number];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <Reveal delay={0.1 * index} direction={isEven ? "left" : "right"}>
      <div className={`relative grid items-center gap-8 md:grid-cols-[1fr_auto_1fr] ${
        !isEven ? "md:[&>*:first-child]:order-3 md:[&>*:last-child]:order-1" : ""
      }`}>
        {/* Content */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Card className={step.featured ? "border-accent/40 bg-accent/5" : ""}>
            <div className="flex items-center gap-4 mb-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                step.featured ? "bg-accent text-white" : "bg-accent/10 text-accent"
              }`}>
                {step.icon}
              </div>
              <div>
                <span className="text-xs text-accent font-medium">{step.duration}</span>
                <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
              </div>
            </div>
            <p className="text-secondary text-sm leading-relaxed">{step.description}</p>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted uppercase tracking-wider mb-2">Deliverables</p>
              <ul className="space-y-1">
                {step.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm text-secondary">
                    <span className="h-1 w-1 rounded-full bg-accent shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* Center dot */}
        <div className="hidden md:flex flex-col items-center">
          <div className={`flex h-14 w-14 items-center justify-center rounded-full border-2 ${
            step.featured ? "border-accent bg-accent text-white" : "border-border bg-background text-accent"
          }`}>
            <span className="text-sm font-bold">{step.number}</span>
          </div>
        </div>

        {/* Spacer for alternating layout */}
        <div className="hidden md:block" />
      </div>
    </Reveal>
  );
}

function ScrollProgress() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="absolute inset-y-0 left-1/2 -translate-x-1/2 hidden md:block">
      <div className="h-full w-px bg-border" />
      <motion.div
        className="absolute top-0 left-0 w-px bg-accent origin-top"
        style={{ scaleY, height: "100%" }}
      />
    </div>
  );
}

export function ProcessClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Our Process</SectionLabel>
          </Reveal>
          <TextReveal
            text="From discovery to growth."
            className="font-heading text-5xl font-bold leading-[0.95] md:text-7xl"
          />
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-2xl text-xl text-secondary leading-relaxed">
              Building digital infrastructure is a journey, not a sprint. Here&apos;s how we take
              you from initial conversation to sustainable growth \u2014 with transparency at
              every step.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Quick overview */}
      <section className="py-16 px-6 border-t border-border">
        <div className="mx-auto max-w-5xl">
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Week 1-2", value: "Discover" },
              { label: "Week 3-6", value: "Build" },
              { label: "Week 7-8", value: "Launch" },
              { label: "Ongoing", value: "Grow" },
            ].map((item) => (
              <StaggerItem key={item.value}>
                <Card className="text-center py-6">
                  <p className="text-xs text-accent font-medium">{item.label}</p>
                  <p className="mt-1 font-heading text-xl font-bold">{item.value}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl relative">
          <ScrollProgress />
          <div className="space-y-12">
            {processSteps.map((step, i) => (
              <TimelineStep key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="py-24 px-6 bg-surface">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>What Makes Us Different</SectionLabel>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              No surprises. No disappearing acts.
            </h2>
          </Reveal>
          <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { title: "Weekly Updates", desc: "You\u2019ll never wonder where things stand. Weekly video calls and shared dashboards keep you in the loop." },
              { title: "Transparent Pricing", desc: "Fixed project pricing \u2014 no hourly billing surprises. You know exactly what you\u2019re paying before we start." },
              { title: "Post-Launch Care", desc: "We don\u2019t hand off and run. Ongoing support, optimization, and growth strategy are built into the relationship." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card className="h-full">
                  <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm text-secondary">{item.desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <TextReveal
            text="Ready to start the journey?"
            className="font-heading text-4xl font-bold md:text-5xl"
          />
          <Reveal delay={0.3}>
            <p className="mt-6 text-xl text-secondary max-w-lg mx-auto">
              The first step is a conversation. Let&apos;s talk about your business.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="xl">
                  Book a Discovery Call
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
