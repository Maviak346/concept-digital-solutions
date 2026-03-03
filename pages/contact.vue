<script setup>
import PageBanner from '~/components/sections/PageBanner.vue'
import CTA from '~/components/sections/CTA.vue'
</script>

<template>
  <PageBanner
    title="Contact Us"
    subtitle="Have a project in mind? We'd love to hear from you. Get in touch with our team today."
    breadcrumb="Contact"
  />

  <CTA />

  <div class="h-[400px] bg-slate-200 relative overflow-hidden">
    <div class="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-2xl">
      INTERACTIVE MAP PLACEHOLDER
    </div>
  </div>
</template>