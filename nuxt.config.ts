// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  modules: [
        '@primevue/nuxt-module'
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura
      },
    },
    components: {
      prefix: 'Prime',
      exclude: [ 'Editor', 'Form', ]
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  ssr: true,
})
