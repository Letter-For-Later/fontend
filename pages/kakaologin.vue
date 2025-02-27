<template>
  <div>
    <h2>카카오 로그인 성공 페이지</h2>
  </div>
</template>

<script setup lang="ts">
// 현재 URL에서 인가 코드 가져오기
const route = useRoute()
// const router = useRouter()
const code = route.query.code as string // 카카오에서 보낸 인가 코드
const config = useRuntimeConfig()
const BASE_URL = config.public.baseUrl
// const KAKAO_REDIRECT_URL = config.public.kakaoRedirectUrl

const getTokenWithKakao = async (code: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/users/login/oauth/kakao?code=${code}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log('response: ', response)
    // router.replace('/')
  } catch (error) {
    console.error(error)
  }
}
onMounted(() => {
  if (code) {
    console.log('✅ 카카오 로그인 성공, 인가 코드:', code)
    getTokenWithKakao(code)
  }
})
</script>

<style scoped></style>
