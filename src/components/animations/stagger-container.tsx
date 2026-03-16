"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useIntersection } from "@/hooks";
import { staggerContainer, staggerItem } from "@/lib/animations/variants";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function StaggerContainer({
  children,
  className,
  delay = 0,
}: StaggerContainerProps) {
  const { ref, isInView } = useIntersection({ threshold: 0.1 });

  return (
    <div ref={ref}>
      <motion.div
        variants={staggerContainer}
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

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}
