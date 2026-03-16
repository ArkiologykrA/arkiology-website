"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionLabel, Card, Badge, Button } from "@/components/ui";
import { Reveal, TextReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { caseStudies } from "@/data/case-studies";

export function WorkClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Case Studies</SectionLabel>
          </Reveal>
          <TextReveal
            text="Results speak louder."
            className="font-heading text-5xl font-bold leading-[0.95] md:text-7xl"
          />
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-2xl text-xl text-secondary leading-relaxed">
              Real businesses. Real infrastructure. Real results. Here&apos;s how we
              help companies build digital foundations that drive growth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured */}
      {caseStudies.filter((cs) => cs.featured).map((cs, i) => (
        <section key={cs.slug} className={`py-24 px-6 border-t border-border ${i % 2 !== 0 ? "bg-surface" : ""}`}>
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 items-center lg:grid-cols-2">
              <Reveal direction={i % 2 === 0 ? "left" : "right"}>
                <div>
                  <Badge variant={cs.featured ? "accent" : "default"} className="mb-4">{cs.category}</Badge>
                  <h2 className="font-heading text-4xl font-bold md:text-5xl">{cs.title}</h2>
                  <p className="mt-4 text-lg text-secondary leading-relaxed">{cs.description}</p>
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {cs.results.map((r) => (
                      <div key={r.metric}>
                        <p className="font-heading text-3xl font-bold text-accent">{r.value}</p>
                        <p className="text-sm text-muted mt-1">{r.metric}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link
                      href={`/work/${cs.slug}`}
                      className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                    >
                      Read case study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
              <Reveal direction={i % 2 === 0 ? "right" : "left"} delay={0.2}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="aspect-[4/3] rounded-2xl bg-elevated border border-border flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
                    <span className="text-6xl font-bold text-accent/20 group-hover:text-accent/30 transition-colors">
                      &#9650;
                    </span>
                  </div>
                </motion.div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* All case studies grid */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>All Projects</SectionLabel>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Every project, every result.
            </h2>
          </Reveal>
          <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2">
            {caseStudies.map((cs) => (
              <StaggerItem key={cs.slug}>
                <Link href={`/work/${cs.slug}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card className="h-full group">
                      <div className="flex items-start justify-between mb-4">
                        <Badge>{cs.category}</Badge>
                        <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-accent transition-colors" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold group-hover:text-accent transition-colors">
                        {cs.title}
                      </h3>
                      <p className="mt-2 text-sm text-secondary">{cs.description}</p>
                      <div className="mt-6 pt-4 border-t border-border grid grid-cols-3 gap-4">
                        {cs.results.map((r) => (
                          <div key={r.metric}>
                            <p className="font-heading text-xl font-bold text-accent">{r.value}</p>
                            <p className="text-xs text-muted mt-0.5">{r.metric}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {cs.services.map((s) => (
                          <span key={s} className="text-xs text-muted bg-elevated rounded px-2 py-0.5">
                            {s}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-surface">
        <div className="mx-auto max-w-7xl text-center">
          <TextReveal
            text="Your project could be next."
            className="font-heading text-4xl font-bold md:text-5xl"
          />
          <Reveal delay={0.3}>
            <p className="mt-6 text-xl text-secondary max-w-lg mx-auto">
              Let&apos;s build something worth showcasing.
            </p>
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
