import type { Metadata } from "next";
import { BlogClient } from "@/components/sections/blog/blog-client";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Practical insights on web development, AI, automation, and digital growth from the Arkiology team.",
};

export default function BlogPage() {
  return <BlogClient />;
}
