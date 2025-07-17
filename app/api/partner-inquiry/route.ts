import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message, inquiryType = 'partner' } = await request.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Customize subject based on inquiry type
    const subjectMap = {
      'partner': 'New Partnership Inquiry',
      'new-investor': 'New Investor Inquiry - Beginner',
      'professional': 'New Professional Investor Inquiry'
    };
    const subject = subjectMap[inquiryType as keyof typeof subjectMap] || 'New Inquiry';

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Send notification email to your team
    const notificationResult = await resend.emails.send({
      from: 'Nifty Shloka <invest@niftyshloka.com>',
      to: ['invest@niftyshloka.com', 'sg@niftyshloka.com', 'abhishek.mawai@niftyshloka.com', 'abhishek@niftyshloka.com'],
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Partnership Inquiry</h2>
          <p>A potential partner has submitted an inquiry through the website:</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #86E75D;">${message}</p>
            <p><strong>Inquiry Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <p>Please follow up with this potential partner at your earliest convenience.</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            This email was automatically generated from the Nifty Shloka partnership page.
          </p>
        </div>
      `,
    });

    // Send confirmation email to the inquirer
    const confirmationResult = await resend.emails.send({
      from: 'Nifty Shloka <invest@niftyshloka.com>',
      to: [email],
      subject: 'Thank you for your Partnership Inquiry',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for your interest in partnering with Nifty Shloka!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to us about a potential partnership. We're excited about the possibility of collaborating with you.</p>
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #86E75D;">
            <p><strong>What's next?</strong></p>
            <ul>
              <li>Our partnership team will review your inquiry</li>
              <li>We'll reach out within 1-2 business days to discuss opportunities</li>
              <li>We'll schedule a meeting to explore potential collaboration areas</li>
            </ul>
          </div>
          <p>We received the following information from you:</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 4px; margin: 15px 0;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Your message:</strong> "${message}"</p>
          </div>
          <p>If you have any urgent questions or need to update your information, please don't hesitate to contact us directly.</p>
          <p>Best regards,<br>
          The Nifty Shloka Partnership Team</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            If you have any questions, please contact us at invest@niftyshloka.com
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing partner inquiry:', error);
    
    // More detailed error logging
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to process request',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 