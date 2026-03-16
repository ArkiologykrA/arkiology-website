import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const EASE = {
  smooth: "power2.inOut",
  bounce: "back.out(1.7)",
  elastic: "elastic.out(1, 0.3)",
  snap: "power4.out",
  gentle: "power1.inOut",
  dramatic: "expo.out",
} as const;

export const DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 1,
  dramatic: 1.5,
  cinematic: 2.5,
} as const;

export const STAGGER = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
  dramatic: 0.25,
} as const;

export { gsap, ScrollTrigger };
