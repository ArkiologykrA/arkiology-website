"use client";

import { Globe, Search, Zap, Bot } from "lucide-react";
import { motion } from "framer-motion";
import { SectionLabel, Card, Badge } from "@/components/ui";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { services } from "@/data";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-6 w-6" />,
  Search: <Search className="h-6 w-6" />,
  Zap: <Zap className="h-6 w-6" />,
  Bot: <Bot className="h-6 w-6" />,
};

export function ServicesGrid() {
  return (
    <section className="py-24 px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>What we build</SectionLabel>
          <h2 className="font-heading text-3xl font-bold md:text-5xl">
            Four pillars. One foundation.
          </h2>
        </Reveal>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <Link href={`/services#${service.id}`}>
                <motion.div
                  className="group h-full"
                  whileHover={{ y: -4 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  style={{ perspective: 1000 }}
                >
                  <Card
                    className={`h-full ${
                      service.featured
                        ? "bg-gradient-to-br from-accent/10 to-transparent border border-accent/30"
                        : ""
                    }`}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-elevated text-accent">
                        {iconMap[service.icon]}
                      </div>
                      {service.featured && (
                        <Badge variant="accent">Always On</Badge>
                      )}
                    </div>

                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-secondary leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted"
                        >
                          <span className="h-1 w-1 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
