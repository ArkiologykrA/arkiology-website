"use client";

import { ReactNode } from "react";
import { useSmoothScroll } from "@/hooks";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useSmoothScroll();
  return <>{children}</>;
}
