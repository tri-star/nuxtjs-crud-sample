<script setup lang="ts">
const bgColors = {
  primary: 'bg-primary-main',
} as const

const textColors = {
  primary: 'text-primary-on',
} as const

const icons = ['add'] as const

const { text, color, icon } = withDefaults(
  defineProps<{
    text: string
    color: keyof typeof bgColors
    icon?: keyof typeof icons
  }>(),
  {
    text: '',
    color: 'primary',
    icon: undefined,
  }
)
</script>

<template>
  <button :class="['button', bgColors[color], textColors[color]]">
    <span class="material-icons" v-if="icon">{{ icon }}</span>
    <span>{{ text }}</span>
  </button>
</template>

<style scoped>
.button {
  @apply flex px-4 py-2 border-primary-buttonBorder rounded-xs justify-evenly;
  gap: 5px;
  box-shadow: theme('boxShadow.default');
  border-width: 1px;
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
  transform: translateY(2px);
  box-shadow: none;
}
</style>
