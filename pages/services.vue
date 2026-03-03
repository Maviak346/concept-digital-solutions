<script setup>
import PageBanner from '~/components/sections/PageBanner.vue'
import ServicesSection from '~/components/sections/ServicesSection.vue'
import Approach from '~/components/sections/Approach.vue'
import Pricing from '~/components/sections/Pricing.vue'
</script>

<template>
  <PageBanner
    title="Our Services"
    subtitle="Comprehensive digital solutions tailored to your specific business needs and goals."
    breadcrumb="Services"
  />

  <ServicesSection />
  <Approach />
  <Pricing />

  <section class="section-padding bg-white">
    <div class="container-custom text-center">
      <h2 class="text-5xl font-bold text-brand-dark mb-10">
        Ready to transform your business?
      </h2>
      <p class="text-body-large mb-12 max-w-2xl mx-auto">
        Contact us today for a free consultation and let's discuss how our services can help you achieve your objectives.
      </p>
      <NuxtLink to="/contact" class="btn-primary inline-block">
        Get a Free Quote
      </NuxtLink>
    </div>
  </section>
</template>