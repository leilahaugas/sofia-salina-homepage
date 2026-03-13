import Link from 'next/link'
import { notFound } from 'next/navigation'
import { dict, isValidLang } from '@/lib/i18n'
import { getAllPosts } from '@/lib/markdown'

interface Props { params: Promise<{ lang: string }> }

export default async function ChaptersPage({ params }: Props) {
  const { lang } = await params
  if (!isValidLang(lang)) notFound()
  const d        = dict[lang]
  const chapters = getAllPosts('chapters', lang)

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="tag">{d.chapters.tag}</span>
          <h1 className="font-nunito font-black text-blue-deep text-4xl md:text-5xl">{d.chapters.title}</h1>
          <p className="text-dark/60 mt-4 text-lg">{d.chapters.desc}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {chapters.map(chapter => (
            <Link key={chapter.slug} href={`/${lang}/peatukid/${chapter.slug}`}
              className="card p-8 group">
              <div className="text-5xl mb-4">{chapter.coverEmoji}</div>
              <h2 className="font-nunito font-extrabold text-blue-deep text-xl mb-2 group-hover:text-blue-mid transition-colors">{chapter.title}</h2>
              <p className="text-dark/60 text-sm leading-relaxed mb-5">{chapter.excerpt}</p>
              <span className="text-blue-mid font-nunito font-bold text-sm">{d.chapters.readMore}</span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href={`/${lang}#hangi`} className="btn-primary">{d.chapters.getBook}</Link>
        </div>
      </div>
    </div>
  )
}
