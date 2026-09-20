export const klub = {
  name: 'Klub Strzelecki LOK Rzepiska',
  shortName: 'LOK Rzepiska',
  claim: 'tu bedzie jakiś tekst główny', //tekst głowny
  description: 'Miejsce dla osób, które chcą rozwijać strzelecką pasję w bezpiecznej, życzliwej atmosferze.',
  navigation: [
    { label: 'O nas', href: '#o-klubie' },
    { label: 'Strzelnica', href: '#strzelnica' },
    { label: 'Kalendarz', href: '#kalendarz' },
    { label: 'Regulamin', href: '#regulamin' },
    { label: 'Kontakt', href: '#kontakt' },
  ],
  contact: {
    address: "Rzepiska",
    email: "info@strzelnicarzepiska.pl",
    phone: "123456789",
    hours: 'Terminy treningów publikujemy w kalendarzu.',
    facebook: "link do fb",
  },
  calendarUrl: null as string | null,
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
    { title: 'Deklaracja członkowska', file: '/dokumenty/deklaracja_czlonkowska.pdf', available: false },
  ],
  gallery: [] as { src: string; alt: string }[],
}
