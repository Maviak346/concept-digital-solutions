<template>
  <ClientOnly>
    <MotionDiv v-bind="$attrs">
      <slot />
    </MotionDiv>
  </ClientOnly>
</template>

<script setup>
import { Motion } from '@motionone/vue'
</script>