"use client";

import { Star } from "lucide-react";
import { SectionLabel, Card } from "@/components/ui";
import { StaggerContainer, StaggerItem, Reveal } from "@/components/animations";

interface SanityTestimonial {
  _id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export function Testimonials({ testimonials }: { testimonials: SanityTestimonial[] }) {
  return (
    <section className="py-24 px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="font-heading text-3xl font-bold md:text-5xl">
            What our clients say.
          </h2>
        </Reveal>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial._id}>
              <Card className="h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="flex-1 text-sm text-secondary leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="font-heading text-sm font-bold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
