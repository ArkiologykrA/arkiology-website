import type { Metadata } from "next";
import { BlogClient } from "@/components/sections/blog/blog-client";
import { getBlogPosts } from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Blog & Insights — Web Development, AI, SEO & Digital Growth",
  description:
    "Actionable insights on web development, AI employees, SEO strategy, business automation, and digital marketing. Expert guides from the Arkiology team to help your business grow online.",
  alternates: { canonical: "https://arkiology.com/blog" },
};

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
  return <BlogClient blogPosts={blogPosts} />;
}
