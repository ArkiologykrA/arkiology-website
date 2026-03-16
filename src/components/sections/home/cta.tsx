"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { Reveal, TextReveal } from "@/components/animations";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-24 px-6 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full border border-border/20"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full border border-accent/10"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[200px] w-[200px] rounded-full border border-accent/5"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-4xl text-center relative z-10">
        <TextReveal
          text="Let's build your foundation."
          className="font-heading text-4xl font-bold md:text-6xl lg:text-7xl"
        />

        <Reveal delay={0.3}>
          <p className="mt-6 text-lg text-secondary max-w-xl mx-auto">
            Tell us about your business. We&apos;ll tell you exactly how we can
            help — no pitch decks, no pressure.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button size="xl" variant="primary">
                Start a Project
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.6}>
          <p className="mt-8 text-xs text-muted">
            Free consultation &middot; No commitment &middot; Response within 24
            hours
          </p>
        </Reveal>
      </div>
    </section>
  );
}
