<template>
  <section class="relative pt-48 pb-32 bg-brand-dark overflow-hidden">
    <div class="container-custom relative z-10">
      <div class="max-w-3xl">

        <div class="flex items-center gap-3 mb-8">
          <span class="text-brand-muted font-bold uppercase tracking-widest text-xs">
            Home
          </span>
          <div class="w-1.5 h-1.5 rounded-full bg-brand-primary" />
          <span class="text-brand-primary font-bold uppercase tracking-widest text-xs">
            {{ breadcrumb }}
          </span>
        </div>

        <h1 class="text-hero mb-8 text-white">
          {{ title }}
        </h1>

        <p class="text-body-large max-w-2xl text-white/80">
          {{ subtitle }}
        </p>

      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  breadcrumb: String
})
</script>