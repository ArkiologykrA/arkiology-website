import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const SERVICE_LABELS: Record<string, string> = {
  website: "Website Development",
  presence: "Digital Presence / Marketing",
  automations: "Automations",
  ai: "24/7 AI Employees",
  complete: "Complete Foundation (All Services)",
  other: "Not sure / Other",
};

const BUDGET_LABELS: Record<string, string> = {
  "<5k": "Less than $5,000",
  "5k-10k": "$5,000 – $10,000",
  "10k-25k": "$10,000 – $25,000",
  "25k+": "$25,000+",
  unsure: "Not sure yet",
};

const TIMELINE_LABELS: Record<string, string> = {
  asap: "As soon as possible",
  "1month": "Within 1 month",
  "3months": "Within 3 months",
  exploring: "Just exploring",
};

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, company, service, budget, message, timeline } = body;

  if (!name || !email || !message || !service) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  const { data, error } = await resend.emails.send({
    from: "Arkiology <noreply@arkiology.com>",
    to: ["contact@arkiology.com"],
    replyTo: email,
    subject: `New Project Inquiry — ${name}${company ? ` (${company})` : ""}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: #0a0a0a; padding: 32px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #fafafa; font-size: 20px; margin: 0;">
            ARK<span style="color: #3b82f6;">&#9650;</span>OLOGY
          </h1>
          <p style="color: #999; font-size: 13px; margin: 8px 0 0;">New project inquiry from the website</p>
        </div>

        <div style="background: #ffffff; padding: 32px; border: 1px solid #e5e5e5; border-top: none;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; color: #666; width: 120px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; vertical-align: top;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
            </tr>
            ${company ? `<tr><td style="padding: 10px 0; color: #666; vertical-align: top;">Company</td><td style="padding: 10px 0;">${company}</td></tr>` : ""}
            <tr>
              <td style="padding: 10px 0; color: #666; vertical-align: top;">Service</td>
              <td style="padding: 10px 0;">${SERVICE_LABELS[service] || service}</td>
            </tr>
            ${budget ? `<tr><td style="padding: 10px 0; color: #666; vertical-align: top;">Budget</td><td style="padding: 10px 0;">${BUDGET_LABELS[budget] || budget}</td></tr>` : ""}
            ${timeline ? `<tr><td style="padding: 10px 0; color: #666; vertical-align: top;">Timeline</td><td style="padding: 10px 0;">${TIMELINE_LABELS[timeline] || timeline}</td></tr>` : ""}
          </table>

          <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
            <p style="color: #666; font-size: 13px; margin: 0 0 8px;">Message</p>
            <p style="font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>

        <div style="background: #f9f9f9; padding: 16px 32px; border-radius: 0 0 12px 12px; border: 1px solid #e5e5e5; border-top: none;">
          <p style="color: #999; font-size: 12px; margin: 0;">
            Reply directly to this email to respond to ${name}. Sent from arkiology.com contact form.
          </p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true, id: data?.id });
}
