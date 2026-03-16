"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const footerLinks = {
  services: [
    { label: "Websites", href: "/services#websites" },
    { label: "Digital Presence", href: "/services#presence" },
    { label: "Automations", href: "/services#automations" },
    { label: "AI Employees", href: "/ai-employees" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { label: "X", href: "https://twitter.com/arkiology", ariaLabel: "Follow Arkiology on X (Twitter)" },
  { label: "LI", href: "https://linkedin.com/company/arkiology", ariaLabel: "Follow Arkiology on LinkedIn" },
  { label: "IG", href: "https://instagram.com/arkiology", ariaLabel: "Follow Arkiology on Instagram" },
];

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <footer ref={ref} className="border-t border-border bg-background">
      <motion.div
        className="mx-auto max-w-7xl px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-heading text-2xl font-bold text-foreground"
            >
              ARK<span className="text-accent">&#9650;</span>OLOGY
            </Link>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
              The science of building digital foundations that protect and grow
              your business.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-secondary mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-secondary mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Social */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-secondary mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <span className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Arkiology. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="text-xs text-muted tracking-[1px] transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
