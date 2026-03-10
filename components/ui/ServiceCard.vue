<template>
  <MotionDiv
    initial="{ opacity: 0, y: 30 }"
    whileInView="{ opacity: 1, y: 0 }"
    transition="{ duration: 0.6 }"
    viewport="{ once: true }"
    class="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl re-shadow-hover group border border-slate-100 flex flex-col"
  >
    <!-- Icon -->
    <div class="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-all duration-500">
      <component :is="icon" class="text-brand-primary w-8 h-8 group-hover:text-white transition-colors duration-500" />
    </div>

    <!-- Title -->
    <h3 class="text-2xl font-bold text-brand-dark mb-4">
      {{ title }}
    </h3>

    <!-- Description -->
    <p class="text-brand-muted leading-relaxed mb-6">
      {{ description }}
    </p>

    <!-- Feature list -->
    <ul class="flex flex-col gap-3 pt-6 border-t border-slate-100 mt-auto">
      <li
        v-for="(feat, idx) in features"
        :key="idx"
        class="flex items-center gap-3 text-sm text-brand-dark/70"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 shrink-0 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        {{ feat }}
      </li>
    </ul>

  </MotionDiv>
</template>

<script setup>
import { Motion } from '@motionone/vue'

defineProps({
  icon: Object,
  title: String,
  description: String,
  features: { type: Array, default: () => [] },
})
</script>