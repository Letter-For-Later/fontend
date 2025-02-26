<template>
  <div class="flex flex-col w-full h-screen py-6">
    <header class="flex justify-between items-center px-4">
      <BackButton />
      <div class="text-xl font-bold">보낸 편지</div>
      <CancelButton />
    </header>
    <form class="flex-grow overflow-hidden flex flex-col px-6">
      <div class="flex items-center py-6">
        <p class="text-warm-gray font-ridibatang">2025/02/22 아침 시영님께 보낸 편지입니다.</p>
      </div>
      <div class="font-ridibatang w-full flex-grow overflow-auto text-sm mb-6">
        시영아, 요즘 취업 준비 때문에 많이 힘들지? 매일 밤늦게까지 서류 준비하고, 면접 준비하며
        지치는 기분도 이해해. 그럴 때마다 내가 네 옆에 있다는 걸 잊지 말았으면 좋겠어. 너는 언제나
        최선을 다해왔고, 그 모습에 나는 정말 자랑스러워. 힘든 과정 속 너는 확실히 빛날 거야. 짧은
        시간 안에 결과가 나오지 않을 수도 있지만, 그 모든 시간이 결국 너를 더욱 강하게 만들 거니까.
        잠깐의 지침이 아닌, 그 과정이 너를 성장시키는 거야. 언제든 기운이빠지면 나에게 기대도 돼.
        내가 늘 응원하고 있다는 거 잊지 마! 화이팅!"
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
