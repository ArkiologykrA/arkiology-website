"use client";

import { useState, useEffect, useCallback } from "react";

export function useExitIntent(threshold = 10) {
  const [triggered, setTriggered] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY <= threshold && !triggered) {
        setTriggered(true);
      }
    },
    [threshold, triggered],
  );

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  const reset = useCallback(() => setTriggered(false), []);

  return { triggered, reset };
}
