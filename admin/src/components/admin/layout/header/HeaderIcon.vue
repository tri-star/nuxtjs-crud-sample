<script setup lang="ts">
import { reactive } from 'vue'

const { icon } = defineProps<{
  icon: string
}>()
</script>

<template>
  <div>
    <!-- <NuxtLink class="link" href="#">
      <span class="material-icons">{{ icon }}</span>
    </NuxtLink> -->
  </div>
</template>

<style scoped>
div {
  padding: 5px;
}

.link {
  @apply block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: background-color 0.5s;
}

.link:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

span {
  @apply drop-shadow-md text-header-on;
  font-size: 32px;
  width: 32px;
  height: 32px;
}
</style>
