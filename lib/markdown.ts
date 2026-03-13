import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import type { Lang } from './i18n'

const contentDir = path.join(process.cwd(), 'content')

export interface PostMeta {
  slug:    string
  title:   string
  date:    string
  excerpt: string
  coverEmoji?: string
}

export interface Post extends PostMeta {
  html: string
}

function getDir(type: 'blog' | 'chapters', lang: Lang) {
  return path.join(contentDir, lang, type)
}

export function getAllPosts(type: 'blog' | 'chapters', lang: Lang): PostMeta[] {
  const dir = getDir(type, lang)
  if (!fs.existsSync(dir)) return []

  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(filename => {
      const slug = filename.replace(/\.md$/, '')
      const raw  = fs.readFileSync(path.join(dir, filename), 'utf8')
      const { data } = matter(raw)
      return {
        slug,
        title:       data.title ?? slug,
        date:        data.date  ?? '',
        excerpt:     data.excerpt ?? '',
        coverEmoji:  data.coverEmoji ?? '📖',
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPost(type: 'blog' | 'chapters', lang: Lang, slug: string): Promise<Post | null> {
  const filePath = path.join(getDir(type, lang), `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const processed = await remark().use(remarkHtml).process(content)

  return {
    slug,
    title:       data.title ?? slug,
    date:        data.date  ?? '',
    excerpt:     data.excerpt ?? '',
    coverEmoji:  data.coverEmoji ?? '📖',
    html:        processed.toString(),
  }
}
