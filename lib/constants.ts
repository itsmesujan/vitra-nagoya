export const RESTAURANT = {
  name: 'RESTAURANT VITRA NAGOYA',
  nameJp: 'レストラン ヴィトラ ナゴヤ',
  phone: '052-759-5511',
  phoneTel: 'tel:052-759-5511',
  address: {
    postal: '464-0835',
    prefecture: '愛知県',
    city: '名古屋市千種区',
    street: '御棚町3-26',
    full: '〒464-0835 愛知県名古屋市千種区御棚町3-26',
    note: '（覚王山ル・アンジェ教会 隣）',
  },
  hours: {
    open: '17:30',
    lastOrder: '20:30',
    display: '17:30–20:30 (L.O.)',
    closedDay: '火曜日（原則）',
  },
  station: '名古屋市営地下鉄 東山線 覚王山駅 4番出口より徒歩8分',
  sisterVenue: {
    name: 'KAKUOZAN CHAPELLE DES ANGES',
    nameJp: '覚王山ル・アンジェ教会',
    phone: '052-757-5553',
    phoneTel: 'tel:052-757-5553',
    url: 'https://www.anges-nagoya.com',
  },
} as const

export const NAV_ITEMS = [
  { href: '/', label: 'ヴィトラについて', sublabel: 'About' },
  { href: '/menu', label: 'メニュー', sublabel: 'Menu' },
  { href: '/wine', label: 'ワイン', sublabel: 'Wine' },
  { href: '/party', label: 'パーティ', sublabel: 'Party' },
  { href: '/profile', label: 'プロフィール', sublabel: 'Profile' },
  { href: '/reserve', label: 'ご予約・お問合せ', sublabel: 'Reserve' },
  { href: '/access', label: 'アクセス', sublabel: 'Access' },
] as const
