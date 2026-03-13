'use server'

export interface ContactState {
  status: 'idle' | 'success' | 'error'
  message?: string
}

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name    = formData.get('name')    as string
  const email   = formData.get('email')   as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { status: 'error' }
  }

  // Resend integration — add RESEND_API_KEY and CONTACT_EMAIL to .env.local
  const apiKey       = process.env.RESEND_API_KEY
  const contactEmail = process.env.CONTACT_EMAIL ?? 'sofia@sofiasalina.com'

  if (!apiKey) {
    // Dev mode: just log — set up Resend to send real emails
    console.log('📩 Contact form submission:', { name, email, subject, message })
    return { status: 'success' }
  }

  try {
    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)

    await resend.emails.send({
      from:    'Sofia Salina website <onboarding@resend.dev>',
      to:      contactEmail,
      replyTo: email,
      subject: `[sofiasalina.com] ${subject || 'New message'} — from ${name}`,
      html: `
        <h2>New message from sofiasalina.com</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr/>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })

    return { status: 'success' }
  } catch (err) {
    console.error('Resend error:', err)
    return { status: 'error' }
  }
}
