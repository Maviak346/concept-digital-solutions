<template>
  <ClientOnly>
    <Motion
      class="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[60] origin-left"
      :style="{ transform: `scaleX(${progress})` }"
    />
  </ClientOnly>
</template>

<script setup>
import { Motion } from '@motionone/vue'
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

const update = () => {
  const scrollTop = window.scrollY
  const height = document.documentElement.scrollHeight - window.innerHeight
  progress.value = height > 0 ? scrollTop / height : 0
}

onMounted(() => {
  window.addEventListener('scroll', update)
})

onUnmounted(() => {
  window.removeEventListener('scroll', update)
})
</script>