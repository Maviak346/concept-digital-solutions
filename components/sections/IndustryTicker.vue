<template>
    <div class="py-16 md:py-20 bg-brand-dark border-y border-white/5 overflow-hidden">
        <div class="container-custom mb-10 md:mb-12 text-center">
            <p class="text-[10px] md:text-xs font-bold text-brand-muted uppercase tracking-[0.3em]">
                Supporting Toronto Businesses Digitally
            </p>
        </div>

        <div class="flex whitespace-nowrap overflow-hidden relative" @mouseenter="paused = true"
            @mouseleave="paused = false">
            <div ref="trackRef" class="flex gap-0 items-center">
                <span v-for="(item, i) in industries.concat(industries)" :key="i" class="flex items-center">
                    <span
                        class="text-xl md:text-3xl font-black text-white/20 hover:text-white/50 transition-colors cursor-default px-6 md:px-10">
                        {{ item }}
                    </span>
                    <span class="text-brand-primary/40 text-lg md:text-2xl font-bold">•</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const industries = [
    'Restaurants', 'Salons', 'Contractors', 'Clinics',
    'Real Estate', 'Retail', 'Startups', 'Professional Services',
]

const trackRef = ref(null)
const paused = ref(false)
let animationId = null
let offset = 0

onMounted(() => {
    const track = trackRef.value
    if (!track) return

    const step = () => {
        if (!paused.value) {
            const halfWidth = track.scrollWidth / 2
            offset -= 0.6  // ➡ left to right scroll (forward)
            if (offset <= 0) offset = halfWidth
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