<template>
  <div class="flex flex-col w-full h-screen py-6">
    <header class="px-4 w-full flex items-center justify-between">
      <BackButton />
      <div class="text-xl font-bold">편지함 📮</div>
      <div class="size-8 invisible"></div>
    </header>
    <div class="flex-grow overflow-hidden flex flex-col px-6 space-y-4">
      <div class="h-full py-6 px-4 flex flex-col justify-around">
        <NuxtLink
          :to="`/myLetterBox/${list[0].link}`"
          class="opacity-0"
          :class="`animate-slideLeftFirst`"
        >
          <div class="flex items-center gap-x-2">
            <span class="font-pretendard font-bold text-base">{{ list[0].name }}</span>
            <img src="/assets/images/mo_right_icon.png" alt="이동 아이콘" />
          </div>
          <div class="text-gray-400">{{ list[0].info }}</div>
        </NuxtLink>
        <NuxtLink
          :to="`/myLetterBox/${list[1].link}`"
          class="opacity-0"
          :class="`animate-slideLeftSecond`"
        >
          <div class="flex items-center gap-x-2">
            <span class="font-pretendard font-bold text-base">{{ list[1].name }}</span>
            <img src="/assets/images/mo_right_icon.png" alt="이동 아이콘" />
          </div>
          <div class="text-gray-400">{{ list[1].info }}</div>
        </NuxtLink>
        <NuxtLink
          :to="`/myLetterBox/${list[2].link}`"
          class="opacity-0"
          :class="`animate-slideLeftThird`"
        >
          <div class="flex items-center gap-x-2">
            <span class="font-pretendard font-bold text-base">{{ list[2].name }}</span>
            <img src="/assets/images/mo_right_icon.png" alt="이동 아이콘" />
          </div>
          <div class="text-gray-400">{{ list[2].info }}</div>
        </NuxtLink>
        <NuxtLink
          :to="`/myLetterBox/${list[3].link}`"
          class="opacity-0"
          :class="`animate-slideLeftFourth`"
        >
          <div class="flex items-center gap-x-2">
            <span class="font-pretendard font-bold text-base">{{ list[3].name }}</span>
            <img src="/assets/images/mo_right_icon.png" alt="이동 아이콘" />
          </div>
          <div class="text-gray-400">{{ list[3].info }}</div>
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

const result = await useApi('api/letters/summary', 'GET')
console.log('new result: ', result)

const list = [
  {
    name: '예약 편지함',
    link: 'reservedLetterList',
    info: '대기중인 편지 1건이 있습니다.',
    order: 'First',
  },
  {
    name: '보낸 편지함',
    link: 'sendedLetterList',
    info: '발송 완료된 편지 2건이 있습니다.',
    order: 'Second',
  },
  {
    name: '받은 편지함',
    link: 'receivedLetterList',
    info: '받은 편지가 3건이 있습니다.',
    order: 'Third',
  },
  {
    name: '임시 편지함',
    link: 'temporaryLetterList',
    info: '임시 저장된 편지 4건이 있습니다.',
    order: 'Fourth',
  },
]
</script>

<style scoped></style>
