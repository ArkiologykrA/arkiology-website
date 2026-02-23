import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — The Science of Building Digital Foundations",
  description: "Arkiology: Ark (foundation) + ology (the study of). We're a digital infrastructure agency based in South Florida, building the systems that help businesses grow. Meet the team behind the science.",
  openGraph: {
    title: "About Arkiology — Digital Infrastructure Agency",
    description: "The science of building digital foundations. Based in South Florida, working globally.",
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
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

      {/* The Name */}
      <section className="py-24 px-6 border-t border-ark-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-6">The Name</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                Why "Arkiology"
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

      {/* Philosophy */}
      <section className="py-24 px-6 bg-ark-dark">
        <div className="max-w-7xl mx-auto">
          <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-4">Philosophy</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">What we believe.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-2 border-ark-accent pl-8">
              <h3 className="text-xl font-semibold mb-3">Infrastructure over aesthetics</h3>
              <p className="text-ark-light">A beautiful website that doesn't drive business is just expensive art. We build systems that work—and happen to look great.</p>
            </div>
            <div className="border-l-2 border-ark-border pl-8">
              <h3 className="text-xl font-semibold mb-3">Results over activity</h3>
              <p className="text-ark-light">We don't measure success by hours worked or deliverables shipped. We measure it by whether your business grew.</p>
            </div>
            <div className="border-l-2 border-ark-border pl-8">
              <h3 className="text-xl font-semibold mb-3">Partnership over projects</h3>
              <p className="text-ark-light">We're not looking for one-off engagements. We want to build relationships with businesses we believe in, for the long term.</p>
            </div>
            <div className="border-l-2 border-ark-border pl-8">
              <h3 className="text-xl font-semibold mb-3">Clarity over complexity</h3>
              <p className="text-ark-light">Technology should simplify your life, not complicate it. If we can't explain it simply, we haven't understood it well enough.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-4">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              We're not trying to be the biggest agency.
            </h2>
            <div className="text-lg text-ark-light space-y-6 leading-relaxed">
              <p>
                There are plenty of agencies that will take any client, deliver mediocre work, and move on to the next. That's not us.
              </p>
              <p>
                We work with a small number of businesses at a time. We get to know them deeply. We care about their success because we're invested in it—our reputation depends on their results.
              </p>
              <p>
                We're not for everyone. We work best with businesses that are ready to grow, willing to invest in their infrastructure, and value long-term relationships over quick wins.
              </p>
              <p className="text-ark-white font-medium text-xl mt-8">
                If that sounds like you, we should talk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 px-6 bg-ark-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-4">Location</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Based in South Florida.<br />Working globally.
              </h2>
              <p className="text-lg text-ark-light leading-relaxed mb-8">
                Our home base is in South Florida, but our work extends far beyond. We serve clients across the United States and internationally, leveraging modern tools to collaborate effectively regardless of timezone.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-ark-gray rounded-full text-sm text-ark-light">Miami-Dade</span>
                <span className="px-3 py-1 bg-ark-gray rounded-full text-sm text-ark-light">Broward</span>
                <span className="px-3 py-1 bg-ark-gray rounded-full text-sm text-ark-light">Palm Beach</span>
                <span className="px-3 py-1 bg-ark-gray rounded-full text-sm text-ark-light">USA</span>
                <span className="px-3 py-1 bg-ark-gray rounded-full text-sm text-ark-light">LATAM</span>
              </div>
              <p className="text-ark-muted">
                Fluent in English and Spanish. Portuguese coming soon.
              </p>
            </div>
            <div className="gradient-border rounded-2xl p-8">
              <p className="text-ark-accent font-semibold mb-6 uppercase text-sm tracking-wider">How We Work</p>
              <ul className="space-y-4 text-ark-light">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-ark-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Video calls for face-to-face collaboration</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-ark-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Shared workspaces for real-time progress</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-ark-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Async communication that respects your time</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-ark-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>In-person meetings when local (SoFla)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-4 text-center">What We Value</p>
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-ark-accent/10 border border-ark-accent/30 flex items-center justify-center">
                <svg className="w-7 h-7 text-ark-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Honesty</h3>
              <p className="text-ark-light text-sm">We tell you what you need to hear, not what you want to hear.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-ark-gray flex items-center justify-center">
                <svg className="w-7 h-7 text-ark-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Execution</h3>
              <p className="text-ark-light text-sm">Ideas are cheap. We ship real work that drives real results.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-ark-gray flex items-center justify-center">
                <svg className="w-7 h-7 text-ark-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Partnership</h3>
              <p className="text-ark-light text-sm">Your success is our success. We're in this together.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-ark-gray flex items-center justify-center">
                <svg className="w-7 h-7 text-ark-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality</h3>
              <p className="text-ark-light text-sm">We'd rather do fewer things exceptionally than many things poorly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-ark-dark">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Want to work with us?
          </h2>
          <p className="text-xl text-ark-light max-w-xl mx-auto mb-12">
            Let's talk about your business and see if we're a good fit.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center gap-3 bg-ark-white text-ark-black px-10 py-5 text-lg font-medium hover:bg-ark-light transition-colors cursor-pointer">
            Start a Conversation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>
      </section>
    </main>
  );
}
