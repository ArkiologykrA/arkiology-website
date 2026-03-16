"use client";

import { Building2, ShoppingBag, TrendingUp } from "lucide-react";
import { Card, SectionLabel } from "@/components/ui";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations";

const segments = [
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Service Businesses",
    description:
      "Med spas, dental offices, contractors, consultants. If you rely on appointments and referrals, we'll automate your growth.",
    examples: ["Med Spas", "Contractors", "Law Firms", "Dental", "Coaches"],
  },
  {
    icon: <ShoppingBag className="h-6 w-6" />,
    title: "E-Commerce & Retail",
    description:
      "Online stores and DTC brands. We build fast storefronts, automate fulfillment flows, and deploy AI customer support.",
    examples: ["Shopify Stores", "DTC Brands", "Wholesale", "Marketplaces"],
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Growing Companies",
    description:
      "Startups and scale-ups that need real digital infrastructure, not band-aid solutions. We build systems that scale with you.",
    examples: ["Startups", "Agencies", "SaaS", "Professional Services"],
  },
];

export function WhoWeServe() {
  return (
    <section className="py-24 px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>Who we serve</SectionLabel>
          <h2 className="font-heading text-3xl font-bold md:text-5xl">
            Built for businesses that grow.
          </h2>
        </Reveal>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3">
          {segments.map((segment) => (
            <StaggerItem key={segment.title}>
              <Card className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-elevated text-accent mb-6">
                  {segment.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {segment.title}
                </h3>
                <p className="mt-3 text-sm text-secondary leading-relaxed">
                  {segment.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {segment.examples.map((ex) => (
                    <span
                      key={ex}
                      className="rounded-full bg-elevated px-3 py-1 text-xs text-muted"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
