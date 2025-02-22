<template>
  <button class="size-8 cursor-pointer">
    <img src="/assets/images/left_back_icon.png" alt="뒤로가기 아이콘" @click="goBack" />
  </button>
</template>

<script setup lang="ts">
const router = useRouter()
const goBack = () => {
  router.back()
}
</script>

<style scoped></style>
