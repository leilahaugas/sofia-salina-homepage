import Link from 'next/link'
import { notFound } from 'next/navigation'
import { dict, isValidLang } from '@/lib/i18n'
import { getAllPosts } from '@/lib/markdown'

interface Props { params: Promise<{ lang: string }> }

export default async function BlogPage({ params }: Props) {
  const { lang } = await params
  if (!isValidLang(lang)) notFound()
  const d = dict[lang]
  const posts = getAllPosts('blog', lang)

  return (
    <div className="min-h-screen bg-sky-light/40 pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="tag">{d.blog.tag}</span>
          <h1 className="font-nunito font-black text-blue-deep text-4xl md:text-5xl">{d.blog.title}</h1>
          <p className="text-dark/60 mt-4 text-lg">{d.blog.desc}</p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-dark/40 text-lg py-20">{d.blog.empty}</p>
        ) : (
          <div className="flex flex-col gap-6">
            {posts.map(post => (
              <Link key={post.slug} href={`/${lang}/blogi/${post.slug}`}
                className="card p-8 flex items-start gap-6 group">
                <div className="text-5xl shrink-0">{post.coverEmoji}</div>
                <div className="flex-1">
                  <p className="text-xs font-nunito font-bold text-dark/30 uppercase tracking-widest mb-2">{post.date}</p>
                  <h2 className="font-nunito font-extrabold text-blue-deep text-xl mb-2 group-hover:text-blue-mid transition-colors">{post.title}</h2>
                  <p className="text-dark/60 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="text-blue-mid font-nunito font-bold text-sm">{d.blog.readMore}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
