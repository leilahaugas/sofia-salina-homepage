'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import type { Dict, Lang } from '@/lib/i18n'

export default function Nav({ d, lang }: { d: Dict; lang: Lang }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const otherLang = lang === 'et' ? 'en' : 'et'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: `/${lang}#raamat`,  label: d.nav.book },
    { href: `/${lang}#sisu`,    label: d.nav.inside },
    { href: `/${lang}#autorist`,label: d.nav.author },
    { href: `/${lang}/blogi`,   label: d.nav.blog },
    { href: `/${lang}/peatukid`,label: d.nav.chapters },
    { href: `/${lang}/kontakt`, label: d.nav.contact },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300
      ${scrolled ? 'bg-sky-light/95 backdrop-blur-md shadow-[0_2px_16px_rgba(27,58,158,0.08)]' : ''}`}>

      <Link href={`/${lang}`} className="font-nunito font-black text-blue-deep text-lg">
        Sofia Salina
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-7 list-none">
        {links.map(l => (
          <li key={l.href}>
            <Link href={l.href}
              className="font-nunito font-bold text-sm text-blue-deep/70 hover:text-blue-deep transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        {/* Language toggle */}
        <div className="flex gap-1 bg-blue-deep/10 rounded-full p-1">
          <Link href={`/${lang}`}
            className={`font-nunito font-bold text-xs px-3 py-1 rounded-full transition-all
              ${lang === d.lang ? 'bg-blue-deep text-white' : 'text-blue-deep/50 hover:text-blue-deep'}`}>
            {d.langLabel}
          </Link>
          <Link href={`/${otherLang}`}
            className={`font-nunito font-bold text-xs px-3 py-1 rounded-full transition-all
              ${lang !== d.lang ? 'bg-blue-deep text-white' : 'text-blue-deep/50 hover:text-blue-deep'}`}>
            {d.otherLangLabel}
          </Link>
        </div>

        {/* Pre-order button (desktop) */}
        <Link href={`/${lang}#hangi`} className="hidden md:inline-flex btn-primary text-sm px-5 py-2">
          {d.nav.preorder}
        </Link>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)}
          className="flex md:hidden flex-col gap-1.5 p-1 cursor-pointer"
          aria-label="Menu">
          <span className={`block w-6 h-0.5 bg-blue-deep rounded transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-blue-deep rounded transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-blue-deep rounded transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 bg-sky-light/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 z-40 md:hidden">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="font-nunito font-black text-2xl text-blue-deep">
              {l.label}
            </Link>
          ))}
          <Link href={`/${lang}#hangi`} onClick={() => setOpen(false)} className="btn-primary mt-4">
            {d.nav.preorder}
          </Link>
        </div>
      )}
    </nav>
  )
}
