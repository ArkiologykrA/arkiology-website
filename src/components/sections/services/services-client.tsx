"use client";

import Link from "next/link";
import { Globe, Search, Zap, Bot, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionLabel, Card, Badge, Button } from "@/components/ui";
import { Reveal, TextReveal, StaggerContainer, StaggerItem } from "@/components/animations";

const services = [
  {
    id: "websites",
    number: "01",
    title: "Websites",
    icon: <Globe className="h-8 w-8" />,
    description:
      "From scratch or complete revamps. Fast, beautiful, built to convert. Not template trash — custom designed and developed for your business.",
    benefits: [
      "Custom design tailored to your brand",
      "Mobile-first, fast-loading architecture",
      "SEO-ready from day one",
      "Conversion-focused user experience",
    ],
    included: [
      "Custom website design",
      "Responsive development",
      "CMS integration (if needed)",
      "Contact forms & lead capture",
      "Analytics setup",
      "SSL & security",
      "Training & documentation",
    ],
    timeline: "4-8 weeks",
    bg: "",
  },
  {
    id: "presence",
    number: "02",
    title: "Digital Presence",
    icon: <Search className="h-8 w-8" />,
    description:
      "Marketing that actually reaches your customers. SEO, social, paid ads — strategy that drives real results, not vanity metrics.",
    benefits: [
      "Get found when people search for your services",
      "Build awareness with targeted advertising",
      "Track ROI on every marketing dollar",
    ],
    included: [
      "SEO strategy & implementation",
      "Google Business Profile setup",
      "Social media strategy",
      "Paid advertising (Google, Meta)",
      "Content strategy",
      "Monthly reporting",
      "Ongoing optimization",
    ],
    timeline: "3-month minimum recommended",
    bg: "bg-surface",
  },
  {
    id: "automations",
    number: "03",
    title: "Automations",
    icon: <Zap className="h-8 w-8" />,
    description:
      "Stop doing repetitive tasks. We connect your tools, automate your workflows, and give you back hours every week.",
    benefits: [
      "CRM integrations & data sync",
      "Automated email sequences",
      "Lead routing & notifications",
      "Reporting & dashboard automation",
    ],
    included: [
      "New lead → CRM → Email → Slack alert",
      "Form submit → Calendar booking",
      "Payment received → Invoice → Thank you email",
      "Inventory low → Reorder alert",
      "Review posted → Social share",
      "Weekly report generation",
    ],
    includedLabel: "Common Automations",
    timeline: "1-3 weeks",
    bg: "",
  },
  {
    id: "ai",
    number: "04",
    title: "24/7 AI Employees",
    icon: <Bot className="h-8 w-8" />,
    description:
      "AI assistants that respond to leads, answer questions, and book appointments. Around the clock. In your brand voice.",
    benefits: [
      "Never miss another lead",
      "Instant responses, any time of day",
      "Trained specifically on your business",
    ],
    included: [
      "24/7 lead response",
      "Customer Q&A handling",
      "Appointment booking",
      "Lead qualification",
      "Multi-channel (Web, WhatsApp, SMS, IG)",
      "Your brand voice",
      "Human handoff when needed",
    ],
    includedLabel: "Capabilities",
    timeline: "2-3 weeks",
    featured: true,
    bg: "bg-surface",
  },
];

export function ServicesClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>What We Build</SectionLabel>
          </Reveal>
          <TextReveal
            text="Four pillars. One foundation."
            className="font-heading text-5xl font-bold leading-[0.95] md:text-7xl"
          />
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-2xl text-xl text-secondary leading-relaxed">
              Every piece works together. Your website attracts. Your presence
              builds awareness. Your automations save time. Your AI closes the
              loop.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-4">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-4 py-2 border border-border rounded-lg text-sm text-secondary hover:border-accent hover:text-accent transition-colors"
                >
                  {s.number} {s.title}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 px-6 border-t border-border ${service.bg}`}
        >
          <div className="mx-auto max-w-7xl">
            <div
              className={`grid gap-16 items-start lg:grid-cols-2 ${
                idx % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Content */}
              <div>
                <Reveal>
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-2xl mb-8 ${
                      service.featured
                        ? "bg-accent"
                        : "bg-elevated"
                    }`}
                  >
                    <span
                      className={`text-3xl font-bold ${
                        service.featured ? "text-white" : "text-accent"
                      }`}
                    >
                      {service.number}
                    </span>
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="font-heading text-4xl font-bold md:text-5xl">
                    {service.title}
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="mt-6 text-xl text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <ul className="mt-8 space-y-4">
                    {service.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-secondary"
                      >
                        <Check className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.4}>
                  <p className="mt-6 text-sm text-muted">
                    Typical timeline: {service.timeline}
                  </p>
                </Reveal>
              </div>

              {/* Included card */}
              <Reveal direction={idx % 2 !== 0 ? "left" : "right"} delay={0.2}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card
                    className={
                      service.featured
                        ? "bg-gradient-to-br from-accent/10 to-transparent border border-accent/30"
                        : ""
                    }
                  >
                    {service.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge variant="accent">Featured</Badge>
                      </div>
                    )}
                    <p className="text-muted uppercase text-sm tracking-wider mb-6 font-semibold">
                      {service.includedLabel || "What's Included"}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.included.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-secondary text-sm"
                        >
                          {service.id === "automations" ? (
                            <span className="text-accent font-mono text-sm">
                              →
                            </span>
                          ) : (
                            <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                          )}
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                    >
                      {service.id === "ai" ? "Learn more" : "Get a quote"}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Card>
                </motion.div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* Process */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center mb-16">
              <SectionLabel className="text-center">Our Process</SectionLabel>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Simple process. Clear expectations.
              </h2>
            </div>
          </Reveal>
          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Discovery",
                desc: "We learn your business. Goals, customers, what\u2019s working, what isn\u2019t. No assumptions\u2014just understanding.",
                time: "Week 1-2",
              },
              {
                n: "02",
                title: "Build",
                desc: "We design, develop, and implement. Weekly updates, transparent progress, no surprises.",
                time: "Week 3-8",
              },
              {
                n: "03",
                title: "Launch + Grow",
                desc: "We don\u2019t disappear after launch. Ongoing support, optimization, and growth. True partnership.",
                time: "Ongoing",
                featured: true,
              },
            ].map((step) => (
              <StaggerItem key={step.n}>
                <div className="text-center">
                  <div
                    className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${
                      step.featured ? "bg-accent" : "bg-elevated"
                    }`}
                  >
                    <span
                      className={`text-2xl font-bold ${
                        step.featured ? "text-white" : "text-accent"
                      }`}
                    >
                      {step.n}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-secondary">{step.desc}</p>
                  <p className="mt-4 text-xs text-muted">{step.time}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-accent">
        <div className="mx-auto max-w-7xl text-center">
          <Reveal>
            <h2 className="font-heading text-4xl font-bold text-background md:text-5xl">
              Ready to build your foundation?
            </h2>
            <p className="mt-6 text-xl text-background/70 max-w-xl mx-auto">
              Tell us about your business. We&apos;ll tell you how we can help.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button
                  size="xl"
                  variant="primary"
                  className="bg-background text-foreground hover:bg-elevated"
                >
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
