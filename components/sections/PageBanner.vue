<template>
  <section class="relative pt-48 pb-32 bg-brand-dark overflow-hidden">
    <div class="absolute -top-24 -right-24 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[150px]"
      style="transform: scale(1.1857) rotate(83.565deg);" />
    <div class="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[150px]" />

    <div class="container-custom relative z-10">
      <div class="max-w-3xl">

        <!-- ✅ Semantic breadcrumb nav with schema markup -->
        <nav aria-label="Breadcrumb" class="mb-8">
          <ol
            class="flex items-center gap-3"
            itemscope
            itemtype="https://schema.org/BreadcrumbList"
          >
            <li
              itemprop="itemListElement"
              itemscope
              itemtype="https://schema.org/ListItem"
            >
              <NuxtLink
                to="/"
                itemprop="item"
                class="text-brand-muted font-bold uppercase tracking-widest text-xs hover:text-white transition-colors"
              >
                <span itemprop="name">Home</span>
              </NuxtLink>
              <meta itemprop="position" content="1" />
            </li>

            <li aria-hidden="true">
              <div class="w-1.5 h-1.5 rounded-full bg-brand-primary" />
            </li>

            <li
              itemprop="itemListElement"
              itemscope
              itemtype="https://schema.org/ListItem"
            >
              <NuxtLink
                :to="breadcrumbPath"
                itemprop="item"
                class="text-brand-primary font-bold uppercase tracking-widest text-xs"
                aria-current="page"
              >
                <span itemprop="name">{{ breadcrumb }}</span>
              </NuxtLink>
              <meta itemprop="position" content="2" />
            </li>
          </ol>
        </nav>

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
  breadcrumb: String,
  // ✅ New: path for the breadcrumb link (e.g. "/about")
  breadcrumbPath: { type: String, default: '/' }
})
</script>