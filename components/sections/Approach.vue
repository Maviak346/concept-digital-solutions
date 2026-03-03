<template>
  <section class="section-padding bg-brand-light">
    <div class="container-custom">

      <div class="text-center mb-20">
        <h2 class="text-5xl font-bold text-brand-dark">
          How We <span class="text-brand-primary">Deliver Success</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div
          v-for="(step, i) in steps"
          :key="i"
          class="relative"
        >
          <div class="text-8xl font-black text-brand-dark/5 mb-6">
            {{ step.number }}
          </div>
          <h4 class="text-2xl font-bold text-brand-dark mb-4">
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
  { number: "01", title: "Discovery", desc: "Analyze systems and goals." },
  { number: "02", title: "Strategy", desc: "Design a custom roadmap." },
  { number: "03", title: "Execution", desc: "Build and deploy solutions." },
  { number: "04", title: "Optimization", desc: "Continuous refinement." }
]
</script>