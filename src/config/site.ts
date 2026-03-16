import type { NavItem } from "@/types";

export const siteConfig = {
  name: "Arkiology",
  description:
    "We build the digital infrastructure that grows businesses. Websites, digital presence, automations, and 24/7 AI employees.",
  url: "https://arkiology.com",
  ogImage: "/og-image.png",
  creator: "Arkiology",
  email: "hello@arkiology.com",
  location: "South Florida, USA",
  keywords: [
    "digital infrastructure",
    "web development",
    "AI employees",
    "automations",
    "digital presence",
    "SEO",
    "web design agency",
    "South Florida",
  ],
} as const;

export const navItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "AI Employees", href: "/ai-employees" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const socialLinks = {
  twitter: "https://twitter.com/arkiology",
  instagram: "https://instagram.com/arkiology",
  linkedin: "https://linkedin.com/company/arkiology",
} as const;
