<script setup lang="ts">
import { reactive } from 'vue'

const { title } = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="font-sectionTitle text-sectionTitle pb-4">{{ title }}</div>
</template>
