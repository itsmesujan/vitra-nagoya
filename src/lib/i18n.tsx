'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Locale = 'ja' | 'en' | 'fr'

// ─── Full translations ─────────────────────────────────────────────────────
const ja = {
  nav: {
    about: 'ヴィトラについて',
    menu: 'メニュー',
    wine: 'ワイン',
    events: 'イベント',
    gallery: 'ギャラリー',
    reserve: 'ご予約',
    access: 'アクセス',
  },
  hero: {
    tagline: '記憶に残る一皿と、',
    tagline2: '想い出に残る瞬間を。',
    sub: '名古屋・覚王山 ／ Dinner 17:30〜 ／ 完全予約制',
    ctaReserve: 'ご予約する',
    ctaMenu: 'コースを見る',
  },
  concept: {
    eyebrow: 'ABOUT VITRA',
    title: 'ヴィトラの哲学',
    p1: '料理はすべて、生命をいただくという犠牲のもとに成り立っています。命をいただくこと、自然のめぐみに対する感謝を忘れず、その素材が持つ力を精一杯活かせるような一皿一皿をご提供したい。',
    p2: '使用する食材は、できる限り現地に赴き、生産者の想いやこだわりを伺った上で仕入れています。歴史ある産地の食材から、現地でしか手に入らない希少食材まで、素材へのこだわりを妥協せず追い求めています。',
    p3: 'VITRAで過ごす時間が、思い出に残る瞬間であるために、ご予約を頂いた時点から、お帰りになられる時まで、スタッフ一同お客様のためだけのあたたかなお料理と空間、そしてサービスをご提供いたします。',
    col1_title: '生産者の想いを',
    col1_body: '全国各地の生産者のもとへ直接赴き、食材の声を聴く。その出会いが一皿に宿ります。',
    col2_title: 'VITRAスタイル',
    col2_body: 'フレンチの技法と日本「京」のエッセンスが交わる、唯一無二の料理哲学。',
    col3_title: 'おもてなしの心',
    col3_body: 'ご予約の瞬間から始まる、あなただけのための時間。記憶に残る夜を。',
  },
  menuPreview: {
    eyebrow: 'DÎNER',
    title: '季節のコースメニュー',
    sub: '料金はサービス料・消費税込み。食材の入荷状況によりコース内容が変わります。',
    menuA: { label: 'Menu A', name: '季節の旬のコース', price: '¥ 9,900', desc: '旬の素材を活かした、心温まるスタンダードコース。' },
    menuB: { label: 'Menu B', name: '季節と旬を楽しむコース', price: '¥ 14,300', desc: '少しずつたくさんの種類を。季節の彩りを存分にご堪能ください。' },
    menuV: { label: 'Menu V ★', name: 'アニバーサリーコース', price: '¥ 16,500', desc: 'ウェルカムシャンパーニュとアニヴァーサリーケーキ付。記念日に最適。', badge: '人気No.1' },
    menuC: { label: 'Menu C', name: 'シェフおまかせフルコース', price: '¥ 19,800', desc: 'シェフ渾身のフルコース。ライブ感あふれる特別な夜へ。' },
    cta: 'メニューをすべて見る',
  },
  reviews: {
    eyebrow: 'GUEST REVIEWS',
    title: 'お客様の声',
    sub: 'Google レビューより',
    rating: '4.7',
    totalReviews: '352件のレビュー',
    cta: 'Google で全てのレビューを見る',
    items: [
      {
        name: '田中 恵子',
        rating: 5,
        date: '2026年3月',
        text: '記念日に利用しました。シェフの料理への情熱が伝わる素晴らしいコースで、特に伊万里牛と天然鮎の組み合わせが忘れられません。サービスも温かく、最高の夜でした。',
      },
      {
        name: '鈴木 雅文',
        rating: 5,
        date: '2026年2月',
        text: 'ソムリエの伊藤さんのワインペアリングが絶品です。料理との相性を丁寧に説明してくださり、ワイン好きにはたまらない時間でした。また必ず訪れたいです。',
      },
      {
        name: 'M. Rousseau',
        rating: 5,
        date: '2025年12月',
        text: 'フランス人として、日本とフレンチの融合に感動しました。それぞれの素材の個性を活かしながら、完璧に調和された一皿。来名古屋の際は必ず訪問します。',
      },
      {
        name: '山本 美香',
        rating: 5,
        date: '2026年1月',
        text: '予約の際から丁寧な対応で、記念日のサプライズも完璧に準備してくださいました。料理はもちろん、空間の美しさ、サービスの細やかさ、すべてが一流でした。',
      },
      {
        name: '伊藤 健太',
        rating: 5,
        date: '2025年11月',
        text: 'キャヴィアのアミューズから始まり、郡上の天然鮎まで、素材のストーリーが感じられる料理の連続。シェフが全国の生産者を巡っているのがよくわかりました。',
      },
      {
        name: '渡辺 さゆり',
        rating: 4,
        date: '2026年3月',
        text: '覚王山の閑静な住宅街に佇む、まるで隠れ家のようなレストラン。外観からは想像できない上質な内装と料理に驚きました。予約が取りにくいのでお早めに。',
      },
    ],
  },
  gallery: {
    eyebrow: 'GALLERY',
    title: '料理と空間',
    sub: '四季折々の食材と、シェフの技が生み出す一皿。',
    cta: 'ギャラリーをすべて見る',
  },
  reserveCTA: {
    eyebrow: 'RESERVATION',
    title: '特別な夜を、VITRAで。',
    sub: 'ご予約はお電話またはウェブフォームより承っております。\n前日までにご予約ください。',
    cta: 'ウェブで予約する',
    phone: 'お電話で予約する',
    hours: '営業時間：17:30 – 20:30（L.O.） ／ 定休：原則火曜日',
  },
  menuPage: {
    eyebrow: 'MENU',
    title: '料理とコース',
    note: 'コースの内容は食材の入荷状況により変わります。ご予約時にアレルギー・ご要望をお聞かせください。料金はすべてサービス料・税込み価格です。',
    courseContents: 'COURSE CONTENTS',
    wineLink: 'ワインリストを見る',
    pairingAlcohol: 'Alcohol Pairing ¥6,050',
    pairingFree: 'Alcohol Free Pairing ¥4,950',
    seasonal: '※ 食材の状況によりメニュー内容が変更する事がございます。あらかじめご了承くださいませ。',
    note2: '※ 上記コース以外にもご予算やお料理のご要望に応じて特別メニューでご用意いたします。お気軽にご相談ください。',
    pairingTitle: 'ワインペアリング',
  },
  winePage: {
    eyebrow: 'WINE & DRINKS',
    title: 'ワインと飲み物',
    intro: 'フランスを中心に、オーストラリア・ニュージーランド・ドイツ・アメリカなど世界各地から厳選した約400種の上質なワインを取り扱っています。またビオワインも多く取りそろえております。シャンパーニュは常時60種類以上をご用意しております。',
    intro2: 'ソムリエがご希望のワインをご提案いたします。',
    pdfLink: 'ワインリスト（PDF）',
    pairingTitle: 'ペアリング',
    alcoholTitle: 'アルコール',
    nonAlcoholTitle: 'ノンアルコール',
  },
  accessPage: {
    eyebrow: 'ACCESS',
    title: 'アクセス',
    address: '〒464-0835\n愛知県名古屋市千種区御棚町3-26',
    tel: '052-759-5511',
    hours: '17:30 – 20:30（L.O.）',
    closed: '原則として毎週火曜日',
    access: '地下鉄東山線「覚王山」駅 4番出口より徒歩8分',
    parking: '専用駐車場なし。近隣コインパーキングをご利用ください。',
    openMaps: 'Google マップで開く',
    googleReviewsLink: 'Google レビューを見る',
    labels: {
      address: '住所',
      tel: '電話',
      hours: '営業時間',
      closed: '定休日',
      access: '交通案内',
      parking: '駐車場',
    },
  },
  reservePage: {
    eyebrow: 'RESERVATION',
    title: 'ご予約',
    intro: 'ご予約はお電話（ 052-759-5511 ）またはウェブフォームより承っております。アレルギー・ご要望がある場合は、フォームのご要望欄にご記入ください。',
    hours: '受付時間：17:30 – 20:30 ／ 定休：原則火曜日',
    fields: {
      lastName: 'お名前（姓）',
      firstName: 'お名前（名）',
      date: 'ご来店日',
      guests: '人数',
      course: 'ご希望コース',
      email: 'メールアドレス',
      phone: '電話番号',
      message: 'ご要望・アレルギー等',
    },
    placeholders: {
      lastName: '山田',
      firstName: '太郎',
      guests: 'お選びください',
      course: 'お選びください（未定可）',
      email: 'example@email.com',
      phone: '090-0000-0000',
      message: 'アレルギー情報、記念日のご相談、その他ご要望があればご記入ください。',
    },
    guestOptions: ['1名', '2名', '3名', '4名', '5名', '6名', '7名', '8名', '9名以上（要相談）'],
    courseOptions: [
      'Menu A ― 季節の旬のコース　¥9,900',
      'Menu B ― 季節と旬を楽しむコース　¥14,300',
      'Menu V ― アニバーサリーコース　¥16,500',
      'Menu C ― シェフおまかせフルコース　¥19,800',
      '未定・相談したい',
    ],
    submit: '送信する',
    sending: '送信中...',
    successTitle: 'ご予約を承りました',
    successBody: 'ご確認のメールをお送りします。24時間以内にご連絡がない場合はお電話ください。',
    errorBody: 'エラーが発生しました。お電話（052-759-5511）にてご予約ください。',
    disclaimer: '※ ご確認のメールをお送りします。24時間以内にご連絡がない場合はお電話ください。',
  },
  eventsPage: {
    eyebrow: 'EVENTS & OFFERS',
    title: 'イベント・お知らせ',
    seatsLabel: '席数',
    priceLabel: '料金',
    reserveEvent: 'このイベントを予約する',
    tags: { open: '受付中', consult: '要相談', soon: '近日公開' },
  },
  galleryPage: {
    eyebrow: 'GALLERY',
    title: '料理と空間',
    filters: { all: 'すべて', food: 'お料理', interior: '店内', wine: 'ワイン', event: 'イベント' },
  },
  shared: {
    required: '必須',
    reserve: 'ご予約する',
    seeAll: 'すべて見る',
    close: '閉じる',
    tel: 'TEL',
    backHome: 'トップへ戻る',
    sister: '姉妹店',
  },
}

// Shape type derived from ja (widened — allows string values in en/fr)
type TranslationShape = typeof ja

// ─── English ────────────────────────────────────────────────────────────────
const en: TranslationShape = {
  nav: {
    about: 'About',
    menu: 'Menu',
    wine: 'Wine',
    events: 'Events',
    gallery: 'Gallery',
    reserve: 'Reserve',
    access: 'Access',
  },
  hero: {
    tagline: 'A dish that stays in memory,',
    tagline2: 'a moment that stays in the heart.',
    sub: 'Kakuozan, Nagoya ／ Dinner from 17:30 ／ Reservation Required',
    ctaReserve: 'Make a Reservation',
    ctaMenu: 'View Courses',
  },
  concept: {
    eyebrow: 'ABOUT VITRA',
    title: 'Our Philosophy',
    p1: 'Every dish is built on the sacrifice of life. We never forget our gratitude for nature\'s gifts, and we strive to reveal the full potential of every ingredient placed before us.',
    p2: 'We source our ingredients by visiting producers directly across Japan — listening to their passion, their dedication, and the stories behind every harvest.',
    p3: 'From the moment you make your reservation to the moment you leave, our entire team is devoted to creating warm cuisine, a beautiful space, and service crafted exclusively for you.',
    col1_title: 'Producer\'s Spirit',
    col1_body: 'We travel to producers across Japan to hear the story of each ingredient. That encounter lives in every plate.',
    col2_title: 'VITRA Style',
    col2_body: 'A unique philosophy where French technique meets the essence of Japanese "Kyo" culinary tradition.',
    col3_title: 'Omotenashi',
    col3_body: 'Your evening begins the moment you reserve. We craft each detail exclusively for you.',
  },
  menuPreview: {
    eyebrow: 'DÎNER',
    title: 'Seasonal Course Menu',
    sub: 'All prices include service charge and tax. Course contents may vary based on ingredient availability.',
    menuA: { label: 'Menu A', name: 'Seasonal Course', price: '¥ 9,900', desc: 'A heartwarming standard course celebrating the best of the season.' },
    menuB: { label: 'Menu B', name: 'Seasonal Tasting Course', price: '¥ 14,300', desc: 'Small portions of many dishes. Savor the full spectrum of the season.' },
    menuV: { label: 'Menu V ★', name: 'Anniversary Course', price: '¥ 16,500', desc: 'Welcome Champagne and anniversary cake included. Perfect for celebrations.', badge: 'Most Popular' },
    menuC: { label: 'Menu C', name: 'Chef\'s Omakase', price: '¥ 19,800', desc: 'The chef\'s full expression — an immersive, live fine dining experience.' },
    cta: 'View Full Menu',
  },
  reviews: {
    eyebrow: 'GUEST REVIEWS',
    title: 'What Our Guests Say',
    sub: 'From Google Reviews',
    rating: '4.7',
    totalReviews: '352 reviews',
    cta: 'See All Reviews on Google',
    items: [
      {
        name: 'Keiko T.',
        rating: 5,
        date: 'March 2026',
        text: 'Visited for our anniversary dinner. The passion behind every dish was palpable — the Imari beef alongside wild ayu from Gujo was an unforgettable combination. Warm, attentive service throughout.',
      },
      {
        name: 'Masafumi S.',
        rating: 5,
        date: 'February 2026',
        text: "The sommelier's wine pairing was exceptional. Each selection was introduced with care and context, making the evening both educational and delightful. Will definitely return.",
      },
      {
        name: 'M. Rousseau',
        rating: 5,
        date: 'December 2025',
        text: 'As a French native, I was deeply moved by this Japanese-French fusion. The harmony between both culinary traditions is executed to perfection. A must-visit every time I am in Nagoya.',
      },
      {
        name: 'Mika Y.',
        rating: 5,
        date: 'January 2026',
        text: 'From the moment I called to reserve, the care was exceptional. Every aspect — cuisine, ambiance, personalized touches for our anniversary — was first-class. A truly special restaurant.',
      },
      {
        name: 'Kenta I.',
        rating: 5,
        date: 'November 2025',
        text: 'From the caviar amuse-bouche to the wild ayu from Gujo, every dish told the story of its ingredient\'s origin. The chef\'s dedication to sourcing is evident in every single bite.',
      },
      {
        name: 'Sayuri W.',
        rating: 4,
        date: 'March 2026',
        text: 'Tucked away in a quiet Kakuozan street, this hidden gem surprises with its elegant interior and exceptional cuisine. Book early — reservations fill very quickly.',
      },
    ],
  },
  gallery: {
    eyebrow: 'GALLERY',
    title: 'Cuisine & Ambiance',
    sub: 'Each dish — a meeting of seasonal ingredients and the chef\'s craft.',
    cta: 'View Full Gallery',
  },
  reserveCTA: {
    eyebrow: 'RESERVATION',
    title: 'Make Tonight Unforgettable.',
    sub: 'Online reservations and phone bookings are available.\nPlease reserve at least one day in advance.',
    cta: 'Reserve Online',
    phone: 'Call to Reserve',
    hours: 'Hours: 17:30 – 20:30 (L.O.) ／ Closed: Tuesdays',
  },
  menuPage: {
    eyebrow: 'MENU',
    title: 'Courses',
    note: 'Course contents are subject to change based on ingredient availability. Please inform us of allergies or dietary requirements at time of booking. All prices include service charge and tax.',
    courseContents: 'COURSE CONTENTS',
    wineLink: 'View Wine List',
    pairingAlcohol: 'Alcohol Pairing ¥6,050',
    pairingFree: 'Alcohol Free Pairing ¥4,950',
    seasonal: '※ Menu contents may change based on ingredient availability.',
    note2: '※ Custom menus are available upon request. Please consult with us.',
    pairingTitle: 'Wine Pairing',
  },
  winePage: {
    eyebrow: 'WINE & DRINKS',
    title: 'Wine & Beverages',
    intro: 'We offer approximately 400 carefully selected wines from France, Australia, New Zealand, Germany, America and beyond. We also carry an extensive selection of biodynamic wines, with over 60 Champagnes always available.',
    intro2: 'Our sommelier will recommend the perfect wine to complement your meal.',
    pdfLink: 'Wine List (PDF)',
    pairingTitle: 'Wine Pairing',
    alcoholTitle: 'Alcoholic Beverages',
    nonAlcoholTitle: 'Non-Alcoholic Beverages',
  },
  accessPage: {
    eyebrow: 'ACCESS',
    title: 'Access',
    address: '3-26 Mitanamachi, Chikusa-ku\nNagoya, Aichi 464-0835',
    tel: '052-759-5511',
    hours: '17:30 – 20:30 (L.O.)',
    closed: 'Tuesdays (as a rule)',
    access: '8-min walk from Exit 4, Kakuozan Station (Higashiyama Line)',
    parking: 'No dedicated parking. Please use nearby coin parking.',
    openMaps: 'Open in Google Maps',
    googleReviewsLink: 'See Google Reviews',
    labels: {
      address: 'Address',
      tel: 'Phone',
      hours: 'Hours',
      closed: 'Closed',
      access: 'Access',
      parking: 'Parking',
    },
  },
  reservePage: {
    eyebrow: 'RESERVATION',
    title: 'Reservation',
    intro: 'Reservations can be made by phone (052-759-5511) or via our web form. Please note any allergies or special requests in the message field.',
    hours: 'Hours: 17:30 – 20:30 ／ Closed: Tuesdays',
    fields: {
      lastName: 'Last Name',
      firstName: 'First Name',
      date: 'Date',
      guests: 'Guests',
      course: 'Course',
      email: 'Email Address',
      phone: 'Phone Number',
      message: 'Requests / Allergies',
    },
    placeholders: {
      lastName: 'Yamada',
      firstName: 'Taro',
      guests: 'Please select',
      course: 'Please select (optional)',
      email: 'example@email.com',
      phone: '090-0000-0000',
      message: 'Allergy information, anniversary requests, or any other special requests.',
    },
    guestOptions: ['1 guest', '2 guests', '3 guests', '4 guests', '5 guests', '6 guests', '7 guests', '8 guests', '9+ guests (please consult)'],
    courseOptions: [
      'Menu A — Seasonal Course ¥9,900',
      'Menu B — Seasonal Tasting ¥14,300',
      'Menu V — Anniversary Course ¥16,500',
      "Menu C — Chef's Omakase ¥19,800",
      'Undecided / Please consult',
    ],
    submit: 'Submit',
    sending: 'Sending...',
    successTitle: 'Reservation Received',
    successBody: "A confirmation email will be sent. If you don't hear from us within 24 hours, please call us.",
    errorBody: 'An error occurred. Please call us at 052-759-5511 to make a reservation.',
    disclaimer: '※ A confirmation email will be sent. Please call if not received within 24 hours.',
  },
  eventsPage: {
    eyebrow: 'EVENTS & OFFERS',
    title: 'Events & News',
    seatsLabel: 'Seats',
    priceLabel: 'Price',
    reserveEvent: 'Reserve this event',
    tags: { open: 'Open', consult: 'Inquire', soon: 'Coming Soon' },
  },
  galleryPage: {
    eyebrow: 'GALLERY',
    title: 'Cuisine & Space',
    filters: { all: 'All', food: 'Cuisine', interior: 'Interior', wine: 'Wine', event: 'Events' },
  },
  shared: {
    required: 'Required',
    reserve: 'Make a Reservation',
    seeAll: 'See All',
    close: 'Close',
    tel: 'TEL',
    backHome: 'Back to Home',
    sister: 'Sister Restaurant',
  },
}

// ─── French ─────────────────────────────────────────────────────────────────
const fr: typeof ja = {
  nav: {
    about: 'À Propos',
    menu: 'Menu',
    wine: 'Vins',
    events: 'Événements',
    gallery: 'Galerie',
    reserve: 'Réserver',
    access: 'Accès',
  },
  hero: {
    tagline: 'Un plat qui reste en mémoire,',
    tagline2: 'un instant qui reste dans le cœur.',
    sub: 'Kakuozan, Nagoya ／ Dîner à partir de 17h30 ／ Sur réservation',
    ctaReserve: 'Réserver une table',
    ctaMenu: 'Voir les menus',
  },
  concept: {
    eyebrow: 'ABOUT VITRA',
    title: 'Notre Philosophie',
    p1: 'Chaque plat repose sur le sacrifice de la vie. Sans jamais oublier notre gratitude envers les dons de la nature, nous cherchons à révéler tout le potentiel de chaque ingrédient.',
    p2: "Nous sourçons nos ingrédients en visitant directement les producteurs à travers le Japon — en écoutant leur passion, leur dévouement et les histoires derrière chaque récolte.",
    p3: "Du moment où vous réservez jusqu'à votre départ, toute notre équipe se consacre à créer une cuisine chaleureuse, un espace élégant et un service conçu exclusivement pour vous.",
    col1_title: "L'Âme du Producteur",
    col1_body: "Nous voyageons directement chez les producteurs de tout le Japon pour écouter l'histoire de chaque ingrédient.",
    col2_title: 'Style VITRA',
    col2_body: 'Une philosophie unique où la technique française rencontre l\'essence de la cuisine japonaise « Kyo ».',
    col3_title: 'Omotenashi',
    col3_body: 'Votre soirée commence dès la réservation. Nous créons chaque détail exclusivement pour vous.',
  },
  menuPreview: {
    eyebrow: 'DÎNER',
    title: 'Menu Saisonnier',
    sub: 'Tous les prix incluent le service et les taxes. Le contenu peut varier selon la disponibilité des produits.',
    menuA: { label: 'Menu A', name: 'Menu Saisonnier', price: '¥ 9,900', desc: "Un menu standard mettant à l'honneur les meilleurs produits de saison." },
    menuB: { label: 'Menu B', name: 'Menu Dégustation', price: '¥ 14,300', desc: "De petites portions de nombreux plats. Savourez l'éventail complet de la saison." },
    menuV: { label: 'Menu V ★', name: 'Menu Anniversaire', price: '¥ 16,500', desc: 'Champagne de bienvenue et gâteau inclus. Idéal pour les célébrations.', badge: 'Le Plus Populaire' },
    menuC: { label: 'Menu C', name: 'Omakase du Chef', price: '¥ 19,800', desc: "L'expression totale du chef — une expérience gastronomique immersive et vivante." },
    cta: 'Voir le menu complet',
  },
  reviews: {
    eyebrow: 'AVIS CLIENTS',
    title: 'Témoignages',
    sub: 'Avis Google',
    rating: '4.7',
    totalReviews: '352 avis',
    cta: 'Voir tous les avis sur Google',
    items: [
      {
        name: 'Keiko T.',
        rating: 5,
        date: 'Mars 2026',
        text: "Dîner d'anniversaire inoubliable. La passion du chef transparaît dans chaque plat. Le bœuf d'Imari avec ayu sauvage de Gujo était une combinaison mémorable. Service chaleureux.",
      },
      {
        name: 'Masafumi S.',
        rating: 5,
        date: 'Février 2026',
        text: "L'accord mets-vins du sommelier était exceptionnel. Chaque sélection était présentée avec soin et contexte, rendant la soirée à la fois éducative et délicieuse.",
      },
      {
        name: 'M. Rousseau',
        rating: 5,
        date: 'Décembre 2025',
        text: "En tant que Français, j'ai été profondément touché par cette fusion franco-japonaise. L'harmonie entre les deux traditions culinaires est exécutée à la perfection.",
      },
      {
        name: 'Mika Y.',
        rating: 5,
        date: 'Janvier 2026',
        text: "Dès la réservation, l'équipe a été exceptionnelle. La cuisine, l'ambiance et les attentions personnalisées pour notre anniversaire étaient de premier ordre.",
      },
      {
        name: 'Kenta I.',
        rating: 5,
        date: 'Novembre 2025',
        text: "De l'amuse-bouche au caviar jusqu'à l'ayu sauvage de Gujo, chaque plat racontait l'histoire de ses ingrédients. La passion du chef pour le sourcing est palpable.",
      },
      {
        name: 'Sayuri W.',
        rating: 4,
        date: 'Mars 2026',
        text: "Niché dans une ruelle tranquille de Kakuozan, cet endroit cache une cuisine et une décoration remarquables. Réservez tôt — les places partent très vite.",
      },
    ],
  },
  gallery: {
    eyebrow: 'GALERIE',
    title: 'Cuisine & Ambiance',
    sub: "Chaque plat — une rencontre entre les ingrédients de saison et le savoir-faire du chef.",
    cta: 'Voir la galerie complète',
  },
  reserveCTA: {
    eyebrow: 'RÉSERVATION',
    title: 'Rendez votre soirée inoubliable.',
    sub: 'Les réservations sont disponibles en ligne ou par téléphone.\nMerci de réserver au moins la veille.',
    cta: 'Réserver en ligne',
    phone: 'Appeler pour réserver',
    hours: 'Horaires : 17h30 – 20h30 (dernier service) ／ Fermé le mardi',
  },
  menuPage: {
    eyebrow: 'MENU',
    title: 'Nos Menus',
    note: "Le contenu des menus est susceptible de changer selon la disponibilité des ingrédients. Veuillez nous informer de vos allergies lors de la réservation. Tous les prix incluent le service et la TVA.",
    courseContents: 'CONTENU DU MENU',
    wineLink: 'Voir la carte des vins',
    pairingAlcohol: 'Accord mets-vins ¥6,050',
    pairingFree: 'Accord sans alcool ¥4,950',
    seasonal: '※ Le contenu du menu peut changer selon les produits disponibles.',
    note2: '※ Des menus personnalisés sont disponibles sur demande.',
    pairingTitle: 'Accord Mets-Vins',
  },
  winePage: {
    eyebrow: 'VINS & BOISSONS',
    title: 'Vins & Boissons',
    intro: 'Nous proposons environ 400 vins soigneusement sélectionnés de France, Australie, Nouvelle-Zélande, Allemagne, États-Unis et au-delà. Nous proposons également une large sélection de vins biodynamiques, avec plus de 60 Champagnes toujours disponibles.',
    intro2: 'Notre sommelier vous recommandera le vin parfait pour accompagner votre repas.',
    pdfLink: 'Carte des vins (PDF)',
    pairingTitle: 'Accords Mets-Vins',
    alcoholTitle: 'Boissons Alcoolisées',
    nonAlcoholTitle: 'Boissons Sans Alcool',
  },
  accessPage: {
    eyebrow: 'ACCÈS',
    title: 'Accès',
    address: '3-26 Mitanamachi, Chikusa-ku\nNagoya, Aichi 464-0835',
    tel: '052-759-5511',
    hours: '17h30 – 20h30 (dernier service)',
    closed: 'Mardis (en règle générale)',
    access: '8 min à pied depuis la sortie 4, station Kakuozan (ligne Higashiyama)',
    parking: 'Pas de parking dédié. Veuillez utiliser les parkings publics à proximité.',
    openMaps: 'Ouvrir dans Google Maps',
    googleReviewsLink: 'Voir les avis Google',
    labels: {
      address: 'Adresse',
      tel: 'Téléphone',
      hours: 'Horaires',
      closed: 'Fermé',
      access: 'Accès',
      parking: 'Parking',
    },
  },
  reservePage: {
    eyebrow: 'RÉSERVATION',
    title: 'Réservation',
    intro: 'Les réservations peuvent être effectuées par téléphone (052-759-5511) ou via notre formulaire. Veuillez noter vos allergies ou demandes spéciales dans le champ message.',
    hours: 'Horaires : 17h30 – 20h30 ／ Fermé : Mardi',
    fields: {
      lastName: 'Nom',
      firstName: 'Prénom',
      date: 'Date',
      guests: 'Nombre de couverts',
      course: 'Menu souhaité',
      email: 'Adresse e-mail',
      phone: 'Numéro de téléphone',
      message: 'Demandes / Allergies',
    },
    placeholders: {
      lastName: 'Dupont',
      firstName: 'Jean',
      guests: 'Veuillez sélectionner',
      course: 'Veuillez sélectionner (facultatif)',
      email: 'exemple@email.com',
      phone: '090-0000-0000',
      message: "Informations sur les allergies, demandes d'anniversaire, etc.",
    },
    guestOptions: ['1 couvert', '2 couverts', '3 couverts', '4 couverts', '5 couverts', '6 couverts', '7 couverts', '8 couverts', '9+ couverts (à consulter)'],
    courseOptions: [
      'Menu A — Menu Saisonnier ¥9,900',
      'Menu B — Menu Dégustation ¥14,300',
      'Menu V — Menu Anniversaire ¥16,500',
      "Menu C — Omakase du Chef ¥19,800",
      'Non décidé / À consulter',
    ],
    submit: 'Envoyer',
    sending: 'Envoi en cours...',
    successTitle: 'Réservation reçue',
    successBody: "Un e-mail de confirmation vous sera envoyé. Sans nouvelles sous 24h, veuillez nous appeler.",
    errorBody: 'Une erreur s\'est produite. Veuillez nous appeler au 052-759-5511.',
    disclaimer: '※ Un e-mail de confirmation vous sera envoyé. Veuillez nous appeler si non reçu sous 24h.',
  },
  eventsPage: {
    eyebrow: 'ÉVÉNEMENTS',
    title: 'Événements & Actualités',
    seatsLabel: 'Places',
    priceLabel: 'Tarif',
    reserveEvent: 'Réserver cet événement',
    tags: { open: 'Ouvert', consult: 'Sur demande', soon: 'Bientôt' },
  },
  galleryPage: {
    eyebrow: 'GALERIE',
    title: 'Cuisine & Espace',
    filters: { all: 'Tout', food: 'Cuisine', interior: 'Intérieur', wine: 'Vins', event: 'Événements' },
  },
  shared: {
    required: 'Obligatoire',
    reserve: 'Réserver',
    seeAll: 'Voir tout',
    close: 'Fermer',
    tel: 'TÉL',
    backHome: "Retour à l'accueil",
    sister: 'Restaurant Partenaire',
  },
}

export const translations: Record<Locale, typeof ja> = { ja, en, fr }

// ─── Context ─────────────────────────────────────────────────────────────────
interface LocaleContextValue {
  locale: Locale
  setLocale: (l: Locale) => void
  t: typeof ja
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ja')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem('vitra-locale') as Locale | null
      if (saved && ['ja', 'en', 'fr'].includes(saved)) {
        setLocaleState(saved)
      }
    } catch {
      // localStorage not available
    }
  }, [])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    try {
      localStorage.setItem('vitra-locale', l)
    } catch {
      // localStorage not available
    }
  }

  // Avoid hydration mismatch — render JP (default) on server
  const t = translations[mounted ? locale : 'ja']

  return (
    <LocaleContext.Provider value={{ locale: mounted ? locale : 'ja', setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LanguageProvider')
  return ctx
}
