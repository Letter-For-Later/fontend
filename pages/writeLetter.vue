<template>
  <div class="flex flex-col w-full h-screen py-6">
    <header class="flex justify-between items-center px-4">
      <button class="size-8">
        <img src="/assets/images/left_back_icon.png" alt="뒤로가기 아이콘" />
      </button>
      <button class="size-8">
        <img src="/assets/images/mo_close_icon.png" alt="취소 아이콘" />
      </button>
    </header>
    <form class="flex-grow overflow-hidden flex flex-col px-6 space-y-4">
      <div class="flex items-center relative">
        <label for="sender" class="cursor-pointer absolute inset-y-0 left-0 flex items-center">
          <div class="flex items-center gap-x-1">
            <span>보내는사람:</span>
            <span v-if="sender === ''" class="animate-pulse h-4 bg-white w-0.5"></span>
          </div>
        </label>
        <input
          id="sender"
          v-model="sender"
          type="text"
          class="cursor-pointer h-10 w-full pl-20 pr-6 focus:outline-none"
        />
      </div>
      <textarea
        placeholder="너무 서두르지 않아도 돼요. 당신의 시간에 맞춰 가세요."
        class="w-full flex-grow resize-none overflow-auto text-sm placeholder:text-sm focus:outline-none"
      />
      <div class="w-full flex flex-col items-center space-y-4">
        <button
          class="font-pretendard bg-deep-black border border-for-white w-full h-10 py-2 px-8 rounded-full cursor-pointer"
        >
          <span class="font-pretendard font-bold text-for-white text-sm lg:text-base"
            >천천히, 시간을 담아 보내기
          </span>
        </button>
        <button
          class="font-pretendard bg-chill-gray border border-transparent w-full h-10 py-2 px-8 rounded-full cursor-pointer"
        >
          <span class="font-pretendard font-bold text-warm-gray text-sm lg:text-base"
            >편지를 쉽게, 마음은 그대로
          </span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const sender = ref('')
</script>

<style scoped></style>
