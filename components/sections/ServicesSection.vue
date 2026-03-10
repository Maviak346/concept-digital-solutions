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
          :features="s.features"
          :class="isAloneInRow(i) ? 'sm:col-span-2 lg:col-span-3' : ''"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
import ServiceCard from '~/components/ui/ServiceCard.vue'
import { Globe, Search, MousePointerClick, Smartphone, Settings2, BarChart3, Palette } from 'lucide-vue-next'

// Returns true if this card is the sole item in its row (for a 3-col grid)
const isAloneInRow = (i) => {
  const cols = 3
  const total = services.length
  const posInRow = i % cols
  const isLastRow = i >= total - (total % cols || cols)
  return isLastRow && posInRow === 0 && total % cols === 1
}

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    desc: "We build modern, high-performance websites tailored to your business goals — from corporate sites to e-commerce platforms that convert visitors into customers.",
    features: [
      "Custom website development",
      "E-commerce solutions",
      "Responsive & mobile-first design",
      "Secure hosting & maintenance",
    ]
  },
  {
    icon: Search,
    title: "SEO & Local Search Optimization",
    desc: "Increase your visibility and attract customers searching for your services. We optimize your website to rank higher and generate qualified organic traffic.",
    features: [
      "Technical SEO audits",
      "Local SEO & Google Maps optimization",
      "Keyword research & content strategy",
      "On-page & performance optimization",
    ]
  },
  {
    icon: MousePointerClick,
    title: "Paid Advertising",
    desc: "Drive instant traffic and measurable results with strategic paid campaigns. We manage, optimize, and scale ad campaigns for maximum ROI.",
    features: [
      "Google Ads management",
      "Social media advertising",
      "Conversion tracking setup",
      "Campaign optimization & reporting",
    ]
  },
  {
    icon: Smartphone,
    title: "Social Media Growth",
    desc: "Build brand awareness and connect with your audience through engaging content and targeted campaigns across all major platforms.",
    features: [
      "Content planning & creation",
      "Community management",
      "Paid social campaigns",
      "Analytics & engagement tracking",
    ]
  },
  {
    icon: Settings2,
    title: "Business Automation & Dashboards",
    desc: "Streamline operations with custom-built systems that save time and improve efficiency — from booking systems to internal dashboards.",
    features: [
      "Custom business dashboards",
      "CRM integration",
      "Payment & booking systems",
      "Process automation",
    ]
  },
  {
    icon: BarChart3,
    title: "Analytics & Performance Reporting",
    desc: "Make informed decisions with real-time insights. We track, measure, and optimize your digital presence to ensure consistent growth.",
    features: [
      "Custom performance dashboards",
      "Traffic & conversion analysis",
      "Monthly reporting",
      "Growth optimization strategy",
    ]
  },
  {
    icon: Palette,
    title: "Branding & Digital Identity",
    desc: "Create a powerful brand presence that stands out in the competitive market — from visual identity to messaging that resonates with your audience.",
    features: [
      "Logo & brand design",
      "Brand messaging & positioning",
      "Visual identity systems",
      "Marketing collateral design",
    ]
  },
]
</script>