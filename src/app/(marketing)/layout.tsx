"use client";

import { Header, Footer } from "@/components/layout";
import { CursorFollower } from "@/components/ui";
import { SmoothScrollProvider } from "@/context/smooth-scroll-provider";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScrollProvider>
      <CursorFollower />
      <div className="grain" />
      <Header />
      <main>{children}</main>
      <Footer />
    </SmoothScrollProvider>
  );
}
