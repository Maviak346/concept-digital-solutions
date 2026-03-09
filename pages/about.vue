<script setup>
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
  />

  <AboutSection theme="light" />
  <WhyUs />
  <OurTeam />
  <MissionVision />
</template>