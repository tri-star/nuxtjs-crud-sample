<script setup lang="ts">

const { title } = defineProps<{
  title: string
}>()

</script>

<template>
  <div class="font-pageTitle text-pageTitle">{{ title }}</div>
</template>
