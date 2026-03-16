"use client";

import { Reveal, TextReveal } from "@/components/animations";
import { SectionLabel } from "@/components/ui";

const sections = [
  {
    title: "Agreement to Terms",
    content: `By accessing and using the Arkiology website (arkiology.com) and our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.`,
  },
  {
    title: "Services",
    content: `Arkiology provides digital infrastructure services including but not limited to:

- Website design and development
- Digital presence management (SEO, social media, advertising)
- Business automation implementation
- AI employee deployment and management

Specific services, deliverables, timelines, and pricing are defined in individual project agreements between Arkiology and the client.`,
  },
  {
    title: "Project Agreements",
    content: `All projects are governed by individual project agreements that outline:

- Scope of work and deliverables
- Timeline and milestones
- Pricing and payment terms
- Revision and approval processes
- Intellectual property ownership

These project agreements supersede these general terms where they conflict.`,
  },
  {
    title: "Intellectual Property",
    content: `Upon full payment, clients receive full ownership of custom-designed and developed assets created specifically for their project, including website designs, custom code, and content created on their behalf.

Arkiology retains the right to:

- Showcase completed work in our portfolio (unless otherwise agreed)
- Use general techniques, knowledge, and skills developed during the project
- Retain ownership of proprietary tools, frameworks, and methodologies used in delivery`,
  },
  {
    title: "Payment Terms",
    content: `Payment terms are specified in individual project agreements. Generally:

- A deposit is required before work begins
- Progress payments may be required at milestone completions
- Final payment is due upon project completion and delivery
- Late payments may result in project delays or suspension of services

All prices are in USD unless otherwise specified.`,
  },
  {
    title: "Client Responsibilities",
    content: `Clients are responsible for:

- Providing timely feedback and approvals
- Supplying necessary content, assets, and access credentials
- Ensuring the accuracy and legality of provided content
- Designating a single point of contact for project communication
- Adhering to agreed-upon timelines for reviews and approvals`,
  },
  {
    title: "Limitation of Liability",
    content: `Arkiology provides services on an "as-is" basis. While we strive for excellence in every project, we cannot guarantee specific business outcomes such as increased revenue, traffic, or conversions.

To the maximum extent permitted by law, Arkiology shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from our services.

Our total liability shall not exceed the amount paid by the client for the specific service in question.`,
  },
  {
    title: "Termination",
    content: `Either party may terminate a project agreement with written notice. In the event of termination:

- Client is responsible for payment for all work completed to date
- Arkiology will deliver all completed work and assets
- Any deposits for uncompleted work will be handled as specified in the project agreement`,
  },
  {
    title: "Confidentiality",
    content: `Both parties agree to maintain confidentiality of any proprietary or sensitive information shared during the course of the project. This includes but is not limited to business strategies, customer data, technical specifications, and financial information.`,
  },
  {
    title: "Changes to Terms",
    content: `We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated effective date. Continued use of our services constitutes acceptance of the updated terms.`,
  },
  {
    title: "Governing Law",
    content: `These terms are governed by and construed in accordance with the laws of the State of Florida, United States of America. Any disputes arising from these terms shall be resolved in the courts of Florida.`,
  },
  {
    title: "Contact",
    content: `For questions about these terms, please contact us:

- **Email:** hello@arkiology.com
- **Location:** South Florida, USA`,
  },
];

export function TermsClient() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionLabel>Legal</SectionLabel>
        </Reveal>
        <TextReveal
          text="Terms of Service"
          className="font-heading text-5xl font-bold leading-tight md:text-6xl"
        />
        <Reveal delay={0.2}>
          <p className="mt-4 text-secondary">
            Last updated: March 15, 2026
          </p>
          <p className="mt-6 text-lg text-secondary leading-relaxed">
            Please read these terms carefully before using Arkiology&apos;s website
            and services. By engaging with us, you agree to the following terms.
          </p>
        </Reveal>

        <div className="mt-16 space-y-12">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={0.1 * i}>
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  {section.title}
                </h2>
                <div className="text-secondary leading-relaxed">
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
