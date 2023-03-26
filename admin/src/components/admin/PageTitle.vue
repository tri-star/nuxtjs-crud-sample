<script setup lang="ts">
import { reactive } from 'vue'

const props = defineProps<{
  title: string
}>()

const { title } = reactive(props)
</script>

<template>
  <div class="font-pageTitle text-pageTitle">{{ title }}</div>
</template>
