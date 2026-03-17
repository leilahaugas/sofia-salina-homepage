'use client'

import { useActionState, useEffect, useRef } from 'react'
import { sendPreOrder, type PreOrderState } from '@/app/actions/preorder'

interface PreOrderStrings {
  tag:     string
  title:   string
  desc:    string
  fields:  { name: string; email: string; phone: string; org: string; copies: string }
  submit:  string
  submitting: string
  success: string
  error:   string
}

const initial: PreOrderState = { status: 'idle' }

export default function PreOrderForm({ d }: { d: PreOrderStrings }) {
  const [state, action, pending] = useActionState(sendPreOrder, initial)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === 'success') formRef.current?.reset()
  }, [state.status])

  const inputClass =
    'w-full px-4 py-3 rounded-2xl border-2 border-sky-mid bg-sky-light/50 text-dark placeholder:text-dark/30 focus:outline-none focus:border-blue-mid transition-colors'
  const labelClass = 'block font-nunito font-bold text-sm text-blue-deep mb-1.5'

  if (state.status === 'success') {
    return (
      <div className="text-center py-16 px-8 bg-gradient-to-br from-sky-light to-sky-mid rounded-card">
        <div className="text-5xl mb-4">🎉</div>
        <p className="font-nunito font-black text-blue-deep text-xl">{d.success}</p>
      </div>
    )
  }

  return (
    <form ref={formRef} action={action} className="flex flex-col gap-5 text-left">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>{d.fields.name} *</label>
          <input name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>{d.fields.email} *</label>
          <input name="email" type="email" required className={inputClass} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>{d.fields.phone}</label>
          <input name="phone" type="tel" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>{d.fields.copies} *</label>
          <input name="copies" type="number" min="1" defaultValue="1" required className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>{d.fields.org}</label>
        <input name="org" type="text" className={inputClass} />
      </div>

      {state.status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-2xl px-5 py-4">
          <p className="font-nunito font-bold text-red-700 text-sm">{d.error}</p>
        </div>
      )}

      <button type="submit" disabled={pending}
        className="btn-primary self-start disabled:opacity-60 disabled:pointer-events-none">
        {pending ? d.submitting : d.submit}
      </button>
    </form>
  )
}
