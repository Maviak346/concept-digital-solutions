<template>
  <section class="section-padding bg-brand-soft-dark overflow-hidden">
    <div class="container-custom">

      <!-- Header -->
      <div class="text-center mb-20">
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="h-px w-12 bg-brand-primary" />
          <span class="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs">Our Workflow</span>
          <div class="h-px w-12 bg-brand-primary" />
        </div>
        <h2 class="text-5xl font-bold text-white">
          How It <span class="text-brand-primary">Works</span>
        </h2>
      </div>

      <!-- Steps -->
      <div class="relative">

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          <div
            v-for="(step, i) in steps"
            :key="i"
            class="relative group"
          >
            <!-- Card -->
            <div class="bg-white/[0.03] border border-white/[0.06] rounded-[28px] p-8 h-full
                        hover:bg-white/[0.06] hover:border-brand-primary/20
                        transition-all duration-500 hover:-translate-y-1">

              <!-- Top row: number + icon -->
              <div class="flex items-start justify-between mb-8">

                <!-- Step number badge -->
                <div class="relative">
                  <div class="w-14 h-14 rounded-2xl bg-brand-primary/10 border border-brand-primary/20
                              flex items-center justify-center
                              group-hover:bg-brand-primary group-hover:border-brand-primary
                              transition-all duration-500">
                    <span class="text-xl font-black text-brand-primary group-hover:text-brand-dark transition-colors duration-500">
                      {{ String(i + 1).padStart(2, '0') }}
                    </span>
                  </div>
                  <!-- Glow dot -->
                  <div class="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-brand-primary opacity-0
                              group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_8px_#22C55E]" />
                </div>

                <!-- Icon -->
                <div class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center
                            group-hover:bg-brand-primary/10 transition-all duration-300">
                  <component :is="step.icon" class="w-5 h-5 text-white/30 group-hover:text-brand-primary transition-colors duration-300" />
                </div>
              </div>

              <!-- Content -->
              <h4 class="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors duration-300">
                {{ step.title }}
              </h4>
              <p class="text-brand-muted text-sm leading-relaxed">
                {{ step.desc }}
              </p>

              <!-- Bottom accent line -->
              <div class="mt-8 h-px w-0 bg-gradient-to-r from-brand-primary to-brand-primary/0
                          group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { Search, Lightbulb, Palette, Code2, TrendingUp, Rocket } from 'lucide-vue-next'

const steps = [
  {
    title: 'Discovery & Consultation',
    desc: 'We analyze your business goals, competitors, and digital gaps to understand where you stand.',
    icon: Search,
  },
  {
    title: 'Strategy & Branding',
    desc: 'Positioning, messaging, UX planning, and a clear digital roadmap tailored to your goals.',
    icon: Lightbulb,
  },
  {
    title: 'Design & Experience',
    desc: 'High-converting UI/UX built for your target customers with pixel-perfect precision.',
    icon: Palette,
  },
  {
    title: 'Development & Integration',
    desc: 'Web, e-commerce, dashboards, automation, and API integrations — built to perform.',
    icon: Code2,
  },
  {
    title: 'Marketing & Growth',
    desc: 'SEO, paid ads, analytics, and performance optimization to drive real business results.',
    icon: TrendingUp,
  },
  {
    title: 'Launch, Support & Scale',
    desc: 'Deployment, monitoring, updates, and long-term scaling to keep you ahead of the curve.',
    icon: Rocket,
  },
]
</script>