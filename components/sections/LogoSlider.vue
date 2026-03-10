<template>
  <div class="py-16 md:py-20 bg-brand-dark border-y border-white/5 overflow-hidden">
    <div class="container-custom mb-10 md:mb-12 text-center">
      <p class="text-[10px] md:text-xs font-bold text-brand-muted uppercase tracking-[0.3em]">
        Our Approach
      </p>
    </div>

    <div class="flex whitespace-nowrap overflow-hidden relative" @mouseenter="paused = true"
      @mouseleave="paused = false">
      <div ref="trackRef" class="flex gap-0 items-center">
        <span v-for="(step, i) in steps.concat(steps)" :key="i" class="flex items-center">
          <span
            class="text-xl md:text-3xl font-black text-white/20 hover:text-white/50 transition-colors cursor-default px-6 md:px-10">
            {{ step }}
          </span>
          <span class="text-brand-primary/40 text-lg md:text-2xl font-bold">→</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const steps = [
  'Strategy', 'Design', 'Development',
  'Testing', 'Launch', 'Support', 'Growth',
]

const trackRef = ref(null)
const paused = ref(false)
let animationId = null
let offset = 0

onMounted(() => {
  const track = trackRef.value
  if (!track) return

  // Start from the end so it scrolls right → left (backward / opposite direction)
  offset = track.scrollWidth / 2

  const step = () => {
    if (!paused.value) {
      const halfWidth = track.scrollWidth / 2
      offset += 0.6  // ⬅ right to left scroll (backward)
      if (offset >= halfWidth) offset = 0
      track.style.transform = `translateX(-${offset}px)`
    }
    animationId = requestAnimationFrame(step)
  }

  animationId = requestAnimationFrame(step)
})

onBeforeUnmount(() => {
  if (animationId) cancelAnimationFrame(animationId)
})
</script>