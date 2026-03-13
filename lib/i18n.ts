export type Lang = 'et' | 'en'

export const locales: Lang[] = ['et', 'en']

export function isValidLang(lang: string): lang is Lang {
  return locales.includes(lang as Lang)
}

export const dict = {
  et: {
    lang: 'et',
    otherLang: 'en',
    otherLangLabel: 'EN',
    langLabel: 'ET',

    // Nav
    nav: {
      book:    'Raamat',
      inside:  'Sisu',
      author:  'Autorist',
      blog:    'Blogi',
      chapters:'Peatükid',
      contact: 'Kontakt',
      preorder:'Eeltelli',
    },

    // Hero
    hero: {
      tag:      'Uus raamat · 2025',
      title:    'Noorte Tervislikud Eluviisid',
      subtitle: 'Väikesed sammud. Suur muutus. Meie moodi.',
      desc:     'Aus ja praktiline teejuht noorelt noorele — liikumisest, unest, toitumisest, vaimsest tervisest ja enesetundmisest. Kirjutatud 15-aastase tüdruku poolt, kes teab, milline see elu tegelikult välja näeb.',
      cta:      'Eeltelli raamat',
      more:     'Loe rohkem',
    },

    // About
    about: {
      tag:      'Raamatust',
      title:    'Mitte reeglid — vaid valikud',
      p1:       'Kas ka sinu peas on vahel segadus, milline üks "õige" noore elu välja peaks nägema? Sotsiaalmeedias tunduvad teiste elud pealtnäha täiuslikud — mida süüa, kui palju liikuda, kuidas magada.',
      p2:       'See raamat ei anna sulle reegleid. See aitab sul leida oma väikesed igapäevased sammud, mis kokku moodustavad suur muutuse — sinu moodi.',
      p3:       'Võid joonida alla, kirjutada vahele, värvida pilte. Tee see raamat täpselt enda nägu.',
      quote:    'Väikesed sammud. Suur muutus. Meie moodi.',
    },

    // Themes
    themes: {
      tag:     'Teemad',
      movement:{ label: 'Liikumine', desc: 'Liikumine ei pea olema raske. Leiame koos viisid, mis päriselt sobivad sinu ellu.' },
      sleep:   { label: 'Uni',       desc: 'Miks uni on salajane supervõim? Ja kuidas telefon meie und mõjutab — ausalt.' },
      food:    { label: 'Toitumine', desc: 'Räägime päris toitumisest, mitte dieetidest. Friikartulid on ka okei.' },
      mental:  { label: 'Vaimne tervis', desc: 'Stress, surve, sotsiaalmeedias võrdlemine. Kuidas hoida oma pead selge.' },
      emotions:{ label: 'Emotsioonid', desc: 'Emotsioonide mõistmine ja nendega toimetulek — noorte keeles.' },
      self:    { label: 'Enesetundmine', desc: 'Praktilised harjutused enda paremaks tundmaõppimiseks ja väärtuste leidmiseks.' },
    },

    // Inside
    inside: {
      tag:   'Mis raamatus on',
      title: 'Kuus teemat, üks eesmärk',
      desc:  'Iga peatükk on aus ja praktiline — mitte loeng, vaid vestlus.',
    },

    // Sofia
    sofia: {
      tag:    'Autorist',
      title:  'Tere, mina olen Sofia Salina',
      p1:     'Mina olen Sofia Salina (15 aastat) ja ma ei ole täiuslik. Mul on päevi, kus friikartulid võidavad salati ja telefoniekraan uneaja. Kuid ma olen õppinud, et tervislik elu ei tähenda reeglite ranget järgimist — vaid oma keha ja vaimu kuulamist.',
      p2:     'Kirjutasin selle raamatu, sest tahtsin jagada teadmisi, mis aitavad teha teadlikumaid valikuid. Ja seda noorte keeles — ausalt, praktiliselt, päriselt.',
      age:    'aastat vana',
      topics: 'teemat kaetud',
      honest: 'aus & praktiline',
      photo:  'Sofia Salina foto tuleb varsti',
      badge:  '15-aastane autor ✨',
      cta:    'Eeltelli raamat',
    },

    // Quotes
    quotes: {
      tag:   'Raamatust',
      title: 'Mõned mõtted...',
      items: [
        'Tervislik elu ei tähenda reeglite ranget järgimist, vaid oma keha ja vaimu kuulamist.',
        'Väikesed sammud kokku moodustavad suure muutuse — aga ainult siis, kui need sammud on sinu omad.',
        'Ka see on täiesti okei, kui kõik ei lähe plaanipäraselt. Eksimused on osa protsessist, mitte protsessi lõpp.',
      ],
    },

    // Get book
    getBook: {
      tag:    'Hangi raamat',
      title:  'Valmis alustama?',
      desc:   '"Noorte Tervislikud Eluviisid" on peagi saadaval. Jää silme peal — eeltellimise link lisatakse siia niipea kui võimalik!',
      cta:    'Eeltellimise link tuleb peagi ✨',
      soon:   'Peagi saadaval · Coming soon',
    },

    // Blog
    blog: {
      tag:       'Blogi',
      title:     'Sofia mõtted',
      desc:      'Ausad mõtted tervisest, elust ja kõigest vahepeal.',
      readMore:  'Loe edasi →',
      back:      '← Tagasi blogi',
      empty:     'Postitusi pole veel. Tule varsti tagasi!',
    },

    // Chapters
    chapters: {
      tag:      'Peatükid',
      title:    'Vaata raamatusse',
      desc:     'Tasuta peatükipreviewid — tutvu raamatuga enne ostmist.',
      readMore: 'Loe peatükki →',
      back:     '← Tagasi peatükkide juurde',
      getBook:  'Hangi terve raamat',
    },

    // Contact
    contact: {
      tag:         'Kontakt',
      title:       'Võta ühendust',
      desc:        'Küsimused, koostöö, meediapäringud — kirjuta julgelt!',
      name:        'Sinu nimi',
      email:       'E-posti aadress',
      subject:     'Teema',
      message:     'Sõnum',
      send:        'Saada sõnum',
      sending:     'Saadan...',
      successTitle:'Sõnum saadetud! 🎉',
      successDesc: 'Tänan kirja eest! Vastan esimesel võimalusel.',
      errorTitle:  'Midagi läks valesti.',
      errorDesc:   'Palun proovi uuesti või kirjuta otse: sofia@sofiasalina.com',
      subjects:    ['Küsimus raamatu kohta', 'Koostöö', 'Meediapäring', 'Muu'],
    },

    // Footer
    footer: {
      tagline: 'Väikesed sammud. Suur muutus. Meie moodi.',
      copy:    '© 2025 Sofia Salina Haugas · sofiasalina.com',
      links: {
        book:     'Raamat',
        blog:     'Blogi',
        chapters: 'Peatükid',
        contact:  'Kontakt',
      },
    },
  },

  en: {
    lang: 'en',
    otherLang: 'et',
    otherLangLabel: 'ET',
    langLabel: 'EN',

    nav: {
      book:    'The Book',
      inside:  'Inside',
      author:  'About',
      blog:    'Blog',
      chapters:'Chapters',
      contact: 'Contact',
      preorder:'Pre-order',
    },

    hero: {
      tag:      'New book · 2025',
      title:    'Healthy Lifestyles for Youth',
      subtitle: 'Small steps. Big change. Our way.',
      desc:     'An honest, practical guide from a young person to young people — about movement, sleep, nutrition, mental health, and self-awareness. Written by a 15-year-old who knows what this life actually looks like.',
      cta:      'Pre-order the book',
      more:     'Learn more',
    },

    about: {
      tag:   'About the Book',
      title: 'Not rules — choices',
      p1:    'Is your head sometimes full of confusion about what the "right" teenage life is supposed to look like? On social media, everyone else\'s life seems perfect — what to eat, how much to exercise, how to sleep.',
      p2:    'This book doesn\'t give you rules. It helps you find your own small daily steps that add up to a big change — your way.',
      p3:    'Underline things, write in the margins, colour in the illustrations. Make this book completely your own.',
      quote: 'Small steps. Big change. Our way.',
    },

    themes: {
      tag:     'Themes',
      movement:{ label: 'Movement',      desc: 'Movement doesn\'t have to be hard. Together we find ways that actually fit into your life.' },
      sleep:   { label: 'Sleep',         desc: 'Why is sleep your secret superpower? And how does your phone really affect your sleep — honestly.' },
      food:    { label: 'Nutrition',     desc: 'We talk about real eating, not diets. French fries are okay too.' },
      mental:  { label: 'Mental health', desc: 'Stress, pressure, social media comparison. How to keep your head clear.' },
      emotions:{ label: 'Emotions',      desc: 'Understanding your emotions and coping with them — in a language teenagers actually speak.' },
      self:    { label: 'Self-awareness',desc: 'Practical exercises for getting to know yourself better and discovering your values.' },
    },

    inside: {
      tag:   'What\'s inside',
      title: 'Six topics, one goal',
      desc:  'Every chapter is honest and practical — not a lecture, but a conversation.',
    },

    sofia: {
      tag:    'About the Author',
      title:  'Hi, I\'m Sofia Salina',
      p1:     'I\'m Sofia Salina (15 years old) and I\'m not perfect. I have days where french fries beat salad and phone screen beats bedtime. But I\'ve learned that healthy living doesn\'t mean rigidly following rules — it means listening to your body and mind.',
      p2:     'I wrote this book because I wanted to share knowledge that helps you make more conscious choices. And in a language that teenagers actually speak — honestly, practically, for real.',
      age:    'years old',
      topics: 'topics covered',
      honest: 'honest & practical',
      photo:  'Sofia\'s photo coming soon',
      badge:  '15-year-old author ✨',
      cta:    'Pre-order the book',
    },

    quotes: {
      tag:   'From the book',
      title: 'Some thoughts...',
      items: [
        'Healthy living doesn\'t mean rigidly following rules — it means listening to your body and mind.',
        'Small steps add up to a big change — but only when those steps are genuinely yours.',
        'It\'s completely okay when things don\'t go to plan. Mistakes are part of the process, not the end of it.',
      ],
    },

    getBook: {
      tag:   'Get the book',
      title: 'Ready to start?',
      desc:  '"Healthy Lifestyles for Youth" is coming soon. Stay tuned — the pre-order link will appear here as soon as it\'s available!',
      cta:   'Pre-order link coming soon ✨',
      soon:  'Peagi saadaval · Coming soon',
    },

    blog: {
      tag:      'Blog',
      title:    'Sofia\'s thoughts',
      desc:     'Honest thoughts on health, life, and everything in between.',
      readMore: 'Read more →',
      back:     '← Back to blog',
      empty:    'No posts yet. Check back soon!',
    },

    chapters: {
      tag:      'Chapters',
      title:    'Look inside the book',
      desc:     'Free chapter previews — get to know the book before you buy.',
      readMore: 'Read chapter →',
      back:     '← Back to chapters',
      getBook:  'Get the full book',
    },

    contact: {
      tag:         'Contact',
      title:       'Get in touch',
      desc:        'Questions, collaboration, media enquiries — feel free to write!',
      name:        'Your name',
      email:       'Email address',
      subject:     'Subject',
      message:     'Message',
      send:        'Send message',
      sending:     'Sending...',
      successTitle:'Message sent! 🎉',
      successDesc: 'Thank you for writing! I\'ll reply as soon as possible.',
      errorTitle:  'Something went wrong.',
      errorDesc:   'Please try again or write directly to: sofia@sofiasalina.com',
      subjects:    ['Question about the book', 'Collaboration', 'Media enquiry', 'Other'],
    },

    footer: {
      tagline: 'Small steps. Big change. Our way.',
      copy:    '© 2025 Sofia Salina Haugas · sofiasalina.com',
      links: {
        book:     'The Book',
        blog:     'Blog',
        chapters: 'Chapters',
        contact:  'Contact',
      },
    },
  },
} as const

export type Dict = (typeof dict)['et'] | (typeof dict)['en']
