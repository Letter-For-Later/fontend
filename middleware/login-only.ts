export default defineNuxtRouteMiddleware(() => {
  const hasCookie = useCookie('accessToken').value
  if (!hasCookie) {
    return navigateTo('/')
  }
})
