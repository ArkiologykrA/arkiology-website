"use client";

import { useState, useEffect, useRef } from "react";

const MILESTONES = [25, 50, 75, 90, 100];

export function useScrollDepth() {
  const [maxDepth, setMaxDepth] = useState(0);
  const reached = useRef(new Set<number>());

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const pct = Math.min(Math.round((scrollTop / docHeight) * 100), 100);
      setMaxDepth((prev) => Math.max(prev, pct));

      for (const ms of MILESTONES) {
        if (pct >= ms && !reached.current.has(ms)) {
          reached.current.add(ms);
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { maxDepth, milestonesReached: Array.from(reached.current) };
}
