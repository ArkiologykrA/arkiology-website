'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      const element = document.getElementById('contactForm');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <main>
      {/* Main Content */}
      <section className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column - Info */}
            <div className="fade-up">
              <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-6">Contact</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-8">
                Let's build<br />
                <span className="gradient-text">something.</span>
              </h1>
              <p className="text-xl text-ark-light max-w-md leading-relaxed mb-12">
                Tell us about your business. We'll respond within 24 hours with thoughts on how we can help.
              </p>
              <div className="space-y-8">
                <div>
                  <p className="text-ark-muted uppercase text-sm tracking-wider mb-2">Email</p>
                  <a href="mailto:hello@arkiology.com" className="text-xl hover:text-ark-accent transition-colors cursor-pointer">hello@arkiology.com</a>
                </div>
                <div>
                  <p className="text-ark-muted uppercase text-sm tracking-wider mb-2">Location</p>
                  <p className="text-xl">South Florida, USA</p>
                </div>
                <div>
                  <p className="text-ark-muted uppercase text-sm tracking-wider mb-2">Response Time</p>
                  <p className="text-xl">Within 24 hours</p>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-ark-border">
                <p className="text-ark-muted mb-4">Follow us</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 border border-ark-border rounded-lg flex items-center justify-center hover:border-ark-accent hover:text-ark-accent transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 border border-ark-border rounded-lg flex items-center justify-center hover:border-ark-accent hover:text-ark-accent transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 border border-ark-border rounded-lg flex items-center justify-center hover:border-ark-accent hover:text-ark-accent transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Right Column - Form */}
            <div className={`form-container ${formSubmitted ? 'submitted' : ''}`} id="contactForm">
              {/* Form State */}
              {!formSubmitted ? (
                <div className="form-state gradient-border rounded-2xl p-8 md:p-10">
                  <h2 className="text-2xl font-semibold mb-8">Start a project</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm text-ark-muted mb-2">Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-lg text-ark-white bg-ark-gray border border-ark-border focus:border-ark-accent focus:outline-none focus:ring-2 focus:ring-ark-accent/20"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm text-ark-muted mb-2">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-lg text-ark-white bg-ark-gray border border-ark-border focus:border-ark-accent focus:outline-none focus:ring-2 focus:ring-ark-accent/20"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm text-ark-muted mb-2">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 rounded-lg text-ark-white bg-ark-gray border border-ark-border focus:border-ark-accent focus:outline-none focus:ring-2 focus:ring-ark-accent/20"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm text-ark-muted mb-2">What are you interested in? *</label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full px-4 py-3 rounded-lg text-ark-white bg-ark-gray border border-ark-border focus:border-ark-accent focus:outline-none focus:ring-2 focus:ring-ark-accent/20 cursor-pointer"
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="website">Website Development</option>
                        <option value="presence">Digital Presence / Marketing</option>
                        <option value="automations">Automations</option>
                        <option value="ai">24/7 AI Employees</option>
                        <option value="complete">Complete Foundation (All Services)</option>
                        <option value="other">Not sure / Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm text-ark-muted mb-2">Budget range</label>
                      <select
                        id="budget"
                        name="budget"
                        className="w-full px-4 py-3 rounded-lg text-ark-white bg-ark-gray border border-ark-border focus:border-ark-accent focus:outline-none focus:ring-2 focus:ring-ark-accent/20 cursor-pointer"
                      >
                        <option value="" disabled>Select a range</option>
                        <option value="<5k">Less than $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k+">$25,000+</option>
                        <option value="unsure">Not sure yet</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm text-ark-muted mb-2">Tell us about your project *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 rounded-lg text-ark-white bg-ark-gray border border-ark-border focus:border-ark-accent focus:outline-none focus:ring-2 focus:ring-ark-accent/20 resize-none"
                        placeholder="What are you trying to achieve? What challenges are you facing?"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm text-ark-muted mb-2">Timeline</label>
                      <select
                        id="timeline"
                        name="timeline"
                        className="w-full px-4 py-3 rounded-lg text-ark-white bg-ark-gray border border-ark-border focus:border-ark-accent focus:outline-none focus:ring-2 focus:ring-ark-accent/20 cursor-pointer"
                      >
                        <option value="" disabled>When do you want to start?</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1month">Within 1 month</option>
                        <option value="3months">Within 3 months</option>
                        <option value="exploring">Just exploring</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-ark-white text-ark-black py-4 px-8 rounded-lg font-medium hover:bg-ark-light transition-colors cursor-pointer flex items-center justify-center gap-3"
                    >
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </button>
                    <p className="text-ark-muted text-sm text-center">
                      We'll respond within 24 hours.
                    </p>
                  </form>
                </div>
              ) : (
                /* Success State */
                <div className="success-state gradient-border rounded-2xl p-8 md:p-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-ark-green/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-ark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h2 className="text-2xl font-semibold mb-4">Message received!</h2>
                  <p className="text-ark-light mb-8">
                    Thanks for reaching out. We'll review your project details and get back to you within 24 hours.
                  </p>
                  <a href="/" className="inline-flex items-center gap-2 text-ark-accent font-medium cursor-pointer hover:gap-3 transition-all">
                    Back to home
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-t border-ark-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-4">Common Questions</p>
            <h2 className="text-3xl font-bold mb-12">Before we talk</h2>
            <div className="space-y-8">
              <div className="border-b border-ark-border pb-6">
                <h3 className="text-lg font-semibold mb-3">What's the typical project timeline?</h3>
                <p className="text-ark-light">Most website projects take 4-8 weeks. AI employee setup is 2-3 weeks. Automations can be 1-3 weeks depending on complexity. We'll give you a specific timeline after our initial conversation.</p>
              </div>
              <div className="border-b border-ark-border pb-6">
                <h3 className="text-lg font-semibold mb-3">What's your pricing like?</h3>
                <p className="text-ark-light">Every project is different. We provide custom quotes after understanding your specific needs—no templates, no one-size-fits-all pricing. Tell us about your project and we'll give you a clear proposal.</p>
              </div>
              <div className="border-b border-ark-border pb-6">
                <h3 className="text-lg font-semibold mb-3">Do you work with small businesses?</h3>
                <p className="text-ark-light">Absolutely. We work with businesses of all sizes—from solopreneurs to established companies. What matters is that you're serious about growth and ready to invest in your infrastructure.</p>
              </div>
              <div className="pb-6">
                <h3 className="text-lg font-semibold mb-3">What if I'm not sure what I need?</h3>
                <p className="text-ark-light">That's fine. Many clients come to us knowing they need "something" but aren't sure what. We'll have a conversation, understand your goals, and recommend the right approach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
