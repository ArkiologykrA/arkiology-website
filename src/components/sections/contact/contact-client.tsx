"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Instagram, Linkedin, Twitter } from "lucide-react";
import { SectionLabel, Card, Button, Input } from "@/components/ui";
import { Reveal, TextReveal, StaggerContainer, StaggerItem } from "@/components/animations";

type FormState = "idle" | "submitting" | "success" | "error";

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "website", label: "Website Development" },
  { value: "presence", label: "Digital Presence / Marketing" },
  { value: "automations", label: "Automations" },
  { value: "ai", label: "24/7 AI Employees" },
  { value: "complete", label: "Complete Foundation (All Services)" },
  { value: "other", label: "Not sure / Other" },
];

const budgetOptions = [
  { value: "", label: "Select a range" },
  { value: "<5k", label: "Less than $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k+", label: "$25,000+" },
  { value: "unsure", label: "Not sure yet" },
];

const timelineOptions = [
  { value: "", label: "When do you want to start?" },
  { value: "asap", label: "As soon as possible" },
  { value: "1month", label: "Within 1 month" },
  { value: "3months", label: "Within 3 months" },
  { value: "exploring", label: "Just exploring" },
];

const contactFaqs = [
  { q: "What\u2019s the typical project timeline?", a: "Most website projects take 4-8 weeks. AI employee setup is 2-3 weeks. Automations can be 1-3 weeks. We\u2019ll give you a specific timeline after our initial conversation." },
  { q: "What\u2019s your pricing like?", a: "Every project is different. We provide custom quotes after understanding your specific needs \u2014 no templates, no one-size-fits-all pricing." },
  { q: "Do you work with small businesses?", a: "Absolutely. We work with businesses of all sizes. What matters is that you\u2019re serious about growth and ready to invest in your infrastructure." },
  { q: "What if I\u2019m not sure what I need?", a: "That\u2019s fine. Many clients come to us knowing they need \u201csomething\u201d but aren\u2019t sure what. We\u2019ll have a conversation and recommend the right approach." },
];

export function ContactClient() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    timeline: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <>
      {/* Main */}
      <section className="min-h-screen pt-32 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left - Info */}
            <div>
              <Reveal>
                <SectionLabel>Contact</SectionLabel>
              </Reveal>
              <TextReveal
                text="Let's build something."
                className="font-heading text-5xl font-bold leading-[0.95] md:text-6xl lg:text-7xl"
              />
              <Reveal delay={0.3}>
                <p className="mt-8 text-xl text-secondary max-w-md leading-relaxed">
                  Tell us about your business. We&apos;ll respond within 24 hours
                  with thoughts on how we can help.
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="mt-12 space-y-8">
                  <div>
                    <p className="text-muted uppercase text-sm tracking-wider mb-2">Email</p>
                    <a
                      href="mailto:hello@arkiology.com"
                      className="text-xl hover:text-accent transition-colors"
                    >
                      hello@arkiology.com
                    </a>
                  </div>
                  <div>
                    <p className="text-muted uppercase text-sm tracking-wider mb-2">Location</p>
                    <p className="text-xl">South Florida, USA</p>
                  </div>
                  <div>
                    <p className="text-muted uppercase text-sm tracking-wider mb-2">
                      Response Time
                    </p>
                    <p className="text-xl">Within 24 hours</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.5}>
                <div className="mt-12 pt-8 border-t border-border">
                  <p className="text-muted mb-4">Follow us</p>
                  <div className="flex gap-4">
                    {[
                      { icon: <Instagram className="h-5 w-5" />, href: "#" },
                      { icon: <Linkedin className="h-5 w-5" />, href: "#" },
                      { icon: <Twitter className="h-5 w-5" />, href: "#" },
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border hover:border-accent hover:text-accent transition-colors"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right - Form */}
            <div>
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <Card className="text-center py-16">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/10"
                      >
                        <Check className="h-8 w-8 text-success" />
                      </motion.div>
                      <h2 className="font-heading text-2xl font-semibold">
                        Message received!
                      </h2>
                      <p className="mt-4 text-secondary">
                        Thanks for reaching out. We&apos;ll review your project details
                        and get back to you within 24 hours.
                      </p>
                      <a
                        href="/"
                        className="mt-8 inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                      >
                        Back to home
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Card>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <Card>
                      <h2 className="font-heading text-2xl font-semibold mb-8">
                        Start a project
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <label htmlFor="name" className="block text-sm text-muted mb-2">
                              Name *
                            </label>
                            <Input
                              id="name"
                              name="name"
                              required
                              placeholder="Your name"
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm text-muted mb-2">
                              Email *
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              placeholder="you@company.com"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="company" className="block text-sm text-muted mb-2">
                            Company
                          </label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Your company name"
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>

                        <div>
                          <label htmlFor="service" className="block text-sm text-muted mb-2">
                            What are you interested in? *
                          </label>
                          <select
                            id="service"
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-border bg-elevated px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20 transition-colors"
                          >
                            {serviceOptions.map((opt) => (
                              <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="budget" className="block text-sm text-muted mb-2">
                            Budget range
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-border bg-elevated px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20 transition-colors"
                          >
                            {budgetOptions.map((opt) => (
                              <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm text-muted mb-2">
                            Tell us about your project *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            placeholder="What are you trying to achieve? What challenges are you facing?"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-border bg-elevated px-4 py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20 transition-colors resize-none"
                          />
                        </div>

                        <div>
                          <label htmlFor="timeline" className="block text-sm text-muted mb-2">
                            Timeline
                          </label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-border bg-elevated px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20 transition-colors"
                          >
                            {timelineOptions.map((opt) => (
                              <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full"
                          disabled={formState === "submitting"}
                        >
                          {formState === "submitting" ? "Sending..." : "Send Message"}
                          <ArrowRight className="h-5 w-5" />
                        </Button>

                        {formState === "error" && (
                          <p className="text-red-500 text-sm text-center">
                            Something went wrong. Please try again or email us directly.
                          </p>
                        )}

                        <p className="text-muted text-sm text-center">
                          We&apos;ll respond within 24 hours.
                        </p>
                      </form>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-t border-border">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionLabel>Common Questions</SectionLabel>
            <h2 className="font-heading text-3xl font-bold mb-12">Before we talk</h2>
          </Reveal>
          <StaggerContainer className="space-y-6">
            {contactFaqs.map((faq, i) => (
              <StaggerItem key={i}>
                <div className={`pb-6 ${i < contactFaqs.length - 1 ? "border-b border-border" : ""}`}>
                  <h3 className="font-heading text-lg font-semibold mb-3">{faq.q}</h3>
                  <p className="text-secondary">{faq.a}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
