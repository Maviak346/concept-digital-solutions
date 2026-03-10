<template>
  <section class="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-brand-dark">

    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <!--
        ✅ Fixed alt text — was "Premium Real Estate" (wrong/placeholder)
        ✅ fetchpriority="high" — tells browser to load this as LCP image first
        ✅ Use your own hosted image in production instead of picsum
      -->
      <img
        src="https://picsum.photos/seed/realestate/1920/1080"
        alt="Nexus Digital Agency Toronto team working on digital strategy"
        class="w-full h-full object-cover opacity-30"
        fetchpriority="high"
        width="1920"
        height="1080"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
    </div>

    <div class="container-custom relative z-10">
      <div class="max-w-4xl">

        <!-- Tagline -->
        <div class="flex items-center gap-3 mb-8">
          <div class="h-px w-12 bg-brand-primary" />
          <span class="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs">
            Premium Digital Marketing Agency
          </span>
        </div>

        <!-- ✅ h1 with target keyword -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-10 leading-tight">
          Elevating Brands Through <br />
          <span class="text-brand-primary">Strategic Innovation</span>
        </h1>

        <p class="text-body-large max-w-2xl mb-12">
          We specialize in high-end digital solutions that drive growth and establish market leadership.
          Our bespoke strategies are crafted for brands that demand excellence.
        </p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <NuxtLink to="/contact" class="btn-primary flex items-center justify-center gap-3 group">
            Start Your Project
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform"
              aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </NuxtLink>
          <NuxtLink to="/services" class="btn-secondary">
            View Our Services
          </NuxtLink>
        </div>

        <!-- Stats -->
        <div class="mt-10 sm:mt-16 border-t border-white/10 pt-8 sm:pt-10">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">

            <div class="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 hover:border-brand-primary/30 transition-colors duration-300">
              <div class="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-brand-primary" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div>
                <div class="text-sm font-bold text-white">Websites That Sell</div>
                <div class="text-[10px] text-brand-muted uppercase tracking-widest font-semibold mt-0.5">Not just look good</div>
              </div>
            </div>

            <div class="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 hover:border-brand-primary/30 transition-colors duration-300">
              <div class="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-brand-primary" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  aria-hidden="true">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <div>
                <div class="text-sm font-bold text-white">Systems That Save Time</div>
                <div class="text-[10px] text-brand-muted uppercase tracking-widest font-semibold mt-0.5">Automation & dashboards</div>
              </div>
            </div>

            <div class="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 hover:border-brand-primary/30 transition-colors duration-300">
              <div class="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-brand-primary" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  aria-hidden="true">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <div>
                <div class="text-sm font-bold text-white">Marketing That Converts</div>
                <div class="text-[10px] text-brand-muted uppercase tracking-widest font-semibold mt-0.5">Strategy + execution</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// No unused imports
</script>