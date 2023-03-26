<template>
  <table>
    <slot />
  </table>
</template>

<style scoped>
:deep(th) {
  @apply bg-plain-shade02 border-table-border;
  padding: 10px;
}

:deep(td) {
  @apply border-b border-table-border bg-main-content-bg;
  padding: 5px;
}
</style>
