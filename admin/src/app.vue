<script setup lang="ts">
import { useHead } from 'unhead'

useHead({
  title: 'Nuxt CRUD example',
  meta: [{ name: 'description', content: 'My amazing site.' }],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
    },
  ],
  bodyAttrs: {},
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
