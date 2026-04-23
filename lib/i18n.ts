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
      tag:      'Raamat noorelt noorele',
      title:    'Noorte tervislikud eluviisid – praktiline teejuht teismelistele',
      subtitle: 'Väikesed sammud. Suur muutus. Meie moodi.',
      desc:     'Aus ja praktiline teejuht noorte tervislike eluviiside kohta.\nRaamat räägib liikumisest, unest, toitumisest ja vaimsest tervisest\nteismelise pilgu läbi.',
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
      tag:      'Teemad',
      food:     { label: 'Toitumine',                    desc: 'Räägime päris toitumisest, mitte dieetidest. Friikartulid on ka okei.' },
      social:   { label: 'Sotsiaalne tervis',            desc: 'Stress, surve, sotsiaalmeedias võrdlemine. Kuidas hoida oma pead selge.' },
      sleep:    { label: 'Puhkus ja uni',                desc: 'Miks uni on salajane supervõim? Ja kuidas telefon meie und mõjutab — ausalt.' },
      sport:    { label: 'Sport ja liikumine',           desc: 'Liikumine ei pea olema raske. Leiame koos viisid, mis päriselt sobivad sinu ellu.' },
      nicotine: { label: 'Nikotiin ja uimastid',         desc: 'Aus jutt nikotiinist ja uimastitest — faktid ilma loenguta.' },
      eating:   { label: 'Toitumisega seotud häired',   desc: 'Avame teema, millest ei räägita piisavalt — hoolivalt ja ausalt.' },
      alcohol:  { label: 'Alkohol ja suhkrurikkad joogid', desc: 'Mida need joogid tegelikult kehaga teevad — noorte keeles.' },
      mood:     { label: 'Enesetunne ja meeleolu',        desc: 'Kuidas mõista oma tundeid ja hoida head meeleolu — igapäevaselt.' },
    },

    // Inside
    inside: {
      tag:   'Mida leiad raamatust?',
      title: 'Kaheksa teemat, üks eesmärk',
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
      tag:        'Eeltelli raamat',
      title:      'Eeltelli raamat',
      desc:       'Täida vorm ja me võtame sinuga ühendust, kui raamat on saadaval.',
      fields: {
        name:     'Nimi',
        email:    'E-posti aadress',
        phone:    'Telefon (valikuline)',
        org:      'Asutus / organisatsioon (valikuline)',
        copies:   'Tellimuste arv',
      },
      submit:     'Saada eeltellimus',
      submitting: 'Saadan...',
      success: {
        title:   'Aitäh!',
        line1:   'Sinu eeltellimuse soov on meieni jõudnud.',
        line2:   'Võtame sinuga peagi ühendust e-posti teel.',
        contact: 'Kui sul on küsimusi, pöördu julgelt e-maili teel',
        email:   'leila@eybaglobal.com',
        btnBook: 'Tutvu raamatuga',
        btnHome: 'Tagasi avalehele',
      },
      error:      'Midagi läks valesti. Palun proovi uuesti.',
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

    // FAQ
    faq: {
      tag:         'KKK',
      title:       'Mida noored oma tervise kohta kõige rohkem küsivad?',
      intro:       'Noored otsivad iga päev vastuseid küsimustele liikumise, une, toitumise ja ekraaniaja kohta. Siin on mõned kõige sagedasemad küsimused ja lihtsad vastused, mis aitavad paremini mõista, kuidas igapäevased harjumused mõjutavad enesetunnet ja energiat.',
      sourceLabel: 'Allikas',
      closing:     'Nendest ja paljudest teistest teemadest räägib ka raamat „Noorte tervislikud eluviisid". Raamat selgitab lihtsas ja arusaadavas keeles, kuidas väikeste igapäevaste sammudega oma enesetunnet ja harjumusi tasakaalu viia.',
      items: [
        {
          q:      'Kui palju peaks teismeline päevas liikuma?',
          a:      'Terviseorganisatsioonid soovitavad noortel liikuda vähemalt 60 minutit päevas. See ei pea tähendama ainult trenni – ka jalutamine, rattasõit, tantsimine või aktiivne mängimine loevad. Regulaarne liikumine aitab parandada füüsilist vormi, toetab vaimset heaolu ja aitab paremini keskenduda.',
          source: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity',
        },
        {
          q:      'Miks uni on teismelistele nii oluline?',
          a:      'Teismelised vajavad tavaliselt 8–10 tundi und ööpäevas. Une ajal taastub aju, kinnistuvad õpitud teadmised ja reguleeritakse hormoone, mis mõjutavad energiat ja meeleolu. Kui uni jääb lühikeseks, kannatavad sageli nii keskendumine, õppimine kui ka üldine enesetunne.',
          source: 'https://www.sleepfoundation.org/teens-and-sleep',
        },
        {
          q:      'Kui palju ekraaniaega on tervislik?',
          a:      'Paljud eksperdid soovitavad hoida meelelahutusliku ekraaniaja alla 2 tunni päevas. Pikem ekraaniaeg võib mõjutada und, vähendada liikumist ja suurendada väsimust. Tasakaal tekib siis, kui ekraanide kõrval jääb aega ka liikumiseks, hobideks ja päris suhtlemiseks.',
          source: 'https://www.aap.org/en/patient-care/media-and-children',
        },
        {
          q:      'Milline toitumine annab noortele rohkem energiat?',
          a:      'Energia püsib stabiilsem, kui süüa regulaarselt ja mitmekesiselt. Toidukorrad, mis sisaldavad täisteratooteid, puuvilju, köögivilju, valku ja tervislikke rasvu, aitavad hoida energiataset ühtlasena. Väga suhkrurikkad snäkid annavad küll kiire energiatõusu, kuid sellele järgneb sageli kiire väsimus.',
          source: 'https://www.hsph.harvard.edu/nutritionsource',
        },
      ],
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
      title:    'Healthy lifestyles for youth – a practical guide for teenagers',
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
      tag:      'Themes',
      food:     { label: 'Nutrition',                  desc: 'We talk about real eating, not diets. French fries are okay too.' },
      social:   { label: 'Social health',              desc: 'Stress, pressure, social media comparison. How to keep your head clear.' },
      sleep:    { label: 'Rest & sleep',               desc: 'Why is sleep your secret superpower? And how does your phone really affect your sleep — honestly.' },
      sport:    { label: 'Sport & movement',           desc: 'Movement doesn\'t have to be hard. Together we find ways that actually fit into your life.' },
      nicotine: { label: 'Nicotine & drugs',           desc: 'Honest facts about nicotine and drugs — without lectures.' },
      eating:   { label: 'Eating disorders',           desc: 'Opening a topic that doesn\'t get talked about enough — with care and honesty.' },
      alcohol:  { label: 'Alcohol & sugary drinks',   desc: 'What these drinks actually do to your body — in a language teens understand.' },
      mood:     { label: 'Wellbeing & mood',          desc: 'How to understand your feelings and maintain a good mood — every day.' },
    },

    inside: {
      tag:   'What\'s inside',
      title: 'Eight topics, one goal',
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
      tag:        'Pre-order the book',
      title:      'Pre-order the book',
      desc:       'Fill in the form and we will be in touch when the book is available.',
      fields: {
        name:     'Full name',
        email:    'Email address',
        phone:    'Phone (optional)',
        org:      'Organisation (optional)',
        copies:   'Number of copies',
      },
      submit:     'Send pre-order',
      submitting: 'Sending...',
      success: {
        title:   'Thank you!',
        line1:   'Your pre-order request has reached us.',
        line2:   'We will be in touch by email shortly.',
        contact: 'If you have any questions, feel free to reach out at',
        email:   'leila@eybaglobal.com',
        btnBook: 'Learn more about the book',
        btnHome: 'Back to homepage',
      },
      error:      'Something went wrong. Please try again.',
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

    // FAQ
    faq: {
      tag:         'FAQ',
      title:       'What do young people ask most about their health?',
      intro:       'Every day, young people search for answers about movement, sleep, nutrition, and screen time. Here are some of the most common questions and straightforward answers to help better understand how everyday habits affect wellbeing and energy.',
      sourceLabel: 'Source',
      closing:     'These topics and many more are covered in the book "Healthy Lifestyles for Youth". It explains in simple, accessible language how small everyday steps can bring your wellbeing and habits into balance.',
      items: [
        {
          q:      'How much should a teenager move each day?',
          a:      'Health organisations recommend that young people get at least 60 minutes of physical activity per day. This doesn\'t have to mean only gym workouts — walking, cycling, dancing, or active play all count. Regular movement helps improve physical fitness, supports mental wellbeing, and aids concentration.',
          source: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity',
        },
        {
          q:      'Why is sleep so important for teenagers?',
          a:      'Teenagers typically need 8–10 hours of sleep per night. During sleep the brain recovers, knowledge learned during the day is consolidated, and hormones that affect energy and mood are regulated. When sleep is cut short, concentration, learning, and overall wellbeing often suffer.',
          source: 'https://www.sleepfoundation.org/teens-and-sleep',
        },
        {
          q:      'How much screen time is healthy?',
          a:      'Many experts recommend keeping recreational screen time under 2 hours per day. Longer screen time can affect sleep, reduce physical activity, and increase fatigue. Balance comes when there is also time for movement, hobbies, and real-life socialising alongside screens.',
          source: 'https://www.aap.org/en/patient-care/media-and-children',
        },
        {
          q:      'What kind of eating gives young people more energy?',
          a:      'Energy stays more stable when you eat regularly and varied meals. Meals that include wholegrains, fruit, vegetables, protein, and healthy fats help keep energy levels steady. Very sugary snacks give a quick energy boost, but a rapid drop in energy often follows.',
          source: 'https://www.hsph.harvard.edu/nutritionsource',
        },
      ],
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
