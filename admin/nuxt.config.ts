// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: ['@nuxtjs/tailwindcss'],
  imports: {
    autoImport: false,
  },
  typescript: {
    strict: true,
  },
})
