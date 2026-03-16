"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionLabel } from "@/components/ui";
import { Reveal } from "@/components/animations";
import { homeFaqs } from "@/data";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left cursor-pointer"
      >
        <span className="font-heading text-base font-medium text-foreground pr-8 md:text-lg">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-muted" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-secondary leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 md:py-32 bg-surface">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionLabel className="text-center">FAQ</SectionLabel>
          <h2 className="font-heading text-3xl font-bold md:text-5xl text-center">
            Common questions.
          </h2>
        </Reveal>

        <div className="mt-12">
          {homeFaqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
