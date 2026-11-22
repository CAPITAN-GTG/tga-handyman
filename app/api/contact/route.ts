import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, storeConsent, privacyConsent } = body;

    if (!name || !email || !phone || !message || !storeConsent || !privacyConsent) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      return NextResponse.json({ error: "Email service is not configured" }, { status: 503 });
    }

    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safePhone = escapeHtml(String(phone));
    const safeMessage = escapeHtml(String(message));
    const firstName = escapeHtml(String(name).split(" ")[0] || "there");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const companyMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: String(email),
      subject: `New TGA Handyman inquiry from ${String(name).replace(/[\r\n]/g, " ")}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <h1 style="color: #146b3a; font-size: 22px;">TGA Handyman</h1>
          <div style="background-color: #f3f7f4; padding: 20px; border-left: 4px solid #146b3a;">
            <h2 style="color: #0f3d28; margin-top: 0;">New repair inquiry</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Phone:</strong> ${safePhone}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${safeMessage}</p>
            <p><strong>Consent to inquiry:</strong> ${storeConsent ? "Yes" : "No"}</p>
            <p><strong>Privacy policy confirmed:</strong> ${privacyConsent ? "Yes" : "No"}</p>
          </div>
        </div>
      `,
    };

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: String(email),
      subject: "We've received your TGA Handyman inquiry",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <p style="font-size: 16px; line-height: 1.6; color: #333;">Hi ${firstName},</p>
          <p style="font-size: 16px; line-height: 1.6; color: #333;">Thank you for contacting TGA Handyman. We received your note and will follow up with a clear next step for the repair.</p>
          <p style="font-size: 16px; line-height: 1.6; color: #333;">If you need us sooner, call (818) 554-3033 or (702) 755-3316.</p>
          <p style="font-size: 16px; line-height: 1.6; color: #333;">TGA Handyman<br>1857 Citation Cir, Las Vegas, NV 89123</p>
        </div>
      `,
    };

    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json({ error: "Failed to send emails" }, { status: 500 });
  }
}
