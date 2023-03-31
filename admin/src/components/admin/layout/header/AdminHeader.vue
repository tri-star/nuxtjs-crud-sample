<script setup lang="ts">
import HeaderIcon from './HeaderIcon.vue'
import AppSpacer from '~~/src/components/AppSpacer.vue'
</script>

<template>
  <header class="flex">
    <AppSpacer />
    <div class="menu-area">
      <HeaderIcon icon="notifications" />
      <HeaderIcon icon="account_circle" />
    </div>
  </header>
</template>

<style scoped>
header {
  @apply text-header-on w-full drop-shadow-md;
  background-color: theme('colors.header.main');
  backdrop-filter: blur(10px);
  height: theme('header.height');
}

.menu-area {
  @apply flex items-center justify-evenly;
  padding: 10px;
}
</style>
