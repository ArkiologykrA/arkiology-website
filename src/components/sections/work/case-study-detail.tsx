"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionLabel, Card, Badge, Button } from "@/components/ui";
import { Reveal, TextReveal, StaggerContainer, StaggerItem } from "@/components/animations";

interface SanityCaseStudy {
  _id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  results: { metric: string; value: string }[];
  services: string[];
  challenge: string;
  solution: string;
  outcome: string;
  featured?: boolean;
}

export function CaseStudyDetail({ study, allCaseStudies }: { study: SanityCaseStudy; allCaseStudies: SanityCaseStudy[] }) {
  const currentIndex = allCaseStudies.findIndex((cs) => cs.slug === study.slug);
  const nextStudy = allCaseStudies[(currentIndex + 1) % allCaseStudies.length];

  return (
    <>
      {/* Back link */}
      <section className="pt-28 px-6">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All case studies
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="pt-8 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Badge variant="accent" className="mb-4">{study.category}</Badge>
          </Reveal>
          <TextReveal
            text={study.title}
            className="font-heading text-5xl font-bold leading-tight md:text-7xl"
          />
          <Reveal delay={0.3}>
            <p className="mt-6 text-xl text-secondary leading-relaxed max-w-3xl">
              {study.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-6 border-y border-border bg-surface">
        <div className="mx-auto max-w-5xl">
          <StaggerContainer className="grid gap-8 sm:grid-cols-3">
            {study.results.map((r) => (
              <StaggerItem key={r.metric}>
                <div className="text-center">
                  <p className="font-heading text-5xl font-bold text-accent">{r.value}</p>
                  <p className="mt-2 text-sm text-secondary">{r.metric}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Image placeholder */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="aspect-video rounded-2xl bg-elevated border border-border flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
              <span className="text-8xl font-bold text-accent/10">&#9650;</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Challenge / Solution / Outcome */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-5xl space-y-16">
          {[
            { label: "The Challenge", content: study.challenge },
            { label: "Our Solution", content: study.solution },
            { label: "The Outcome", content: study.outcome },
          ].map((section, i) => (
            <Reveal key={section.label} delay={i * 0.1}>
              <div className="grid gap-8 md:grid-cols-[200px_1fr]">
                <div>
                  <SectionLabel>{section.label}</SectionLabel>
                </div>
                <p className="text-lg text-secondary leading-relaxed">{section.content}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services used */}
      <section className="py-16 px-6 bg-surface">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionLabel>Services Deployed</SectionLabel>
            <div className="mt-6 flex flex-wrap gap-3">
              {study.services.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Next case study */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="text-sm text-muted uppercase tracking-wider mb-4">Next Case Study</p>
            <Link href={`/work/${nextStudy.slug}`}>
              <h2 className="font-heading text-4xl font-bold hover:text-accent transition-colors md:text-5xl inline-flex items-center gap-4">
                {nextStudy.title}
                <ArrowRight className="h-8 w-8" />
              </h2>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-surface">
        <div className="mx-auto max-w-7xl text-center">
          <TextReveal
            text="Want results like these?"
            className="font-heading text-4xl font-bold md:text-5xl"
          />
          <Reveal delay={0.3}>
            <p className="mt-6 text-xl text-secondary">Let&apos;s talk about your project.</p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="xl">
                  Start a Project
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
