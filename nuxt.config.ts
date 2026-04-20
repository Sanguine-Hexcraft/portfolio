export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    preset: 'github-pages',
  },
  app: {
    head: {
      title: 'Portfolio',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Personal portfolio — experience, projects, and interests.' },
      ],
      htmlAttrs: { class: 'dark' },
    },
  },
})
