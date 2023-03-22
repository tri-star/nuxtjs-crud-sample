export default defineNuxtRouteMiddleware((to, from) => {
  if (/^\/admin\/?$/.test(to.path)) {
    return navigateTo('/admin/dashboard')
  }
})
