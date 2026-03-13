import Link from 'next/link'
import { notFound } from 'next/navigation'
import { dict, isValidLang } from '@/lib/i18n'
import { getPost, getAllPosts } from '@/lib/markdown'
import type { Metadata } from 'next'

interface Props { params: Promise<{ lang: string; slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params
  if (!isValidLang(lang)) return {}
  const post = await getPost('chapters', lang, slug)
  return post ? { title: post.title, description: post.excerpt } : {}
}

export async function generateStaticParams() {
  const params = []
  for (const lang of ['et', 'en'] as const) {
    const chapters = getAllPosts('chapters', lang)
    for (const c of chapters) params.push({ lang, slug: c.slug })
  }
  return params
}

export default async function ChapterPage({ params }: Props) {
  const { lang, slug } = await params
  if (!isValidLang(lang)) notFound()
  const d       = dict[lang]
  const chapter = await getPost('chapters', lang, slug)
  if (!chapter) notFound()

  return (
    <div className="min-h-screen bg-sky-light/40 pt-28 pb-20 px-6">
      <article className="max-w-2xl mx-auto">
        <Link href={`/${lang}/peatukid`}
          className="inline-flex items-center font-nunito font-bold text-sm text-blue-light hover:text-blue-deep transition-colors mb-8">
          {d.chapters.back}
        </Link>

        <div className="text-6xl mb-6">{chapter.coverEmoji}</div>
        <h1 className="font-nunito font-black text-blue-deep text-3xl md:text-4xl mb-8">{chapter.title}</h1>

        <div className="prose-sofia" dangerouslySetInnerHTML={{ __html: chapter.html }} />

        {/* CTA to get the full book */}
        <div className="mt-14 p-8 bg-gradient-to-br from-sky-light to-sky-mid rounded-card text-center">
          <p className="font-nunito font-bold text-blue-deep mb-4">
            {lang === 'et' ? 'Meeldis? Hangi terve raamat!' : 'Enjoyed this? Get the full book!'}
          </p>
          <Link href={`/${lang}#hangi`} className="btn-primary">{d.chapters.getBook}</Link>
        </div>

        <div className="mt-8">
          <Link href={`/${lang}/peatukid`}
            className="font-nunito font-bold text-sm text-blue-light hover:text-blue-deep transition-colors">
            {d.chapters.back}
          </Link>
        </div>
      </article>
    </div>
  )
}
