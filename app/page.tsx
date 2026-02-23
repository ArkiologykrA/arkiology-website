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

      {/* Marquee */}
      <section className="py-6 border-y border-ark-border bg-ark-darker overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
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
