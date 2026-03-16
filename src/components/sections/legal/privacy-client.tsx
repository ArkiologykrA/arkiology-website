"use client";

import { Reveal, TextReveal } from "@/components/animations";
import { SectionLabel } from "@/components/ui";

const sections = [
  {
    title: "Information We Collect",
    content: `When you use our website or contact us, we may collect the following information:

- **Contact Information:** Name, email address, phone number, and company name when you fill out our contact form or reach out to us.
- **Usage Data:** Information about how you interact with our website, including pages visited, time spent, and referring sources. This is collected through privacy-respecting analytics.
- **Device Information:** Browser type, operating system, and device type for optimizing your experience.

We do not collect sensitive personal data such as financial information, health data, or government identifiers through our website.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information we collect to:

- Respond to your inquiries and project requests
- Provide and improve our services
- Send you relevant communications about your project (never spam)
- Analyze website performance and user experience
- Comply with legal obligations

We will never sell, rent, or share your personal information with third parties for marketing purposes.`,
  },
  {
    title: "Data Storage & Security",
    content: `Your data is stored securely using industry-standard encryption and security practices. We use trusted third-party services (such as email delivery and analytics) that maintain their own privacy and security standards.

We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law.`,
  },
  {
    title: "Third-Party Services",
    content: `We use the following third-party services that may process your data:

- **Vercel:** Website hosting and deployment
- **Resend:** Email delivery for contact form submissions
- **Google Analytics:** Website usage analytics (anonymized)

Each of these services has their own privacy policy governing their use of your data.`,
  },
  {
    title: "Your Rights",
    content: `You have the right to:

- Access the personal data we hold about you
- Request correction of inaccurate data
- Request deletion of your data
- Opt out of any communications
- Lodge a complaint with a supervisory authority

To exercise any of these rights, contact us at contact@arkiology.com.`,
  },
  {
    title: "Cookies",
    content: `Our website uses minimal, essential cookies for functionality. We do not use tracking cookies for advertising purposes. Any analytics we collect is anonymized and does not personally identify you.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.`,
  },
  {
    title: "Contact Us",
    content: `If you have questions about this privacy policy or how we handle your data, please contact us:

- **Email:** contact@arkiology.com
- **Location:** South Florida, USA`,
  },
];

export function PrivacyClient() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionLabel>Legal</SectionLabel>
        </Reveal>
        <TextReveal
          text="Privacy Policy"
          className="font-heading text-5xl font-bold leading-tight md:text-6xl"
        />
        <Reveal delay={0.2}>
          <p className="mt-4 text-secondary">
            Last updated: March 15, 2026
          </p>
          <p className="mt-6 text-lg text-secondary leading-relaxed">
            At Arkiology, we take your privacy seriously. This policy outlines
            how we collect, use, and protect your information when you interact
            with our website and services.
          </p>
        </Reveal>

        <div className="mt-16 space-y-12">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={0.1 * i}>
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  {section.title}
                </h2>
                <div className="text-secondary leading-relaxed whitespace-pre-line">
                  {section.content.split("\n").map((line, j) => {
                    if (line.startsWith("- **")) {
                      const parts = line.replace("- **", "").split(":**");
                      return (
                        <p key={j} className="ml-4 my-1">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 mb-0.5" />
                          <strong className="text-foreground">{parts[0]}:</strong>
                          {parts[1]}
                        </p>
                      );
                    }
                    if (line.startsWith("- ")) {
                      return (
                        <p key={j} className="ml-4 my-1">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 mb-0.5" />
                          {line.replace("- ", "")}
                        </p>
                      );
                    }
                    if (line.trim() === "") return <br key={j} />;
                    return <p key={j} className="my-2">{line}</p>;
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
