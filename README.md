# KS LOK Rzepiska — strona klubu

Strona wizytówkowa Klubu Strzeleckiego LOK Rzepiska. Nuxt 4 + generowanie statyczne (SSG).

## Stack

- Nuxt 4.5.2, Vue 3, TypeScript
- Renderowanie: SSG (`npm run generate`) — brak backendu, hosting statyczny

## Konwencja katalogów (Nuxt 4)

Nuxt 4 ustawia `srcDir` na `app/`. Kod aplikacji jest w `app/`, a pliki publiczne w `public/`:

- `app/pages/` — trasy
- `app/components/` — komponenty
- `app/assets/css/` — style i tokeny
- `app/data/` — treści strony (jedno źródło: `klub.ts`)
- `public/zdjecia/`, `public/dokumenty/` — pliki podawane bez przetwarzania

`nuxt.config.ts` zostaje w katalogu głównym.

## Setup

```bash
npm install
```

## Development

Serwer dev na `http://localhost:3000`:

```bash
npm run dev
```

## Production

```bash
npm run generate   # statyczna strona do .output/public
npm run preview    # podgląd builda produkcyjnego
```

## Status

MVP w przygotowaniu. Zakres i struktura: `Projects/LOK/strona-lok.md` w vaulcie Obsidian.

Bloki pracy: B0 init repo → B1 layout i tokeny → B2 hero + sekcje → B3 kalendarz i aktualności → B4 galeria, dokumenty, SEO → B5 generate + hosting.
