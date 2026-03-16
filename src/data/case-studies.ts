import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "fort-knox-remodel",
    title: "Fort Knox Remodel",
    description:
      "Complete website redesign and digital presence overhaul for a premier South Florida remodeling contractor.",
    category: "Website + Digital Presence",
    results: [
      { metric: "Organic Traffic", value: "+340%" },
      { metric: "Lead Generation", value: "+180%" },
      { metric: "Page Load Time", value: "1.2s" },
    ],
    services: ["Website Development", "SEO", "Google Business Profile"],
    challenge:
      "Fort Knox Remodel was relying on word-of-mouth and an outdated website that didn\u2019t reflect the quality of their work. They were losing potential customers to competitors with stronger online presence.",
    solution:
      "We built a custom, fast-loading website with a portfolio showcase, integrated their Google Business Profile strategy, and implemented an SEO foundation targeting high-intent local search terms.",
    outcome:
      "Within 6 months, organic traffic increased 340%, lead inquiries grew 180%, and they consistently rank in the top 3 for key remodeling search terms in their service area.",
    image: "/images/case-studies/fort-knox.jpg",
    featured: true,
  },
  {
    slug: "coastal-fitness-ai",
    title: "Coastal Fitness Studio",
    description:
      "AI employee deployment for 24/7 lead response and automated class booking at a boutique fitness studio.",
    category: "AI Employees + Automations",
    results: [
      { metric: "Lead Response", value: "<30s" },
      { metric: "Night Conversions", value: "+45%" },
      { metric: "No-Shows", value: "-60%" },
    ],
    services: ["AI Employees", "Automations", "CRM Integration"],
    challenge:
      "The studio was missing 35% of inquiries that came in after hours. Their front desk was overwhelmed managing bookings, answering questions, and following up on leads during business hours.",
    solution:
      "We deployed a custom AI employee that responds to inquiries across web, Instagram, and SMS \u2014 24/7. It books trial classes, answers FAQs, and syncs everything to their CRM automatically.",
    outcome:
      "Response time went from 8+ hours to under 30 seconds. Night-time inquiries now convert at 45%, and no-show rates dropped 60% thanks to automated reminders.",
    image: "/images/case-studies/coastal-fitness.jpg",
    featured: true,
  },
  {
    slug: "verde-legal-group",
    title: "Verde Legal Group",
    description:
      "Full digital infrastructure build for a growing immigration law firm \u2014 website, automations, and digital presence.",
    category: "Complete Foundation",
    results: [
      { metric: "Consultation Bookings", value: "+220%" },
      { metric: "Admin Time Saved", value: "15hrs/wk" },
      { metric: "Organic Leads", value: "+290%" },
    ],
    services: ["Website Development", "Automations", "SEO", "AI Employees"],
    challenge:
      "The firm was growing but drowning in administrative overhead. Consultation requests were handled manually via email, intake forms were paper-based, and their online presence was minimal.",
    solution:
      "We built a bilingual website, automated the entire intake funnel from form submission to calendar booking, and deployed an AI assistant to handle initial consultations in English and Spanish.",
    outcome:
      "Consultation bookings increased 220%, the team reclaimed 15 hours per week previously spent on admin tasks, and organic leads nearly tripled through targeted SEO.",
    image: "/images/case-studies/verde-legal.jpg",
  },
  {
    slug: "pure-skin-ecommerce",
    title: "Pure Skin Co.",
    description:
      "E-commerce optimization and AI-powered customer support for a growing skincare brand.",
    category: "Website + AI Employees",
    results: [
      { metric: "Conversion Rate", value: "+85%" },
      { metric: "Support Tickets", value: "-65%" },
      { metric: "AOV", value: "+32%" },
    ],
    services: ["Website Development", "AI Employees", "Automations"],
    challenge:
      "High cart abandonment, slow customer support response times, and no personalized product recommendations were limiting the brand\u2019s growth potential.",
    solution:
      "We redesigned the shopping experience with conversion-focused UX, deployed an AI assistant for instant customer support and product recommendations, and automated the post-purchase follow-up flow.",
    outcome:
      "Conversion rates increased 85%, support tickets requiring human intervention dropped 65%, and average order value grew 32% through AI-powered product suggestions.",
    image: "/images/case-studies/pure-skin.jpg",
  },
];
