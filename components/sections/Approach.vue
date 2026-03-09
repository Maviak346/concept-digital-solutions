<template>
  <section class="section-padding bg-brand-light">
    <div class="container-custom">

      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="h-px w-12 bg-brand-primary"></div>
          <span class="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs">Our Process</span>
          <div class="h-px w-12 bg-brand-primary"></div>
        </div>
        <h2 class="text-5xl font-bold mb-8 text-brand-dark">
          How We <span class="text-brand-primary">Deliver Success</span>
        </h2>
      </div>

      <!-- Steps Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div v-for="(step, i) in steps" :key="i" class="relative group">
          <div
            class="text-8xl font-black text-brand-dark/5 mb-6 group-hover:text-brand-primary/10 transition-colors duration-500">
            {{ step.number }}
          </div>
          <h4 class="text-2xl font-bold text-brand-dark mb-4">
            {{ step.title }}
          </h4>
          <p class="text-brand-muted leading-relaxed">
            {{ step.desc }}
          </p>

          <!-- Arrow connector (hidden on last step) -->
          <div v-if="i < steps.length - 1" class="hidden lg:block absolute top-16 -right-6 text-brand-dark/10">
            <ArrowRight class="w-10 h-10" aria-hidden="true" />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'

const steps = [
  { number: '01', title: 'Discovery', desc: 'We analyze your current systems and business goals to identify opportunities.' },
  { number: '02', title: 'Strategy', desc: 'We design a comprehensive technology roadmap tailored to your needs.' },
  { number: '03', title: 'Execution', desc: 'Our expert team builds and deploys your custom solutions with precision.' },
  { number: '04', title: 'Optimization', desc: 'We continuously monitor and refine your systems for maximum performance.' },
]
</script>