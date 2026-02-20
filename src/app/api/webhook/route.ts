import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, data } = body;

    console.log(`🔔 Resend Webhook: ${type}`);

    if (type === 'email.delivered') {
      const recipient = data.to[0];
      
      await fetch(process.env.SLACK_WEBHOOK_URL!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `🚀 *New RSVP Confirmed!* \nAttendee: ${recipient}\nStatus: Ticket Delivered successfully.`,
        }),
      });
    }

    if (type === 'email.clicked') {
      await fetch(process.env.SLACK_WEBHOOK_URL!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `🎯 *Engagement Alert!* \nA user just clicked a link in their RSVP email!`,
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Webhook Error:', err);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}