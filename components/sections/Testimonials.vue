<template>
  <section class="section-padding bg-brand-light overflow-hidden">
    <div class="container-custom">

      <!-- Header -->
      <div class="text-center mb-20">
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="h-px w-12 bg-brand-primary"></div>
          <span class="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs">Testimonials</span>
          <div class="h-px w-12 bg-brand-primary"></div>
        </div>
        <h2 class="text-5xl font-bold text-zinc-950">
          What Our <span class="text-brand-primary">Clients Say</span>
        </h2>
      </div>

      <!-- Slider -->
      <div class="relative" @mouseenter="paused = true" @mouseleave="paused = false">
        <div class="overflow-hidden">
          <div ref="trackRef" class="flex" :style="trackStyle">
            <div v-for="(review, i) in infiniteList" :key="i" class="px-4 shrink-0"
              :style="{ width: `${100 / visibleCount}%` }">
              <div class="glass-card p-10 relative h-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="absolute top-8 right-8 w-16 h-16 text-white/5" aria-hidden="true">
                  <path
                    d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                  <path
                    d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                </svg>

                <div class="flex gap-1.5 mb-8">
                  <svg v-for="s in 5" :key="s" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="w-5 h-5 fill-brand-primary text-brand-primary">
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>
                </div>

                <p class="text-zinc-950 italic mb-10 text-lg leading-relaxed">
                  "{{ review.text }}"
                </p>

                <div class="flex items-center gap-5">
                  <img :src="review.image" :alt="review.name"
                    class="w-14 h-14 rounded-full object-cover border-2 border-brand-primary/20"
                    referrerpolicy="no-referrer" />
                  <div>
                    <div class="font-bold text-zinc-800 text-lg">{{ review.name }}</div>
                    <div class="text-xs text-brand-muted font-bold uppercase tracking-widest">{{ review.role }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Dots -->
        <div class="flex justify-center gap-3 mt-10">
          <button v-for="(_, i) in reviews" :key="i" @click="goTo(i)" class="transition-all duration-300 rounded-full"
            :class="currentDot === i
              ? 'w-8 h-3 bg-brand-primary'
              : 'w-3 h-3 bg-brand-primary/20 hover:bg-brand-primary/50'" />
        </div>

        <!-- Arrows -->
        <button @click="prev"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 text-zinc-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button @click="next"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 text-zinc-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const reviews = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, TechFlow',
    text: 'Nexus Digital transformed our online presence completely. Their attention to detail and technical expertise is unmatched in the industry.',
    image: 'https://picsum.photos/seed/person1/100/100'
  },
  {
    name: 'Michael Chen',
    role: 'CTO, GlobalSoft',
    text: 'The automation systems they built for us reduced our operational costs by 40%. A truly strategic partner for any growing business.',
    image: 'https://picsum.photos/seed/person2/100/100'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder, Bloom Creative',
    text: "Professional, responsive, and incredibly talented. They didn't just build a website; they built a platform for our future growth.",
    image: 'https://picsum.photos/seed/person3/100/100'
  },
]

const visibleCount = ref(3)
const paused = ref(false)
const isTransitioning = ref(true)
const trackRef = ref(null)

// Clone: [...reviews, ...reviews, ...reviews] — middle set is "real"
const infiniteList = computed(() => [...reviews, ...reviews, ...reviews])

// Start at middle set
const currentIndex = ref(reviews.length)

const currentDot = computed(() => (currentIndex.value - reviews.length) % reviews.length)

const trackStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * (100 / visibleCount.value)}%)`,
  transition: isTransitioning.value ? 'transform 700ms ease-in-out' : 'none',
}))

function next() {
  isTransitioning.value = true
  currentIndex.value++
  // If we've scrolled into the last clone set, silently jump back
  if (currentIndex.value >= reviews.length * 2) {
    setTimeout(() => {
      isTransitioning.value = false
      currentIndex.value = reviews.length
    }, 700)
  }
}

function prev() {
  isTransitioning.value = true
  currentIndex.value--
  // If we've scrolled into the first clone set, silently jump forward
  if (currentIndex.value < reviews.length) {
    setTimeout(() => {
      isTransitioning.value = false
      currentIndex.value = reviews.length * 2 - 1
    }, 700)
  }
}

function goTo(i) {
  isTransitioning.value = true
  currentIndex.value = reviews.length + i
}

const updateVisible = () => {
  if (window.innerWidth < 768) visibleCount.value = 1
  else if (window.innerWidth < 1024) visibleCount.value = 2
  else visibleCount.value = 3
}

let timer = null

onMounted(() => {
  updateVisible()
  window.addEventListener('resize', updateVisible)
  timer = setInterval(() => {
    if (!paused.value) next()
  }, 3000)
})

onUnmounted(() => {
  clearInterval(timer)
  window.removeEventListener('resize', updateVisible)
})
</script>