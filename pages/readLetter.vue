<template>
  <div class="flex flex-col w-full h-screen py-6">
    <!-- <header class="flex justify-between items-center px-4">
      <BackButton />
      <CancelButton />
    </header> -->
    <form class="flex-grow overflow-hidden flex flex-col px-6 space-y-4">
      <div class="flex items-center relative">
        <label for="sender" class="cursor-pointer absolute inset-y-0 left-0 flex items-center">
          <div class="flex items-center gap-x-1">
            <span class="font-ridibatang">보내는사람:</span>
          </div>
        </label>
        <input
          id="sender"
          v-model="sender"
          type="text"
          class="font-ridibatang cursor-pointer h-10 w-full ml-2 pl-20 pr-6 focus:outline-none"
        />
      </div>
      <textarea
        v-model="contents"
        class="font-ridibatang w-full flex-grow resize-none overflow-auto text-sm placeholder:text-sm focus:outline-none"
      />
      <div class="w-full flex flex-col items-center space-y-4">
        <button
          type="button"
          class="font-pretendard bg-deep-black border border-for-white w-full h-10 py-2 px-8 rounded-full cursor-pointer hover:bg-lovely-red hover:border-lovely-red transition"
          @click="goReserveLetterPage"
        >
          <span class="font-pretendard font-bold text-for-white text-sm lg:text-base"
            >나도 답장 보내기
          </span>
        </button>
        <button
          type="button"
          class="font-pretendard bg-sweet-red border border-transparent w-full h-10 py-2 px-8 rounded-full cursor-pointer"
        >
          <span class="font-pretendard font-bold text-warm-gray text-sm lg:text-base"
            >편지함에 보관하기
          </span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const sender = ref('')
const contents = ref('')
const goReserveLetterPage = () => {
  navigateTo('/reserveLetter')
}
console.log('test')
</script>

<style scoped></style>
