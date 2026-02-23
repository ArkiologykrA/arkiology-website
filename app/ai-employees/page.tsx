import Link from 'next/link';

export const metadata = {
  title: '24/7 AI Employees — Arkiology',
  description: 'AI employees that respond to leads, answer questions, and book appointments. 24/7. In your brand voice.',
};

export default function AIEmployeesPage() {
  return (
    <>
      <section className="min-h-[85vh] flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full mb-8">
                <span className="w-2 h-2 bg-green-500 rounded-full pulse-dot"></span>
                <span className="text-green-500 text-sm font-medium">Always Online</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-8">
                Your business<br />
                <span className="gradient-text">never sleeps.</span>
              </h1>
              <p className="text-xl text-ark-light max-w-lg mb-8 leading-relaxed">
                Not chatbots. <span className="text-ark-white font-medium">Real AI employees</span> that take action — answer calls, send emails, book appointments, update your CRM, and execute real work. 24/7. In your brand voice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-ark-white text-ark-black px-8 py-4 font-medium hover:bg-ark-light transition-colors">
                  Get Your AI Employee
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Chat Demo */}
            <div className="relative">
              <div className="gradient-border rounded-2xl p-6 max-w-md mx-auto">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-ark-border">
                  <div className="w-10 h-10 rounded-full bg-ark-accent flex items-center justify-center">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div>
                    <p className="font-semibold">Your AI Employee</p>
                    <p className="text-green-500 text-sm flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      Online now
                    </p>
                  </div>
                </div>

                <div className="space-y-4 min-h-[280px]">
                  <div className="flex justify-end">
                    <div className="bg-ark-accent text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%]">
                      Hi, I&apos;m interested in your services. Do you have availability this week?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-ark-gray px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%]">
                      Hi! Thanks for reaching out. Yes, we have openings this week. I&apos;d be happy to get you scheduled. What day works best for you?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-ark-accent text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%]">
                      Thursday afternoon would be perfect
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-ark-gray px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%]">
                      Great! I&apos;ve got Thursday at 2:00 PM or 3:30 PM available. Which works better? I&apos;ll send you a calendar invite right away.
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-ark-border">
                  <p className="text-ark-muted text-sm">This conversation happened at 2:47 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-ark-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-4">The Reality</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              You&apos;re losing customers while you sleep.
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

      <section className="py-32 px-6 bg-gradient-to-b from-ark-dark to-ark-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            Ready to never miss<br />another lead?
          </h2>
          <p className="text-xl text-ark-light max-w-lg mx-auto mb-12">
            Let&apos;s build your 24/7 employee.
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
