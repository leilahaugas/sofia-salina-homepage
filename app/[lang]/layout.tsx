import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { dict, isValidLang } from '@/lib/i18n'
import type { Metadata } from 'next'

interface Props {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  if (!isValidLang(lang)) return {}
  const d = dict[lang]
  return {
    title: {
      default: 'Sofia Salina Haugas',
      template: '%s | Sofia Salina Haugas',
    },
    description: `${d.hero.subtitle} ${d.hero.desc}`,
  }
}

export function generateStaticParams() {
  return [{ lang: 'et' }, { lang: 'en' }]
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params
  if (!isValidLang(lang)) notFound()
  const d = dict[lang]

  return (
    <html lang={lang}>
      <body>
        <Nav d={d} lang={lang} />
        <main>{children}</main>
        <Footer d={d} lang={lang} />
      </body>
    </html>
  )
}
