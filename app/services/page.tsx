import Link from 'next/link';

export const metadata = {
  title: 'Services — Arkiology',
  description: 'Websites, digital presence, automations, and AI employees. The complete digital infrastructure for growing businesses.',
};

export default function ServicesPage() {
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
              <a href="#websites" className="px-4 py-2 border border-ark-border rounded-lg text-sm hover:border-ark-accent hover:text-ark-accent transition-colors">01 Websites</a>
              <a href="#presence" className="px-4 py-2 border border-ark-border rounded-lg text-sm hover:border-ark-accent hover:text-ark-accent transition-colors">02 Digital Presence</a>
              <a href="#automations" className="px-4 py-2 border border-ark-border rounded-lg text-sm hover:border-ark-accent hover:text-ark-accent transition-colors">03 Automations</a>
              <a href="#ai" className="px-4 py-2 border border-ark-border rounded-lg text-sm hover:border-ark-accent hover:text-ark-accent transition-colors">04 AI Employees</a>
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
            
            <div className="gradient-border rounded-2xl p-8">
              <p className="text-ark-muted uppercase text-sm tracking-wider mb-6">What&apos;s Included</p>
              <ul className="space-y-3 text-ark-light mb-8">
                {['Custom website design', 'Responsive development', 'CMS integration (if needed)', 'Contact forms & lead capture', 'Analytics setup', 'SSL & security', 'Training & documentation'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-ark-accent rounded-full"></span>
                    {item}
                  </li>
                ))}
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
