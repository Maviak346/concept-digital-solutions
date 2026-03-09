<template>
  <section class="section-padding bg-brand-light">
    <div class="container-custom">
      <div class="grid md:grid-cols-3 gap-16">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="text-center"
        >
          <div class="w-20 h-20 bg-brand-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <component
              :is="item.icon"
              class="text-brand-primary w-10 h-10"
              aria-hidden="true"
            />
          </div>
          <h3 class="text-2xl font-bold text-brand-dark mb-4">{{ item.title }}</h3>
          <p class="text-brand-muted">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Earth, ShieldCheck, Zap } from 'lucide-vue-next'

const items = [
  {
    icon: Earth,
    title: 'Our Mission',
    description: 'To empower businesses through innovative technology and strategic digital solutions.',
  },
  {
    icon: ShieldCheck,
    title: 'Our Vision',
    description: 'To be the world\'s most trusted partner for digital transformation and business growth.',
  },
  {
    icon: Zap,
    title: 'Our Values',
    description: 'Integrity, Innovation, and Impact are at the core of everything we do.',
  },
]
</script>