// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
      title: 'Vince Michael Aqilizan — Portfolio 2026',
      link: [
        { rel: 'icon', type: 'image/webp', href: '/image/MZD_28.webp' },
      ],
    },
  },

  // Global stylesheet — pure SCSS, no Tailwind
  css: ['./app/assets/css/main.scss'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
  ],

  // Vite config — SCSS global vars available everywhere
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Uncomment to inject global SCSS vars / mixins into every component:
          // additionalData: `@use "@/app/assets/css/main.scss" as *;`,
        },
      },
    },
  },

  devtools: { enabled: true },
})
