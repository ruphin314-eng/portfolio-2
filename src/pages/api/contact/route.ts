import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,        // 👈 email de destination
      replyTo: email,                  // 👈 répondre directement au client
      subject: `[SAFYRR Contact] ${subject || 'Nouveau message'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #F5B83D, #FFDF8F); padding: 24px; border-radius: 12px 12px 0 0;">
            <h2 style="margin: 0; color: #1a1a1a;">📩 Nouveau message de contact</h2>
          </div>
          <div style="background: #fff; padding: 24px; border: 1px solid #e5e7eb; border-radius: 0 0 12px 12px;">
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Sujet :</strong> ${subject || 'Non précisé'}</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <p><strong>Message :</strong></p>
            <p style="background: #fdf6ea; padding: 16px; border-radius: 8px; color: #374151;">${message.replace(/\n/g, '<br/>')}</p>
          </div>
          <p style="text-align:center; font-size:12px; color:#9ca3af; margin-top:16px;">
            Envoyé depuis le formulaire de contact SAFYRR
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur envoi email:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}