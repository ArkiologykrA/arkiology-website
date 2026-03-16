"use client";

import { Reveal } from "@/components/animations";

const stats = [
  { value: "24/7", label: "AI availability" },
  { value: "4–8", label: "Weeks to launch" },
  { value: "100%", label: "Custom built" },
  { value: "0", label: "Templates used" },
];

export function StatsBar() {
  return (
    <section className="bg-accent py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="font-heading text-3xl font-bold text-background md:text-4xl">
                  {stat.value}
                </span>
                <p className="mt-1 text-sm text-background/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
