"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel, Badge } from "@/components/ui";
import { useIntersection } from "@/hooks";

const chatMessages = [
  {
    from: "visitor",
    text: "Hi, I need to book a cleaning for next Tuesday. Are you open at 2am?",
    time: "2:14 AM",
  },
  {
    from: "ai",
    text: "Hey! Thanks for reaching out. Yes, we can absolutely accommodate that. Let me pull up our availability for next Tuesday.",
    time: "2:14 AM",
  },
  {
    from: "ai",
    text: "I have a 9:00 AM and a 2:30 PM slot available. Which works better for you?",
    time: "2:14 AM",
  },
  {
    from: "visitor",
    text: "2:30 PM works perfect.",
    time: "2:15 AM",
  },
  {
    from: "ai",
    text: "Done! You're booked for Tuesday at 2:30 PM. I've sent a confirmation to your email and added it to our calendar. Is there anything else I can help with?",
    time: "2:15 AM",
  },
];

export function LiveDemo() {
  const { ref, isInView } = useIntersection({ threshold: 0.3 });
  const [visibleMessages, setVisibleMessages] = useState(0);
  const triggered = useRef(false);

  useEffect(() => {
    if (!isInView || triggered.current) return;
    triggered.current = true;

    chatMessages.forEach((_, i) => {
      setTimeout(() => setVisibleMessages(i + 1), 800 * (i + 1));
    });
  }, [isInView]);

  return (
    <section className="py-24 px-6 md:py-32 bg-surface" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <SectionLabel>Live demo</SectionLabel>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Your AI employee at work.
              <br />
              <span className="text-secondary">At 2 AM.</span>
            </h2>
            <p className="mt-6 text-lg text-secondary leading-relaxed">
              While you sleep, your AI employee handles inquiries, qualifies
              leads, and books appointments — in your brand voice, with full
              context.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Badge variant="success">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse-dot" />
                AI Online
              </Badge>
              <span className="text-xs text-muted">
                Avg response time: &lt;5 seconds
              </span>
            </div>
          </div>

          {/* Chat window */}
          <div className="rounded-2xl border border-border bg-background p-1">
            {/* Chat header */}
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-ghost" />
                <span className="h-3 w-3 rounded-full bg-ghost" />
                <span className="h-3 w-3 rounded-full bg-ghost" />
              </div>
              <span className="text-xs text-muted flex-1 text-center">
                Live Chat — arkiology.com
              </span>
            </div>

            {/* Messages */}
            <div className="space-y-4 p-4 min-h-[320px]">
              <AnimatePresence>
                {chatMessages.slice(0, visibleMessages).map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className={`flex ${
                      msg.from === "visitor" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                        msg.from === "visitor"
                          ? "bg-accent text-white rounded-br-md"
                          : "bg-elevated text-foreground rounded-bl-md"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      <span className="mt-1 block text-[10px] opacity-50">
                        {msg.time}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
