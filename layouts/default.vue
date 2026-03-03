<template>
  <div class="relative selection:bg-brand-primary/30 overflow-x-hidden">
    <ScrollProgress />
    <Navbar />
    <WhatsAppFloat />
    <BackToTop />

    <main class="min-h-screen">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import ScrollProgress from '~/components/ScrollProgress.vue'
import WhatsAppFloat from '~/components/WhatsAppFloat.vue'
import BackToTop from '~/components/BackToTop.vue'
</script>