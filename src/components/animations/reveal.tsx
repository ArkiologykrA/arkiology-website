"use client";

import { type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { useIntersection } from "@/hooks";

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

function getDefaultVariants(
  direction: RevealProps["direction"],
  distance: number
): Variants {
  const isHorizontal = direction === "left" || direction === "right";
  const value =
    direction === "down" || direction === "right" ? -distance : distance;

  if (isHorizontal) {
    return {
      hidden: { opacity: 0, x: value },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
      },
    };
  }

  return {
    hidden: { opacity: 0, y: value },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };
}

export function Reveal({
  children,
  variants,
  className,
  delay = 0,
  direction = "up",
  distance = 60,
}: RevealProps) {
  const { ref, isInView } = useIntersection({ threshold: 0.1 });

  return (
    <div ref={ref}>
      <motion.div
        variants={variants ?? getDefaultVariants(direction, distance)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
