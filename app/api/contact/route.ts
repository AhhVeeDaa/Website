import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 503 }
      )
    }

    const resend = new Resend(apiKey)

    const { name, email, subject, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: 'AhhVeeDaa Contact Form <onboarding@resend.dev>',
      to: 'avidabuyombo1@gmail.com',
      reply_to: email,
      subject: subject ? `[Contact] ${subject}` : `[Contact] Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 500 }
    )
  }
}