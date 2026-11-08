import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        const trimmedName = typeof name === 'string' ? name.trim() : '';
        const trimmedEmail = typeof email === 'string' ? email.trim() : '';
        const trimmedMessage = typeof message === 'string' ? message.trim() : '';

        if (!trimmedName || !trimmedEmail || !trimmedMessage) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(trimmedEmail)) {
            return NextResponse.json(
                { message: 'Please provide a valid email address' },
                { status: 400 }
            );
        }

        const emailUser = process.env.EMAIL_USER?.trim().replace(/['"]/g, '');
        const emailPass = process.env.EMAIL_PASS?.trim().replace(/['"]/g, '').replace(/\s+/g, '');

        if (!emailUser || !emailPass) {
            console.error('Contact error: EMAIL_USER or EMAIL_PASS environment variables are not set.');
            return NextResponse.json(
                { message: 'Contact service is temporarily unconfigured' },
                { status: 503 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: emailUser,
                pass: emailPass,
            },
        });

        const mailOptions = {
            from: emailUser,
            to: 'namitamehra000@gmail.com',
            replyTo: trimmedEmail,
            subject: `Portfolio Contact: Message from ${trimmedName}`,
            text: `
        Name: ${trimmedName}
        Email: ${trimmedEmail}
        
        Message:
        ${trimmedMessage}
      `,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${trimmedName}</p>
        <p><strong>Email:</strong> ${trimmedEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${trimmedMessage.replace(/\n/g, '<br>')}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { message: error?.message || 'Failed to send email' },
            { status: 500 }
        );
    }
}
