'use server'

export interface PreOrderState {
  status: 'idle' | 'success' | 'error'
}

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
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

    await resend.emails.send({
      from:    'Sofia Salina <onboarding@resend.dev>',
      to:      email,
      subject: 'Eeltellimus kinnitatud / Pre-order confirmed – Sofia Salina',
      html: `
        <p>Tere ${esc(name)},</p>
        <p>Sinu eeltellimuse soov on meieni jõudnud. Oled tellinud <strong>${esc(copies)}</strong> eksemplari.</p>
        <p>Võtame sinuga peagi ühendust e-posti teel maksejuhiste ja tarnekuupäevaga.</p>
        <p>Küsimuste korral kirjuta: <a href="mailto:leila@eybaglobal.com">leila@eybaglobal.com</a></p>
        <hr style="margin:24px 0">
        <p>Hi ${esc(name)},</p>
        <p>Your pre-order request has reached us. You have ordered <strong>${esc(copies)}</strong> copy/copies.</p>
        <p>We will be in touch shortly with payment details and delivery information.</p>
        <p>For questions, write to: <a href="mailto:leila@eybaglobal.com">leila@eybaglobal.com</a></p>
      `,
    })

    return { status: 'success' }
  } catch (err) {
    console.error('Resend error:', err)
    return { status: 'error' }
  }
}
