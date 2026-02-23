import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
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
              <a href="/contact" className="group inline-flex items-center justify-center gap-3 bg-ark-white text-ark-black px-8 py-4 font-medium hover:bg-ark-light transition-all cursor-pointer">
                Start a Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
              <a href="/services" className="inline-flex items-center justify-center gap-3 border border-ark-border text-ark-white px-8 py-4 font-medium hover:bg-ark-gray hover:border-ark-muted transition-all cursor-pointer">
                What We Build
              </a>
            </div>
            <div className="fade-up stagger-4 flex flex-wrap items-center gap-6 text-sm text-ark-muted">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-ark-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>No templates</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-ark-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>24-hour response</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-ark-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
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

      {/* 2. Marquee */}
      <section className="py-6 border-y border-ark-border bg-ark-darker overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="flex">
                <span className="text-ark-muted text-sm tracking-widest uppercase whitespace-nowrap px-8">MED SPAS</span>
                <span className="text-ark-accent">•</span>
                <span className="text-ark-muted text-sm tracking-widest uppercase whitespace-nowrap px-8">CONTRACTORS</span>
                <span className="text-ark-accent">•</span>
                <span className="text-ark-muted text-sm tracking-widest uppercase whitespace-nowrap px-8">E-COMMERCE</span>
                <span className="text-ark-accent">•</span>
                <span className="text-ark-muted text-sm tracking-widest uppercase whitespace-nowrap px-8">REAL ESTATE</span>
                <span className="text-ark-accent">•</span>
                <span className="text-ark-muted text-sm tracking-widest uppercase whitespace-nowrap px-8">AGENCIES</span>
                <span className="text-ark-accent">•</span>
                <span className="text-ark-muted text-sm tracking-widest uppercase whitespace-nowrap px-8">RESTAURANTS</span>
                <span className="text-ark-accent">•</span>
                <span className="text-ark-muted text-sm tracking-widest uppercase whitespace-nowrap px-8">COACHES</span>
                <span className="text-ark-accent">•</span>
                <span className="text-ark-muted text-sm tracking-widest uppercase whitespace-nowrap px-8">CONSULTANTS</span>
                <span className="text-ark-accent">•</span>
                <span className="text-ark-muted text-sm tracking-widest uppercase whitespace-nowrap px-8">LAW FIRMS</span>
                <span className="text-ark-accent">•</span>
                <span className="text-ark-muted text-sm tracking-widest uppercase whitespace-nowrap px-8">DENTAL</span>
                <span className="text-ark-accent">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What If */}
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
                This isn't a fantasy. This is what infrastructure does. And this is what we build.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 text-ark-accent font-medium cursor-pointer hover:gap-3 transition-all">
                Let's talk about your business
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Problem */}
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
                We build complete systems where every piece works together. That's the difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Grid */}
      <section className="py-32 px-6 bg-ark-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-4">What We Build</p>
              <h2 className="text-4xl md:text-5xl font-bold">Four pillars. One foundation.</h2>
            </div>
            <a href="/services" className="text-ark-accent font-medium flex items-center gap-2 cursor-pointer hover:gap-3 transition-all">
              View all services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/services" className="service-card gradient-border rounded-xl p-8 cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-ark-gray flex items-center justify-center">
                  <svg className="w-6 h-6 card-icon text-ark-light transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <svg className="w-5 h-5 card-arrow text-ark-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Websites</h3>
              <p className="text-ark-light">Custom designed, built to convert. Not templates—real infrastructure for your business.</p>
            </a>

            <a href="/services" className="service-card gradient-border rounded-xl p-8 cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-ark-gray flex items-center justify-center">
                  <svg className="w-6 h-6 card-icon text-ark-light transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <svg className="w-5 h-5 card-arrow text-ark-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Digital Presence</h3>
              <p className="text-ark-light">SEO, social, paid ads—strategy that actually drives results, not vanity metrics.</p>
            </a>

            <a href="/services" className="service-card gradient-border rounded-xl p-8 cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-ark-gray flex items-center justify-center">
                  <svg className="w-6 h-6 card-icon text-ark-light transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                </div>
                <svg className="w-5 h-5 card-arrow text-ark-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Automations</h3>
              <p className="text-ark-light">Stop doing repetitive tasks. We connect your tools and give you back your time.</p>
            </a>

            <a href="/ai-employees" className="service-card rounded-xl p-8 cursor-pointer bg-gradient-to-br from-ark-accent/10 to-transparent border border-ark-accent/30 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-ark-accent/20 rounded text-xs text-ark-accent font-medium">
                  <span className="w-1.5 h-1.5 bg-ark-accent rounded-full pulse-dot"></span>
                  Always On
                </span>
              </div>
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-ark-accent/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-ark-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                </div>
                <svg className="w-5 h-5 card-arrow text-ark-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">24/7 AI Employees</h3>
              <p className="text-ark-light">Real AI employees that answer calls, send emails, book appointments, update your CRM, and execute work. Around the clock.</p>
            </a>
          </div>
        </div>
      </section>

      {/* 6. How We're Different */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-6">Why Us</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Most agencies sell you a website.<br />We build the machine.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-ark-gray flex items-center justify-center">
                <span className="text-2xl font-bold text-ark-accent">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Systems, not projects</h3>
              <p className="text-ark-light">We don't hand you a website and disappear. We build systems that compound over time.</p>
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

      {/* 7. Live Demo Mock */}
      <section className="py-24 px-6 bg-ark-darker border-t border-ark-border overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-4">See It In Action</p>
            <h2 className="text-3xl md:text-4xl font-bold">What happens when a lead lands on your site at 2am?</h2>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="gradient-border rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-ark-border">
                <div className="w-10 h-10 rounded-full bg-ark-accent/20 flex items-center justify-center">
                  <span className="text-ark-accent font-bold">A</span>
                </div>
                <div>
                  <p className="font-medium">Arkiology AI</p>
                  <p className="text-ark-muted text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-ark-green rounded-full"></span>
                    Online now
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-ark-accent/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                  <p className="text-sm">Hi, I'm interested in getting a new website for my dental practice. Do you work with healthcare businesses?</p>
                  <p className="text-xs text-ark-muted mt-1">2:14 AM</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-ark-gray rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                  <p className="text-sm">Hi! Yes, we work with dental practices and healthcare businesses regularly. We understand the unique needs—HIPAA considerations, patient booking systems, and professional credibility.</p>
                  <p className="text-xs text-ark-muted mt-1">2:14 AM • AI</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-ark-accent/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                  <p className="text-sm">That sounds great. Can I schedule a call to discuss?</p>
                  <p className="text-xs text-ark-muted mt-1">2:15 AM</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-ark-gray rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                  <p className="text-sm mb-3">Absolutely! I can book that for you right now. Here are some available slots this week:</p>
                  <div className="space-y-2">
                    <button className="w-full text-left px-3 py-2 bg-ark-accent/10 border border-ark-accent/30 rounded-lg text-sm hover:bg-ark-accent/20 transition-colors cursor-pointer">
                      📅 Tuesday, Feb 25 at 10:00 AM
                    </button>
                    <button className="w-full text-left px-3 py-2 bg-ark-accent/10 border border-ark-accent/30 rounded-lg text-sm hover:bg-ark-accent/20 transition-colors cursor-pointer">
                      📅 Wednesday, Feb 26 at 2:00 PM
                    </button>
                  </div>
                  <p className="text-xs text-ark-muted mt-2">2:15 AM • AI</p>
                </div>
              </div>
            </div>
            <p className="text-center text-ark-muted mt-6 text-sm">
              ↑ This happened while you were asleep. Lead captured. Meeting booked.
            </p>
          </div>
        </div>
      </section>

      {/* 8. The Name */}
      <section className="py-32 px-6 bg-ark-darker border-y border-ark-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-6">The Name</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                The science of building<br />digital foundations.
              </h2>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <span className="text-ark-accent font-bold text-2xl w-24">Ark</span>
                  <p className="text-ark-light text-lg">Shelter. Foundation. Preservation. The vessel that protects what matters.</p>
                </div>
                <div className="flex gap-6">
                  <span className="text-ark-accent font-bold text-2xl w-24">-ology</span>
                  <p className="text-ark-light text-lg">The science of. The study of. Deep expertise in a discipline.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 border-2 border-ark-border rotate-45"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border-2 border-ark-accent/50 rotate-45"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-bold text-ark-accent">▲</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Who We Serve */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-4">Who We Serve</p>
            <h2 className="text-3xl md:text-4xl font-bold">Businesses ready to grow.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="gradient-border rounded-xl p-8">
              <div className="w-12 h-12 rounded-lg bg-ark-accent/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-ark-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Service Businesses</h3>
              <p className="text-ark-light">Contractors, agencies, consultants, coaches. If you sell expertise and time, we help you scale without burning out.</p>
            </div>
            <div className="gradient-border rounded-xl p-8">
              <div className="w-12 h-12 rounded-lg bg-ark-accent/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-ark-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">E-Commerce & Retail</h3>
              <p className="text-ark-light">Online stores, local shops, DTC brands. We build the infrastructure that turns browsers into buyers.</p>
            </div>
            <div className="gradient-border rounded-xl p-8">
              <div className="w-12 h-12 rounded-lg bg-ark-accent/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-ark-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Growing Companies</h3>
              <p className="text-ark-light">Teams that have outgrown their current setup. We build the systems that support your next stage of growth.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-ark-muted">
              Not sure if we're a fit? <a href="/contact" className="text-ark-accent hover:underline cursor-pointer">Let's find out →</a>
            </p>
          </div>
        </div>
      </section>

      {/* 10. Process Timeline */}
      <section className="py-24 px-6 border-t border-ark-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-4">From Zero to Live</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Here's what the first 8 weeks look like.</h2>
            <p className="text-ark-light max-w-xl mx-auto">New software shouldn't take a year to implement. Here's what you can expect.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="gradient-border rounded-xl p-6">
              <div className="text-ark-accent font-semibold mb-4">Week 1-2</div>
              <h3 className="text-xl font-semibold mb-3">Discovery</h3>
              <ul className="space-y-2 text-ark-light text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-ark-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Business deep-dive call
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-ark-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Goals & requirements defined
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-ark-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Project scope & timeline set
                </li>
              </ul>
            </div>
            <div className="gradient-border rounded-xl p-6">
              <div className="text-ark-accent font-semibold mb-4">Week 3-4</div>
              <h3 className="text-xl font-semibold mb-3">Design</h3>
              <ul className="space-y-2 text-ark-light text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-ark-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Wireframes & structure
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-ark-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Visual design concepts
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-ark-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Feedback & revisions
                </li>
              </ul>
            </div>
            <div className="gradient-border rounded-xl p-6">
              <div className="text-ark-accent font-semibold mb-4">Week 5-6</div>
              <h3 className="text-xl font-semibold mb-3">Build</h3>
              <ul className="space-y-2 text-ark-light text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-ark-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Development begins
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-ark-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Integrations connected
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-ark-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Content loaded
                </li>
              </ul>
            </div>
            <div className="rounded-xl p-6 bg-gradient-to-br from-ark-accent/10 to-transparent border border-ark-accent/30">
              <div className="text-ark-accent font-semibold mb-4">Week 7-8</div>
              <h3 className="text-xl font-semibold mb-3">Launch</h3>
              <ul className="space-y-2 text-ark-light text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-ark-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  QA & testing
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-ark-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Training & handoff
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-ark-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Go live!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Results Section */}
      <section className="py-32 px-6 bg-ark-darker border-y border-ark-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-4">Results</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What infrastructure actually delivers.</h2>
            <p className="text-ark-light text-lg max-w-2xl mx-auto">These aren't vanity metrics. These are business outcomes our clients measure.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="gradient-border rounded-xl p-8 text-center">
              <p className="text-5xl md:text-6xl font-bold text-ark-accent mb-2">3x</p>
              <p className="text-xl font-semibold mb-2">More qualified leads</p>
              <p className="text-ark-light text-sm">With AI responding instantly to every inquiry, 24/7.</p>
            </div>
            <div className="gradient-border rounded-xl p-8 text-center">
              <p className="text-5xl md:text-6xl font-bold text-ark-accent mb-2">40%</p>
              <p className="text-xl font-semibold mb-2">Time saved weekly</p>
              <p className="text-ark-light text-sm">Automations handle the repetitive work so you don't.</p>
            </div>
            <div className="gradient-border rounded-xl p-8 text-center">
              <p className="text-5xl md:text-6xl font-bold text-ark-accent mb-2">&lt;5s</p>
              <p className="text-xl font-semibold mb-2">Lead response time</p>
              <p className="text-ark-light text-sm">Speed-to-lead is everything. We make it instant.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl p-8 bg-ark-black/50 border border-ark-border">
              <p className="text-ark-muted uppercase text-sm tracking-widest mb-6">Without Infrastructure</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-ark-light">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  Website is a digital brochure nobody visits
                </li>
                <li className="flex items-start gap-3 text-ark-light">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  Leads wait hours or days for a response
                </li>
                <li className="flex items-start gap-3 text-ark-light">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  You're the bottleneck for everything
                </li>
                <li className="flex items-start gap-3 text-ark-light">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  Growth = More hours, more stress
                </li>
              </ul>
            </div>
            <div className="rounded-xl p-8 bg-gradient-to-br from-ark-accent/10 to-transparent border border-ark-accent/30">
              <p className="text-ark-accent uppercase text-sm tracking-widest mb-6">With Arkiology</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-ark-white">
                  <svg className="w-5 h-5 text-ark-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Website converts visitors into customers
                </li>
                <li className="flex items-start gap-3 text-ark-white">
                  <svg className="w-5 h-5 text-ark-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  AI responds instantly, qualifies, books appointments
                </li>
                <li className="flex items-start gap-3 text-ark-white">
                  <svg className="w-5 h-5 text-ark-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Systems handle routine work automatically
                </li>
                <li className="flex items-start gap-3 text-ark-white">
                  <svg className="w-5 h-5 text-ark-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Growth = More revenue, same effort
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Stats Bar */}
      <section className="py-16 px-6 bg-ark-accent">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-ark-black">24/7</p>
              <p className="text-ark-black/70 mt-2 text-sm">AI availability</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-ark-black">4-8</p>
              <p className="text-ark-black/70 mt-2 text-sm">Weeks to launch</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-ark-black">100%</p>
              <p className="text-ark-black/70 mt-2 text-sm">Custom built</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-ark-black">0</p>
              <p className="text-ark-black/70 mt-2 text-sm">Templates used</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <section className="py-24 px-6 border-t border-ark-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-4">Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold">Common questions, straight answers.</h2>
          </div>
          <div className="space-y-4">
            <details className="group gradient-border rounded-xl">
              <summary className="p-6 cursor-pointer flex items-center justify-between font-semibold">
                How much do your services cost?
                <svg className="w-5 h-5 text-ark-accent transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </summary>
              <div className="px-6 pb-6 text-ark-light">
                Every project is different, so we don't publish fixed prices. We'll give you a clear quote after our initial discovery call—no surprises, no hidden fees. Our goal is to understand your needs first, then propose a solution that makes sense for your business and budget.
              </div>
            </details>
            <details className="group gradient-border rounded-xl">
              <summary className="p-6 cursor-pointer flex items-center justify-between font-semibold">
                How long does a typical project take?
                <svg className="w-5 h-5 text-ark-accent transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </summary>
              <div className="px-6 pb-6 text-ark-light">
                Most projects launch within 4-8 weeks. Simple websites can be faster; more complex systems with AI integrations may take longer. We'll give you a realistic timeline upfront and keep you updated throughout.
              </div>
            </details>
            <details className="group gradient-border rounded-xl">
              <summary className="p-6 cursor-pointer flex items-center justify-between font-semibold">
                Do you offer ongoing support after launch?
                <svg className="w-5 h-5 text-ark-accent transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </summary>
              <div className="px-6 pb-6 text-ark-light">
                Yes. We offer monthly retainers for ongoing maintenance, updates, and optimization. Infrastructure isn't "set it and forget it"—it needs care to keep performing. We're here for the long term.
              </div>
            </details>
            <details className="group gradient-border rounded-xl">
              <summary className="p-6 cursor-pointer flex items-center justify-between font-semibold">
                What makes your AI employees different from chatbots?
                <svg className="w-5 h-5 text-ark-accent transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </summary>
              <div className="px-6 pb-6 text-ark-light">
                Traditional chatbots use scripted responses and break down quickly. Our AI employees are custom-trained on your specific business—your products, services, FAQs, and voice. They handle nuanced conversations, qualify leads, and take real actions like booking appointments.
              </div>
            </details>
            <details className="group gradient-border rounded-xl">
              <summary className="p-6 cursor-pointer flex items-center justify-between font-semibold">
                Can you work with my existing website/systems?
                <svg className="w-5 h-5 text-ark-accent transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </summary>
              <div className="px-6 pb-6 text-ark-light">
                Absolutely. We can integrate with most existing platforms—Shopify, WordPress, Webflow, HubSpot, Salesforce, and many others. Sometimes a rebuild makes more sense, but we'll evaluate honestly and recommend what's best for your situation.
              </div>
            </details>
            <details className="group gradient-border rounded-xl">
              <summary className="p-6 cursor-pointer flex items-center justify-between font-semibold">
                Where are you located?
                <svg className="w-5 h-5 text-ark-accent transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </summary>
              <div className="px-6 pb-6 text-ark-light">
                We're based in South Florida, but we work with clients globally. Modern tools make remote collaboration seamless. We're fluent in English and Spanish.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* 14. Testimonials */}
      <section className="py-24 px-6 border-t border-ark-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-4">Client Stories</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for businesses like yours.</h2>
            <p className="text-ark-light">Don't just take our word for it.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="gradient-border rounded-xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-ark-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-ark-light mb-6 leading-relaxed">"We were drowning in leads we couldn't respond to fast enough. The AI employee they built handles the first touch instantly—our close rate went up 35%."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ark-gray flex items-center justify-center text-ark-accent font-semibold">M</div>
                <div>
                  <p className="font-medium">Maria R.</p>
                  <p className="text-ark-muted text-sm">Med Spa Owner</p>
                </div>
              </div>
            </div>
            <div className="gradient-border rounded-xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-ark-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-ark-light mb-6 leading-relaxed">"Finally, a website that actually brings in business. SEO traffic is up 200% in 6 months. Should have done this years ago."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ark-gray flex items-center justify-center text-ark-accent font-semibold">J</div>
                <div>
                  <p className="font-medium">James T.</p>
                  <p className="text-ark-muted text-sm">General Contractor</p>
                </div>
              </div>
            </div>
            <div className="gradient-border rounded-xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-ark-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-ark-light mb-6 leading-relaxed">"The automations alone save me 15+ hours a week. I actually took a vacation and the business kept running. That's never happened before."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ark-gray flex items-center justify-center text-ark-accent font-semibold">S</div>
                <div>
                  <p className="font-medium">Sarah L.</p>
                  <p className="text-ark-muted text-sm">E-commerce Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. Why Clients Trust Us */}
      <section className="py-20 px-6 border-t border-ark-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 items-center text-center">
            <div className="col-span-1 md:col-span-2">
              <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-2">Why Clients Trust Us</p>
              <p className="text-ark-light">Built on experience, transparency, and results.</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-ark-white mb-1">2wk</p>
              <p className="text-ark-muted text-sm">Fastest launch</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-ark-white mb-1">100%</p>
              <p className="text-ark-muted text-sm">On-time delivery</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-ark-white mb-1">&lt;24h</p>
              <p className="text-ark-muted text-sm">Response time</p>
            </div>
          </div>
        </div>
      </section>

      {/* 16. Our Promise */}
      <section className="py-24 px-6 bg-ark-darker border-t border-ark-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-6">Our Promise</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">We don't disappear after launch.</h2>
          <p className="text-xl text-ark-light mb-12 leading-relaxed">
            Most agencies hand you a website and move on. We build systems that need ongoing care—and we're here for it. Monthly check-ins. Performance reviews. Continuous optimization. Your success is our reputation.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-ark-black/50 border border-ark-border">
              <div className="w-12 h-12 rounded-full bg-ark-accent/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-ark-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <p className="font-semibold mb-2">24-Hour Response</p>
              <p className="text-ark-light text-sm">Questions? Issues? We respond within a business day. Always.</p>
            </div>
            <div className="p-6 rounded-xl bg-ark-black/50 border border-ark-border">
              <div className="w-12 h-12 rounded-full bg-ark-accent/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-ark-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <p className="font-semibold mb-2">You Own Everything</p>
              <p className="text-ark-light text-sm">Code, assets, accounts. It's yours. No hostage situations.</p>
            </div>
            <div className="p-6 rounded-xl bg-ark-black/50 border border-ark-border">
              <div className="w-12 h-12 rounded-full bg-ark-accent/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-ark-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <p className="font-semibold mb-2">Results-Focused</p>
              <p className="text-ark-light text-sm">We track what matters: leads, conversions, revenue. Not vanity metrics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 17. Final CTA */}
      <section className="py-32 px-6 bg-gradient-to-b from-ark-dark to-ark-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-ark-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-ark-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-ark-white rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-6">Ready?</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            Let's build your<br />foundation.
          </h2>
          <p className="text-xl text-ark-light max-w-xl mx-auto mb-12">
            Tell us about your business. We'll respond within 24 hours with honest thoughts on how we can help.
          </p>
          <a href="/contact" className="group inline-flex items-center justify-center gap-3 bg-ark-white text-ark-black px-10 py-5 text-lg font-medium hover:bg-ark-accent hover:text-white transition-all cursor-pointer">
            Start a Conversation
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
          <p className="text-ark-muted mt-8">hello@arkiology.com</p>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
