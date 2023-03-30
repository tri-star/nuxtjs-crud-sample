<script setup lang="ts">
import { reactive } from 'vue'

const bgColors = {
  primary: 'bg-primary-main',
} as const

const textColors = {
  primary: 'text-primary-on',
} as const

type Icons = 'add'

const props = withDefaults(
  defineProps<{
    text: string
    color: keyof typeof bgColors
    icon?: Icons
  }>(),
  {
    text: '',
    color: 'primary',
    icon: undefined,
  }
)

const { text, color, icon } = reactive(props)
</script>

<template>
  <button :class="['button', bgColors[color], textColors[color]]">
    <span v-if="icon" class="material-icons">{{ icon }}</span>
    <span>{{ text }}</span>
  </button>
</template>

<style scoped>
.button {
  @apply flex px-4 py-2 border-primary-buttonBorder rounded-xs justify-evenly;
  gap: 5px;
  box-shadow: theme('boxShadow.default');
  border-width: 1px;
  transform: translateY(-2px);
  transition: all 0.2s ease-in-out;
}

.button .material-icons {
  font-size: 24px;
}

.button:hover {
  background-color: color-mix(in srgb, theme('colors.primary.main'), white 8%);
  color: color-mix(in srgb, theme('colors.primary.on'), white 8%);
}

.button:active {
  transform: translateY(0px);
  box-shadow: none;
}
</style>
