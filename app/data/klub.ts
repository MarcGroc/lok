export const klub = {
  name: 'Klub Strzelecki LOK Rzepiska',
  shortName: 'LOK Rzepiska',
  claim: 'tu bedzie jakiś tekst główny', //tekst głowny
  description: 'Miejsce dla osób, które chcą rozwijać strzelecką pasję w bezpiecznej, życzliwej atmosferze.',
  navigation: [
    { label: 'O nas', href: '#o-klubie' },
    { label: 'Strzelnica', href: '#strzelnica' },
    { label: 'Kalendarz', href: '#kalendarz' },
    { label: 'Statut', href: 'dokumenty/statut_ks_lok_rzepiska.pdf' },
    { label: 'Kontakt', href: '#kontakt' },
  ],
  contact: {
    address: "Rzepiska",
    email: "info@strzelnicarzepiska.pl",
    phone: "123456789",
    hours: 'Terminy treningów publikujemy w kalendarzu.',
    facebook: "https://www.facebook.com/profile.php?id=100068900529892",
  },
  calendarUrl: "https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FWarsaw&hl=pl&showTabs=0&showNav=0&showPrint=0&showTz=0&src=NDM1YTY0MmY0ZmY0M2M4MzY3MmFlYjhhMTE3YTk2NDY2ZDQxMzEwOGU2MzBkZjlmYjU5ZGVhZTc3MTQ5ZDJlMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=cGwucG9saXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23d81b60&color=%230b8043",
  calendarSubscribeUrl: null as string | null,
  stats: [
    { value: '4–6', label: 'osób jednocześnie' },
    { value: '2 godziny', label: 'czas zajęć' },
    { value: 'coś tam', label: 'coś tam' },
  ],
  news: [
    { date: 'Wrzesień 2026', title: 'Otawrcie strzelnicy wirtualnej LOK Rzepiska', text: 'Już wkrótce znajdziesz tu terminy, aktualności oraz najważniejsze informacje.', category: 'Klub' },
    { date: 'Wkrótce', title: 'Terminy treningów', text: 'Po uruchomieniu publicznego kalendarza będziemy publikować w nim najbliższe spotkania i wydarzenia.', category: 'Treningi' },
  ],
  documents: [
    { title: 'Pobierz i wypełnij deklaracje członkowską', file: 'dokumenty/deklaracja_czlonkowska.pdf', available: true },
  ],
  gallery: [] as { src: string; alt: string }[],
}
