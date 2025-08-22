<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core';
import { projectList } from '../data/projects';
const isDesktop = useMediaQuery('(min-width: 1200px)')
</script>
<template>
  <section id="portfolio" class="w-full flex flex-col p-8 gap-5 shadow-primary bg-medium overflow-hidden rounded-xl">
    <h2 class="section_header text-secondary text-shadow-[0px_0px_5px_var(--color-secondary)] font-bold">Example
      projects</h2>
    <div class="portfolio-items flex flex-col desktop:flex-row gap-10">
      <div aria-label="Portfolio item - WhisperNews"
        class="flex flex-col min-h-fit w-fit p-4 gap-4 bg-dark rounded-xl border-1 border-superlight" href=""
        v-for="item in projectList">
        <img :src="isDesktop ? item.imgDesktop : item.img" alt="Screenshot of the project" loading="lazy">
        <div class="text_content flex flex-col gap-5 h-full">
          <h3 class="text-secondary font-bold text-shadow-[0px_0px_5px_var(--color-secondary)]">{{ item.title }}</h3>
          <p class="description">{{ item.desc }}</p>
        </div>
        <div class="links flex gap-4 desktop:gap-8">
          <a class="px-2 desktop:px-6 py-2 w-1/2  flex justify-center items-center bg-secondary font-bold text-medium hover:shadow-secondary duration-150 rounded-md"
            :href="String(item.url)">Check the repo</a>
          <a class="px-2 desktop:px-6 py-2 w-1/2 flex justify-center items-center bg-primary font-bold text-medium hover:shadow-primary duration-150 rounded-md"
            :href="String(item.repo)">See in
            action</a>
        </div>
      </div>
    </div>
  </section>
</template>
