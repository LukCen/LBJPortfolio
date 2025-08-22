<script setup lang="ts">
import { projectList } from '../data/projects';
</script>
<template>
  <section id="portfolio" class="w-full flex flex-col p-2 gap-5 bg-midnight overflow-hidden rounded-xl">
    <h2 class="text-secondary text-shadow-[0px_0px_5px_var(--color-secondary)] font-bold">Example projects</h2>
    <div class="portfolio-items flex flex-col desktop:flex-row gap-10">
      <div aria-label="Portfolio item - WhisperNews"
        class="flex flex-col min-h-fit w-fit p-4 gap-4 bg-medium rounded-xl shadow-primary" href=""
        v-for="item in projectList">
        <img :src="item.img" alt="Screenshot of the project">
        <div class="text_content flex flex-col gap-5">
          <h3 class="text-secondary font-bold text-shadow-[0px_0px_5px_var(--color-secondary)]">{{ item.title }}</h3>
          <p class="description">{{ item.desc }}</p>
          <div class="links flex gap-10">
            <a class="px-6 py-2 flex justify-center items-center bg-secondary font-bold text-medium hover:shadow-secondary duration-150 rounded-md"
              :href="String(item.url)">Check the repo</a>
            <a class="px-6 py-2 flex justify-center items-center bg-primary font-bold text-medium hover:shadow-primary duration-150 rounded-md"
              :href="String(item.repo)">See in
              action</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
