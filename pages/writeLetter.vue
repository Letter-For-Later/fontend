<template>
  <div class="flex flex-col w-full h-screen py-6">
    <header class="flex justify-between items-center px-4">
      <BackButton />
      <CancelButton />
    </header>
    <form class="flex-grow overflow-hidden flex flex-col px-6">
      <div class="flex items-center relative">
        <label for="sender" class="cursor-pointer absolute inset-y-0 left-0 flex items-center">
          <div class="flex items-center gap-x-3">
            <span class="font-ridibatang">보내는사람:</span>
            <span v-if="sender === ''" class="animate-pulse h-4 bg-white w-0.5"></span>
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
        placeholder="너무 서두르지 않아도 돼요. 당신의 시간에 맞춰 가세요."
        class="font-ridibatang w-full flex-grow resize-none overflow-auto text-sm placeholder:text-sm focus:outline-none my-6 leading-relaxed"
      />
      <div class="w-full flex flex-col items-center gap-y-4">
        <button
          type="button"
          class="font-pretendard bg-deep-black border border-for-white w-full h-10 py-2 px-8 rounded-full cursor-pointer hover:bg-lovely-red hover:border-lovely-red transition"
          @click="goReserveLetterPage"
        >
          <span class="font-pretendard font-bold text-for-white text-sm lg:text-base"
            >편지에 시간을 담아보기
          </span>
        </button>
        <button
          type="button"
          class="font-pretendard bg-chill-gray border border-transparent w-full h-10 py-2 px-8 rounded-full cursor-pointer"
        >
          <span class="font-pretendard font-bold text-warm-gray text-sm lg:text-base"
            >편지함에 임시 저장하기
          </span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['login-only'],
})

const sender = ref('')
const contents = ref('')
const letterContent = useLetterStore()
const goReserveLetterPage = () => {
  letterContent.setLetterContents(sender.value, contents.value)
  navigateTo('/reserveLetter')
}
</script>

<style scoped></style>
