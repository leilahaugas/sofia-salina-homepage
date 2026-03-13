import Link from 'next/link'
import type { Dict, Lang } from '@/lib/i18n'

export default function Footer({ d, lang }: { d: Dict; lang: Lang }) {
  return (
    <footer className="bg-dark text-white/70 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 text-center">

        <p className="font-nunito font-black text-white text-xl">Sofia Salina Haugas</p>
        <p className="text-sm italic text-white/45">{d.footer.tagline}</p>

        <nav className="flex flex-wrap justify-center gap-6">
          <Link href={`/${lang}#raamat`}  className="font-nunito font-bold text-sm text-white/50 hover:text-white transition-colors">{d.footer.links.book}</Link>
          <Link href={`/${lang}/blogi`}   className="font-nunito font-bold text-sm text-white/50 hover:text-white transition-colors">{d.footer.links.blog}</Link>
          <Link href={`/${lang}/peatukid`}className="font-nunito font-bold text-sm text-white/50 hover:text-white transition-colors">{d.footer.links.chapters}</Link>
          <Link href={`/${lang}/kontakt`} className="font-nunito font-bold text-sm text-white/50 hover:text-white transition-colors">{d.footer.links.contact}</Link>
        </nav>

        <div className="flex gap-4">
          {/* Instagram — update href when available */}
          <a href="#" aria-label="Instagram"
            className="w-11 h-11 rounded-full bg-white/8 flex items-center justify-center text-white/60 hover:bg-blue-mid hover:text-white transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
          </a>
          {/* TikTok — update href when available */}
          <a href="#" aria-label="TikTok"
            className="w-11 h-11 rounded-full bg-white/8 flex items-center justify-center text-white/60 hover:bg-blue-mid hover:text-white transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
            </svg>
          </a>
        </div>

        <p className="text-xs text-white/30">{d.footer.copy}</p>
      </div>
    </footer>
  )
}
