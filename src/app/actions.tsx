'use server';

import { Resend } from 'resend';
import { v4 as uuidv4 } from 'uuid';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitRSVP(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const eventTitle = formData.get('eventTitle') as string;
  const eventDateString = formData.get('eventDate') as string;

  try {

  
    const { data, error } = await resend.emails.send({
      from: 'Events Team <onboarding@resend.dev>', 
      to: email, 
      subject: 'You are registered!',
      html: `
        <h2>Hey ${name}!</h2>
        <p>Your RSVP for ${eventTitle} is confirmed.</p>
        <p>We'll see you there.</p>`,
      attachments: [
        {
          path: 'https://res.cloudinary.com/dqao0voyr/image/upload/v1771532897/ticket.jpg',
          filename: 'ticket.jpg',
        },
      ],
        headers: {
    'X-Entity-Ref-ID': uuidv4(),
  },
    });

    const eventDate = new Date(eventDateString);
    const reminderDate = new Date(eventDate); 
    reminderDate.setDate(reminderDate.getDate() - 1); 
    
    if (reminderDate > new Date()) {
      const reminder = await resend.emails.send({
        from: 'Events Team <onboarding@resend.dev>', 
        to: email, 
        subject: `Reminder: ${eventTitle} is tomorrow!`,
        html: `<p>Hey ${name}, we kick off in tomorrow. See you there!</p>`,
        scheduledAt: reminderDate.toISOString(),
        headers: {
    'X-Entity-Ref-ID': uuidv4(),
  }
      });
      console.log(`Reminder scheduled! ID: ${reminder.data?.id}`);
    } 

    console.log(`Email sent successfully to ${email}. ID: ${data?.id}`);
    return { success: true, message: 'RSVP submitted successfully!' };

  } catch (err) {
    console.error('Server error:', err);
    return { success: false, message: 'Something went wrong.' };
  }
}