'use client';

export default function AIEmployeesPage() {
  return (
    <>
      <main>
        {/* 1. Hero */}
        <section className="min-h-[85vh] flex items-center px-6 pt-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="fade-up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-ark-green/10 border border-ark-green/20 rounded-full mb-8">
                  <span className="w-2 h-2 bg-ark-green rounded-full pulse-dot"></span>
                  <span className="text-ark-green text-sm font-medium">Always Online</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-8">
                  Your business<br />
                  <span className="gradient-text">never sleeps.</span>
                </h1>
                <p className="text-xl text-ark-light max-w-lg mb-8 leading-relaxed">
                  Not chatbots. <span className="text-ark-white font-medium">Real AI employees</span> that take action — answer calls, send emails, book appointments, update your CRM, and execute real work. 24/7. In your brand voice.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/contact" className="inline-flex items-center justify-center gap-3 bg-ark-white text-ark-black px-8 py-4 font-medium hover:bg-ark-light transition-colors cursor-pointer">
                    Get Your AI Employee
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="gradient-border rounded-2xl p-6 max-w-md mx-auto">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-ark-border">
                    <div className="w-10 h-10 rounded-full bg-ark-accent flex items-center justify-center">
                      <span className="text-white font-bold">A</span>
                    </div>
                    <div>
                      <p className="font-semibold">Your AI Employee</p>
                      <p className="text-ark-green text-sm flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-ark-green rounded-full"></span>
                        Online now
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 min-h-[280px]">
                    <div className="chat-bubble chat-1 flex justify-end">
                      <div className="bg-ark-accent text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%]">
                        Hi, I'm interested in your services. Do you have availability this week?
                      </div>
                    </div>
                    <div className="chat-bubble chat-2 flex justify-start">
                      <div className="bg-ark-gray px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%]">
                        Hi! Thanks for reaching out. Yes, we have openings this week. I'd be happy to get you scheduled. What day works best for you?
                      </div>
                    </div>
                    <div className="chat-bubble chat-3 flex justify-end">
                      <div className="bg-ark-accent text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%]">
                        Thursday afternoon would be perfect
                      </div>
                    </div>
                    <div className="chat-bubble chat-4 flex justify-start">
                      <div className="bg-ark-gray px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%]">
                        Great! I've got Thursday at 2:00 PM or 3:30 PM available. Which works better? I'll send you a calendar invite right away.
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-ark-border">
                    <p className="text-ark-muted text-sm">This conversation happened at 2:47 AM</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-ark-accent/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-ark-accent/5 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. The Problem Stats */}
        <section className="py-24 px-6 border-t border-ark-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-4">The Reality</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                You're losing customers while you sleep.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="gradient-border rounded-xl p-8 text-center">
                <p className="text-5xl md:text-6xl font-bold text-ark-accent mb-4">78%</p>
                <p className="text-ark-light">of customers buy from whoever responds first</p>
              </div>
              <div className="gradient-border rounded-xl p-8 text-center">
                <p className="text-5xl md:text-6xl font-bold text-ark-accent mb-4">5 min</p>
                <p className="text-ark-light">is the maximum response time customers expect</p>
              </div>
              <div className="gradient-border rounded-xl p-8 text-center">
                <p className="text-5xl md:text-6xl font-bold text-ark-accent mb-4">35%</p>
                <p className="text-ark-light">of inquiries happen outside business hours</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. What It Does */}
        <section className="py-24 px-6 bg-ark-dark">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-4">Capabilities</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Not a chatbot. An actual employee.
              </h2>
              <p className="text-ark-light text-lg max-w-2xl">
                These aren't scripted response bots. They use real tools, take real actions, and execute real work — trained specifically on your business.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", title: "Answer Phone Calls", desc: "Real voice conversations. Answers calls, handles inquiries, takes messages, transfers when needed. Sounds human."},
                {icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", title: "Send Emails & Follow-ups", desc: "Drafts and sends personalized emails. Follow-up sequences. Quote follow-ups. All automatic."},
                {icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", title: "Book Appointments", desc: "Checks your real calendar, finds open slots, books meetings, sends confirmations. Zero back-and-forth."},
                {icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4", title: "Update Your CRM", desc: "Creates contacts, logs interactions, updates deal stages, adds notes. Your CRM stays current without you touching it."},
                {icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", title: "Research & Analyze", desc: "Searches the web, analyzes competitors, finds information, generates reports. Does the research you never have time for."},
                {icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z", title: "Omnichannel Presence", desc: "Website, WhatsApp, Instagram, SMS, Telegram, email — all in one. Conversations sync across every channel."},
                {icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z", title: "Run Automations", desc: "Triggers workflows, moves data between tools, executes multi-step processes. Works while you sleep."},
                {icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z", title: "Integrate With Anything", desc: "Connects to your existing tools — Shopify, Google, Calendly, HubSpot, Slack, and hundreds more via API."},
                {icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", title: "Human When Needed", desc: "Knows when to escalate. Hands off complex issues to you with full context. Always under your control."}
              ].map((cap, i) => (
                <div key={i} className="feature-card gradient-border rounded-xl p-6 cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-ark-accent/10 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-ark-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={cap.icon}></path></svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                  <p className="text-ark-light text-sm">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How It Works */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-4">Process</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                From zero to 24/7 in three weeks.
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-ark-gray flex items-center justify-center">
                  <span className="text-2xl font-bold text-ark-accent">01</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">We Learn Your Business</h3>
                <p className="text-ark-light text-sm">Products, services, FAQs, processes, voice. Everything that makes you, you.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-ark-gray flex items-center justify-center">
                  <span className="text-2xl font-bold text-ark-accent">02</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">We Build Your AI</h3>
                <p className="text-ark-light text-sm">Custom trained on your business. Not a template—an employee that knows you.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-ark-gray flex items-center justify-center">
                  <span className="text-2xl font-bold text-ark-accent">03</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">We Deploy Everywhere</h3>
                <p className="text-ark-light text-sm">Connected to every channel where your customers reach out.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-ark-accent flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">04</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">You Grow</h3>
                <p className="text-ark-light text-sm">Qualified leads, booked appointments, happy customers—all while you sleep.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Use Cases */}
        <section className="py-24 px-6 border-t border-ark-border">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-4">Use Cases</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Real businesses. Real results.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {emoji: "🏠", industry: "Real Estate", title: "Property Inquiries", desc: "Answers listing questions, schedules viewings, qualifies buyers based on budget and timeline.", result: "Lead response time: 8 hours → 8 seconds"},
                {emoji: "⚡", industry: "Home Services", title: "Quote Requests", desc: "Gathers project details, sends estimates, books consultations. No call-backs needed.", result: "60% of leads book before we even see them"},
                {emoji: "💪", industry: "Fitness / Coaching", title: "Membership Sales", desc: "Explains programs, handles objections, books trial sessions. Sells while you train.", result: "Night inquiries now convert at 45%"},
                {emoji: "🏥", industry: "Healthcare", title: "Patient Scheduling", desc: "Handles appointment requests, verifies insurance, answers pre-visit questions 24/7.", result: "Front desk workload down 40%"},
                {emoji: "🛒", industry: "E-Commerce", title: "Customer Support", desc: "Order tracking, returns, product questions. Handles 70% of tickets without human touch.", result: "Support tickets requiring humans: -65%"},
                {emoji: "📚", industry: "Professional Services", title: "Consultation Booking", desc: "Qualifies prospects, explains services, schedules discovery calls with ready-to-buy clients.", result: "No-show rate dropped from 35% to 12%"}
              ].map((use, i) => (
                <div key={i} className="gradient-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-ark-accent/10 flex items-center justify-center">
                      <span className="text-xl">{use.emoji}</span>
                    </div>
                    <span className="text-sm text-ark-muted">{use.industry}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{use.title}</h3>
                  <p className="text-ark-light text-sm mb-4">{use.desc}</p>
                  <p className="text-ark-accent text-sm font-medium">&quot;{use.result}&quot;</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Comparison */}
        <section className="py-24 px-6 bg-ark-dark">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-4">The Difference</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                This isn't chatbot 1.0.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              <div className="gradient-border rounded-xl p-8">
                <p className="text-ark-muted font-semibold mb-6 uppercase text-sm tracking-wider">Generic Chatbots</p>
                <ul className="space-y-4">
                  {["Canned responses that frustrate customers", "\"I don't understand\" loops", "Obviously robotic—damages your brand", "Can't handle real questions"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-ark-light">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl p-8 bg-gradient-to-br from-ark-accent/10 to-transparent border border-ark-accent/30">
                <p className="text-ark-accent font-semibold mb-6 uppercase text-sm tracking-wider">Arkiology AI Employees</p>
                <ul className="space-y-4">
                  {["Natural conversations in your voice", "Handles nuanced, complex inquiries", "Customers can't tell it's AI", "Knows your business inside out"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-ark-light">
                      <svg className="w-5 h-5 text-ark-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 7. What's Included */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-4">What's Included</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Less than a part-time hire.<br />Works full-time.
                </h2>
                <p className="text-ark-light text-lg">
                  Custom-built for your business. No templates. No limitations.
                </p>
              </div>
              <div className="gradient-border rounded-2xl p-8 md:p-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-ark-accent uppercase text-sm tracking-wider mb-4 font-semibold">Setup</p>
                    <ul className="space-y-3 text-ark-light">
                      {["Complete business analysis", "Custom AI training", "Multi-channel deployment", "Integration with your tools", "Testing and refinement"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <svg className="w-4 h-4 text-ark-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-ark-accent uppercase text-sm tracking-wider mb-4 font-semibold">Ongoing</p>
                    <ul className="space-y-3 text-ark-light">
                      {["24/7 AI operation", "Continuous optimization", "Priority support", "Monthly performance reports", "Human handoff when needed"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <svg className="w-4 h-4 text-ark-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-ark-border text-center">
                  <a href="/contact" className="inline-flex items-center justify-center gap-3 bg-ark-white text-ark-black px-8 py-4 font-medium hover:bg-ark-light transition-colors cursor-pointer">
                    Get a Custom Quote
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="py-24 px-6 bg-ark-dark">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-4">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-12">Common questions.</h2>
              <div className="space-y-6">
                {[
                  {q: "How long does setup take?", a: "Typically 2-3 weeks from kickoff to live deployment. Complex businesses with extensive product catalogs may take slightly longer."},
                  {q: "What if the AI can't answer something?", a: "It gracefully hands off to you with full context. You get notified instantly, and the customer never feels abandoned."},
                  {q: "Can it integrate with my existing tools?", a: "Yes. CRMs, calendars, email platforms, phone systems—we connect your AI to your existing stack."},
                  {q: "What languages does it support?", a: "Full support for English and Spanish out of the box. Additional languages available on request."},
                  {q: "What's the contract length?", a: "Month-to-month after setup. We keep your business because we deliver results, not because of contracts."}
                ].map((faq, i) => (
                  <div key={i} className="border-b border-ark-border pb-6">
                    <h3 className="text-lg font-semibold mb-3">{faq.q}</h3>
                    <p className="text-ark-light">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 9. CTA */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to never miss<br />another lead?
            </h2>
            <p className="text-xl text-ark-light max-w-lg mx-auto mb-12">
              Let's build your 24/7 employee.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center gap-3 bg-ark-white text-ark-black px-10 py-5 text-lg font-medium hover:bg-ark-light transition-colors cursor-pointer">
              Start a Conversation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
