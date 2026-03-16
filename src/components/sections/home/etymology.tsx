"use client";

import { motion } from "framer-motion";
import { Reveal, Parallax } from "@/components/animations";
import { SectionLabel } from "@/components/ui";

export function Etymology() {
  return (
    <section className="py-24 px-6 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <Reveal>
              <SectionLabel>The name</SectionLabel>
              <h2 className="font-heading text-3xl font-bold md:text-5xl">
                Why &ldquo;Arkiology&rdquo;?
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 space-y-6">
                <div className="border-l-2 border-accent pl-6">
                  <h3 className="font-heading text-xl font-bold text-accent">
                    Ark
                  </h3>
                  <p className="mt-2 text-secondary">
                    Shelter. Foundation. Preservation. The vessel that protects
                    what matters.
                  </p>
                </div>

                <div className="border-l-2 border-border pl-6">
                  <h3 className="font-heading text-xl font-bold text-muted">
                    -ology
                  </h3>
                  <p className="mt-2 text-secondary">
                    The science of. Deep expertise in a discipline.
                  </p>
                </div>

                <div className="border-l-2 border-foreground pl-6">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    Together
                  </h3>
                  <p className="mt-2 text-secondary">
                    The science of building digital foundations that protect and
                    grow your business.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Decorative triangle */}
          <Parallax speed={0.3}>
            <div className="relative flex items-center justify-center min-h-[400px]">
              <motion.div
                className="absolute"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 30,
                  ease: "linear",
                }}
              >
                <div className="h-64 w-64 border border-border/30 rotate-45" />
              </motion.div>

              <motion.div
                className="absolute"
                animate={{ rotate: -360 }}
                transition={{
                  repeat: Infinity,
                  duration: 40,
                  ease: "linear",
                }}
              >
                <div className="h-48 w-48 border border-accent/20 rotate-12" />
              </motion.div>

              <motion.span
                className="relative text-8xl text-accent font-heading font-bold select-none md:text-9xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              >
                &#9650;
              </motion.span>
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
