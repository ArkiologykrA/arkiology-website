import Link from 'next/link';

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="fade-up max-w-4xl">
            <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-6">What We Build</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] mb-8">
              Four pillars.<br />
              <span className="gradient-text">One foundation.</span>
            </h1>
            <p className="text-xl text-ark-light max-w-2xl leading-relaxed mb-8">
              Every piece works together. Your website attracts. Your presence builds awareness. Your automations save time. Your AI closes the loop.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#websites" className="px-4 py-2 border border-ark-border rounded-lg text-sm hover:border-ark-accent hover:text-ark-accent transition-colors">
                01 Websites
              </a>
              <a href="#presence" className="px-4 py-2 border border-ark-border rounded-lg text-sm hover:border-ark-accent hover:text-ark-accent transition-colors">
                02 Digital Presence
              </a>
              <a href="#automations" className="px-4 py-2 border border-ark-border rounded-lg text-sm hover:border-ark-accent hover:text-ark-accent transition-colors">
                03 Automations
              </a>
              <a href="#ai" className="px-4 py-2 border border-ark-border rounded-lg text-sm hover:border-ark-accent hover:text-ark-accent transition-colors">
                04 AI Employees
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service 1: Websites */}
      <section id="websites" className="py-24 px-6 border-t border-ark-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="w-20 h-20 rounded-2xl bg-ark-gray flex items-center justify-center mb-8">
                <span className="text-3xl font-bold text-ark-accent">01</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Websites</h2>
              <p className="text-xl text-ark-light mb-8 leading-relaxed">
                From scratch or complete revamps. Fast, beautiful, built to convert. Not template trash—custom designed and developed for your business.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-ark-light">
                  <svg className="w-5 h-5 text-ark-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom design tailored to your brand</span>
                </li>
                <li className="flex items-start gap-3 text-ark-light">
                  <svg className="w-5 h-5 text-ark-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mobile-first, fast-loading architecture</span>
                </li>
                <li className="flex items-start gap-3 text-ark-light">
                  <svg className="w-5 h-5 text-ark-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>SEO-ready from day one</span>
                </li>
                <li className="flex items-start gap-3 text-ark-light">
                  <svg className="w-5 h-5 text-ark-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Conversion-focused user experience</span>
                </li>
              </ul>
              <p className="text-ark-muted text-sm">Typical timeline: 4-8 weeks</p>
            </div>
            <div className="service-block gradient-border rounded-2xl p-8">
              <p className="text-ark-muted uppercase text-sm tracking-wider mb-6">What&apos;s Included</p>
              <ul className="space-y-3 text-ark-light mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-ark-accent rounded-full"></span>
                  Custom website design
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-ark-accent rounded-full"></span>
                  Responsive development
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-ark-accent rounded-full"></span>
                  CMS integration (if needed)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-ark-accent rounded-full"></span>
                  Contact forms & lead capture
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-ark-accent rounded-full"></span>
                  Analytics setup
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-ark-accent rounded-full"></span>
                  SSL & security
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-ark-accent rounded-full"></span>
                  Training & documentation
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 text-ark-accent font-medium hover:gap-3 transition-all">
                Get a quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Digital Presence */}
      <section id="presence" className="py-24 px-6 bg-ark-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 service-block gradient-border rounded-2xl p-8">
              <p className="text-ark-muted uppercase text-sm tracking-wider mb-6">What&apos;s Included</p>
              <ul className="space-y-3 text-ark-light mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-ark-accent rounded-full"></span>
                  SEO strategy & implementation
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-ark-accent rounded-full"></span>
                  Google Business Profile setup
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-ark-accent rounded-full"></span>
                  Social media strategy
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-ark-accent rounded-full"></span>
                  Paid advertising (Google, Meta)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-ark-accent rounded-full"></span>
                  Content strategy
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-ark-accent rounded-full"></span>
                  Monthly reporting
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-ark-accent rounded-full"></span>
                  Ongoing optimization
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 text-ark-accent font-medium hover:gap-3 transition-all">
                Get a quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-20 h-20 rounded-2xl bg-ark-gray flex items-center justify-center mb-8">
                <span className="text-3xl font-bold text-ark-accent">02</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Digital Presence</h2>
              <p className="text-xl text-ark-light mb-8 leading-relaxed">
                Marketing that actually reaches your customers. SEO, social, paid ads—strategy that drives real results, not vanity metrics.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-ark-light">
                  <svg className="w-5 h-5 text-ark-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Get found when people search for your services</span>
                </li>
                <li className="flex items-start gap-3 text-ark-light">
                  <svg className="w-5 h-5 text-ark-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Build awareness with targeted advertising</span>
                </li>
                <li className="flex items-start gap-3 text-ark-light">
                  <svg className="w-5 h-5 text-ark-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Track ROI on every marketing dollar</span>
                </li>
              </ul>
              <p className="text-ark-muted text-sm">Minimum 3-month commitment recommended</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Automations */}
      <section id="automations" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="w-20 h-20 rounded-2xl bg-ark-gray flex items-center justify-center mb-8">
                <span className="text-3xl font-bold text-ark-accent">03</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Automations</h2>
              <p className="text-xl text-ark-light mb-8 leading-relaxed">
                Stop doing repetitive tasks. We connect your tools, automate your workflows, and give you back hours every week.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-ark-light">
                  <svg className="w-5 h-5 text-ark-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>CRM integrations & data sync</span>
                </li>
                <li className="flex items-start gap-3 text-ark-light">
                  <svg className="w-5 h-5 text-ark-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automated email sequences</span>
                </li>
                <li className="flex items-start gap-3 text-ark-light">
                  <svg className="w-5 h-5 text-ark-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Lead routing & notifications</span>
                </li>
                <li className="flex items-start gap-3 text-ark-light">
                  <svg className="w-5 h-5 text-ark-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reporting & dashboard automation</span>
                </li>
              </ul>
              <p className="text-ark-muted text-sm">Typical implementation: 1-3 weeks</p>
            </div>
            <div className="service-block gradient-border rounded-2xl p-8">
              <p className="text-ark-muted uppercase text-sm tracking-wider mb-6">Common Automations</p>
              <ul className="space-y-4 text-ark-light mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-ark-accent font-mono text-sm">→</span>
                  <span>New lead → CRM → Email → Slack alert</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ark-accent font-mono text-sm">→</span>
                  <span>Form submit → Calendar booking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ark-accent font-mono text-sm">→</span>
                  <span>Payment received → Invoice → Thank you email</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ark-accent font-mono text-sm">→</span>
                  <span>Inventory low → Reorder alert</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ark-accent font-mono text-sm">→</span>
                  <span>Review posted → Social share</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ark-accent font-mono text-sm">→</span>
                  <span>Weekly report generation</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 text-ark-accent font-medium hover:gap-3 transition-all">
                Get a quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: AI Employees */}
      <section id="ai" className="py-24 px-6 bg-ark-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 rounded-2xl p-8 bg-gradient-to-br from-ark-accent/10 to-transparent border border-ark-accent/30 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-ark-accent/20 rounded text-xs text-ark-accent font-medium">
                  <span className="w-1.5 h-1.5 bg-ark-accent rounded-full"></span>
                  Featured
                </span>
              </div>
              <p className="text-ark-accent uppercase text-sm tracking-wider mb-6 font-semibold">Capabilities</p>
              <ul className="space-y-3 text-ark-light mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-ark-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 lead response
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-ark-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Customer Q&A handling
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-ark-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Appointment booking
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-ark-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Lead qualification
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-ark-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-channel (Web, WhatsApp, SMS, IG)
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-ark-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Your brand voice
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-ark-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Human handoff when needed
                </li>
              </ul>
              <Link href="/ai-employees" className="inline-flex items-center gap-2 text-ark-accent font-medium hover:gap-3 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-20 h-20 rounded-2xl bg-ark-accent flex items-center justify-center mb-8">
                <span className="text-3xl font-bold text-white">04</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">24/7 AI Employees</h2>
              <p className="text-xl text-ark-light mb-8 leading-relaxed">
                AI assistants that respond to leads, answer questions, and book appointments. Around the clock. In your brand voice. Your business never sleeps.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-ark-light">
                  <svg className="w-5 h-5 text-ark-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Never miss another lead</span>
                </li>
                <li className="flex items-start gap-3 text-ark-light">
                  <svg className="w-5 h-5 text-ark-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Instant responses, any time of day</span>
                </li>
                <li className="flex items-start gap-3 text-ark-light">
                  <svg className="w-5 h-5 text-ark-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Trained specifically on your business</span>
                </li>
              </ul>
              <p className="text-ark-muted text-sm">Setup: 2-3 weeks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-4">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold">Simple process. Clear expectations.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-ark-gray flex items-center justify-center">
                <span className="text-2xl font-bold text-ark-accent">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discovery</h3>
              <p className="text-ark-light">We learn your business. Goals, customers, what&apos;s working, what isn&apos;t. No assumptions—just understanding.</p>
              <p className="text-ark-muted text-sm mt-4">Week 1-2</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-ark-gray flex items-center justify-center">
                <span className="text-2xl font-bold text-ark-accent">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Build</h3>
              <p className="text-ark-light">We design, develop, and implement. Weekly updates, transparent progress, no surprises.</p>
              <p className="text-ark-muted text-sm mt-4">Week 3-8</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-ark-accent flex items-center justify-center">
                <span className="text-2xl font-bold text-white">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Launch + Grow</h3>
              <p className="text-ark-light">We don&apos;t disappear after launch. Ongoing support, optimization, and growth. True partnership.</p>
              <p className="text-ark-muted text-sm mt-4">Ongoing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-ark-accent">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-ark-black">
            Ready to build your foundation?
          </h2>
          <p className="text-xl text-ark-black/70 max-w-xl mx-auto mb-12">
            Tell us about your business. We&apos;ll tell you how we can help.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-ark-black text-ark-white px-10 py-5 text-lg font-medium hover:bg-ark-dark transition-colors">
            Start a Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
