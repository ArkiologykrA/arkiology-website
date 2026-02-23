import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, date, time } = body;

    // Validate required fields
    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the date nicely
    const bookingDate = new Date(date);
    const formattedDate = bookingDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Send email using Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      // Still return success to user but log the error
      // In production, you'd want to handle this differently
      return NextResponse.json({
        success: true,
        message: 'Booking request received (email notification pending setup)'
      });
    }

    // Email to Arkiology team
    const teamEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Arkiology Bookings <bookings@arkiology.com>',
        to: ['contact@arkiology.com'],
        subject: `📅 New Booking Request: ${name} - ${formattedDate} at ${time}`,
        html: `
          <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #0A0A0A; padding: 32px; border-radius: 12px;">
              <h1 style="color: #FAFAFA; margin: 0 0 24px 0; font-size: 24px;">
                New Booking Request
              </h1>
              
              <div style="background: #1A1A1A; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
                <h2 style="color: #3B82F6; margin: 0 0 16px 0; font-size: 18px;">
                  📅 Requested Time
                </h2>
                <p style="color: #FAFAFA; margin: 0; font-size: 20px; font-weight: 600;">
                  ${formattedDate}
                </p>
                <p style="color: #3B82F6; margin: 8px 0 0 0; font-size: 24px; font-weight: 700;">
                  ${time} ET
                </p>
              </div>

              <div style="background: #1A1A1A; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
                <h2 style="color: #3B82F6; margin: 0 0 16px 0; font-size: 18px;">
                  👤 Contact Information
                </h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="color: #999; padding: 8px 0; width: 100px;">Name</td>
                    <td style="color: #FAFAFA; padding: 8px 0; font-weight: 500;">${name}</td>
                  </tr>
                  <tr>
                    <td style="color: #999; padding: 8px 0;">Email</td>
                    <td style="color: #FAFAFA; padding: 8px 0;">
                      <a href="mailto:${email}" style="color: #3B82F6; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                  ${phone ? `
                  <tr>
                    <td style="color: #999; padding: 8px 0;">Phone</td>
                    <td style="color: #FAFAFA; padding: 8px 0;">
                      <a href="tel:${phone}" style="color: #3B82F6; text-decoration: none;">${phone}</a>
                    </td>
                  </tr>
                  ` : ''}
                  ${company ? `
                  <tr>
                    <td style="color: #999; padding: 8px 0;">Company</td>
                    <td style="color: #FAFAFA; padding: 8px 0;">${company}</td>
                  </tr>
                  ` : ''}
                </table>
              </div>

              ${message ? `
              <div style="background: #1A1A1A; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
                <h2 style="color: #3B82F6; margin: 0 0 16px 0; font-size: 18px;">
                  💬 Message
                </h2>
                <p style="color: #FAFAFA; margin: 0; line-height: 1.6;">
                  ${message.replace(/\n/g, '<br>')}
                </p>
              </div>
              ` : ''}

              <div style="border-top: 1px solid #333; padding-top: 24px; margin-top: 24px;">
                <p style="color: #999; margin: 0; font-size: 14px;">
                  ⚡ Reply to confirm or reschedule this meeting.
                </p>
              </div>
            </div>
          </div>
        `,
      }),
    });

    if (!teamEmailResponse.ok) {
      const error = await teamEmailResponse.text();
      console.error('Failed to send team email:', error);
    }

    // Confirmation email to customer
    const customerEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Arkiology <hello@arkiology.com>',
        to: [email],
        subject: `Your booking request for ${formattedDate} at ${time}`,
        html: `
          <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #0A0A0A; padding: 32px; border-radius: 12px;">
              <h1 style="color: #FAFAFA; margin: 0 0 8px 0; font-size: 28px;">
                ARK<span style="color: #3B82F6;">▲</span>OLOGY
              </h1>
              <p style="color: #999; margin: 0 0 32px 0; font-size: 14px;">
                Digital Infrastructure Agency
              </p>

              <h2 style="color: #FAFAFA; margin: 0 0 16px 0; font-size: 20px;">
                Thanks for booking, ${name.split(' ')[0]}!
              </h2>
              
              <p style="color: #999; margin: 0 0 24px 0; line-height: 1.6;">
                We've received your booking request. Our team will review it and send you a calendar invite to confirm.
              </p>

              <div style="background: #1A1A1A; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
                <p style="color: #999; margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
                  Requested Time
                </p>
                <p style="color: #FAFAFA; margin: 0; font-size: 18px; font-weight: 600;">
                  ${formattedDate}
                </p>
                <p style="color: #3B82F6; margin: 8px 0 0 0; font-size: 22px; font-weight: 700;">
                  ${time} ET
                </p>
              </div>

              <p style="color: #999; margin: 0 0 24px 0; line-height: 1.6;">
                We typically respond within 24 hours. If you need to reach us sooner, reply to this email or call us directly.
              </p>

              <div style="border-top: 1px solid #333; padding-top: 24px; margin-top: 24px;">
                <p style="color: #999; margin: 0; font-size: 14px;">
                  Questions? Reply to this email or contact us at 
                  <a href="mailto:hello@arkiology.com" style="color: #3B82F6; text-decoration: none;">hello@arkiology.com</a>
                </p>
              </div>
            </div>
          </div>
        `,
      }),
    });

    if (!customerEmailResponse.ok) {
      const error = await customerEmailResponse.text();
      console.error('Failed to send customer email:', error);
    }

    return NextResponse.json({
      success: true,
      message: 'Booking request submitted successfully'
    });

  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking request' },
      { status: 500 }
    );
  }
}
