<script setup>
useSeoMeta({
  title: 'Digital Marketing & Web Development Services | Nexus Toronto',
  description: 'Web design, SEO, paid advertising, social media growth, automation, and performance analytics — comprehensive digital services for Toronto businesses.',
  ogTitle: 'Digital Services | Nexus Digital Agency Toronto',
  ogDescription: 'Full-suite digital services: web design, SEO, paid ads, automation & analytics. Tailored for Toronto businesses.',
  ogImage: 'https://yourdomain.com/og-services.jpg',
  ogUrl: 'https://yourdomain.com/services',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://yourdomain.com/services' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Digital Marketing & Web Development',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Nexus Digital Agency',
          url: 'https://yourdomain.com'
        },
        areaServed: { '@type': 'City', name: 'Toronto' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Digital Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design & Development' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO & Local Search Optimization' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paid Advertising' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Growth' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Automation & Dashboards' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Analytics & Performance Reporting' } },
          ]
        }
      })
    }
  ]
})

import PageBanner from '~/components/sections/PageBanner.vue'
import IndustryTicker from '~/components/sections/IndustryTicker.vue'
import ServicesSection from '~/components/sections/ServicesSection.vue'
import Approach from '~/components/sections/Approach.vue'
import Pricing from '~/components/sections/Pricing.vue'
import CTA from '~/components/sections/CTA.vue'
</script>

<template>
  <PageBanner
    title="Our Services"
    subtitle="Comprehensive digital solutions tailored to your specific business needs and goals."
    breadcrumb="Services"
    breadcrumb-path="/services"
  />
  <IndustryTicker />
  <ServicesSection />
  <Approach />
  <Pricing />
  <CTA />
</template>