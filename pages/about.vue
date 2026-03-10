<script setup>
useSeoMeta({
  title: 'About Us | Nexus Digital Agency Toronto',
  description: 'Meet the team behind Nexus Digital — a boutique Toronto consultancy helping businesses grow through strategy, design, and technology since day one.',
  ogTitle: 'About Nexus Digital Agency',
  ogDescription: 'A team of dedicated digital professionals committed to delivering excellence for Toronto businesses.',
  ogImage: 'https://yourdomain.com/og-about.jpg',
  ogUrl: 'https://yourdomain.com/about',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://yourdomain.com/about' }]
})

import PageBanner from '~/components/sections/PageBanner.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import WhyUs from '~/components/sections/WhyUs.vue'
import OurTeam from '~/components/sections/OurTeam.vue'
import MissionVision from '~/components/sections/MissionVision.vue'
</script>

<template>
  <PageBanner
    title="About Our Agency"
    subtitle="We are a team of dedicated professionals committed to delivering excellence in every digital project we undertake."
    breadcrumb="About Us"
    breadcrumb-path="/about"
  />
  <AboutSection theme="light" />
  <WhyUs />
  <OurTeam />
  <MissionVision />
</template>