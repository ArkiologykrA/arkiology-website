"use client";

import {
  Hero,
  Marquee,
  WhatIf,
  Problem,
  ServicesGrid,
  WhyUs,
  LiveDemo,
  Etymology,
  WhoWeServe,
  ProcessTimeline,
  Results,
  StatsBar,
  FAQ,
  Testimonials,
  Promise,
  CTA,
} from "@/components/sections/home";

interface ClientHomeProps {
  services: never[];
  testimonials: never[];
  faqs: never[];
  processSteps: never[];
}

export default function ClientHome({ services, testimonials, faqs, processSteps }: ClientHomeProps) {
  return (
    <>
      <Hero />
      <Marquee />
      <WhatIf />
      <Problem />
      <ServicesGrid services={services} />
      <WhyUs />
      <LiveDemo />
      <Etymology />
      <WhoWeServe />
      <ProcessTimeline processSteps={processSteps} />
      <Results />
      <StatsBar />
      <FAQ faqs={faqs} />
      <Testimonials testimonials={testimonials} />
      <Promise />
      <CTA />
    </>
  );
}
