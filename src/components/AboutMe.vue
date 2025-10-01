<script setup lang="ts">
import iconVue from "/icons/vue-js.svg"
import iconVite from "/icons/vite.svg"
import iconTypescript from "/icons/typescript.svg"
import iconTailwind from "/icons/tailwindcss.svg"
import iconNode from "/icons/nodejs.svg"
import iconVercel from "/icons/vercel-icon-dark.svg"
import iconGithub from "/icons/github.svg"
import iconFigma from "/icons/figma.svg"




</script>
<template>
  <section id="about-me" class="bg-medium shadow-primary rounded-xl p-8 text-light" aria-label="About me">
    <h2 class="section_header text-secondary text-shadow-[0px_0px_5px_var(--color-secondary)] font-bold">{{ $t('aboutme.header') }}</h2>
    <div class="content flex flex-col gap-4">
      <p>{{ $t('aboutme.contents') }}</p>
      <div class="tech-stack flex flex-col gap-10">
        <h3 class="font-semibold">Tech stack :</h3>
        <ul class="grid grid-cols-2 grid-rows-2 desktop:grid-cols-4 desktop:grid-rows-1 gap-5 w-full justify-around">
          <li><a target="_blank" href="https://vuejs.org/">
              <img width="48" :src="iconVue" alt="Vue.js official logo" loading="eager">
              <h4>Vue.js</h4>

            </a>
          </li>
          <li><a target="_blank" href="https://vite.dev/">
              <img width="48" :src="iconVite" alt="Vite official logo" loading="eager">
              <h4>Vite</h4>

            </a></li>
          <li><a target="_blank" href="https://www.typescriptlang.org/">
              <img width="48" :src="iconTypescript" alt="TypeScript official logo" loading="eager">
              <h4>TypeScript</h4>

            </a></li>
          <li><a target="_blank" href="https://tailwindcss.com/">
              <img width="48" :src="iconTailwind" alt="Tailwind official logo" loading="eager">
              <h4>Tailwind CSS</h4>

            </a></li>
        </ul>
        <h3 class="font-semibold">Additional tools :</h3>
        <ul class="grid grid-cols-2 grid-rows-2 desktop:grid-cols-4 desktop:grid-rows-1 gap-5 w-full justify-around">
          <li>
            <a target="_blank" href="https://nodejs.org/">
              <img :src="iconNode" width="48" alt="Node.js official logo" loading="eager">
              <h4>Node.js</h4>

            </a>
          </li>
          <li>
            <a class="h-full" target="_blank" href="https://vercel.com">
              <img width="48" :src="iconVercel" alt="Vercel official logo" loading="eager">
              <h4>Vercel</h4>

            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com">
              <img width="48" :src="iconGithub" alt="" loading="eager">
              <h4>GitHub</h4>

            </a>
          </li>
          <li>
            <a href="https://www.figma.com/">
              <img width="48" :src="iconFigma" alt="Figma official logo">
              <h4>Figma</h4>

            </a>
          </li>
        </ul>
        <small>Icons from: <a class="text-primary font-medium hover:underline" href="https://www.icons8.com">Icons8.com</a></small>
      </div>
    </div>
  </section>
</template>



<style scoped>
@reference '../style.css';

.tech-stack li {
  @apply cursor-pointer hover:text-secondary duration-150 flex flex-col items-center;
}
.tech-stack li:hover img {
  @apply animate-wiggle;
}
.tech-stack li a {
  @apply w-full flex flex-col items-center text-center;
}
.tech-stack h4 {
  @apply font-semibold text-primary text-shadow-[0px_0px_20px_var(--color-primary)];
}
.tech-stack li:hover h4 {
  @apply text-secondary text-shadow-[0px_0px_20px_var(--color-secondary)];
}

small a {
  font-size: inherit !important;
}
</style>
