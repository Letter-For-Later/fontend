<template>
  <div class="flex flex-col w-full h-screen py-6">
    <header class="flex justify-between items-center px-4">
      <BackButton />
      <div class="text-xl font-bold">임시 편지</div>
      <CancelButton />
    </header>
    <form class="flex-grow overflow-hidden flex flex-col px-6">
      <div class="flex items-center relative">
        <label for="sender" class="cursor-pointer absolute inset-y-0 left-0 flex items-center">
          <div class="flex items-center gap-x-3">
            <span class="font-ridibatang">보내는사람:</span>
          </div>
        </label>
        <input
          id="sender"
          value="단비"
          type="text"
          class="font-ridibatang cursor-pointer h-10 w-full ml-2 pl-20 pr-6 focus:outline-none"
        />
      </div>
      <div class="font-ridibatang w-full flex-grow overflow-auto text-sm my-6 leading-relaxed">
        시영아, 요즘 취업 준비 때문에 많이 힘들지? 매일 밤늦게까지 서류 준비하고, 면접 준비하며
        지치는 기분도 이해해. 그럴 때마다 내가 네 옆에 있다는 걸 잊지 말았으면 좋겠어. 너는 언제나
        최선을 다해왔고, 그 모습에 나는 정말 자랑스러워. 힘든 과정 속 너는 확실히 빛날 거야. 짧은
        시간 안에 결과가 나오지 않을 수도 있지만, 그 모든 시간이 결국 너를 더욱 강하게 만들 거니까.
        잠깐의 지침이 아닌, 그 과정이 너를 성장시키는 거야. 언제든 기운이빠지면 나에게 기대도 돼.
        내가 늘 응원하고 있다는 거 잊지 마! 화이팅!" 시영아, 요즘 취업 준비 때문에 많이 힘들지? 매일
        밤늦게까지 서류 준비하고, 면접 준비하며 지치는 기분도 이해해. 그럴 때마다 내가 네 옆에
        있다는 걸 잊지 말았으면 좋겠어. 너는 언제나 최선을 다해왔고, 그 모습에 나는 정말 자랑스러워.
        힘든 과정 속 너는 확실히 빛날 거야. 짧은 시간 안에 결과가 나오지 않을 수도 있지만, 그 모든
        시간이 결국 너를 더욱 강하게 만들 거니까. 잠깐의 지침이 아닌, 그 과정이 너를 성장시키는
        거야. 언제든 기운이빠지면 나에게 기대도 돼. 내가 늘 응원하고 있다는 거 잊지 마! 화이팅!
      </div>
      <div class="w-full flex flex-col items-center">
        <button
          type="button"
          class="font-pretendard bg-chill-gray border border-chill-gray w-full h-10 py-2 px-8 rounded-full cursor-pointer hover:bg-lovely-red hover:border-lovely-red transition"
          @click="cancelReserveLetter"
        >
          <span class="font-pretendard font-bold text-warm-gray text-sm lg:text-base"
            >편지 마저 적어보기
          </span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const cancelReserveLetter = () => {}
</script>

<style scoped></style>
