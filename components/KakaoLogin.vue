<template>
  <button
    class="border border-transparent flex justify-center items-center gap-x-2 bg-kakao-yellow w-5/6 h-10 py-2 px-8 rounded-full cursor-pointer"
    @click="loginWithKakao"
  >
    <img src="/assets/images/mo_kakao_icon.png" alt="카카오 아이콘" />
    <span class="font-pretendard font-bold text-kakao-brown text-sm lg:text-base"
      >카카오로 간편하게 시작하기</span
    >
  </button>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const KAKAO_REST_API_KEY = config.public.kakaoRestApiKey
const KAKAO_REDIRECT_URL = config.public.kakaoRedirectUrl
const loginWithKakao = async () => {
  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`
  navigateTo(kakaoAuthUrl, { external: true })
}
</script>

<style scoped></style>
