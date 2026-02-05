import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        // 1. Get the message data from Resend
        const payload = await request.json();
        const { from, to, subject, html, text } = payload;

        // 2. Forward it to your personal Outlook
        // We forward it FROM your verified domain TO yourself
        const data = await resend.emails.send({
            from: 'forwarder@alphasight.online',
            to: 'joelwango@outlook.com',
            subject: `[New Inquiry] ${subject}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; background: #f4f4f4;">
          <div style="background: white; padding: 20px; border-radius: 8px;">
            <h2 style="margin-top:0;">New Message Received</h2>
            <p><strong>From:</strong> ${from}</p>
            <p><strong>To:</strong> ${to}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <div style="color: #333;">
              ${html || text}
            </div>
          </div>
        </div>
      `,
        });

        return NextResponse.json({ status: 'ok' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
