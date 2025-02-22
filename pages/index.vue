<template>
  <div class="w-full h-full">
    <section class="w-full h-2/3 px-6 flex flex-col justify-center items-center space-y-8">
      <img src="/assets/images/title_mo.png" alt="타이틀 이미지" class="lg:hidden" />
      <img src="/assets/images/title_pc.png" alt="타이틀 이미지" class="hidden lg:block" />
      <div
        class="text-for-white text-center text-sm lg:text-base font-pretendard font-medium space-y-2"
      >
        <p>하루, 일주일 혹은 몇 년 후를 위한 편지를 남겨보세요.</p>
        <p>Latter for Later가 당신의 이야기를 천천히 담아,</p>
        <p>오래 기억될 수 있도록 도와드릴게요.</p>
      </div>
    </section>
    <section class="w-full h-1/3 px-6 flex justify-center items-center">
      <div
        class="w-full h-full border-t border-l border-r border-lovely-red rounded-tl-3xl rounded-tr-3xl"
      >
        <div
          v-if="isLogin"
          class="w-full h-5/6 flex flex-col items-center justify-center space-y-6"
        >
          <button
            class="font-pretendard bg-deep-black border border-for-white w-5/6 h-10 py-2 px-8 rounded-full cursor-pointer"
            @click="goWriteLetterPage"
          >
            <span class="font-pretendard font-bold text-for-white text-sm lg:text-base"
              >나만의 편지 적어보기
            </span>
          </button>
          <button
            class="border border-transparent bg-sweet-red w-5/6 h-10 py-2 px-8 rounded-full cursor-pointer"
          >
            <span class="font-pretendard font-bold text-for-white text-sm lg:text-base"
              >편지함 열어보기</span
            >
          </button>
        </div>
        <div v-else class="w-full h-5/6 flex flex-col items-center justify-center space-y-6">
          <KakaoLoginButton />
          <button
            class="invisible border border-transparent bg-sweet-red w-5/6 h-10 py-2 px-8 rounded-full cursor-pointer"
          >
            <span class="font-pretendard font-bold text-for-white text-sm lg:text-base"
              >편지함 열어보기</span
            >
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const goWriteLetterPage = () => navigateTo('/writeLetter')
// const isLogin = ref(false)
const isLogin = ref(true)
</script>

<style scoped></style>
