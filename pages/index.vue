<script setup>
import Hero from '~/components/sections/Hero.vue'
import IndustryTicker from '~/components/sections/IndustryTicker.vue'
import LogoSlider from '~/components/sections/LogoSlider.vue'
import ServicesSection from '~/components/sections/ServicesSection.vue'
import HowItWorks from '~/components/sections/HowItWorks.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import Pricing from '~/components/sections/Pricing.vue'
import WhyUs from '~/components/sections/WhyUs.vue'
import Testimonials from '~/components/sections/Testimonials.vue'
import CTA from '~/components/sections/CTA.vue'

useSeoMeta({
  title: 'Nexus Digital Agency | Web Design & Marketing Toronto',
  description: 'Toronto-based digital agency specializing in web design, SEO, paid ads, and business automation. Get a free consultation today.',
  ogTitle: 'Nexus Digital Agency',
  ogDescription: 'Premium web design and digital marketing for Toronto businesses.',
  ogImage: 'https://yourdomain.com/og-home.jpg',
  ogUrl: 'https://yourdomain.com',
  twitterCard: 'summary_large_image',
})

</script>

<template>
  <Hero />
  <IndustryTicker />
  <LogoSlider />
  <ServicesSection />
  <HowItWorks />
  <AboutSection />
  <Pricing />
  <WhyUs />
  <Testimonials />
  <CTA />
</template>