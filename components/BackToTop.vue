<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <button
      v-if="visible"
      @click="scrollTop"
      aria-label="Back to top"
      class="fixed right-6 z-[99] w-14 h-14 rounded-full
             bg-brand-dark border border-white/10
             flex items-center justify-center shadow-2xl
             hover:bg-brand-primary hover:border-brand-primary
             hover:scale-110 hover:shadow-[0_8px_30px_rgba(34,197,94,0.35)]
             active:scale-95 transition-all duration-300 group"
      :style="{ bottom: '6rem' }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-white group-hover:text-brand-dark transition-colors duration-300"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
        stroke-linecap="round" stroke-linejoin="round"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

const handleScroll = () => {
  visible.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>