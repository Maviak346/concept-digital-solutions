<template>
  <section class="section-padding bg-brand-light">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto">

        <!-- Last updated badge -->
        <div class="flex items-center gap-3 mb-12">
          <div class="h-px w-8 bg-brand-primary" />
          <span class="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs">
            Last Updated: {{ lastUpdated }}
          </span>
        </div>

        <!-- Sections -->
        <div class="space-y-10">
          <div
            v-for="(section, i) in sections"
            :key="i"
            class="bg-white rounded-[24px] p-8 sm:p-10 border border-slate-100 re-shadow"
          >
            <h2 class="text-xl sm:text-2xl font-bold text-brand-dark mb-4">
              {{ section.title }}
            </h2>
            <p class="text-brand-muted leading-relaxed text-base">
              {{ section.content }}
            </p>
          </div>
        </div>

        <!-- Back link -->
        <div class="mt-16 pt-10 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">
          <NuxtLink
            to="/"
            class="flex items-center gap-2 text-brand-primary font-bold hover:gap-3 transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5" /><path d="m12 5-7 7 7 7" />
            </svg>
            Back to Home
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="btn-primary py-3 px-6 text-sm"
          >
            Have a Question? Contact Us
          </NuxtLink>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  lastUpdated: { type: String, default: 'January 1, 2025' },
  sections: { type: Array, default: () => [] }
})
</script>