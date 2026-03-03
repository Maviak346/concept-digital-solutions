<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-500',
      scrolled || isOpen
        ? 'bg-black/70 backdrop-blur-lg py-4 shadow-2xl'
        : 'bg-transparent py-8'
    ]"
  >
    <div class="container-custom flex justify-between items-center">
      <NuxtLink to="/" class="text-3xl font-black tracking-tighter text-white">
        NEXUS<span class="text-brand-primary">.</span>
      </NuxtLink>

      <!-- Desktop -->
      <div class="hidden md:flex gap-12 items-center">
        <div class="flex gap-10 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/services">Services</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </div>

        <NuxtLink to="/contact" class="btn-primary py-3 px-8 text-xs">
          Free Consultation
        </NuxtLink>
      </div>

      <!-- Mobile -->
      <button class="md:hidden p-2 text-white" @click="isOpen = !isOpen">
        ☰
      </button>
    </div>

    <Transition name="fade">
      <MotionDiv
        v-if="isOpen"
        initial="{ opacity: 0, y: -20 }"
        animate="{ opacity: 1, y: 0 }"
        exit="{ opacity: 0, y: -20 }"
        class="md:hidden absolute top-full left-0 w-full bg-brand-dark shadow-2xl"
        style="height:100vh"
      >
        <div class="container-custom py-12 flex flex-col gap-8">
          <NuxtLink to="/" @click="close">Home</NuxtLink>
          <NuxtLink to="/about" @click="close">About</NuxtLink>
          <NuxtLink to="/services" @click="close">Services</NuxtLink>
          <NuxtLink to="/contact" @click="close">Contact</NuxtLink>
        </div>
      </MotionDiv>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { Motion } from '@motionone/vue'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const scrolled = ref(false)
const route = useRoute()

watch(route, () => isOpen.value = false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
  })
})

const close = () => isOpen.value = false
</script>