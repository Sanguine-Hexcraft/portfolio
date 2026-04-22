export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  components: [
    { path: '~/components/sections', pathPrefix: false },
    { path: '~/components/ui', pathPrefix: false },
  ],
  nitro: {
    preset: 'github-pages',
  },
  app: {
    baseURL: '/portfolio/',
    head: {
      title: 'Portfolio',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Personal portfolio — experience, projects, and interests.' },
      ],
      htmlAttrs: { class: 'dark' },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500&display=swap',
        },
      ],
    },
  },
})
