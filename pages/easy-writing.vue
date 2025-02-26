<template>
  <div class="flex flex-col w-full h-screen py-6 bg-deep-black text-for-white">
    <header class="flex justify-between items-center px-4">
      <BackButton @click="goBack" />
      <h1 class="text-xl font-bold">편지 쉽게 쓰기</h1>
      <div class="w-8"></div>
    </header>
    <form class="flex-grow overflow-hidden flex flex-col px-6 space-y-4">
      <div v-for="(prompt, index) in writingPrompts" :key="index" class="space-y-2">
        <h2 class="font-bold text-for-white">{{ prompt.question }}</h2>
        <textarea
          v-model="prompt.answer"
          class="w-full h-24 p-2 border border-for-white rounded resize-none focus:outline-none focus:ring-2 focus:ring-lovely-red bg-deep-black text-for-white placeholder-gray-500"
          :placeholder="prompt.placeholder"
        ></textarea>
      </div>
      <div class="w-full flex flex-col items-center space-y-4">
        <button
          type="button"
          @click="generateLetter"
          class="font-pretendard bg-deep-black border border-for-white w-full h-10 py-2 px-8 rounded-full cursor-pointer hover:bg-lovely-red hover:border-lovely-red transition"
        >
          <span class="font-pretendard font-bold text-for-white text-sm lg:text-base">
            편지 생성하기
          </span>
        </button>
      </div>
    </form>
    <div v-if="generatedLetter" class="mt-6 p-4 border border-for-white rounded-lg shadow text-for-white">
      <h2 class="font-bold mb-2">생성된 편지</h2>
      <p>{{ generatedLetter }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const writingPrompts = ref([
  { question: "어떤 감정을 전하고 싶나요?", answer: "", placeholder: "예: 감사, 사랑, 미안함 등" },
  { question: "특별히 기억에 남는 순간이 있나요?", answer: "", placeholder: "함께 했던 특별한 경험이나 추억" },
  { question: "앞으로의 바람이나 희망은 무엇인가요?", answer: "", placeholder: "상대방에게 바라는 점이나 함께 이루고 싶은 것" },
])

const generatedLetter = ref('')

const goBack = () => {
  router.push('/writeLetter')
}

const generateLetter = async () => {
  // 편지 생성 API 호출 로직
  // 예시: generatedLetter.value = '생성된 편지 내용...'
}
</script>

<style scoped></style>
