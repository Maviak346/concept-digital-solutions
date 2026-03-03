<template>
  <Transition name="fade">
    <motion.button
      v-if="visible"
      @click="scrollTop"
      initial="{ opacity: 0, scale: 0.5 }"
      animate="{ opacity: 1, scale: 1 }"
      exit="{ opacity: 0, scale: 0.5 }"
      class="fixed bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2
             z-[100] w-10 h-10 rounded-full backdrop-blur-lg
             bg-white/20 border border-white/30 shadow-2xl
             flex items-center justify-center"
    >
      ↑
    </motion.button>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Motion } from '@motionone/vue'

const visible = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    visible.value = window.scrollY > 300
  })
})

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>