"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { SectionLabel, Badge, Button } from "@/components/ui";
import { Reveal, TextReveal } from "@/components/animations";
import { PortableTextBody } from "@/sanity/lib/portable-text";

interface SanityBlogPostFull {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: unknown[];
  category: string;
  publishedAt: string;
  readTime: number;
  author: string;
  tags: string[];
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-accent origin-left z-[60]"
      style={{ scaleX }}
    />
  );
}

export function BlogPostDetail({ post, allPosts }: { post: SanityBlogPostFull; allPosts: { slug: string; title: string }[] }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const nextPost = allPosts[(currentIndex + 1) % allPosts.length];

  return (
    <>
      <ReadingProgress />

      {/* Back link */}
      <section className="pt-28 px-6">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All posts
          </Link>
        </div>
      </section>

      {/* Header */}
      <section className="pt-8 pb-12 px-6">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Badge className="mb-4">{post.category}</Badge>
          </Reveal>
          <TextReveal
            text={post.title}
            className="font-heading text-4xl font-bold leading-tight md:text-5xl"
          />
          <Reveal delay={0.3}>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted">
              <span>By {post.author}</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime} min read
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-6">
        <div ref={contentRef} className="mx-auto max-w-3xl">
          <Reveal>
            <div className="border-t border-border pt-8">
              <PortableTextBody value={post.body} />
            </div>
          </Reveal>

          {/* Tags */}
          <Reveal>
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Next post */}
      <section className="py-16 px-6 border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-sm text-muted uppercase tracking-wider mb-4">Next Post</p>
            <Link href={`/blog/${nextPost.slug}`}>
              <h2 className="font-heading text-2xl font-bold hover:text-accent transition-colors md:text-3xl inline-flex items-center gap-3">
                {nextPost.title}
                <ArrowRight className="h-6 w-6 shrink-0" />
              </h2>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <TextReveal
            text="Ready to implement these ideas?"
            className="font-heading text-4xl font-bold md:text-5xl"
          />
          <Reveal delay={0.3}>
            <p className="mt-6 text-xl text-secondary">
              Let&apos;s build something together.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="xl">
                  Start a Project
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
