<template>
  <section class="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-brand-dark">

    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://picsum.photos/seed/realestate/1920/1080"
        alt="Premium Real Estate"
        class="w-full h-full object-cover opacity-30"
        referrerpolicy="no-referrer"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
    </div>

    <div class="container-custom relative z-10">
      <div class="max-w-4xl">

        <!-- Tagline -->
        <div class="flex items-center gap-3 mb-8">
          <div class="h-px w-12 bg-brand-primary" />
          <span class="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs">
            Premium Digital Marketing Agency
          </span>
        </div>

        <!-- Heading -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-10 leading-tight">
          Elevating Brands Through <br />
          <span class="text-brand-primary">Strategic Innovation</span>
        </h1>

        <!-- Paragraph -->
        <p class="text-body-large max-w-2xl mb-12">
          We specialize in high-end digital solutions that drive growth and establish market leadership.
          Our bespoke strategies are crafted for brands that demand excellence.
        </p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <NuxtLink to="/contact" class="btn-primary flex items-center justify-center gap-3 group">
            Start Your Project
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </NuxtLink>
          <NuxtLink to="/services" class="btn-secondary">
            View Case Studies
          </NuxtLink>
        </div>

        <!-- Stats -->
        <div class="mt-10 sm:mt-16 border-t border-white/10 pt-8 sm:pt-10">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center sm:text-left">

            <div class="relative">
              <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                <CountUp :value="500" suffix="+" />
              </div>
              <div class="text-[9px] sm:text-[10px] md:text-xs text-brand-muted uppercase font-bold tracking-widest">
                Global Clients
              </div>
              <div class="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10"></div>
            </div>

            <div class="relative">
              <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                <CountUp :value="2" prefix="$" suffix="B+" />
              </div>
              <div class="text-[9px] sm:text-[10px] md:text-xs text-brand-muted uppercase font-bold tracking-widest">
                Revenue Generated
              </div>
              <div class="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10"></div>
            </div>

            <div>
              <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                <CountUp :value="99" suffix="%" />
              </div>
              <div class="text-[9px] sm:text-[10px] md:text-xs text-brand-muted uppercase font-bold tracking-widest">
                Client Retention
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import CountUp from '~/components/ui/CountUp.vue'
</script>