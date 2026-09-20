// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'pl' },
      title: 'KS LOK Rzepiska | Strzelectwo w sercu Podhala',
      meta: [
        { name: 'theme-color', content: '#0E1A16' },
        { name: 'description', content: 'Klub Strzelecki LOK Rzepiska — treningi, strzelnica i społeczność pasjonatów strzelectwa.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'pl_PL' },
        { property: 'og:title', content: 'KS LOK Rzepiska' },
        { property: 'og:description', content: 'Strzelectwo w sercu Podhala.' },
      ],
    },
  },
})
