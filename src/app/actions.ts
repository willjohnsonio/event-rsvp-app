'use server';

export async function submitRSVP(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const eventId = formData.get('eventId') as string;

  // Simulate server delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // In a real app, this would save to a database
  console.log(`RSVP for event ${eventId}: Name - ${name}, Email - ${email}`);

  return { success: true, message: 'RSVP submitted successfully!' };
}
