<template>
  <aside class="flex flex-col w-[280px]">
    <div class="logo-container">
      <h1 class="logo">ADMIN</h1>
      <Spacer />
      <NuxtLink :href="'#'"><span class="material-icons menu-icon">menu</span></NuxtLink>

    </div>
    <div class="bg-sidemenu-bg text-sidemenu-on h-full p-2.5">
      <ul class="flex flex-col gap-2.5">
        <li v-for="menu in menues" class="w-full">
          <NuxtLink class="menu-item" :href="menu.link">
            <span class="material-icons">{{ menu.icon }}</span>
            <p>{{ menu.title }}</p>
          </NuxtLink>
        </li>
      </ul>

    </div>

  </aside>
</template>

<script setup lang="ts">

type MenuItem = {
  name: string,
  icon: string,
  title: string,
  link: string,
}

const menues: MenuItem[] = [
  {
    name: "contracts",
    title: "契約管理",
    icon: "corporate_fare",
    link: "/admin/contracts",
  },
  {
    name: "contracts",
    title: "ユーザー管理",
    icon: "account_box",
    link: "/admin/users",
  }

]

</script>

<style scoped>
.logo-container {
  @apply bg-primary-main text-primary-on flex items-center;
  font-size: theme('fontSize.headerLogo');
  font-weight: theme('fontWeight.headerLogo');
  height: theme('header.height');
  padding: 10px;
}

.menu-icon {
  font-size: theme('fontSize.headerLogo');
}

.menu-item {
  @apply flex gap-2.5 px-3 py-2.5 rounded-sm w-full;
  transition: background-color 0.5s;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
