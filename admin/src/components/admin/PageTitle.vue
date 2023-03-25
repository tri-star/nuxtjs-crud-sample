<script setup lang="ts">
import { reactive } from 'vue'

const { title } = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="font-pageTitle text-pageTitle">{{ title }}</div>
</template>
