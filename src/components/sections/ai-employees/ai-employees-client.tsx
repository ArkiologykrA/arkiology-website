"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, Mail, Calendar, Database, Search, MessageSquare,
  Settings, Puzzle, User, Check, X, ArrowRight, TrendingUp,
  Home, Zap, Dumbbell, HeartPulse, ShoppingCart, Briefcase,
} from "lucide-react";
import { SectionLabel, Card, Badge, Button } from "@/components/ui";
import { Reveal, TextReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { useIntersection } from "@/hooks";

const capabilities = [
  { icon: <Phone className="h-5 w-5" />, title: "Answer Phone Calls", desc: "Real voice conversations. Answers calls, handles inquiries, takes messages, transfers when needed." },
  { icon: <Mail className="h-5 w-5" />, title: "Send Emails & Follow-ups", desc: "Drafts and sends personalized emails. Follow-up sequences. Quote follow-ups. All automatic." },
  { icon: <Calendar className="h-5 w-5" />, title: "Book Appointments", desc: "Checks your real calendar, finds open slots, books meetings, sends confirmations." },
  { icon: <Database className="h-5 w-5" />, title: "Update Your CRM", desc: "Creates contacts, logs interactions, updates deal stages. Your CRM stays current." },
  { icon: <Search className="h-5 w-5" />, title: "Research & Analyze", desc: "Searches the web, analyzes competitors, finds information, generates reports." },
  { icon: <MessageSquare className="h-5 w-5" />, title: "Omnichannel Presence", desc: "Website, WhatsApp, Instagram, SMS, email \u2014 all in one. Conversations sync across every channel." },
  { icon: <Settings className="h-5 w-5" />, title: "Run Automations", desc: "Triggers workflows, moves data between tools, executes multi-step processes." },
  { icon: <Puzzle className="h-5 w-5" />, title: "Integrate With Anything", desc: "Connects to Shopify, Google, Calendly, HubSpot, Slack, and hundreds more via API." },
  { icon: <User className="h-5 w-5" />, title: "Human When Needed", desc: "Knows when to escalate. Hands off complex issues to you with full context." },
];

const useCases = [
  { icon: <Home className="h-5 w-5" />, industry: "Real Estate", title: "Property Inquiries", desc: "Answers listing questions, schedules viewings, qualifies buyers.", result: "Lead response time: 8 hours \u2192 8 seconds" },
  { icon: <Zap className="h-5 w-5" />, industry: "Home Services", title: "Quote Requests", desc: "Gathers project details, sends estimates, books consultations.", result: "60% of leads book before we even see them" },
  { icon: <Dumbbell className="h-5 w-5" />, industry: "Fitness / Coaching", title: "Membership Sales", desc: "Explains programs, handles objections, books trial sessions.", result: "Night inquiries now convert at 45%" },
  { icon: <HeartPulse className="h-5 w-5" />, industry: "Healthcare", title: "Patient Scheduling", desc: "Handles appointment requests, verifies insurance, answers pre-visit questions.", result: "Front desk workload down 40%" },
  { icon: <ShoppingCart className="h-5 w-5" />, industry: "E-Commerce", title: "Customer Support", desc: "Order tracking, returns, product questions. Handles 70% of tickets.", result: "Support tickets requiring humans: -65%" },
  { icon: <Briefcase className="h-5 w-5" />, industry: "Professional Services", title: "Consultation Booking", desc: "Qualifies prospects, explains services, schedules discovery calls.", result: "No-show rate dropped from 35% to 12%" },
];

const chatMessages = [
  { from: "visitor", text: "Hi, I\u2019m interested in your services. Do you have availability this week?" },
  { from: "ai", text: "Hi! Thanks for reaching out. Yes, we have openings this week. I\u2019d be happy to get you scheduled. What day works best?" },
  { from: "visitor", text: "Thursday afternoon would be perfect" },
  { from: "ai", text: "Great! I\u2019ve got Thursday at 2:00 PM or 3:30 PM available. Which works better? I\u2019ll send you a calendar invite right away." },
];

function HeroChat() {
  const { ref, isInView } = useIntersection({ threshold: 0.3 });
  const [visible, setVisible] = useState(0);
  const triggered = useRef(false);

  useEffect(() => {
    if (!isInView || triggered.current) return;
    triggered.current = true;
    chatMessages.forEach((_, i) => {
      setTimeout(() => setVisible(i + 1), 800 * (i + 1));
    });
  }, [isInView]);

  return (
    <div ref={ref} className="gradient-border rounded-2xl p-6 max-w-md mx-auto">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
          <span className="text-white font-bold">A</span>
        </div>
        <div>
          <p className="font-semibold text-sm">Your AI Employee</p>
          <p className="text-success text-xs flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Online now
          </p>
        </div>
      </div>
      <div className="space-y-4 min-h-[280px]">
        <AnimatePresence>
          {chatMessages.slice(0, visible).map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`flex ${msg.from === "visitor" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${msg.from === "visitor" ? "bg-accent text-white rounded-br-md" : "bg-elevated text-foreground rounded-bl-md"}`}>
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-muted text-xs">This conversation happened at 2:47 AM</p>
      </div>
    </div>
  );
}

export function AIEmployeesClient() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[85vh] flex items-center px-6 pt-20">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid gap-16 items-center lg:grid-cols-2">
            <div>
              <Reveal>
                <Badge variant="success" className="mb-8">
                  <span className="h-2 w-2 rounded-full bg-success animate-pulse-dot" />
                  Always Online
                </Badge>
              </Reveal>
              <TextReveal
                text="Your business never sleeps."
                className="font-heading text-5xl font-bold leading-[0.95] md:text-6xl lg:text-7xl"
              />
              <Reveal delay={0.3}>
                <p className="mt-8 text-xl text-secondary max-w-lg leading-relaxed">
                  Not chatbots. <span className="text-foreground font-medium">Real AI employees</span> that
                  take action \u2014 answer calls, send emails, book appointments, update your CRM, and
                  execute real work. 24/7. In your brand voice.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button size="lg">
                      Get Your AI Employee
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </Reveal>
            </div>
            <HeroChat />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 border-t border-border">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center mb-16">
              <SectionLabel className="text-center">The Reality</SectionLabel>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                You&apos;re losing customers while you sleep.
              </h2>
            </div>
          </Reveal>
          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {[
              { value: "78%", label: "of customers buy from whoever responds first" },
              { value: "5 min", label: "is the maximum response time customers expect" },
              { value: "35%", label: "of inquiries happen outside business hours" },
            ].map((stat) => (
              <StaggerItem key={stat.value}>
                <Card className="text-center">
                  <p className="font-heading text-5xl font-bold text-accent md:text-6xl">{stat.value}</p>
                  <p className="mt-4 text-sm text-secondary">{stat.label}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-6 bg-surface">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="font-heading text-3xl font-bold md:text-4xl mb-2">Not a chatbot. An actual employee.</h2>
            <p className="text-lg text-secondary max-w-2xl">
              These aren&apos;t scripted response bots. They use real tools, take real actions, and
              execute real work \u2014 trained specifically on your business.
            </p>
          </Reveal>
          <StaggerContainer className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <StaggerItem key={cap.title}>
                <motion.div whileHover={{ y: -2, borderColor: "var(--accent)" }} transition={{ duration: 0.2 }}>
                  <Card className="h-full">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">{cap.icon}</div>
                    <h3 className="font-heading text-lg font-semibold">{cap.title}</h3>
                    <p className="mt-2 text-sm text-secondary">{cap.desc}</p>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-accent)/4%,_transparent_60%)]" />
        <div className="mx-auto max-w-7xl relative">
          <Reveal>
            <div className="text-center mb-20">
              <SectionLabel className="text-center">Use Cases</SectionLabel>
              <h2 className="font-heading text-4xl font-bold md:text-5xl">
                Real businesses.<br />
                <span className="text-gradient">Real results.</span>
              </h2>
              <p className="mt-4 text-lg text-secondary max-w-xl mx-auto">
                From real estate to e-commerce, AI employees are transforming how businesses
                handle customer interactions.
              </p>
            </div>
          </Reveal>
          <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc) => (
              <StaggerItem key={uc.title}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group h-full"
                >
                  <div className="relative h-full rounded-2xl border border-border bg-surface p-6 overflow-hidden transition-colors duration-300 group-hover:border-accent/50">
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-transparent group-hover:to-accent/3 transition-all duration-500" />
                    {/* Top accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent transition-all duration-500" />

                    <div className="relative">
                      {/* Industry tag */}
                      <div className="flex items-center gap-3 mb-5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/20 text-accent group-hover:border-accent/40 transition-colors">
                          {uc.icon}
                        </div>
                        <span className="text-xs font-medium text-muted uppercase tracking-wider">{uc.industry}</span>
                      </div>

                      <h3 className="font-heading text-xl font-bold group-hover:text-accent transition-colors duration-300">
                        {uc.title}
                      </h3>
                      <p className="mt-2 text-sm text-secondary leading-relaxed">{uc.desc}</p>

                      {/* Result highlight */}
                      <div className="mt-5 pt-4 border-t border-border/60">
                        <div className="flex items-start gap-2">
                          <div className="mt-0.5 h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                            <TrendingUp className="h-3 w-3 text-accent" />
                          </div>
                          <p className="text-sm font-semibold text-accent leading-snug">
                            &ldquo;{uc.result}&rdquo;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-32 px-6 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-accent)/6%,_transparent_60%)]" />
        <div className="mx-auto max-w-6xl relative">
          <Reveal>
            <div className="text-center mb-20">
              <SectionLabel className="text-center">The Difference</SectionLabel>
              <h2 className="font-heading text-4xl font-bold md:text-5xl">
                This isn&apos;t chatbot 1.0.
              </h2>
              <p className="mt-4 text-lg text-secondary max-w-xl mx-auto">
                There&apos;s a reason customers hate chatbots. We built something fundamentally different.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
            {/* Generic Chatbots - intentionally muted */}
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-red-500/10 bg-red-500/[0.02] p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
                    <X className="h-5 w-5 text-red-400" />
                  </div>
                  <p className="text-red-400/80 font-bold uppercase text-sm tracking-wider">
                    Generic Chatbots
                  </p>
                </div>
                <ul className="space-y-5">
                  {[
                    { text: "Canned responses that frustrate customers", detail: "Decision-tree scripting can\u2019t handle real conversations" },
                    { text: "\"I don\u2019t understand\" loops", detail: "Customers abandon after 2 failed attempts" },
                    { text: "Obviously robotic tone", detail: "Damages brand trust and perception" },
                    { text: "Can\u2019t take real actions", detail: "No booking, no CRM updates, no email sending" },
                  ].map((item) => (
                    <li key={item.text} className="group/item">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500/10 shrink-0">
                          <X className="h-3 w-3 text-red-400" />
                        </div>
                        <div>
                          <span className="text-secondary font-medium text-[15px]">{item.text}</span>
                          <p className="text-xs text-muted mt-0.5">{item.detail}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-red-500/10">
                  <p className="text-xs text-muted italic">Industry avg. satisfaction: 22%</p>
                </div>
              </div>
            </Reveal>

            {/* VS divider */}
            <div className="hidden md:flex flex-col items-center justify-center py-8">
              <div className="w-px flex-1 bg-gradient-to-b from-red-500/20 to-border" />
              <div className="my-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-border bg-background">
                <span className="font-heading text-sm font-bold text-muted">VS</span>
              </div>
              <div className="w-px flex-1 bg-gradient-to-b from-border to-accent/30" />
            </div>
            <div className="flex md:hidden items-center justify-center py-4">
              <div className="h-px flex-1 bg-gradient-to-r from-red-500/20 to-border" />
              <div className="mx-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-background">
                <span className="font-heading text-xs font-bold text-muted">VS</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-border to-accent/30" />
            </div>

            {/* Arkiology AI Employees - hero treatment */}
            <Reveal delay={0.25}>
              <motion.div
                className="h-full"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="h-full rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/8 via-accent/3 to-transparent p-8 md:p-10 relative overflow-hidden shadow-[0_0_60px_-15px] shadow-accent/10">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 border border-accent/30">
                        <Check className="h-5 w-5 text-accent" />
                      </div>
                      <p className="text-accent font-bold uppercase text-sm tracking-wider">
                        Arkiology AI Employees
                      </p>
                    </div>
                    <ul className="space-y-5">
                      {[
                        { text: "Natural conversations in your voice", detail: "Trained on your brand tone, FAQs, and processes" },
                        { text: "Handles nuanced, complex inquiries", detail: "Context-aware AI that understands intent" },
                        { text: "Customers can\u2019t tell it\u2019s AI", detail: "97% human-like interaction scores" },
                        { text: "Takes real actions, not just replies", detail: "Books, emails, updates CRM, escalates\u2014autonomously" },
                      ].map((item) => (
                        <li key={item.text}>
                          <div className="flex items-start gap-3">
                            <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 shrink-0">
                              <Check className="h-3 w-3 text-accent" />
                            </div>
                            <div>
                              <span className="text-foreground font-medium text-[15px]">{item.text}</span>
                              <p className="text-xs text-secondary mt-0.5">{item.detail}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-6 border-t border-accent/20">
                      <p className="text-xs text-accent font-medium">Customer satisfaction: 94% &mdash; rivaling human agents</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="text-center mb-12">
              <SectionLabel className="text-center">What&apos;s Included</SectionLabel>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Less than a part-time hire.<br />Works full-time.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <Card>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <p className="text-accent uppercase text-sm tracking-wider mb-4 font-semibold">Setup</p>
                  <ul className="space-y-3">
                    {["Complete business analysis", "Custom AI training", "Multi-channel deployment", "Integration with your tools", "Testing and refinement"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-secondary text-sm">
                        <Check className="h-4 w-4 text-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-accent uppercase text-sm tracking-wider mb-4 font-semibold">Ongoing</p>
                  <ul className="space-y-3">
                    {["24/7 AI operation", "Continuous optimization", "Priority support", "Monthly performance reports", "Human handoff when needed"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-secondary text-sm">
                        <Check className="h-4 w-4 text-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-border text-center">
                <Link href="/contact">
                  <Button size="lg">
                    Get a Custom Quote
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <TextReveal
            text="Ready to never miss another lead?"
            className="font-heading text-4xl font-bold md:text-5xl"
          />
          <Reveal delay={0.3}>
            <p className="mt-6 text-xl text-secondary">Let&apos;s build your 24/7 employee.</p>
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
