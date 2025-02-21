// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: ['@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      kakaoRestApiKey: process.env.KAKAO_REST_API_KEY,
      kakaoRedirectUrl: process.env.KAKAO_REDIRECT_URL,
    },
  },
})
