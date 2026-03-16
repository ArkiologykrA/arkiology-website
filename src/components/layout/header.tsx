"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Magnetic } from "@/components/animations";
import { Button } from "@/components/ui";

const NAV_LINKS = [
  { label: "SERVICES", href: "/services" },
  { label: "AI EMPLOYEES", href: "/ai-employees" },
  { label: "WORK", href: "/work" },
  { label: "BLOG", href: "/blog" },
  { label: "ABOUT", href: "/about" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav aria-label="Main navigation" className="flex items-center justify-between px-6 py-4 bg-background/90 backdrop-blur-md border-b border-border">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-xl font-bold tracking-tight text-foreground"
        >
          ARK<span className="text-accent">&#9650;</span>OLOGY
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <li key={link.href}>
                <Magnetic strength={0.2}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`font-heading text-[11px] tracking-[3px] transition-colors hover:text-foreground ${isActive ? "text-foreground" : "text-secondary"}`}
                  >
                    {link.label}
                  </Link>
                </Magnetic>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden sm:block">
            <Button size="sm" variant="primary">
              Start a Project
            </Button>
          </Link>

          {/* Mobile menu toggle */}
          <Magnetic strength={0.2}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="font-heading text-[11px] tracking-[4px] text-secondary transition-colors hover:text-foreground lg:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? "CLOSE" : "MENU"}
            </button>
          </Magnetic>
        </div>
      </nav>

      {/* Fullscreen overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background"
            initial={{ clipPath: "circle(0% at calc(100% - 3rem) 2rem)" }}
            animate={{
              clipPath: "circle(150% at calc(100% - 3rem) 2rem)",
            }}
            exit={{ clipPath: "circle(0% at calc(100% - 3rem) 2rem)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Close button */}
            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-border text-secondary hover:text-foreground hover:border-foreground transition-colors"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </motion.button>

            <div className="flex flex-col items-center gap-3">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 + i * 0.08,
                    duration: 0.6,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block font-heading text-[clamp(36px,8vw,80px)] font-bold tracking-[-0.03em] text-foreground transition-opacity hover:opacity-50"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-8"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button size="lg" variant="accent">
                    Start a Project
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                className="mt-12 flex items-center gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <a
                  href="mailto:contact@arkiology.com"
                  className="font-body text-xs tracking-[2px] text-muted transition-colors hover:text-foreground"
                >
                  contact@arkiology.com
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
