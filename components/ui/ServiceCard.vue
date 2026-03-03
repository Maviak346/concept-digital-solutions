<template>
  <MotionDiv
    initial="{ opacity: 0, y: 30 }"
    whileInView="{ opacity: 1, y: 0 }"
    transition="{ duration: 0.6 }"
    viewport="{ once: true }"
    class="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl re-shadow-hover group border border-slate-100"
  >
    <div
      class="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-all duration-500"
    >
      <component :is="icon" class="text-brand-primary w-8 h-8 group-hover:text-white transition-colors duration-500" />
    </div>

    <h3 class="text-2xl font-bold text-brand-dark mb-4">
      {{ title }}
    </h3>

    <p class="text-brand-muted leading-relaxed">
      {{ description }}
    </p>
  </MotionDiv>
</template>

<script setup>
import { Motion } from '@motionone/vue'

defineProps({
  icon: Object,
  title: String,
  description: String
})
</script>