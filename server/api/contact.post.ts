// server/api/contact.post.ts
import { defineEventHandler, readBody, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, phone, country, message } = body

  // ── Validation ──────────────────────────────────────────────
  if (!name || !email || !phone || !country || !message) {
    throw createError({ statusCode: 400, statusMessage: 'All fields are required.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid email address.' })
  }

  // ── Read API key directly from process.env ───────────────────
  // Nuxt server routes have access to process.env natively
  const RESEND_API_KEY = process.env.RESEND_API_KEY

  if (!RESEND_API_KEY) {
    throw createError({ statusCode: 500, statusMessage: 'Email service not configured.' })
  }

  // ── Send via Resend ──────────────────────────────────────────
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // While testing use: onboarding@resend.dev
      // After domain verification use: hello@yourdomain.com
      from: 'Nexus Digital <onboarding@resend.dev>',

      // ✅ Your email address
      to: ['ab@gmail.com'],

      subject: `New Inquiry from ${name} — Nexus Digital`,

      text: `
New contact form submission:

Name:     ${name}
Email:    ${email}
Phone:    ${phone}
Country:  ${country}

Message:
${message}
      `.trim(),

      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0F1115;border-radius:24px;overflow:hidden;">

        <!-- Header -->
        <tr>
          <td style="background:#0F1115;padding:40px 48px 32px;border-bottom:1px solid rgba(255,255,255,0.06);">
            <table width="100%" cellpadding="0" cellspacing="0"><tr>
              <td><span style="font-size:28px;font-weight:900;color:#ffffff;letter-spacing:-1px;">NEXUS<span style="color:#22C55E;">.</span></span></td>
              <td align="right"><span style="background:#22C55E;color:#0F1115;font-size:11px;font-weight:700;padding:6px 14px;border-radius:100px;letter-spacing:0.08em;text-transform:uppercase;">New Inquiry</span></td>
            </tr></table>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px 48px;">
            <p style="color:#9CA3AF;font-size:14px;margin:0 0 32px;line-height:1.6;">You have received a new contact form submission:</p>

            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr><td style="padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                <span style="color:#9CA3AF;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;">Full Name</span><br/>
                <span style="color:#ffffff;font-size:16px;font-weight:600;margin-top:4px;display:block;">${name}</span>
              </td></tr>
              <tr><td style="padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                <span style="color:#9CA3AF;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;">Email Address</span><br/>
                <a href="mailto:${email}" style="color:#22C55E;font-size:16px;font-weight:600;margin-top:4px;display:block;text-decoration:none;">${email}</a>
              </td></tr>
              <tr><td style="padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                <span style="color:#9CA3AF;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;">Phone Number</span><br/>
                <a href="tel:${phone}" style="color:#ffffff;font-size:16px;font-weight:600;margin-top:4px;display:block;text-decoration:none;">${phone}</a>
              </td></tr>
              <tr><td style="padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                <span style="color:#9CA3AF;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;">Country</span><br/>
                <span style="color:#ffffff;font-size:16px;font-weight:600;margin-top:4px;display:block;">${country}</span>
              </td></tr>
              <tr><td style="padding:14px 0;">
                <span style="color:#9CA3AF;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;">Message</span><br/>
                <span style="color:#ffffff;font-size:15px;line-height:1.7;margin-top:8px;display:block;white-space:pre-wrap;">${message}</span>
              </td></tr>
            </table>

            <table cellpadding="0" cellspacing="0"><tr>
              <td style="border-radius:100px;background:#22C55E;">
                <a href="mailto:${email}?subject=Re: Your inquiry to Nexus Digital"
                  style="display:inline-block;padding:14px 32px;color:#0F1115;font-size:14px;font-weight:700;text-decoration:none;">
                  Reply to ${name} →
                </a>
              </td>
            </tr></table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:24px 48px;border-top:1px solid rgba(255,255,255,0.06);">
            <p style="color:rgba(156,163,175,0.5);font-size:12px;margin:0;line-height:1.6;">
              Sent from the contact form on your Nexus Digital website.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
      `,
    }),
  })

  if (!res.ok) {
    const err = await res.json()
    console.error('Resend error:', err)
    throw createError({ statusCode: 500, statusMessage: 'Failed to send email. Please try again.' })
  }

  return { success: true }
})