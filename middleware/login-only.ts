export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore()
  const { isLogin } = storeToRefs(authStore)

  if (!isLogin.value) {
    return navigateTo('/')
  }
})
