import type { UserInfo } from '~/types/user'

export const useAuthStore = defineStore('auth', () => {
  const authUser = ref<Maybe<UserInfo>>()
  const setUser = (user: Maybe<UserInfo>) => (authUser.value = user)
  const isLogin = computed(() => !!authUser.value)
  return { user: authUser, setUser, isLogin }
})
