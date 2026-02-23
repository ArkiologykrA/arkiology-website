import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Start Your Digital Infrastructure Project",
  description: "Ready to build your digital foundation? Tell us about your business and goals. We respond within 24 hours with honest thoughts on how we can help. English & Español.",
  openGraph: {
    title: "Contact Arkiology — Let's Build Your Foundation",
    description: "Start a conversation about your digital infrastructure project. We respond within 24 hours.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
