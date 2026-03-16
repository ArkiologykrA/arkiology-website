"use client";

import { motion } from "framer-motion";
import { useIntersection } from "@/hooks";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export function TextReveal({
  text,
  className,
  delay = 0,
  staggerDelay = 0.03,
}: TextRevealProps) {
  const { ref, isInView } = useIntersection({ threshold: 0.3 });
  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 0.6,
              ease: [0.76, 0, 0.24, 1],
              delay: delay + i * staggerDelay,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
