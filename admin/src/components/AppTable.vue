<template>
  <table>
    <slot />
  </table>
</template>

<style scoped>
:deep(thead th) {
  @apply bg-plain-shade02 border-table-border;
  padding: 10px;
}

:deep(tfoot th) {
  @apply bg-plain-shade02 border-table-border;
  padding: 5px 10px;
}

:deep(thead th):nth-child(1) {
  @apply rounded-tl-sm;
}

:deep(thead th):nth-last-child(1) {
  @apply rounded-tr-sm;
}

:deep(tfoot th):nth-child(1) {
  @apply rounded-bl-sm;
}

:deep(tfoot th):nth-last-child(1) {
  @apply rounded-br-sm;
}

:deep(td) {
  @apply border-b border-table-border bg-main-content-bg;
  padding: 5px;
}
</style>
