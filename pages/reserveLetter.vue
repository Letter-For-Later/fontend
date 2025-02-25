<template>
  <div class="flex flex-col w-full h-screen py-6">
    <header class="flex justify-between items-center px-4">
      <BackButton />
      <CancelButton />
    </header>
    <form class="w-full h-full overflow-hidden flex flex-col px-6">
      <div class="flex-grow flex flex-col items-center justify-center">
        <div class="flex flex-col items-center relative w-full my-3">
          <div class="text-xl font-bold">누구에게 전하고 싶나요?</div>
          <div class="flex flex-col w-full">
            <input
              id="receiver"
              v-model="receiver"
              type="text"
              class="cursor-pointer w-full h-10 focus:outline-none border border-for-white rounded-lg p-4 mt-4 mb-2"
              placeholder="홍길동"
            />
            <label for="receiver" class="cursor-pointer self-end text-sm"
              >*받는 분의 이름을 입력해 주세요.</label
            >
          </div>
          <div class="flex flex-col w-full">
            <input
              id="phoneNumber"
              v-model="phoneNumber"
              type="text"
              class="cursor-pointer w-full h-10 focus:outline-none border border-for-white rounded-lg p-4 mt-4 mb-2"
              placeholder="01012345678"
            />
            <label for="phoneNumber" class="cursor-pointer self-end text-sm"
              >*연락처는 숫자만 입력해주세요.</label
            >
          </div>
        </div>
        <div class="flex flex-col items-center relative w-full my-3">
          <label for="deliveryDate" class="cursor-pointer text-xl font-bold"
            >언제 편지를 전해드릴까요?
          </label>
          <VueDatePicker
            v-model="deliveryDate"
            :format-locale="ko"
            :dark="true"
            :enable-time-picker="false"
            :disabled-dates="disabledDates"
            auto-apply
            placeholder="MM/DD/YYYY"
          />
          <div class="self-end text-sm">*당일 예약은 어렵습니다.</div>
        </div>
        <div class="flex flex-col items-center relative w-full my-3">
          <div class="cursor-pointer text-xl font-bold">어떤 시간대에 편지를 전해드릴까요?</div>
          <div class="w-full flex items-center justify-between mt-4 mb-2">
            <label
              class="border border-for-white rounded-lg py-2 w-1/4 text-center relative cursor-pointer"
              :class="{ 'bg-sweet-red border-sweet-red': deliveryTime === 'morning' }"
            >
              <input
                v-model="deliveryTime"
                type="radio"
                name="deliveryTime"
                value="morning"
                class="absolute opacity-0 w-0 h-0 m-0"
              />
              아침
            </label>
            <label
              class="border border-for-white rounded-lg py-2 w-1/4 text-center relative cursor-pointer"
              :class="{ 'bg-sweet-red border-sweet-red': deliveryTime === 'noon' }"
            >
              <input
                v-model="deliveryTime"
                type="radio"
                name="deliveryTime"
                value="noon"
                class="absolute opacity-0 w-0 h-0 m-0"
              />
              점심
            </label>
            <label
              class="border border-for-white rounded-lg py-2 w-1/4 text-center relative cursor-pointer"
              :class="{ 'bg-sweet-red border-sweet-red': deliveryTime === 'evening' }"
            >
              <input
                v-model="deliveryTime"
                type="radio"
                name="deliveryTime"
                value="evening"
                class="absolute opacity-0 w-0 h-0 m-0"
              />
              저녁
            </label>
          </div>
          <div class="self-end text-sm">*아침 9시, 점심 1시, 저녁 6시에 발송됩니다</div>
        </div>
      </div>

      <div class="w-full flex flex-col items-center space-y-4">
        <button
          type="button"
          class="font-pretendard bg-deep-black border border-for-white w-full h-10 py-2 px-8 rounded-full cursor-pointer hover:bg-lovely-red hover:border-lovely-red transition"
          @click="sendLetter"
        >
          <span class="font-pretendard font-bold text-for-white text-sm lg:text-base"
            >천천히, 시간을 담아 보내기
          </span>
        </button>
        <button
          type="button"
          class="font-pretendard bg-chill-gray border border-transparent w-full h-10 py-2 px-8 rounded-full cursor-pointer"
        >
          <span class="font-pretendard font-bold text-warm-gray text-sm lg:text-base"
            >편지 봉투에 임시 저장하기
          </span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import { ko } from 'date-fns/locale'

const sendLetter = () => {
  alert('편지를 예약했습니다.')
  navigateTo('/')
}
const receiver = ref(null)
const phoneNumber = ref(null)
const deliveryDate = ref(null)
const deliveryTime = ref('')

const disabledDates = computed(() => {
  const today = new Date()
  today.setHours(23, 59, 59, 999) // 오늘의 마지막 순간까지 포함하도록 설정
  return (date: Date) => date <= today
})
</script>

<style scoped>
.dp__theme_dark {
  --dp-background-color: #0b0b0b;
  --dp-text-color: #ffffff;
  --dp-border-color: #ffffff;
  --dp-menu-border-color: #2d2d2d;
  --dp-border-color-focus: #ffffff;
  --dp-border-color-hover: #ffffff;
  --dp-disabled-color: #737373;
  --dp-disabled-color-text: #d0d0d0;
  --dp-scroll-bar-background: #212121;
  --dp-scroll-bar-color: #484848;
  --dp-icon-color: #959595;
  --dp-tooltip-color: #3e3e3e;
  --dp-range-between-dates-background-color: var(--dp-hover-color, #484848);
  --dp-range-between-dates-text-color: var(--dp-hover-text-color, #fff);
  --dp-range-between-border-color: var(--dp-hover-color, #fff);
  --dp-border-radius: 8px;
  margin: 16px auto 8px;
}
</style>
