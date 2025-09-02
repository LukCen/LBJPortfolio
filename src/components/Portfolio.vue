<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core';
import { projectList } from '../data/projects';
const isDesktop = useMediaQuery('(min-width: 1200px)')
import { register } from 'swiper/element/bundle';
import { ArrowRightCircleIcon, Code2Icon } from 'lucide-vue-next';
register()
</script>

<template>
  <section id="portfolio"
    class="min-h-[600px] desktop:min-h-[900px] w-full flex flex-col p-4 desktop:p-8 gap-2 desktop:gap-5 shadow-primary bg-medium overflow-hidden rounded-xl">
    <h2 class="section_header text-secondary text-shadow-[0px_0px_5px_var(--color-secondary)] font-bold">Example
      projects</h2>
    <swiper-container loop="true" navigation="true">
      <swiper-slide class="flex flex-col gap-4" v-for="item, index in projectList" :key="index"
        aria-label="Project information">
        <img :src="isDesktop ? item.imgDesktop : item.img" alt="Screenshot of the project" loading="lazy">
        <div class="text_content flex flex-col gap-5 h-full">
          <h3 class="text-secondary font-bold text-shadow-[0px_0px_5px_var(--color-secondary)]">{{ item.title }}</h3>
          <p class="description">{{ item.desc }}</p>
        </div>
        <div class="links flex gap-4 desktop:gap-8">
          <a class="px-2 desktop:px-6 py-2 w-1/2 flex gap-2 justify-center items-center bg-secondary font-bold text-medium hover:shadow-secondary duration-150 rounded-md"
            :href="String(item.repo)"><span>Check the repo</span>
            <Code2Icon />
          </a>
          <a class="px-2 desktop:px-6 py-2 w-1/2 flex gap-2 justify-center items-center bg-primary font-bold text-medium hover:shadow-primary duration-150 rounded-md"
            :href="String(item.url)"><span>See in
              action</span>
            <ArrowRightCircleIcon />
          </a>
        </div>
      </swiper-slide>
    </swiper-container>
  </section>
</template>
<style scoped>
swiper-container::part(button-next), swiper-container::part(button-prev) {
  background: var(--color-secondary) !important;
  width: 35px;
  height: 35px;
  padding: 15px;
  border-radius: 50%;
  color: var(--color-dark);
  transition: transform 150ms;
}
swiper-container::part(button-next):hover, swiper-container::part(button-prev):hover {
  transform: scale(110%);
}
</style>
