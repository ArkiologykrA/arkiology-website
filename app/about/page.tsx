import Link from 'next/link';

export const metadata = {
  title: 'About — Arkiology',
  description: 'The science of building digital foundations. We help businesses build infrastructure that grows.',
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="fade-up max-w-4xl">
            <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-6">About Arkiology</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] mb-8">
              We build foundations<br />
              <span className="gradient-text">that last.</span>
            </h1>
            <p className="text-xl text-ark-light max-w-2xl leading-relaxed">
              Arkiology is a digital infrastructure agency. We help businesses build the systems they need to grow—websites, digital presence, automations, and AI-powered employees.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-ark-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-6">The Name</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                Why &quot;Arkiology&quot;
              </h2>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <span className="text-ark-accent font-bold text-2xl w-24 flex-shrink-0">Ark</span>
                  <p className="text-ark-light text-lg">Shelter. Foundation. Preservation. The vessel that protects what matters and carries it forward.</p>
                </div>
                <div className="flex gap-6">
                  <span className="text-ark-accent font-bold text-2xl w-24 flex-shrink-0">-ology</span>
                  <p className="text-ark-light text-lg">The science of. The study of. Deep expertise in a discipline.</p>
                </div>
                <div className="h-px bg-ark-border my-8"></div>
                <p className="text-ark-white text-xl font-medium">
                  Together: The science of building digital foundations that protect and grow your business.
                </p>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="w-64 h-64 border-2 border-ark-border rotate-45 absolute"></div>
              <div className="w-44 h-44 border-2 border-ark-accent/50 rotate-45 absolute"></div>
              <span className="text-9xl font-bold text-ark-accent">▲</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-ark-dark">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Want to work with us?
          </h2>
          <p className="text-xl text-ark-light max-w-xl mx-auto mb-12">
            Let&apos;s talk about your business and see if we&apos;re a good fit.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-ark-white text-ark-black px-10 py-5 text-lg font-medium hover:bg-ark-light transition-colors">
            Start a Conversation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
