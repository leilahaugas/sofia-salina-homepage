import Link from 'next/link'
import { notFound } from 'next/navigation'
import { dict, isValidLang } from '@/lib/i18n'
import { getPost, getAllPosts } from '@/lib/markdown'
import type { Metadata } from 'next'

interface Props { params: Promise<{ lang: string; slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params
  if (!isValidLang(lang)) return {}
  const post = await getPost('blog', lang, slug)
  return post ? { title: post.title, description: post.excerpt } : {}
}

export async function generateStaticParams() {
  const params = []
  for (const lang of ['et', 'en'] as const) {
    const posts = getAllPosts('blog', lang)
    for (const p of posts) params.push({ lang, slug: p.slug })
  }
  return params
}

export default async function BlogPostPage({ params }: Props) {
  const { lang, slug } = await params
  if (!isValidLang(lang)) notFound()
  const d    = dict[lang]
  const post = await getPost('blog', lang, slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 px-6">
      <article className="max-w-2xl mx-auto">
        <Link href={`/${lang}/blogi`}
          className="inline-flex items-center font-nunito font-bold text-sm text-blue-light hover:text-blue-deep transition-colors mb-8">
          {d.blog.back}
        </Link>

        <div className="text-6xl mb-6">{post.coverEmoji}</div>
        <p className="text-xs font-nunito font-bold text-dark/30 uppercase tracking-widest mb-3">{post.date}</p>
        <h1 className="font-nunito font-black text-blue-deep text-3xl md:text-4xl mb-8">{post.title}</h1>

        <div className="prose-sofia" dangerouslySetInnerHTML={{ __html: post.html }} />

        <div className="mt-14 pt-8 border-t border-sky-mid">
          <Link href={`/${lang}/blogi`}
            className="font-nunito font-bold text-sm text-blue-light hover:text-blue-deep transition-colors">
            {d.blog.back}
          </Link>
        </div>
      </article>
    </div>
  )
}
