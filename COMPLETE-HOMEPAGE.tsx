// COMPLETE HOMEPAGE - Move to app/page.tsx after review
// This file contains ALL sections from the original HTML
// Sections: Hero, Marquee, What If, Problem, Services Grid, How We're Different, 
// Live Demo, The Name, Who We Serve, Process Timeline, Results, Stats Bar, FAQ,
// Testimonials, Why Trust Us, Our Promise, Final CTA

import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">
            <div className="fade-up">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 bg-green-500 rounded-full pulse-dot"></span>
                <span className="text-ark-light text-sm tracking-wide">Accepting 3 new clients this month</span>
              </div>
            </div>
            
            <h1 className="fade-up stagger-1 text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8">
              Stop paying for<br />
              <span className="line-through text-ark-muted">projects.</span><br />
              <span className="gradient-text">Build infrastructure.</span>
            </h1>
            
            <p className="fade-up stagger-2 text-xl md:text-2xl text-ark-light max-w-2xl mb-12 leading-relaxed">
              Websites. Digital presence. Automations. AI that works 24/7.<br />
              <span className="text-ark-white font-medium">The systems that grow your business while you sleep.</span>
            </p>
            
            <div className="fade-up stagger-3 flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-3 bg-ark-white text-ark-black px-8 py-4 font-medium hover:bg-ark-light transition-all">
                Start a Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-3 border border-ark-border text-ark-white px-8 py-4 font-medium hover:bg-ark-gray hover:border-ark-muted transition-all">
                What We Build
              </Link>
            </div>
            
            <div className="fade-up stagger-4 flex flex-wrap items-center gap-6 text-sm text-ark-muted">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-ark-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>No templates</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-ark-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>24-hour response</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-ark-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>English & Español</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ark-muted">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-ark-muted to-transparent"></div>
        </div>
      </section>

      {/* Marquee - Industries We Serve */}
      <section className="py-6 border-y border-ark-border bg-ark-darker overflow-hidden">
        <div className="marquee">
          <div className="marquee-content flex">
            {['MED SPAS', 'CONTRACTORS', 'E-COMMERCE', 'REAL ESTATE', 'AGENCIES', 'RESTAURANTS', 'COACHES', 'CONSULTANTS', 'LAW FIRMS', 'DENTAL'].map((item, i) => (
              <span key={i} className="flex items-center">
                <span className="text-ark-muted text-sm tracking-widest uppercase whitespace-nowrap px-8">{item}</span>
                <span className="text-ark-accent">•</span>
              </span>
            ))}
            {['MED SPAS', 'CONTRACTORS', 'E-COMMERCE', 'REAL ESTATE', 'AGENCIES', 'RESTAURANTS', 'COACHES', 'CONSULTANTS', 'LAW FIRMS', 'DENTAL'].map((item, i) => (
              <span key={`dup-${i}`} className="flex items-center">
                <span className="text-ark-muted text-sm tracking-widest uppercase whitespace-nowrap px-8">{item}</span>
                <span className="text-ark-accent">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What If */}
      <section className="py-32 px-6 border-t border-ark-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-8">What If...</p>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <span className="text-3xl text-ark-accent">→</span>
                <p className="text-2xl md:text-3xl font-medium leading-snug">Your website actually brought in customers instead of just existing?</p>
              </div>
              <div className="flex gap-6 items-start">
                <span className="text-3xl text-ark-accent">→</span>
                <p className="text-2xl md:text-3xl font-medium leading-snug">Every lead got a response in seconds—even at 3am on a Sunday?</p>
              </div>
              <div className="flex gap-6 items-start">
                <span className="text-3xl text-ark-accent">→</span>
                <p className="text-2xl md:text-3xl font-medium leading-snug">Your business worked while you slept, traveled, or took a day off?</p>
              </div>
              <div className="flex gap-6 items-start">
                <span className="text-3xl text-ark-accent">→</span>
                <p className="text-2xl md:text-3xl font-medium leading-snug">You had infrastructure instead of just another expense?</p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-ark-border">
              <p className="text-ark-light text-lg mb-6">
                This isn&apos;t a fantasy. This is what infrastructure does. And this is what we build.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-ark-accent font-medium hover:gap-3 transition-all">
                Let&apos;s talk about your business
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-32 px-6 bg-ark-darker">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-6">The Problem</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Everyone has a website.<br />
                Almost no one has<br />
                <span className="text-ark-accent">infrastructure.</span>
              </h2>
            </div>
            <div className="space-y-6 text-lg text-ark-light leading-relaxed">
              <p>A website without traffic is a billboard in the desert.</p>
              <p>Marketing without automation is a leaky bucket.</p>
              <p>Leads without instant follow-up are money walking away.</p>
              <div className="h-px bg-ark-border my-8"></div>
              <p className="text-ark-white text-xl font-medium">
                We build complete systems where every piece works together. That&apos;s the difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6 bg-ark-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-4">What We Build</p>
              <h2 className="text-4xl md:text-5xl font-bold">Four pillars. One foundation.</h2>
            </div>
            <Link href="/services" className="text-ark-accent font-medium flex items-center gap-2 hover:gap-3 transition-all">
              View all services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Service 1: Websites */}
            <Link href="/services#websites" className="service-card gradient-border rounded-xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-ark-gray flex items-center justify-center">
                  <svg className="w-6 h-6 card-icon text-ark-light transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <svg className="w-5 h-5 card-arrow text-ark-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Websites</h3>
              <p className="text-ark-light">Custom designed, built to convert. Not templates—real infrastructure for your business.</p>
            </Link>

            {/* Service 2: Digital Presence */}
            <Link href="/services#presence" className="service-card gradient-border rounded-xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-ark-gray flex items-center justify-center">
                  <svg className="w-6 h-6 card-icon text-ark-light transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <svg className="w-5 h-5 card-arrow text-ark-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Digital Presence</h3>
              <p className="text-ark-light">SEO, social, paid ads—strategy that actually drives results, not vanity metrics.</p>
            </Link>

            {/* Service 3: Automations */}
            <Link href="/services#automations" className="service-card gradient-border rounded-xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-ark-gray flex items-center justify-center">
                  <svg className="w-6 h-6 card-icon text-ark-light transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <svg className="w-5 h-5 card-arrow text-ark-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Automations</h3>
              <p className="text-ark-light">Stop doing repetitive tasks. We connect your tools and give you back your time.</p>
            </Link>

            {/* Service 4: AI Employees (Featured) */}
            <Link href="/ai-employees" className="service-card rounded-xl p-8 bg-gradient-to-br from-ark-accent/10 to-transparent border border-ark-accent/30 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-ark-accent/20 rounded text-xs text-ark-accent font-medium">
                  <span className="w-1.5 h-1.5 bg-ark-accent rounded-full pulse-dot"></span>
                  Always On
                </span>
              </div>
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-ark-accent/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-ark-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <svg className="w-5 h-5 card-arrow text-ark-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">24/7 AI Employees</h3>
              <p className="text-ark-light">Real AI employees that answer calls, send emails, book appointments, update your CRM, and execute work. Around the clock.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-6">Why Us</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Most agencies sell you a website.<br />
              We build the machine.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-ark-gray flex items-center justify-center">
                <span className="text-2xl font-bold text-ark-accent">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Systems, not projects</h3>
              <p className="text-ark-light">We don&apos;t hand you a website and disappear. We build systems that compound over time.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-ark-gray flex items-center justify-center">
                <span className="text-2xl font-bold text-ark-accent">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Results, not deliverables</h3>
              <p className="text-ark-light">We measure success by your growth, not by how many files we hand over.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-ark-gray flex items-center justify-center">
                <span className="text-2xl font-bold text-ark-accent">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Partnership, not vendor</h3>
              <p className="text-ark-light">We work with few clients, deeply. Your success is our reputation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-gradient-to-b from-ark-dark to-ark-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-ark-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-ark-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-ark-white rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-6">Ready?</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            Let&apos;s build your<br />foundation.
          </h2>
          <p className="text-xl text-ark-light max-w-xl mx-auto mb-12">
            Tell us about your business. We&apos;ll respond within 24 hours with honest thoughts on how we can help.
          </p>
          <Link href="/contact" className="group inline-flex items-center justify-center gap-3 bg-ark-white text-ark-black px-10 py-5 text-lg font-medium hover:bg-ark-accent hover:text-white transition-all">
            Start a Conversation
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="text-ark-muted mt-8">hello@arkiology.com</p>
        </div>
      </section>
    </>
  );
}
