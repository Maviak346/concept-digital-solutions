<template>
  <section :class="['section-padding', isLight ? 'bg-white' : 'bg-brand-soft-dark']">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

        <!-- Image -->
        <div class="relative">
          <div class="relative z-10 rounded-2xl sm:rounded-[32px] overflow-hidden re-shadow">
            <img
              alt="Our Agency"
              src="https://picsum.photos/seed/agency/800/900"
              class="w-full h-auto object-cover"
              referrerpolicy="no-referrer"
            />
          </div>

          <!-- Floating rating card -->
          <div class="absolute -bottom-8 -right-8 glass-card p-6 sm:p-8 max-w-[280px] sm:max-w-[320px] z-20 hidden xl:block">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-star text-brand-dark w-6 h-6" aria-hidden="true">
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                </svg>
              </div>
              <div>
                <div class="text-xl font-bold text-white">4.9/5</div>
                <div class="text-[10px] text-brand-muted uppercase font-bold tracking-widest">Client Rating</div>
              </div>
            </div>
            <p class="text-sm text-white/70 leading-relaxed">"Their strategic approach exceeded expectations."</p>
          </div>
        </div>

        <!-- Content -->
        <div>
          <div class="flex items-center gap-3 mb-6 sm:mb-8">
            <div class="h-px w-8 sm:w-12 bg-brand-primary"></div>
            <span class="text-brand-primary font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs">The Agency</span>
          </div>

          <h2
            :class="[
              'text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10 leading-tight',
              isLight ? 'text-brand-dark' : 'text-white'
            ]"
          >
            Defining The Future Of <br />
            <span class="text-brand-primary">Digital Excellence</span>
          </h2>

          <p
            :class="[
              'text-base sm:text-lg mb-8 sm:mb-12',
              isLight ? 'text-gray-600' : 'text-white/80'
            ]"
          >
            Nexus Digital is a boutique consultancy specializing in high-performance digital strategies.
            We combine artistic vision with technical mastery.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
            <div
              v-for="item in services"
              :key="item"
              class="flex items-center gap-3 sm:gap-4"
            >
              <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-check text-brand-primary w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <span
                :class="isLight ? 'text-brand-dark' : 'text-white'"
                class="font-medium text-sm sm:text-base"
              >
                {{ item }}
              </span>
            </div>
          </div>

          <NuxtLink to="/about" class="btn-primary inline-block">
            Our Story
          </NuxtLink>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  theme: { type: String, default: 'dark' }
})

const isLight = props.theme === 'light'

const services = [
  'Strategic Consulting',
  'Bespoke Development',
  'Brand Identity',
  'Performance Marketing',
  'Cloud Architecture',
  'AI Integration'
]
</script>