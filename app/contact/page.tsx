'use client';

import { useState } from 'react';
import BookingCalendar from '@/components/BookingCalendar';

type FormStep = 'calendar' | 'details' | 'success';

export default function ContactPage() {
  const [step, setStep] = useState<FormStep>('calendar');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleDateTimeSelect = (date: Date, time: string) => {
    setSelectedDate(date);
    if (time) {
      setSelectedTime(time);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      setStep('details');
    }
  };

  const handleBack = () => {
    setStep('calendar');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: selectedDate?.toISOString(),
          time: selectedTime,
        }),
      });

      if (response.ok) {
        setStep('success');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatSelectedDateTime = () => {
    if (!selectedDate || !selectedTime) return '';
    return `${selectedDate.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    })} at ${selectedTime}`;
  };

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-ark-accent text-sm uppercase tracking-[0.2em] mb-6">Book a Call</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's build your<br />
            <span className="gradient-text">foundation.</span>
          </h1>
          <p className="text-xl text-ark-light max-w-2xl mx-auto">
            Schedule a call to discuss your project. We'll respond within 24 hours with a calendar invite to confirm.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Progress indicator */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className={`flex items-center gap-2 ${step === 'calendar' ? 'text-ark-accent' : 'text-ark-muted'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === 'calendar' ? 'bg-ark-accent text-white' : 
                step === 'details' || step === 'success' ? 'bg-ark-green text-white' : 'bg-ark-gray'
              }`}>
                {step === 'details' || step === 'success' ? '✓' : '1'}
              </div>
              <span className="hidden sm:inline">Select Time</span>
            </div>
            <div className="w-12 h-px bg-ark-border"></div>
            <div className={`flex items-center gap-2 ${step === 'details' ? 'text-ark-accent' : 'text-ark-muted'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === 'details' ? 'bg-ark-accent text-white' : 
                step === 'success' ? 'bg-ark-green text-white' : 'bg-ark-gray'
              }`}>
                {step === 'success' ? '✓' : '2'}
              </div>
              <span className="hidden sm:inline">Your Details</span>
            </div>
            <div className="w-12 h-px bg-ark-border"></div>
            <div className={`flex items-center gap-2 ${step === 'success' ? 'text-ark-green' : 'text-ark-muted'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === 'success' ? 'bg-ark-green text-white' : 'bg-ark-gray'
              }`}>
                {step === 'success' ? '✓' : '3'}
              </div>
              <span className="hidden sm:inline">Confirmed</span>
            </div>
          </div>

          {/* Step 1: Calendar */}
          {step === 'calendar' && (
            <div className="gradient-border rounded-2xl p-8 md:p-12">
              <BookingCalendar
                onDateTimeSelect={handleDateTimeSelect}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
              />
              
              {selectedDate && selectedTime && (
                <div className="mt-8 pt-8 border-t border-ark-border flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-ark-muted text-sm">Selected time:</p>
                    <p className="text-lg font-semibold">{formatSelectedDateTime()}</p>
                  </div>
                  <button
                    onClick={handleContinue}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ark-accent text-white px-8 py-4 font-medium hover:bg-ark-accent-dark transition-colors rounded-lg"
                  >
                    Continue
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Details Form */}
          {step === 'details' && (
            <div className="gradient-border rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
              <div className="mb-8">
                <button
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 text-ark-muted hover:text-ark-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to calendar
                </button>
              </div>

              <div className="bg-ark-gray rounded-lg p-4 mb-8">
                <p className="text-ark-muted text-sm">Your selected time:</p>
                <p className="text-lg font-semibold">{formatSelectedDateTime()}</p>
                <p className="text-ark-accent text-sm mt-1">Eastern Time (ET)</p>
              </div>

              <h2 className="text-2xl font-bold mb-6">Your Details</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name <span className="text-ark-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-ark-gray border border-ark-border rounded-lg focus:border-ark-accent focus:outline-none transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email <span className="text-ark-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-ark-gray border border-ark-border rounded-lg focus:border-ark-accent focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-ark-gray border border-ark-border rounded-lg focus:border-ark-accent focus:outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-ark-gray border border-ark-border rounded-lg focus:border-ark-accent focus:outline-none transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    What would you like to discuss?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-ark-gray border border-ark-border rounded-lg focus:border-ark-accent focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project, goals, or questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-ark-white text-ark-black px-8 py-4 font-medium hover:bg-ark-light transition-colors rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Request Booking
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-sm text-ark-muted text-center">
                  By submitting, you agree to receive emails from Arkiology. We won't spam you.
                </p>
              </form>
            </div>
          )}

          {/* Step 3: Success */}
          {step === 'success' && (
            <div className="gradient-border rounded-2xl p-8 md:p-12 max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-ark-green/20 flex items-center justify-center">
                <svg className="w-10 h-10 text-ark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h2 className="text-3xl font-bold mb-4">Booking Request Sent!</h2>
              
              <p className="text-xl text-ark-light mb-8">
                Thanks, {formData.name.split(' ')[0]}! We've received your request for:
              </p>

              <div className="bg-ark-gray rounded-lg p-6 mb-8">
                <p className="text-2xl font-semibold">{formatSelectedDateTime()}</p>
                <p className="text-ark-accent mt-2">Eastern Time (ET)</p>
              </div>

              <div className="space-y-4 text-ark-light">
                <p>
                  📧 We've sent a confirmation to <span className="text-ark-white">{formData.email}</span>
                </p>
                <p>
                  ⏰ Our team will review and send you a calendar invite within 24 hours.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-ark-border">
                <p className="text-ark-muted mb-4">While you wait, learn more about what we do:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/services" className="inline-flex items-center justify-center gap-2 bg-ark-gray text-ark-white px-6 py-3 font-medium hover:bg-ark-border transition-colors rounded-lg">
                    Our Services
                  </a>
                  <a href="/ai-employees" className="inline-flex items-center justify-center gap-2 bg-ark-accent text-white px-6 py-3 font-medium hover:bg-ark-accent-dark transition-colors rounded-lg">
                    AI Employees
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 border-t border-ark-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Common Questions</h2>
          <div className="space-y-6">
            {[
              { q: "What happens after I book?", a: "We'll review your booking request and send you a calendar invite within 24 hours to confirm the meeting." },
              { q: "How long is the call?", a: "Initial calls are typically 30 minutes. We'll discuss your needs and see if we're a good fit to work together." },
              { q: "Is there any cost for the call?", a: "No, the initial consultation is completely free. We want to understand your needs before proposing any solutions." },
              { q: "What should I prepare?", a: "Just bring your questions and ideas. It helps if you can share your current website (if you have one) and what you're hoping to achieve." },
              { q: "Do you work with clients outside South Florida?", a: "Absolutely! While we're based in South Florida, we work with clients nationwide and internationally via video calls." },
              { q: "What languages do you support?", a: "We're fluent in English and Spanish (Español). Feel free to communicate in whichever you're more comfortable with." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-ark-border pb-6">
                <h3 className="text-lg font-semibold mb-3">{faq.q}</h3>
                <p className="text-ark-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-16 px-6 bg-ark-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Prefer email?</h2>
          <p className="text-ark-light mb-6">
            No problem. Reach out directly and we'll get back to you within 24 hours.
          </p>
          <a 
            href="mailto:hello@arkiology.com" 
            className="inline-flex items-center gap-2 text-ark-accent hover:text-ark-white transition-colors text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            hello@arkiology.com
          </a>
        </div>
      </section>
    </main>
  );
}
