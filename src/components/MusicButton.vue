<template>
    <div>
      <!-- 음악 컨트롤 버튼 -->
      <button
        @click="toggleMusic"
        class="fixed right-4 z-50 p-3 rounded-full shadow-lg bg-white hover:bg-gray-100"
        :style="{ transform: `translateY(${buttonY}px)` }"
      >
        <component
          :is="isPlaying ? PauseIcon : PlayIcon"
          class="w-6 h-6 text-gray-700"
        />
      </button>

    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue"
  import { PlayIcon, PauseIcon } from "@heroicons/vue/24/solid"
  
  const isPlaying = ref(false);
  let audio;
    
  const baseY = 30;
  // 버튼 Y좌표 (스크롤 따라가기)
  const buttonY = ref(baseY); // 초기 top=20px
  const targetY = ref(baseY);
  let rafId;
  
  function onScroll() {
    // 스크롤에 따라 목표 위치 업데이트
    const scrollY = window.scrollY;
    const offset = Math.min(scrollY, 200) * 0.5;
    targetY.value = baseY - offset;
  }
  
  // requestAnimationFrame으로 부드럽게 보간
  function animate() {
    buttonY.value += (targetY.value - buttonY.value) * 0.1 // 0.1 = 따라오는 속도
    rafId = requestAnimationFrame(animate)
  }
  
  onMounted(() => {
    audio = new Audio("/wedding/music/bgm.mp3");
    audio.play().then(() => {
        isPlaying.value = true;
    }).catch(() => {
        isPlaying.value = false;
    });
    audio.loop = true;
    window.addEventListener("scroll", onScroll);
    animate();
  })
  
  onUnmounted(() => {
    if (audio) {
      audio.pause()
      audio = null
    }
    window.removeEventListener("scroll", onScroll)
    cancelAnimationFrame(rafId)
  })
  
  function toggleMusic() {
    if (!audio) return
    if (isPlaying.value) {
      audio.pause()
    } else {
      audio.play()
    }
    isPlaying.value = !isPlaying.value
  }
  </script>