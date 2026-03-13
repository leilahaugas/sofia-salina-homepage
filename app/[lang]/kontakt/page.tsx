import { notFound } from 'next/navigation'
import { dict, isValidLang } from '@/lib/i18n'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

interface Props { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  if (!isValidLang(lang)) return {}
  const d = dict[lang]
  return { title: d.contact.title }
}

export default async function ContactPage({ params }: Props) {
  const { lang } = await params
  if (!isValidLang(lang)) notFound()
  const d = dict[lang]
  const c = d.contact

  return (
    <div className="min-h-screen bg-sky-light/40 pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="tag">{c.tag}</span>
          <h1 className="font-nunito font-black text-blue-deep text-4xl md:text-5xl">{c.title}</h1>
          <p className="text-dark/60 mt-4 text-lg">{c.desc}</p>
        </div>

        <div className="bg-white rounded-card shadow-card p-8 md:p-12">
          <ContactForm d={d} />
        </div>
      </div>
    </div>
  )
}
