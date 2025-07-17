import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Send email using Resend
    const notificationResult = await resend.emails.send({
      from: 'Nifty Shloka <invest@niftyshloka.com>',
      to: ['invest@niftyshloka.com', 'sg@niftyshloka.com', 'abhishek.mawai@niftyshloka.com', 'abhishek@niftyshloka.com'],
      subject: 'New Investment Deck Download Request',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Investment Deck Download Request</h2>
          <p>A user has requested to download the investment deck:</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Request Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <p>Please follow up with this potential investor at your earliest convenience.</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            This email was automatically generated from the Nifty Shloka website.
          </p>
        </div>
      `,
          });

      // Send confirmation email to the user
      const confirmationResult = await resend.emails.send({
      from: 'Nifty Shloka <invest@niftyshloka.com>',
      to: [email],
      subject: 'Thank you for downloading our Investment Deck',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for your interest in Nifty Shloka!</h2>
          <p>Hi there,</p>
          <p>Thank you for downloading our investment deck. We're excited about the possibility of helping you with your investment needs.</p>
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #86E75D;">
            <p><strong>What's next?</strong></p>
            <ul>
              <li>Our team will review your inquiry</li>
              <li>We'll reach out within 1-2 business days</li>
              <li>We'll schedule a consultation to discuss your investment goals</li>
            </ul>
          </div>
          <p>In the meantime, feel free to explore our website and learn more about our investment strategies.</p>
          <p>Best regards,<br>
          The Nifty Shloka Team</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            If you have any questions, please don't hesitate to contact us.
          </p>
        </div>
      `,
          });

      return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing email request:', error);
    
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