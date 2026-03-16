"use client";

import { Header, Footer } from "@/components/layout";
import { CursorFollower, StickyMobileCTA } from "@/components/ui";
import { SmoothScrollProvider } from "@/context/smooth-scroll-provider";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScrollProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to main content
      </a>
      <CursorFollower />
      <div className="grain" />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <StickyMobileCTA />
    </SmoothScrollProvider>
  );
}
