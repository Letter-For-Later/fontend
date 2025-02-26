<template>
  <div class="flex flex-col w-full h-screen py-6">
    <header class="px-4 w-full flex items-center justify-between">
      <BackButton />
      <div class="text-xl font-bold">임시 편지함</div>
      <CancelButton />
    </header>
    <div class="flex-grow overflow-hidden flex flex-col px-6">
      <div class="h-full py-12 px-4 flex flex-col items-center gap-y-8 overflow-scroll">
        <NuxtLink
          v-for="{ id, receiverName } in list"
          :key="id"
          :to="`/myLetterBox/temporaryLetterList/${id}`"
        >
          <p class="font-pretendard font-semibold underline text-base">
            {{ receiverName }}님께 임시 저장한 편지 ✉️
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
const list = [
  {
    id: '111',
    receiverName: '시영',
  },
  {
    id: '222',
    receiverName: '고은',
  },
  {
    id: '333',
    receiverName: '지윤',
  },
  {
    id: '444',
    receiverName: '성훈',
  },
  {
    id: '111',
    receiverName: '시영',
  },
  {
    id: '222',
    receiverName: '고은',
  },
  {
    id: '333',
    receiverName: '지윤',
  },
  {
    id: '444',
    receiverName: '성훈',
  },
  {
    id: '111',
    receiverName: '시영',
  },
  {
    id: '222',
    receiverName: '고은',
  },
  {
    id: '333',
    receiverName: '지윤',
  },
  {
    id: '444',
    receiverName: '성훈',
  },
  {
    id: '111',
    receiverName: '시영',
  },
  {
    id: '222',
    receiverName: '고은',
  },
  {
    id: '333',
    receiverName: '지윤',
  },
  {
    id: '444',
    receiverName: '성훈',
  },
]
</script>

<style scoped></style>
