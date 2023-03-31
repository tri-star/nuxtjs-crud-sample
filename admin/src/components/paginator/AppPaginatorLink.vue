<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    text: string
    value?: string
    active?: boolean
  }>(),
  {
    value: undefined,
    active: false,
  }
)

const { text, value } = reactive(props)

const emits = defineEmits(['click'])
</script>

<template>
  <NuxtLink class="link" @click="() => emits('click', value)">
    {{ text }}
  </NuxtLink>
</template>

<style scoped>
.link {
  display: inline-block;
  @apply rounded-sm
  bg-plain-main
    text-plain-on
    border border-main-content-border
    px-3
    py-1
    cursor-pointer;

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  transform: translateY(-1px);
  transition: all 0.3s ease;
}

.link:hover {
  @apply bg-plain-main-01;
}

.link:active {
  box-shadow: none;
  transform: translateY(0px);
}
</style>
