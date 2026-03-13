'use client'

import { useActionState, useEffect, useRef } from 'react'
import { sendContact, type ContactState } from '@/app/actions/contact'
import type { Dict } from '@/lib/i18n'

const initial: ContactState = { status: 'idle' }

export default function ContactForm({ d }: { d: Dict }) {
  const [state, action, pending] = useActionState(sendContact, initial)
  const formRef = useRef<HTMLFormElement>(null)
  const c = d.contact

  useEffect(() => {
    if (state.status === 'success') formRef.current?.reset()
  }, [state.status])

  if (state.status === 'success') {
    return (
      <div className="text-center py-16 px-8 bg-gradient-to-br from-sky-light to-sky-mid rounded-card">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="font-nunito font-black text-blue-deep text-2xl mb-2">{c.successTitle}</h3>
        <p className="text-dark/60">{c.successDesc}</p>
      </div>
    )
  }

  return (
    <form ref={formRef} action={action} className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-nunito font-bold text-sm text-blue-deep mb-1.5">{c.name}</label>
          <input name="name" type="text" required
            className="w-full px-4 py-3 rounded-2xl border-2 border-sky-mid bg-sky-light/50 text-dark placeholder:text-dark/30
                       focus:outline-none focus:border-blue-mid transition-colors" />
        </div>
        <div>
          <label className="block font-nunito font-bold text-sm text-blue-deep mb-1.5">{c.email}</label>
          <input name="email" type="email" required
            className="w-full px-4 py-3 rounded-2xl border-2 border-sky-mid bg-sky-light/50 text-dark placeholder:text-dark/30
                       focus:outline-none focus:border-blue-mid transition-colors" />
        </div>
      </div>

      <div>
        <label className="block font-nunito font-bold text-sm text-blue-deep mb-1.5">{c.subject}</label>
        <select name="subject"
          className="w-full px-4 py-3 rounded-2xl border-2 border-sky-mid bg-sky-light/50 text-dark
                     focus:outline-none focus:border-blue-mid transition-colors">
          {c.subjects.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label className="block font-nunito font-bold text-sm text-blue-deep mb-1.5">{c.message}</label>
        <textarea name="message" rows={5} required
          className="w-full px-4 py-3 rounded-2xl border-2 border-sky-mid bg-sky-light/50 text-dark placeholder:text-dark/30
                     focus:outline-none focus:border-blue-mid transition-colors resize-none" />
      </div>

      {state.status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-2xl px-5 py-4">
          <p className="font-nunito font-bold text-red-700 text-sm">{c.errorTitle}</p>
          <p className="text-red-600 text-sm mt-1">{c.errorDesc}</p>
        </div>
      )}

      <button type="submit" disabled={pending}
        className="btn-primary self-start disabled:opacity-60 disabled:pointer-events-none">
        {pending ? c.sending : c.send}
      </button>
    </form>
  )
}
