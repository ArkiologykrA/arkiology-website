"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Users, Award } from "lucide-react";
import { SectionLabel, Card, Button } from "@/components/ui";
import { Reveal, TextReveal, StaggerContainer, StaggerItem, Parallax } from "@/components/animations";

const philosophies = [
  { title: "Infrastructure over aesthetics", desc: "A beautiful website that doesn\u2019t drive business is just expensive art. We build systems that work \u2014 and happen to look great.", featured: true },
  { title: "Results over activity", desc: "We don\u2019t measure success by hours worked or deliverables shipped. We measure it by whether your business grew." },
  { title: "Partnership over projects", desc: "We\u2019re not looking for one-off engagements. We want to build relationships with businesses we believe in, for the long term." },
  { title: "Clarity over complexity", desc: "Technology should simplify your life, not complicate it. If we can\u2019t explain it simply, we haven\u2019t understood it well enough." },
];

const values = [
  { icon: <CheckCircle className="h-7 w-7" />, title: "Honesty", desc: "We tell you what you need to hear, not what you want to hear.", featured: true },
  { icon: <Zap className="h-7 w-7" />, title: "Execution", desc: "Ideas are cheap. We ship real work that drives real results." },
  { icon: <Users className="h-7 w-7" />, title: "Partnership", desc: "Your success is our success. We\u2019re in this together." },
  { icon: <Award className="h-7 w-7" />, title: "Quality", desc: "We\u2019d rather do fewer things exceptionally than many things poorly." },
];

export function AboutClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>About Arkiology</SectionLabel>
          </Reveal>
          <TextReveal
            text="We build foundations that last."
            className="font-heading text-5xl font-bold leading-[0.95] md:text-7xl"
          />
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-2xl text-xl text-secondary leading-relaxed">
              Arkiology is a digital infrastructure agency. We help businesses build the
              systems they need to grow \u2014 websites, digital presence, automations, and
              AI-powered employees.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Etymology */}
      <section className="py-24 px-6 border-t border-border">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 items-center lg:grid-cols-2">
            <div>
              <Reveal>
                <SectionLabel>The Name</SectionLabel>
                <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
                  Why &ldquo;Arkiology&rdquo;
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 space-y-6">
                  <div className="flex gap-6">
                    <span className="text-accent font-bold text-2xl w-24 shrink-0">Ark</span>
                    <p className="text-secondary text-lg">
                      Shelter. Foundation. Preservation. The vessel that protects what matters
                      and carries it forward.
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-accent font-bold text-2xl w-24 shrink-0">-ology</span>
                    <p className="text-secondary text-lg">
                      The science of. The study of. Deep expertise in a discipline.
                    </p>
                  </div>
                  <div className="h-px bg-border" />
                  <p className="text-foreground text-xl font-medium">
                    Together: The science of building digital foundations that protect and grow
                    your business.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal direction="right" delay={0.3}>
              <div className="relative flex items-center justify-center h-80">
                <Parallax speed={-0.1}>
                  <motion.div
                    className="h-64 w-64 border-2 border-border rotate-45 absolute"
                    animate={{ rotate: [45, 90, 45] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </Parallax>
                <Parallax speed={0.1}>
                  <motion.div
                    className="h-44 w-44 border-2 border-accent/50 rotate-45 absolute"
                    animate={{ rotate: [45, 0, 45] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                </Parallax>
                <span className="text-9xl font-bold text-accent relative z-10">&#9650;</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 bg-surface">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Philosophy</SectionLabel>
            <h2 className="font-heading text-3xl font-bold md:text-4xl mb-16">What we believe.</h2>
          </Reveal>
          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {philosophies.map((p) => (
              <StaggerItem key={p.title}>
                <div
                  className={`border-l-2 pl-8 ${
                    p.featured ? "border-accent" : "border-border"
                  }`}
                >
                  <h3 className="font-heading text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-secondary">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionLabel>Our Approach</SectionLabel>
            <h2 className="font-heading text-3xl font-bold md:text-4xl mb-8">
              We&apos;re not trying to be the biggest agency.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="text-lg text-secondary space-y-6 leading-relaxed">
              <p>
                There are plenty of agencies that will take any client, deliver mediocre
                work, and move on to the next. That&apos;s not us.
              </p>
              <p>
                We work with a small number of businesses at a time. We get to know them
                deeply. We care about their success because we&apos;re invested in it \u2014 our
                reputation depends on their results.
              </p>
              <p>
                We&apos;re not for everyone. We work best with businesses that are ready to
                grow, willing to invest in their infrastructure, and value long-term
                relationships over quick wins.
              </p>
              <motion.p
                className="text-foreground font-medium text-xl mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                If that sounds like you, we should talk.
              </motion.p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 px-6 bg-surface">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 items-center lg:grid-cols-2">
            <div>
              <Reveal>
                <SectionLabel>Location</SectionLabel>
                <h2 className="font-heading text-3xl font-bold md:text-4xl">
                  Based in South Florida.<br />Working globally.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-lg text-secondary leading-relaxed">
                  Our home base is in South Florida, but our work extends far beyond.
                  We serve clients across the United States and internationally, leveraging
                  modern tools to collaborate effectively regardless of timezone.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Miami-Dade", "Broward", "Palm Beach", "USA", "LATAM"].map((loc) => (
                    <span key={loc} className="rounded-full bg-elevated px-3 py-1 text-sm text-secondary">
                      {loc}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-muted text-sm">
                  Fluent in English and Spanish. Portuguese coming soon.
                </p>
              </Reveal>
            </div>
            <Reveal direction="right" delay={0.2}>
              <Card>
                <p className="text-accent font-semibold mb-6 uppercase text-sm tracking-wider">How We Work</p>
                <ul className="space-y-4">
                  {[
                    "Video calls for face-to-face collaboration",
                    "Shared workspaces for real-time progress",
                    "Async communication that respects your time",
                    "In-person meetings when local (SoFla)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-secondary">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel className="text-center">What We Value</SectionLabel>
          </Reveal>
          <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="text-center">
                  <div
                    className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${
                      v.featured
                        ? "bg-accent/10 border border-accent/30 text-accent"
                        : "bg-elevated text-secondary"
                    }`}
                  >
                    {v.icon}
                  </div>
                  <h3 className="font-heading text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-secondary">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-surface">
        <div className="mx-auto max-w-7xl text-center">
          <TextReveal
            text="Want to work with us?"
            className="font-heading text-4xl font-bold md:text-5xl"
          />
          <Reveal delay={0.3}>
            <p className="mt-6 text-xl text-secondary max-w-xl mx-auto">
              Let&apos;s talk about your business and see if we&apos;re a good fit.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="xl">
                  Start a Conversation
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
