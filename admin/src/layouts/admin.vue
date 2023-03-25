<template>
  <div class="flex min-h-screen">
    <AdminLayoutSideMenu />
    <div class="header-main-container">
      <AdminHeader />
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.header-main-container {
  @apply flex flex-col w-full;
}

main {
  @apply flex flex-col bg-main-bg p-2 h-full;
  padding: 10px;
  gap: 30px;
}
</style>
