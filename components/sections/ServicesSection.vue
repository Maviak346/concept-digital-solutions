<template>
  <section class="section-padding bg-brand-light">
    <div class="container-custom">

      <div class="text-center mb-20">
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="h-px w-12 bg-brand-primary" />
          <span class="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs">
            Our Services
          </span>
          <div class="h-px w-12 bg-brand-primary" />
        </div>

        <h2 class="text-5xl font-bold mb-8 text-brand-dark">
          Bespoke Digital <span class="text-brand-primary">Solutions</span>
        </h2>

        <p class="text-body-large max-w-2xl mx-auto">
          We offer a comprehensive suite of services tailored to meet the unique challenges of modern enterprises.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <ServiceCard
          v-for="(s, i) in services"
          :key="i"
          :icon="s.icon"
          :title="s.title"
          :description="s.desc"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
import ServiceCard from '~/components/ui/ServiceCard.vue'
import { Code2, LayoutDashboard, Globe2, Cpu, Cloud, ShieldCheck } from 'lucide-vue-next'

const services = [
  { icon: Code2, title: "Web Development", desc: "Enterprise-grade web applications built for performance and scalability." },
  { icon: LayoutDashboard, title: "Business Intelligence", desc: "Data-driven dashboards with actionable insights." },
  { icon: Globe2, title: "Global E-Commerce", desc: "Multi-region online shopping experiences." },
  { icon: Cpu, title: "AI & Automation", desc: "Intelligent workflow automation systems." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Secure AWS, Azure and GCP cloud architecture." },
  { icon: ShieldCheck, title: "Cybersecurity", desc: "Comprehensive security audits and protection strategies." }
]
</script>