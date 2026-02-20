<div align="center">
  <h1>🎟️ Resend RSVP Email Flow Demo </h1>
</div>

<br />

An event RSVP application built with [Next.js](https://nextjs.org), TailwindCSS, and the [Resend](https://resend.com/) Node.js SDK. This shows the Developer Experience of intergrating Resend for a full featuted email experience. 

<img width="1920" height="1080" alt="Screenshot 2026-02-20 at 11 33 35 AM" src="https://github.com/user-attachments/assets/08ca5e69-6729-421c-bf2d-675cdca62583" />


## Resend Features

* [Transactional email](https://resend.com/products/transactional-emails) trigged by RSVP
* [Scheduled email](https://resend.com/docs/dashboard/emails/schedule-email) 1 day before event
* [Attachment](https://resend.com/docs/dashboard/emails/attachments) sent with email
* [Custom header](https://resend.com/docs/dashboard/emails/custom-headers) to prevent threading in Gmail
* [Webhooks](https://resend.com/docs/webhooks/introduction) to send notification



### Clone & Install

```bash
git clone https://github.com/willjohnsonio/event-rsvp-app
cd event-rsvp-app
npm install
```
### Environment Variables 

Create an `.env.local` file in the root of the project and add your [Resend API Key](https://resend.com/docs/dashboard/api-keys/introduction) that you can get from the [Resend Dashboard](https://resend.com/api-keys)

```bash
RESEND_API_KEY=re_XXXXXXXX
```

### 3. Run Development Server

Open `http://localhost:3000` in your browswer to see the application. Click on an event and fill out the form and submit to trigger a tranactional email confimed the RSVP
