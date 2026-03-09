<template>
  <section class="section-padding bg-brand-soft-dark">
    <div class="container-custom">

      <div class="text-center mb-20">
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="h-px w-12 bg-brand-primary" />
          <span class="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs">
            Our Workflow
          </span>
          <div class="h-px w-12 bg-brand-primary" />
        </div>

        <h2 class="text-5xl font-bold text-white">
          How It <span class="text-brand-primary">Works</span>
        </h2>
      </div>

      <div class="grid lg:grid-cols-4 gap-12">
        <div
          v-for="(step, i) in steps"
          :key="i"
          class="text-center"
        >
          <div
            class="w-20 h-20 rounded-full bg-brand-primary text-brand-dark flex items-center justify-center mx-auto mb-8 text-2xl font-bold"
          >
            {{ i + 1 }}
          </div>

          <h4 class="text-2xl font-bold text-white mb-4">
            {{ step.title }}
          </h4>

          <p class="text-brand-muted leading-relaxed">
            {{ step.desc }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: "Consultation",
    desc: "We start with a deep dive into your business needs and technical requirements."
  },
  {
    title: "Strategy & Design",
    desc: "Our team crafts a custom roadmap and intuitive user interfaces for your project."
  },
  {
    title: "Development",
    desc: "We build your solution using enterprise-grade tech stacks and agile methodologies."
  },
  {
    title: "Launch & Support",
    desc: "We ensure a smooth deployment and provide ongoing maintenance and scaling."
  }
]
</script>