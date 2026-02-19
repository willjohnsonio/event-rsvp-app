'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitRSVP(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const eventTitle = formData.get('eventTitle') as string;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Events Team <onboarding@resend.dev>', 
      to: email, 
      subject: 'You are registered!',
      html: `
        <h2>Hey ${name}!</h2>
        <p>Your RSVP for ${eventTitle} is confirmed.</p>
        <p>We'll see you there.</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, message: 'Failed to send email.' };
    }

    console.log(`Email sent successfully to ${email}. ID: ${data?.id}`);
    return { success: true, message: 'RSVP submitted successfully!' };

  } catch (err) {
    console.error('Server error:', err);
    return { success: false, message: 'Something went wrong.' };
  }
}