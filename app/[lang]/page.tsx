import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { dict, isValidLang } from '@/lib/i18n'
import PreOrderForm from '@/components/PreOrderForm'

interface Props { params: Promise<{ lang: string }> }

const themes = ['food', 'social', 'sleep', 'sport', 'nicotine', 'eating', 'alcohol', 'mood'] as const
const themeIcons: Record<string, string> = {
  food:     '/images/doodles/Toitumine.png',
  social:   '/images/doodles/sotsiaalne_tervis.png',
  sleep:    '/images/doodles/Puhkus_ja_uni.png',
  sport:    '/images/doodles/Sport-ja-liikumine.png',
  nicotine: '/images/doodles/Nikotiin-ja-uimastid.png',
  eating:   '/images/doodles/Toitumisega-seotud-haired.png',
  alcohol:  '/images/doodles/Alkohol-ja-suhkrurikkad-joogid.png',
  mood:     '/images/doodles/Enesetunne-ja-meeleolu.png',
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params
  if (!isValidLang(lang)) notFound()
  const d = dict[lang]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: d.faq.items.map(item => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          }),
        }}
      />
      {/* ── HERO ── */}
      <section className="min-h-screen bg-gradient-to-br from-sky-light via-sky-mid to-[#dbeef8] flex items-center pt-24 pb-16 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-mid/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">

          {/* Book */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="relative group">
                <Image src="/images/book-cover-1.png" alt="Raamatu kaas" width={280} height={420}
                  className="rounded-lg shadow-book group-hover:-translate-y-2 group-hover:rotate-1 transition-transform duration-500" />
                <Image src="/images/doodles/star.svg"  alt="" width={36} height={36} className="absolute -top-7 -right-3 float float-delay-1" />
                <Image src="/images/doodles/heart.svg" alt="" width={32} height={32} className="absolute bottom-8 -left-7 float float-delay-2" />
                <Image src="/images/doodles/moon.svg"  alt="" width={34} height={34} className="absolute top-1/2 -right-10 float float-delay-3" />
              </div>
              <Link href={`/${lang}#autorist`}
                className="absolute -bottom-4 -right-6 inline-flex items-center gap-2 bg-blue-deep text-white font-nunito font-extrabold text-sm px-6 py-3 rounded-btn shadow-hover hover:bg-red-600 transition-all duration-200">
                {d.sofia.badge}
              </Link>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="tag">{d.hero.tag}</span>
            <h1 className="font-nunito font-black text-blue-deep text-4xl md:text-5xl leading-tight mb-3">{d.hero.title}</h1>
            <h2 className="font-nunito font-bold text-blue-light text-lg mb-5">{d.hero.subtitle}</h2>
            <p className="text-dark/70 text-lg mb-9 max-w-md">{d.hero.desc}</p>
            <div className="flex gap-4 flex-wrap">
              <Link href={`/${lang}#hangi`} className="btn-primary">{d.hero.cta}</Link>
              <Link href={`/${lang}#raamat`} className="btn-secondary">{d.hero.more}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="raamat" className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="tag">{d.about.tag}</span>
            <h2 className="font-nunito font-black text-blue-deep text-3xl md:text-4xl mb-5">{d.about.title}</h2>
            <p className="text-dark/70 mb-4">{d.about.p1}</p>
            <p className="text-dark/70 mb-4">{d.about.p2}</p>
            <p className="text-dark/70 mb-6">{d.about.p3}</p>
            <blockquote className="border-l-4 border-blue-deep bg-sky-light rounded-r-card pl-6 pr-4 py-4">
              <p className="font-nunito font-bold text-blue-deep italic">"{d.about.quote}"</p>
              <cite className="block mt-2 text-sm text-dark/40 not-italic">— Sofia Salina Haugas</cite>
            </blockquote>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              {themes.map(t => (
                <div key={t} className="flex flex-col items-center gap-3 text-center">
                  <div className="w-32 h-32 rounded-full bg-white shadow-card hover:-translate-y-1 hover:shadow-hover transition-all flex items-center justify-center overflow-hidden">
                    <Image src={themeIcons[t]} alt={d.themes[t].label}
                      width={themeIcons[t].endsWith('.png') ? 128 : 52}
                      height={themeIcons[t].endsWith('.png') ? 128 : 52}
                      className={themeIcons[t].endsWith('.png') ? 'w-full h-full object-cover' : ''} />
                  </div>
                  <span className="font-nunito font-bold text-sm text-blue-deep leading-tight">{d.themes[t].label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INSIDE ── */}
      <section id="sisu" className="py-20 px-6 bg-sky-light/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="tag">{d.inside.tag}</span>
            <h2 className="font-nunito font-black text-blue-deep text-3xl md:text-4xl">{d.inside.title}</h2>
            <p className="text-dark/60 mt-3">{d.inside.desc}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {themes.map((t, i) => (
              <div key={t} className="card p-6 text-center" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-sky-light to-sky-mid rounded-2xl flex items-center justify-center overflow-hidden">
                  <Image src={themeIcons[t]} alt=""
                    width={themeIcons[t].endsWith('.png') ? 80 : 40}
                    height={themeIcons[t].endsWith('.png') ? 80 : 40}
                    className={themeIcons[t].endsWith('.png') ? 'w-full h-full object-cover' : ''} />
                </div>
                <h3 className="font-nunito font-extrabold text-blue-deep text-lg mb-2">{d.themes[t].label}</h3>
                <p className="text-sm text-dark/60 leading-relaxed">{d.themes[t].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOFIA ── */}
      <section id="autorist" className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[380px_1fr] gap-16 items-center">
          <div className="relative max-w-sm mx-auto md:mx-0 w-full">
            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-book">
              <Image src="/images/sofia_salina_raamatuga.png" alt="Sofia Salina" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 380px" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-blue-deep text-white font-nunito font-extrabold text-sm px-5 py-3 rounded-2xl shadow-hover text-center leading-snug">
              {d.sofia.badge}
            </div>
          </div>

          <div>
            <span className="tag">{d.sofia.tag}</span>
            <h2 className="font-nunito font-black text-blue-deep text-3xl md:text-4xl mb-5">{d.sofia.title}</h2>
            <p className="text-dark/70 mb-4">{d.sofia.p1}</p>
            <p className="text-dark/70 mb-8">{d.sofia.p2}</p>
            <div className="flex gap-8 mb-8">
              {[
                { num: '15', label: d.sofia.age },
                { num: '8',  label: d.sofia.topics },
                { num: '100%', label: d.sofia.honest },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <div className="font-nunito font-black text-blue-deep text-3xl">{s.num}</div>
                  <div className="text-xs text-dark/40 font-semibold mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <Link href={`/${lang}#hangi`} className="btn-primary">{d.sofia.cta}</Link>
          </div>
        </div>
      </section>

      {/* ── QUOTES ── */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-deep to-blue-mid relative overflow-hidden">
        <div className="absolute top-0 left-8 font-nunito font-black text-[200px] text-white/[0.04] leading-none pointer-events-none select-none">"</div>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block font-nunito text-xs font-bold tracking-widest uppercase text-white/70 bg-white/15 px-4 py-1.5 rounded-full mb-4">{d.quotes.tag}</span>
            <h2 className="font-nunito font-black text-white text-3xl md:text-4xl">{d.quotes.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {d.quotes.items.map((q, i) => (
              <div key={i} className="bg-white/20 border border-white/30 backdrop-blur rounded-card p-8 hover:-translate-y-1 hover:bg-white/25 transition-all">
                <div className="font-nunito font-black text-5xl text-white/30 leading-none mb-4">"</div>
                <p className="font-nunito font-semibold text-white/90 italic leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative overflow-hidden py-20 px-6 bg-sky-light/30">
        <span aria-hidden="true" className="pointer-events-none select-none absolute top-36 left-[18%] font-nunito font-black text-6xl text-blue-deep/10 float float-delay-1">?</span>
        <span aria-hidden="true" className="pointer-events-none select-none absolute top-44 right-[17%] font-nunito font-black text-8xl text-blue-deep/10 float float-delay-2">?</span>
        <span aria-hidden="true" className="pointer-events-none select-none absolute top-[55%] left-[16%] font-nunito font-black text-4xl text-blue-deep/10 float float-delay-3">?</span>
        <span aria-hidden="true" className="pointer-events-none select-none absolute top-[65%] right-[18%] font-nunito font-black text-5xl text-blue-deep/10 float">?</span>
        <span aria-hidden="true" className="pointer-events-none select-none absolute bottom-16 left-[20%] font-nunito font-black text-7xl text-blue-deep/10 float float-delay-2">?</span>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="tag">{d.faq.tag}</span>
            <h2 className="font-nunito font-black text-blue-deep text-3xl md:text-4xl mt-4">{d.faq.title}</h2>
            <p className="mt-4 text-dark/60 max-w-2xl mx-auto leading-relaxed">{d.faq.intro}</p>
          </div>
          <div className="flex flex-col gap-3">
            {d.faq.items.map((item, i) => (
              <details key={i} className="group bg-white border border-sky-mid/40 rounded-card px-6 py-5 cursor-pointer">
                <summary className="flex items-center justify-between gap-4 list-none select-none">
                  <h3 className="font-nunito font-bold text-blue-deep text-base md:text-lg">{item.q}</h3>
                  <span className="shrink-0 text-blue-light transition-transform duration-200 group-open:rotate-180">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-dark/70 leading-relaxed">{item.a}</p>
                <a href={item.source} target="_blank" rel="noopener noreferrer"
                  className="inline-block mt-3 text-xs text-blue-light hover:underline">
                  {d.faq.sourceLabel}: {item.source}
                </a>
              </details>
            ))}
          </div>
          <p className="mt-10 text-center text-dark/60 max-w-xl mx-auto leading-relaxed">{d.faq.closing}</p>
        </div>
      </section>

      {/* ── GET BOOK ── */}
      <section id="hangi" className="py-24 px-6 bg-white">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <span className="tag">{d.getBook.tag}</span>
            <h2 className="font-nunito font-black text-blue-deep text-3xl md:text-4xl mt-4 mb-4">{d.getBook.title}</h2>
            <p className="text-dark/60 text-lg">{d.getBook.desc}</p>
          </div>
          <PreOrderForm d={d.getBook} />
        </div>
      </section>
    </>
  )
}
