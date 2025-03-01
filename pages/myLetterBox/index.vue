<template>
  <div class="flex flex-col w-full h-screen py-6">
    <header class="px-4 w-full flex items-center justify-between">
      <BackButton />
      <div class="text-xl font-bold">편지함 📮</div>
      <div class="size-8 invisible"></div>
    </header>
    <div class="flex-grow overflow-hidden flex flex-col px-6 space-y-4">
      <div class="h-full py-6 px-4 flex flex-col justify-around">
        <NuxtLink to="/myLetterBox/reservedLetterList" class="opacity-0 animate-slideLeftFirst">
          <div class="flex items-center gap-x-2">
            <span class="font-pretendard font-bold text-base">예약 편지함</span>
            <img src="/assets/images/mo_right_icon.png" alt="이동 아이콘" />
          </div>
          <div class="text-gray-400">
            대기중인 편지 {{ letter ? letter.reservedCount : 0 }}건이 있습니다.
          </div>
        </NuxtLink>
        <NuxtLink to="/myLetterBox/sendedLetterList" class="opacity-0 animate-slideLeftSecond">
          <div class="flex items-center gap-x-2">
            <span class="font-pretendard font-bold text-base">보낸 편지함</span>
            <img src="/assets/images/mo_right_icon.png" alt="이동 아이콘" />
          </div>
          <div class="text-gray-400">
            발송 완료된 편지 {{ letter ? letter.sentCount : 0 }}건이 있습니다.
          </div>
        </NuxtLink>
        <NuxtLink to="/myLetterBox/receivedLetterList" class="opacity-0 animate-slideLeftThird">
          <div class="flex items-center gap-x-2">
            <span class="font-pretendard font-bold text-base">받은 편지함</span>
            <img src="/assets/images/mo_right_icon.png" alt="이동 아이콘" />
          </div>
          <div class="text-gray-400">
            받은 편지가 {{ letter ? letter.receivedCount : 0 }}건이 있습니다.
          </div>
        </NuxtLink>
        <NuxtLink
          to="/myLetterBox/temporaryLetterList"
          class="opacity-0"
          :class="`animate-slideLeftFourth`"
        >
          <div class="flex items-center gap-x-2">
            <span class="font-pretendard font-bold text-base">임시 편지함</span>
            <img src="/assets/images/mo_right_icon.png" alt="이동 아이콘" />
          </div>
          <div class="text-gray-400">
            임시 저장된 편지 {{ letter ? letter.draftCount : 0 }}건이 있습니다.
          </div>
        </NuxtLink>
      </div>
      <div class="w-full flex flex-col items-center space-y-4">
        <button
          type="button"
          class="font-pretendard bg-sweet-red border border-sweet-red w-full h-10 py-2 px-8 rounded-full cursor-pointer"
        >
          <span class="font-pretendard font-bold text-for-white text-sm lg:text-base"
            >다른 편지 적어보기
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['login-only'],
})
const letter = ref()
useApi('api/letters/summary', 'GET')
  .then(data => (letter.value = data.result))
  .catch(() => (letter.value = null))
// console.log(test)
// .then(data => (letter.value = data.result))
// .catch(() => (letter.value = null))
</script>

<style scoped></style>
