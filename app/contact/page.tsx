'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <div className="fade-up">
            <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-6">Contact</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-8">
              Let&apos;s build<br />
              <span className="gradient-text">something.</span>
            </h1>
            <p className="text-xl text-ark-light max-w-md leading-relaxed mb-12">
              Tell us about your business. We&apos;ll respond within 24 hours with thoughts on how we can help.
            </p>
            <div className="space-y-8">
              <div>
                <p className="text-ark-muted uppercase text-sm tracking-wider mb-2">Email</p>
                <a href="mailto:hello@arkiology.com" className="text-xl hover:text-ark-accent transition-colors">
                  hello@arkiology.com
                </a>
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
          </div>

          {/* Right Column - Form */}
          <div className={submitted ? 'submitted' : ''}>
            {!submitted ? (
              <div className="gradient-border rounded-2xl p-8 md:p-10">
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
                        className="w-full px-4 py-3 rounded-lg bg-ark-gray border border-ark-border text-ark-white focus:border-ark-accent focus:outline-none"
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
                        className="w-full px-4 py-3 rounded-lg bg-ark-gray border border-ark-border text-ark-white focus:border-ark-accent focus:outline-none"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm text-ark-muted mb-2">What are you interested in? *</label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-ark-gray border border-ark-border text-ark-white focus:border-ark-accent focus:outline-none"
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
                    <label htmlFor="message" className="block text-sm text-ark-muted mb-2">Tell us about your project *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-ark-gray border border-ark-border text-ark-white focus:border-ark-accent focus:outline-none resize-none"
                      placeholder="What are you trying to achieve? What challenges are you facing?"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-ark-white text-ark-black py-4 px-8 rounded-lg font-medium hover:bg-ark-light transition-colors flex items-center justify-center gap-3"
                  >
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  
                  <p className="text-ark-muted text-sm text-center">
                    We&apos;ll respond within 24 hours.
                  </p>
                </form>
              </div>
            ) : (
              <div className="gradient-border rounded-2xl p-8 md:p-12 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-green-500/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold mb-4">Message received!</h2>
                <p className="text-ark-light mb-8">
                  Thanks for reaching out. We&apos;ll review your project details and get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
