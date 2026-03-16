"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  X,
  Check,
  Globe,
  PhoneOff,
  ClipboardList,
  DollarSign,
  Megaphone,
  Search,
} from "lucide-react";
import { Reveal } from "@/components/animations";
import { SectionLabel, Button } from "@/components/ui";
import Link from "next/link";

const painVsSolution = [
  {
    painIcon: Globe,
    pain: "Your website looks nice but generates zero leads",
    solution: "A conversion-optimized site that captures leads while you sleep",
    stat: "3x more leads",
  },
  {
    painIcon: PhoneOff,
    pain: "Missed calls and slow replies are costing you clients",
    solution: "AI employees that answer instantly, 24/7, in your brand voice",
    stat: "< 30s response",
  },
  {
    painIcon: ClipboardList,
    pain: "Follow-ups, bookings, and CRM updates eat your entire day",
    solution: "Automated workflows that handle it all without you lifting a finger",
    stat: "15+ hrs saved/wk",
  },
  {
    painIcon: Megaphone,
    pain: "You're paying agencies monthly with nothing to show for it",
    solution: "Infrastructure you own — assets that compound, not rent you pay",
    stat: "You own it all",
  },
  {
    painIcon: Search,
    pain: "Competitors outrank you and steal the traffic you deserve",
    solution: "SEO and content systems that build authority on autopilot",
    stat: "Page 1 rankings",
  },
  {
    painIcon: DollarSign,
    pain: "Hiring a full team would cost $15k+/month in payroll",
    solution: "A complete digital team — design, dev, AI, marketing — at a fraction",
    stat: "90% cost savings",
  },
];

export function WhatIf() {
  return (
    <section className="py-24 px-6 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>The problem &amp; the solution</SectionLabel>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Sound familiar?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-secondary">
            Every growing business hits the same walls. Here&apos;s how we
            tear them down.
          </p>
        </Reveal>

        <div className="mt-16 space-y-4">
          {painVsSolution.map((item, i) => {
            const PainIcon = item.painIcon;
            return (
              <Reveal key={i} delay={i * 0.08}>
                <div className="group relative rounded-2xl border border-border bg-card/50 p-6 transition-all duration-500 hover:border-accent/40 hover:bg-card md:p-8">
                  <div className="grid gap-6 md:grid-cols-[1fr,auto,1fr] md:items-center md:gap-8">
                    {/* Pain */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400 transition-colors group-hover:bg-red-500/15">
                        <PainIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="mb-1 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-red-400">
                          <X className="h-3 w-3" />
                          The problem
                        </div>
                        <p className="text-sm leading-relaxed text-secondary md:text-base">
                          {item.pain}
                        </p>
                      </div>
                    </div>

                    {/* Divider / Arrow */}
                    <div className="hidden h-px w-16 bg-gradient-to-r from-red-500/30 via-border to-accent/30 md:block" />
                    <div className="ml-14 h-px bg-gradient-to-r from-red-500/20 via-border to-accent/20 md:hidden" />

                    {/* Solution */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="mb-1 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-accent">
                          <ArrowRight className="h-3 w-3" />
                          What we build
                        </div>
                        <p className="text-sm leading-relaxed text-foreground md:text-base">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Stat pill */}
                  <motion.div
                    className="absolute right-6 top-6 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  >
                    {item.stat}
                  </motion.div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Fix this for my business
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
