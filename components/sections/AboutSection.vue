<template>
  <section :class="['section-padding', isLight ? 'bg-white' : 'bg-brand-soft-dark']">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

        <!-- IMAGE -->
        <MotionDiv
          initial="{ opacity: 0, x: -30 }"
          whileInView="{ opacity: 1, x: 0 }"
          transition="{ duration: 0.8 }"
          viewport="{ once: true }"
          class="relative"
        >
          <div class="relative z-10 rounded-[32px] overflow-hidden re-shadow">
            <img
              src="https://picsum.photos/seed/agency/800/900"
              class="w-full object-cover"
            />
          </div>
        </MotionDiv>

        <!-- CONTENT -->
        <MotionDiv
          initial="{ opacity: 0, y: 30 }"
          whileInView="{ opacity: 1, y: 0 }"
          transition="{ duration: 0.8 }"
          viewport="{ once: true }"
        >
          <div class="flex items-center gap-3 mb-8">
            <div class="h-px w-12 bg-brand-primary" />
            <span class="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs">
              The Agency
            </span>
          </div>

          <h2
            :class="[
              'text-5xl font-bold mb-10 leading-tight',
              isLight ? 'text-brand-dark' : 'text-white'
            ]"
          >
            Defining The Future Of <br />
            <span class="text-brand-primary">Digital Excellence</span>
          </h2>

          <p
            :class="[
              'text-lg mb-12',
              isLight ? 'text-gray-600' : 'text-white/80'
            ]"
          >
            Nexus Digital is a boutique consultancy specializing in high-performance
            digital strategies. We combine artistic vision with technical mastery.
          </p>

          <div class="grid sm:grid-cols-2 gap-6 mb-12">
            <div
              v-for="item in services"
              :key="item"
              class="flex items-center gap-4"
            >
              <div class="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center">
                ✓
              </div>
              <span
                :class="isLight ? 'text-brand-dark' : 'text-white'"
                class="font-medium"
              >
                {{ item }}
              </span>
            </div>
          </div>

          <NuxtLink to="/about" class="btn-primary inline-block">
            Our Story
          </NuxtLink>
        </MotionDiv>

      </div>
    </div>
  </section>
</template>

<script setup>
import { Motion } from '@motionone/vue'

const props = defineProps({
  theme: { type: String, default: 'dark' }
})

const isLight = props.theme === 'light'

const services = [
  "Strategic Consulting",
  "Bespoke Development",
  "Brand Identity",
  "Performance Marketing",
  "Cloud Architecture",
  "AI Integration"
]
</script>