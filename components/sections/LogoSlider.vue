<template>
  <div class="py-16 md:py-20 bg-brand-dark border-y border-white/5 overflow-hidden">
    <div class="container-custom mb-10 md:mb-12 text-center">
      <p class="text-[10px] md:text-xs font-bold text-brand-muted uppercase tracking-[0.3em]">
        Trusted by Industry Leaders
      </p>
    </div>

    <div class="flex whitespace-nowrap overflow-hidden relative">
      <div ref="trackRef" class="flex gap-16 md:gap-24 items-center pr-24">
        <span
          v-for="(logo, i) in logos.concat(logos)"
          :key="i"
          class="text-2xl md:text-4xl font-black text-white/10 transition-colors cursor-default hover:text-white/30"
        >
          {{ logo }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const logos = [
  'TECHCORP',
  'GLOBALSOFT',
  'NEXUS',
  'VANTAGE',
  'PRIME',
  'ZENITH',
  'AETHER',
  'ORBIT'
]

const trackRef = ref(null)
let animationId = null
let offset = 0

onMounted(() => {
  const track = trackRef.value
  if (!track) return

  const step = () => {
    // Half width = one full set of logos (since we duplicate them)
    const halfWidth = track.scrollWidth / 2
    offset += 0.5
    if (offset >= halfWidth) offset = 0
    track.style.transform = `translateX(-${offset}px)`
    animationId = requestAnimationFrame(step)
  }

  animationId = requestAnimationFrame(step)
})

onBeforeUnmount(() => {
  if (animationId) cancelAnimationFrame(animationId)
})
</script>