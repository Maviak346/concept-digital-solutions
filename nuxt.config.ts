// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  // ✅ Removed ssr: false — pages now pre-render as static HTML via nuxt generate
  // This is the single biggest SEO fix.

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}
    }
  },

  // ✅ No external modules needed — sitemap handled manually via /public/sitemap.xml

  app: {
    head: {
      // ✅ lang attribute for accessibility + SEO
      htmlAttrs: { lang: 'en' },

      title: 'Nexus Digital Agency | Web Design & Marketing Toronto',
      titleTemplate: '%s | Nexus Digital',

      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Toronto-based digital agency specializing in web design, SEO, paid advertising, and business automation. Helping local businesses grow online.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Nexus Digital Agency' },
        { property: 'og:image', content: 'https://yourdomain.com/og-default.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'theme-color', content: '#0F1115' },
      ],

      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // ✅ Non-blocking Google Fonts (replaces @import in main.css)
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap'
        },
      ],

      // ✅ LocalBusiness schema — enables rich results in Google Search
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Nexus Digital Agency',
            url: 'https://yourdomain.com',
            logo: 'https://yourdomain.com/logo.png',
            telephone: '+1-555-123-4567',
            email: 'hello@nexusdigital.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '123 Tech Plaza',
              addressLocality: 'Toronto',
              addressRegion: 'ON',
              addressCountry: 'CA'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 43.6532,
              longitude: -79.3832
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00'
              }
            ],
            sameAs: [
              'https://twitter.com/nexusdigital',
              'https://linkedin.com/company/nexusdigital',
              'https://instagram.com/nexusdigital',
              'https://facebook.com/nexusdigital'
            ],
            description: 'Premium digital agency in Toronto specializing in web design, SEO, paid advertising, and automation.',
            priceRange: '$$',
            areaServed: { '@type': 'City', name: 'Toronto' }
          })
        }
      ]
    }
  }
})