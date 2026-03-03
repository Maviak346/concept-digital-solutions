<template>
  <div class="py-20 bg-brand-dark border-y border-white/5 overflow-hidden">
    <div class="container-custom mb-12 text-center">
      <p class="text-xs font-bold text-brand-muted uppercase tracking-[0.3em]">
        Trusted by Industry Leaders
      </p>
    </div>

    <div class="overflow-hidden relative">
      <MotionDiv
        :animate="{ x: ['0%', '-50%'] }"
        :transition="{ duration: 30, repeat: Infinity, ease: 'linear' }"
        class="flex gap-24 items-center whitespace-nowrap"
      >
        <span
          v-for="(logo, i) in logos.concat(logos)"
          :key="i"
          class="text-4xl font-black text-white/10"
        >
          {{ logo }}
        </span>
      </MotionDiv>
    </div>
  </div>
</template>

<script setup>
import { Motion } from '@motionone/vue'

const logos = [
  "TECHCORP",
  "GLOBALSOFT",
  "NEXUS",
  "VANTAGE",
  "PRIME",
  "ZENITH",
  "AETHER",
  "ORBIT"
]
</script>