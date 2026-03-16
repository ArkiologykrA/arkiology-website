"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animations";
import { SectionLabel } from "@/components/ui";
import Link from "next/link";

const questions = [
  "What if your website actually generated leads while you slept?",
  "What if every missed call was answered instantly — in your brand voice?",
  "What if your follow-ups, bookings, and CRM updates happened automatically?",
  "What if you had a full digital team working 24/7 for a fraction of the cost?",
];

export function WhatIf() {
  return (
    <section className="py-24 px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>The opportunity</SectionLabel>
        </Reveal>

        <div className="mt-8 space-y-0">
          {questions.map((q, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <Link
                href="/contact"
                className="group flex items-center justify-between border-b border-border py-6 transition-colors hover:border-accent"
              >
                <p className="font-heading text-lg font-medium text-secondary transition-colors group-hover:text-foreground md:text-2xl">
                  {q}
                </p>
                <ArrowRight className="h-5 w-5 shrink-0 text-muted transition-all group-hover:text-accent group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
