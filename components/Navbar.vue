<template>
  <nav :class="[
    'fixed top-0 left-0 w-full z-50 transition-all duration-500',
    scrolled || isOpen
      ? 'bg-black/70 backdrop-blur-lg py-4 shadow-2xl'
      : 'bg-transparent py-8'
  ]">
    <div class="container-custom flex justify-between items-center">

      <!-- Logo -->
      <NuxtLink to="/" class="text-3xl font-black tracking-tighter text-white">
        NEXUS<span class="text-brand-primary">.</span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <div class="hidden md:flex gap-12 items-center">
        <div class="flex gap-10 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
          <NuxtLink v-for="link in links" :key="link.to" :to="link.to" :class="[
            'transition-all hover:text-brand-primary relative group',
            isActive(link.to) ? 'text-brand-primary' : ''
          ]">
            {{ link.label }}
            <span :class="[
              'absolute -bottom-2 left-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full',
              isActive(link.to) ? 'w-full' : 'w-0'
            ]" />
          </NuxtLink>
        </div>

        <NuxtLink to="/contact" class="btn-primary py-3 px-8 text-xs">
          Free Consultation
        </NuxtLink>
      </div>

      <!-- Mobile Toggle -->
      <button class="md:hidden p-2 text-white" @click="isOpen = !isOpen" aria-label="Toggle menu">
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
      <div v-if="isOpen" class="md:hidden absolute top-full left-0 w-full bg-brand-dark shadow-2xl"
        style="height: 100vh">
        <div class="container-custom py-12 flex flex-col gap-8 text-sm font-bold uppercase tracking-[0.2em]">
          <NuxtLink v-for="link in links" :key="link.to" :to="link.to" :class="[
            'flex items-center gap-3 transition-colors duration-200 pb-4 border-b',
            isActive(link.to)
              ? 'text-brand-primary border-brand-primary/30'
              : 'text-white/70 border-white/5 hover:text-brand-primary hover:border-brand-primary/20'
          ]" @click="close">
            <span :class="[
              'w-1.5 h-1.5 rounded-full flex-shrink-0',
              isActive(link.to) ? 'bg-brand-primary' : 'bg-white/20'
            ]" />
            {{ link.label }}
          </NuxtLink>

          <NuxtLink to="/contact" class="btn-primary py-4 text-center text-xs mt-2" @click="close">
            Free Consultation
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const scrolled = ref(false)
const route = useRoute()

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

const isActive = (path) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

watch(route, () => (isOpen.value = false))

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const close = () => (isOpen.value = false)
</script>