'use server'

export interface PreOrderState {
  status: 'idle' | 'success' | 'error'
}

export async function sendPreOrder(_prev: PreOrderState, formData: FormData): Promise<PreOrderState> {
  const name   = formData.get('name')   as string
  const email  = formData.get('email')  as string
  const phone  = formData.get('phone')  as string
  const org    = formData.get('org')    as string
  const copies = formData.get('copies') as string

  if (!name || !email || !copies) {
    return { status: 'error' }
  }

  const apiKey       = process.env.RESEND_API_KEY
  const contactEmail = process.env.CONTACT_EMAIL ?? 'sofia@sofiasalina.com'

  if (!apiKey) {
    console.log('📦 Pre-order submission:', { name, email, phone, org, copies })
    return { status: 'success' }
  }

  try {
    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)

    await resend.emails.send({
      from:    'Sofia Salina website <onboarding@resend.dev>',
      to:      contactEmail,
      replyTo: email,
      subject: `[Eeltellimus] ${name} – ${copies} tk`,
      html: `
        <h2>Uus eeltellimus — sofiasalina.com</h2>
        <p><strong>Nimi:</strong> ${name}</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || '—'}</p>
        <p><strong>Asutus/organisatsioon:</strong> ${org || '—'}</p>
        <p><strong>Tellimuste arv:</strong> ${copies}</p>
      `,
    })

    return { status: 'success' }
  } catch (err) {
    console.error('Resend error:', err)
    return { status: 'error' }
  }
}
