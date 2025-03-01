<template>
  <div class="flex flex-col w-full h-screen py-6">
    <header class="px-4 w-full flex items-center justify-between">
      <BackButton />
      <div class="text-xl font-bold">예약 편지함</div>
      <CancelButton />
    </header>
    <div class="flex-grow overflow-hidden flex flex-col px-6">
      <div class="h-full py-12 px-4 flex flex-col items-center gap-y-8 overflow-scroll">
        <NuxtLink
          v-for="{ letterId, date, name, timeStatus } in letterList"
          :key="letterId"
          :to="`/myLetterBox/reservedLetterList/${letterId}`"
        >
          <p class="font-pretendard font-semibold underline text-base">
            {{ date }}
            {{ timeStatus === 'MORNING' ? '아침' : timeStatus === 'LUNCH' ? '점심' : '저녁' }}
            {{ name }}님께 보낼 편지 ✉️
          </p>
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

const letterList = ref()
const data = await useApi('api/letters/reserved', 'GET')
letterList.value = data.result.letters
</script>

<style scoped></style>
