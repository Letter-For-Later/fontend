<template>
  <div class="flex flex-col w-full h-screen py-6">
    <header class="flex justify-between items-center px-4">
      <BackButton />
      <div class="text-xl font-bold">예약 편지</div>
      <CancelButton />
    </header>
    <form class="flex-grow overflow-hidden flex flex-col px-6">
      <div class="flex items-center py-6">
        <p class="text-warm-gray font-ridibatang">
          {{ letter?.receiver }}님께 발송되는 예약편지입니다.
        </p>
      </div>
      <div class="font-ridibatang w-full flex-grow overflow-auto text-sm my-6 leading-relaxed">
        {{ letter?.content }}
      </div>
      <div class="w-full flex flex-col items-center">
        <button
          type="button"
          class="font-pretendard bg-chill-gray border border-chill-gray w-full h-10 py-2 px-8 rounded-full cursor-pointer hover:bg-lovely-red hover:border-lovely-red transition"
          @click="cancelReserveLetter"
        >
          <span class="font-pretendard font-bold text-warm-gray text-sm lg:text-base"
            >예약 취소하기
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

const route = useRoute()
const letter = ref()
const data = await useApi(`api/letters/reserved/${route.params.id}`, 'GET')
letter.value = data.result

const cancelReserveLetter = () => {
  alert('편지 예약을 취소하였습니다!')
  navigateTo('/')
}
</script>

<style scoped></style>
