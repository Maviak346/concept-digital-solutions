<template>
  <section class="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-brand-dark">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <img src="https://picsum.photos/seed/realestate/1920/1080" class="w-full h-full object-cover opacity-30" />
      <div class="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
    </div>

    <div class="container-custom relative z-10">
      <div class="max-w-4xl">

        <ClientOnly>
          <MotionDiv :initial="{ opacity: 0, y: 30 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.8 }">

            <!-- Tagline -->
            <div class="flex items-center gap-3 mb-8">
              <div class="h-px w-12 bg-brand-primary" />
              <span class="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs">
                Premium Digital Marketing Agency
              </span>
            </div>

            <!-- Heading -->
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-10 leading-tight text-white">
              Elevating Brands Through <br />
              <span class="text-brand-primary">Strategic Innovation</span>
            </h1>

            <!-- Paragraph -->
            <p class="text-body-large max-w-2xl mb-12 text-white/80">
              We specialize in high-end digital solutions that drive growth and establish market leadership.
            </p>

            <!-- Buttons -->
            <div class="flex flex-col sm:flex-row gap-6">
              <NuxtLink to="/contact" class="btn-primary flex items-center justify-center gap-3 group">
                Start Your Project →
              </NuxtLink>

              <NuxtLink to="/services" class="btn-secondary">
                View Case Studies
              </NuxtLink>
            </div>

            <!-- Stats -->
            <div class="mt-16 border-t border-white/10 pt-10">
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center sm:text-left">

                <div>
                  <div class="text-4xl font-bold text-white mb-2">
                    <CountUp :value="500" suffix="+" />
                  </div>
                  <div class="text-xs text-brand-muted uppercase font-bold tracking-widest">
                    Global Clients
                  </div>
                </div>

                <div>
                  <div class="text-4xl font-bold text-white mb-2">
                    <CountUp :value="2.5" prefix="$" suffix="B+" />
                  </div>
                  <div class="text-xs text-brand-muted uppercase font-bold tracking-widest">
                    Revenue Generated
                  </div>
                </div>

                <div>
                  <div class="text-4xl font-bold text-white mb-2">
                    <CountUp :value="99" suffix="%" />
                  </div>
                  <div class="text-xs text-brand-muted uppercase font-bold tracking-widest">
                    Client Retention
                  </div>
                </div>

              </div>
            </div>

          </MotionDiv>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Motion } from '@motionone/vue'
import CountUp from '~/components/ui/CountUp.vue'
</script>