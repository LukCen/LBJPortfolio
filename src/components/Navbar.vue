<script setup lang="ts">
import { useMediaQuery, useThrottleFn } from '@vueuse/core';
import { BookOpenIcon, BriefcaseBusinessIcon, MenuIcon, User2Icon, XIcon } from 'lucide-vue-next';
import { ref } from 'vue';

const menuActive = ref(false)
const throttleClick = useThrottleFn(() => {
  menuActive.value = !menuActive.value
    , 150
})
const isDesktop = useMediaQuery('(min-width: 1200px)') /* breakpoint declared in style.css */
console.log(isDesktop.value)
</script>

<template>
  <nav class="min-h-[50px] w-screen bg-deep-space flex justify-between text-frost-white items-center px-4">
    <span class="text-3xl font-bold">Łukasz Cena</span>
    <button v-if="!isDesktop" class="btn-menu-close w-fit self-end" @click="throttleClick">
      <MenuIcon :size="64" v-if="!menuActive" />
      <XIcon :size="64" v-if="menuActive" />
    </button>
    <!-- desktop -->
    <ul v-if="isDesktop" class="flex gap-10">
      <li>
        <a href="about-me">
          <User2Icon class="nav-icon" />About me
        </a>
      </li>
      <li>
        <a href="experience">
          <BriefcaseBusinessIcon class="nav-icon" /> Experience
        </a>
      </li>
      <li>
        <a href="portfolio">
          <BookOpenIcon class="nav-icon" /> Portfolio
        </a>
      </li>
    </ul>
    <!-- mobile -->
    <aside v-if="menuActive && !isDesktop">
      <ul>
        <li>
          <a href="about-me">
            <User2Icon class="nav-icon" :size="32" />About me
          </a>
        </li>
        <li>
          <a href="experience">
            <BriefcaseBusinessIcon class="nav-icon" :size="32" /> Experience
          </a>
        </li>
        <li>
          <a href="portfolio">
            <BookOpenIcon class="nav-icon" :size="32" /> Portfolio
          </a>
        </li>
      </ul>
    </aside>
  </nav>
</template>
<style scoped>
@reference "../style.css";

nav ul li a {
  @apply flex gap-1 w-full font-medium hover:text-neon duration-150
}

nav ul li:hover .nav-icon {
  @apply animate-wiggle;
}
aside {
  /* top and height offset is calculated based on the icon size */
  @apply absolute flex flex-col w-full h-[calc(100vh-64px)] bg-deep-space-opaque top-[64px] right-0 z-10;
}
aside ul {
  @apply flex flex-col gap-10 p-4 h-full;
}

aside ul li {
  @apply flex justify-end opacity-100;
}
aside ul li a {
  @apply flex justify-between w-1/2 relative right-0 text-[24px] font-medium;
}
</style>
