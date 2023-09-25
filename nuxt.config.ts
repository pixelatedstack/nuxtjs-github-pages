// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/nuxtjs-github-pages/',
    buildAssetsDir: '/assets/'
  },
  nitro: {
    output: {
      publicDir: 'docs'
    }
  },
})
