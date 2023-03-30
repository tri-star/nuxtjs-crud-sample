<script setup lang="ts">
import { reactive } from 'vue'

const props = defineProps<{
  icon: string
}>()

const { icon } = reactive(props)
</script>

<template>
  <div>
    <NuxtLink class="link" href="#">
      <span class="material-icons">{{ icon }}</span>
    </NuxtLink>
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
  position: relative;
}

.link:hover {
  /* background-color: rgba(255, 255, 255, 0.2); */
}

.link:hover::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  animation: hover-effect 0.4s ease forwards;
  backdrop-filter: blur(10px);
}

@keyframes hover-effect {
  from {
    width: 0;
    height: 0;
  }
  to {
    width: 40px;
    height: 40px;
    opacity: 1;
  }
}

span {
  transform: translateY(-2px);
  @apply drop-shadow-md text-header-on;
  font-size: 32px;
  width: 32px;
  height: 32px;
}
</style>
