<template>
  <button class="size-8">
    <img src="/assets/images/mo_close_icon.png" alt="취소 아이콘" @click="goMainPage" />
  </button>
</template>

<script setup lang="ts">
const goMainPage = () => {
  navigateTo('/')
}
</script>

<style scoped></style>
