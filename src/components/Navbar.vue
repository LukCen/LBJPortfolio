<script setup lang="ts">
import { useMediaQuery, useThrottleFn } from '@vueuse/core';
import { BookOpenIcon, Mail, MenuIcon, User2Icon, XIcon } from 'lucide-vue-next';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const menuActive = ref(false)
const throttleClick = useThrottleFn(() => {
  menuActive.value = !menuActive.value
    , 150
})
const isDesktop = useMediaQuery('(min-width: 1200px)') /* breakpoint declared in style.css */


const i18n = useI18n({ useScope: 'global' })
</script>

<template>
  <nav class="min-h-[50px] bg-medium flex sticky top-0 justify-between shadow-[0px_1px_1px_var(--color-primary)] text-light items-center px-4 z-10">
    <span class="text-3xl font-bold">Łukasz Cena</span>
    <button :aria-label="!menuActive ? 'Open main menu' : 'Close main menu'" v-if="!isDesktop" class="btn-menu-close w-fit self-end" @click="throttleClick">
      <MenuIcon :size="64" v-if="!menuActive" />
      <XIcon :size="64" v-if="menuActive" />
    </button>
    <!-- desktop -->
    <ul v-if="isDesktop" class="flex relative right-5 gap-10">
      <li>
        <a href="#about-me">
          <User2Icon class="nav-icon" />{{ i18n.t('navbar.aboutme') }}
        </a>
      </li>
      <li>
        <a href="#portfolio">
          <BookOpenIcon class="nav-icon" />{{ i18n.t('navbar.portfolio') }}
        </a>
      </li>
      <li>
        <a href="#contact">
          <Mail class="nav-icon" />{{ i18n.t('navbar.contact') }}
        </a>
      </li>
      <li>
        <select class="" v-model="i18n.locale.value">
          <option class="capitalize text-dark" :key="value" v-for="value in i18n.availableLocales" :value="value">{{ value.toUpperCase() }}</option>
        </select>
      </li>
    </ul>
    <!-- mobile -->
    <aside v-if="menuActive && !isDesktop">
      <ul>
        <li>
          <a href="#about-me" @click="menuActive = false">
            <User2Icon class="nav-icon" :size="32" />{{ i18n.t('navbar.aboutme') }}
          </a>
        </li>
        <li>
          <a href="#portfolio" @click="menuActive = false">
            <BookOpenIcon class="nav-icon" :size="32" /> {{ i18n.t('navbar.portfolio') }}
          </a>
        </li>
        <li><a href="#contact">
            <Mail class="nav-icon" /> {{ i18n.t('navbar.contact') }}
          </a></li>
      </ul>
    </aside>
  </nav>
</template>
<style scoped>
@reference "../style.css";

nav ul li a {
  @apply flex gap-1 w-full font-medium hover:text-secondary duration-150
}

nav ul li:hover .nav-icon {
  @apply animate-wiggle;
}
aside {
  /* top and height offset is calculated based on the icon size */
  @apply absolute flex flex-col w-full h-[calc(100vh-64px)] bg-medium top-[64px] right-0 z-10;
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
