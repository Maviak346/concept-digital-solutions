<template>
  <span ref="el">
    {{ prefix }}{{ display.toLocaleString() }}{{ suffix }}
  </span>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  value: { type: Number, required: true },
  duration: { type: Number, default: 2000 },
  prefix: { type: String, default: '' },
  suffix: { type: String, default: '' }
})

const display = ref(0)
const el = ref(null)

onMounted(() => {
  let start = 0
  const increment = props.value / (props.duration / 16)

  const counter = setInterval(() => {
    start += increment
    if (start >= props.value) {
      start = props.value
      clearInterval(counter)
    }
    display.value = Math.floor(start)
  }, 16)
})
</script>