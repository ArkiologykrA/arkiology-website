"use client";

import { Suspense, useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Badge, Button } from "@/components/ui";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const ParticleMeshCanvas = dynamic(
  () =>
    import("@/components/three/particle-mesh").then(
      (mod) => mod.ParticleMeshCanvas
    ),
  { ssr: false }
);

const STAGGER_DELAY = 0.15;

const ROTATING_WORDS = [
  "Websites",
  "Leads",
  "Marketing",
  "SEO",
  "AI Tools",
  "Email Campaigns",
];

function RotatingWord() {
  const [index, setIndex] = useState(0);

  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, 1500);
    return () => clearInterval(id);
  }, [advance]);

  return (
    <span className="relative inline-block overflow-hidden align-bottom" style={{ minWidth: "4ch" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={ROTATING_WORDS[index]}
          className="inline-block text-accent"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {ROTATING_WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-snap="true"
    >
      {/* 3D Background */}
      <Suspense
        fallback={
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/5 to-transparent" />
        }
      >
        <ParticleMeshCanvas />
      </Suspense>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Badge variant="success" className="mb-8">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse-dot" />
            Accepting 3 new clients
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-heading text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: STAGGER_DELAY * 2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <span className="text-foreground">Stop paying for </span>
          <RotatingWord />
          <br />
          <span className="text-foreground">
            Build <span className="text-accent">infrastructure.</span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-8 max-w-2xl text-lg text-secondary md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: STAGGER_DELAY * 3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Websites, digital presence, automations, and 24/7 AI employees.
          <br className="hidden sm:block" />
          The complete digital foundation for growing businesses.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: STAGGER_DELAY * 4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Link href="/contact">
            <Button size="lg" variant="primary">
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/work">
            <Button size="lg" variant="secondary">
              See Our Work
            </Button>
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-xs uppercase tracking-[0.15em] text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: STAGGER_DELAY * 5 }}
        >
          <span>No templates</span>
          <span className="h-1 w-1 rounded-full bg-muted" />
          <span>24-hour response</span>
          <span className="h-1 w-1 rounded-full bg-muted" />
          <span>English &amp; Espa&ntilde;ol</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
