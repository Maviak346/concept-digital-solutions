<template>
  <section class="section-padding bg-brand-soft-dark">
    <div class="container-custom">

      <div class="grid lg:grid-cols-2 gap-20 items-center bg-brand-soft-dark rounded-3xl sm:rounded-[40px] p-6 sm:p-6 md:p-10 relative overflow-hidden border border-white/5">

        <div>
          <div class="flex items-center gap-3 mb-8">
            <div class="h-px w-12 bg-brand-primary" />
            <span class="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs">
              Why Nexus
            </span>
          </div>

          <h2 class="text-5xl font-bold mb-10 text-white leading-tight">
            The Trusted Partner For <br />
            <span class="text-brand-primary">Market Leaders</span>
          </h2>

          <p class="text-body-large mb-12 text-white/80">
            We provide the strategic foundation and technical execution required to dominate your industry. Our commitment to excellence is absolute.
          </p>

          <NuxtLink to="/contact" class="btn-primary inline-block">
            Consult With An Expert
          </NuxtLink>
        </div>

        <div class="grid sm:grid-cols-2 gap-8">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="glass-card p-10"
          >
            <h4 class="text-2xl font-bold text-white mb-4">
              {{ feature.title }}
            </h4>
            <p class="text-brand-muted leading-relaxed">
              {{ feature.desc }}
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
const features = [
  { title: "Elite Talent", desc: "Our team consists of industry veterans from top-tier technology firms." },
  { title: "Strategic Vision", desc: "We align technology with your long-term business objectives." },
  { title: "Global Scale", desc: "Supporting enterprises across 15+ countries with localized expertise." },
  { title: "Unmatched ROI", desc: "Our solutions are engineered to deliver measurable financial impact." }
]
</script>