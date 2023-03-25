import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'

export default defineNuxtRouteMiddleware((to) => {
  if (/^\/admin\/?$/.test(to.path)) {
    return navigateTo('/admin/dashboard')
  }
})
