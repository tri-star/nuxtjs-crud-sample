<script setup lang="ts">
import { reactive } from 'vue'

const bgColors = {
  transparent: 'bg-transparent-main',
} as const

const hoverColors = {
  transparent: 'hover:bg-transparent-hover',
} as const

const textColors = {
  transparent: 'text-transparent-on',
} as const

const icons = ['add'] as const

const props = withDefaults(
  defineProps<{
    text: string
    color?: keyof typeof bgColors
    icon?: keyof typeof icons
  }>(),
  {
    text: '',
    color: 'transparent',
    icon: undefined,
  }
)

const { text, color, icon } = reactive(props)
</script>

<template>
  <button
    :class="['button', bgColors[color], textColors[color], hoverColors[color]]"
  >
    <span v-if="icon" class="material-icons">{{ icon }}</span>
    <span>{{ text }}</span>
  </button>
</template>

<style scoped>
.button {
  @apply px-4 py-1 rounded-xs flex justify-evenly;
  gap: 5px;
  transition: all 0.2s ease-in-out;
}

.button .material-icons {
  font-size: 24px;
}

.button:active {
  transform: translateY(1px);
  box-shadow: inset 0px 2px rgba(0, 0, 0, 0.25);
}
</style>
