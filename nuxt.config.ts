// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }, //todo: remove this line in production

  // Installed modules for nuxt
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-headlessui'],

  // Headless UI configs for nuxt
  headlessui: {
    prefix: 'Headless' // Optional: Adds a prefix to components
  },

  // Tailwind configs for nuxt
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
    config: {
      content: ['content/**/**.md']
    },
    viewer: true,
    exposeConfig: false
  }
})
