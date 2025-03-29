import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, storeConsent, privacyConsent } = body;

    // Validate required fields
    if (!name || !email || !phone || !message || !storeConsent || !privacyConsent) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email content for company notification
    const companyMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="https://tgabuildersinc.com/logo.PNG" alt="TGA Handyman Logo" style="max-width: 200px; height: auto;">
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #17416E;">
            <h2 style="color: #17416E; margin-top: 0;">New Contact Form Submission</h2>
            <div style="display: grid; grid-template-columns: auto 1fr; gap: 10px; margin-top: 20px;">
              <div style="font-weight: bold; color: #17416E;">Name:</div>
              <div>${name}</div>
              
              <div style="font-weight: bold; color: #17416E;">Email:</div>
              <div>${email}</div>
              
              <div style="font-weight: bold; color: #17416E;">Phone:</div>
              <div>${phone}</div>
              
              <div style="font-weight: bold; color: #17416E;">Message:</div>
              <div style="white-space: pre-wrap;">${message}</div>
              
              <div style="font-weight: bold; color: #17416E;">Consent to Inquiry:</div>
              <div>${storeConsent ? '✅ Yes' : '❌ No'}</div>
              
              <div style="font-weight: bold; color: #17416E;">Privacy Policy Confirmed:</div>
              <div>${privacyConsent ? '✅ Yes' : '❌ No'}</div>
            </div>
          </div>
        </div>
      `,
    };

    // Email content for user thank you
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We've Received Your Inquiry – Thank You!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <p style="font-size: 16px; line-height: 1.6; color: #333;">Hi ${name.split(' ')[0]},</p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">Thank you for reaching out to TGA Handyman! We're excited to learn more about your project and how we can bring your vision to life. One of our team members will be in touch soon.</p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">At TGA Handyman, we believe in:</p>
          
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li style="margin-bottom: 15px; display: flex; align-items: flex-start;">
              <span style="margin-right: 10px; font-size: 20px;">🏡</span>
              <span style="font-size: 16px; line-height: 1.6;">Delivering exceptional craftsmanship and attention to detail</span>
            </li>
            <li style="margin-bottom: 15px; display: flex; align-items: flex-start;">
              <span style="margin-right: 10px; font-size: 20px;">⚡</span>
              <span style="font-size: 16px; line-height: 1.6;">Completing projects on time and within budget</span>
            </li>
            <li style="margin-bottom: 15px; display: flex; align-items: flex-start;">
              <span style="margin-right: 10px; font-size: 20px;">🤝</span>
              <span style="font-size: 16px; line-height: 1.6;">Providing personalized solutions that fit your style and needs</span>
            </li>
          </ul>

          <p style="font-size: 16px; line-height: 1.6; color: #333;">If you have any immediate questions, feel free to reply to this email or call us at:</p>
          
          <div style="margin: 20px 0;">
            <p style="font-size: 16px; line-height: 1.6; color: #333;">(818) 554-3033</p>
          </div>

          <p style="font-size: 16px; line-height: 1.6; color: #333;">Looking forward to working with you!</p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">Best,<br>TGA Handyman</p>
          
          <div style="margin-top: 20px;">
            <img src="https://tgabuildersinc.com/logo.PNG" alt="TGA Handyman Logo" style="max-width: 150px; height: auto;">
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json(
      { error: 'Failed to send emails' },
      { status: 500 }
    );
  }
} 