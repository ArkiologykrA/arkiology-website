"use client";

import { Reveal, TextReveal } from "@/components/animations";

export function Problem() {
  return (
    <section className="py-24 px-6 md:py-32 bg-surface">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <TextReveal
              text="Everyone has a website. Almost no one has infrastructure."
              className="font-heading text-3xl font-bold leading-tight md:text-5xl"
            />
          </div>

          <Reveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg text-secondary leading-relaxed">
                Most agencies sell you a website and disappear. You&apos;re left
                with a pretty page that doesn&apos;t rank, doesn&apos;t convert,
                and doesn&apos;t connect to anything.
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                We build the machine behind your business — the website, the
                automations, the AI, the integrations — all working together as
                one system. That&apos;s not a project. That&apos;s
                infrastructure.
              </p>
              <div className="flex items-center gap-3 pt-4">
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs uppercase tracking-[0.2em] text-accent">
                  Systems &gt; Projects
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
