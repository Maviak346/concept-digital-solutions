export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}
    }
  },

  app: {
    head: {
      title: 'Nexus Digital Agency',
      meta: [
        { name: 'description', content: 'Premium digital marketing and technology consultancy.' }
      ]
    }
  }
})