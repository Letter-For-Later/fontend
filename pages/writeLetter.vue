<template>
  <div class="py-4 px-2 flex flex-col h-screen">
    <header class="flex justify-between items-center bg-white h-10">
      <button>
        <img src="/assets/images/left_back_icon.png" alt="뒤로가기 아이콘" />
      </button>
      <button>
        <img src="/assets/images/mo_close_icon.png" alt="취소 아이콘" />
      </button>
    </header>
    <form class="bg-red-500 flex-grow overflow-hidden flex flex-col">
      <input type="text" />
      <textarea class="w-full flex-grow resize-none overflow-auto" />
      <div>
        <button class="text-white">전송하기</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
