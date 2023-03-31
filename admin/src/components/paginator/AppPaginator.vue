<script setup lang="ts">
import AppPaginatorLink from './AppPaginatorLink.vue'

const props = withDefaults(
  defineProps<{
    current: number
    pageCount: number
    linkCount?: number
  }>(),
  {
    linkCount: 5,
  }
)
const { current, pageCount, linkCount } = reactive(props)

const emits = defineEmits(['move'])

const links = computed(() => {
  const half = Math.floor(linkCount / 2)
  const start = Math.max(current - half, 1)
  const end = Math.min(start + linkCount - 1, pageCount)

  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
})

const isActive = (index: number) => {
  return index === current
}

const handlePageNoClick = (page: number) => {
  emits('move', page)
}
</script>

<template>
  <div class="links-container">
    <div>
      <AppPaginatorLink text="<" />
    </div>

    <div class="links">
      <AppPaginatorLink
        v-for="link in links"
        :key="link"
        :text="String(link)"
        :value="String(link)"
        :active="isActive(link)"
        @click="handlePageNoClick"
      />
    </div>

    <div>
      <AppPaginatorLink text=">" />
    </div>
  </div>
</template>

<style scoped>
.links-container {
  display: flex;
}

.links {
  @apply flex
      gap-2
      mx-5 
      flex;
}
</style>
