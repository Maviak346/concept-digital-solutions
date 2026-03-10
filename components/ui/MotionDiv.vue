<template>
  <ClientOnly>
    <Motion v-bind="$attrs">
      <slot />
    </Motion>
  </ClientOnly>
</template>

<script setup>
import { Motion } from '@motionone/vue'
</script>