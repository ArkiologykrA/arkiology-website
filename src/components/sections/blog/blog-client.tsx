"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Clock, Tag } from "lucide-react";
import { SectionLabel, Card, Badge, Button } from "@/components/ui";
import { Reveal, TextReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { blogPosts } from "@/data/blog-posts";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogClient() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Blog & Insights</SectionLabel>
          </Reveal>
          <TextReveal
            text="Ideas worth building on."
            className="font-heading text-5xl font-bold leading-[0.95] md:text-7xl"
          />
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-2xl text-xl text-secondary leading-relaxed">
              Practical insights on web development, AI, automation, and digital
              growth. No fluff, no filler \u2014 just actionable knowledge.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-6 border-t border-border">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Link href={`/blog/${featured.slug}`} className="group">
              <div className="grid gap-12 items-center lg:grid-cols-2">
                <div className="aspect-video rounded-2xl bg-elevated border border-border flex items-center justify-center relative overflow-hidden group-hover:border-accent/50 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
                  <span className="text-6xl font-bold text-accent/20 group-hover:text-accent/30 transition-colors">
                    &#9650;
                  </span>
                </div>
                <div>
                  <Badge variant="accent" className="mb-4">Featured</Badge>
                  <h2 className="font-heading text-3xl font-bold md:text-4xl group-hover:text-accent transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-lg text-secondary leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-6 text-sm text-muted">
                    <span>{formatDate(featured.publishedAt)}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {featured.readTime} min read
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="text-xs text-muted bg-elevated rounded px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>All Posts</SectionLabel>
          </Reveal>
          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="h-full"
                  >
                    <Card className="h-full group">
                      <div className="flex items-start justify-between mb-3">
                        <Badge>{post.category}</Badge>
                        <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-accent transition-colors" />
                      </div>
                      <h3 className="font-heading text-xl font-bold group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-secondary line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 pt-4 border-t border-border flex items-center gap-4 text-xs text-muted">
                        <span>{formatDate(post.publishedAt)}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime} min
                        </span>
                      </div>
                    </Card>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-surface">
        <div className="mx-auto max-w-7xl text-center">
          <TextReveal
            text="Have a project in mind?"
            className="font-heading text-4xl font-bold md:text-5xl"
          />
          <Reveal delay={0.3}>
            <p className="mt-6 text-xl text-secondary">
              Let&apos;s turn these insights into your results.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="xl">
                  Start a Conversation
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
