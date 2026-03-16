"use client";

import { Reveal } from "@/components/animations";

const INDUSTRIES = [
  "Med Spas",
  "Contractors",
  "E-Commerce",
  "Real Estate",
  "Agencies",
  "Restaurants",
  "Coaches",
  "Consultants",
  "Law Firms",
  "Dental",
  "Fitness",
  "Healthcare",
];

export function Marquee() {
  return (
    <Reveal>
      <section className="border-y border-border py-6 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...INDUSTRIES, ...INDUSTRIES].map((industry, i) => (
            <span
              key={i}
              className="mx-8 font-heading text-sm uppercase tracking-[0.3em] text-muted"
            >
              {industry}
            </span>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
