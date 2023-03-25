<script setup lang="ts">
import { useState } from '#app'
import AppSpacer from '~~/src/components/AppSpacer.vue'

const expanded = useState('expanded', () => true)

const handleToggleClick = () => {
  expanded.value = !expanded.value
}

type MenuItem = {
  name: string
  icon: string
  title: string
  link: string
}

const menues: MenuItem[] = [
  {
    name: 'dashboard',
    title: 'ダッシュボード',
    icon: 'dashboard',
    link: '/admin/dashboard',
  },
  {
    name: 'contracts',
    title: '契約管理',
    icon: 'corporate_fare',
    link: '/admin/contracts',
  },
  {
    name: 'contracts',
    title: 'ユーザー管理',
    icon: 'account_box',
    link: '/admin/users',
  },
]
</script>

<template>
  <aside :class="['side-menu', expanded ? 'w-[280px]' : 'w-[68px]']">
    <div class="logo-container">
      <h1 v-show="expanded" class="logo">ADMIN</h1>
      <AppSpacer v-show="expanded" />
      <a class="toggle flex items-center" @click="handleToggleClick()">
        <span class="material-icons menu-icon">menu</span>
      </a>
    </div>
    <div class="bg-sidemenu-bg text-sidemenu-on h-full p-2.5">
      <ul class="flex flex-col gap-2.5">
        <li v-for="menu in menues" class="w-full">
          <NuxtLink class="menu-item" :href="menu.link">
            <span class="material-icons">{{ menu.icon }}</span>
            <p class="whitespace-nowrap w-full">{{ menu.title }}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.side-menu {
  @apply flex flex-col;
  transition: width 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.logo-container {
  @apply bg-primary-main text-primary-on flex justify-center items-center;
  font-size: theme('fontSize.headerLogo');
  font-weight: theme('fontWeight.headerLogo');
  height: theme('header.height');
  padding: 10px;
}

.toggle {
  cursor: pointer;
}

.menu-icon {
  font-size: theme('fontSize.headerLogo');
}

.menu-item {
  @apply flex gap-2.5 px-3.5 py-2.5 rounded-sm w-full;
  transition: background-color 0.5s ease-out;
  overflow-x: hidden;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
