<script setup lang="ts">
import iconVue from "/icons/vue-js.svg"
import iconVite from "/icons/vite.svg"
import iconTypescript from "/icons/typescript.svg"
import iconTailwind from "/icons/tailwindcss.svg"
import iconNode from "/icons/nodejs.svg"
import iconVercel from "/icons/vercel-icon-dark.svg"
import iconGithub from "/icons/github.svg"
import iconFigma from "/icons/figma.svg"


const stack = [
  { name: 'Vue.js', url: 'https://vuejs.org', img: iconVue },
  { name: 'Vite', url: 'https://vite.dev', img: iconVite },
  { name: 'Typescript', url: 'https://typescriptlang.org', img: iconTypescript },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com', img: iconTailwind },
  { name: 'Node.js', url: 'https://nodejs.org', img: iconNode },
  { name: 'Vercel', url: 'https://vercel.com', img: iconVercel },
  { name: 'GitHub', url: 'https://github.com', img: iconGithub },
  { name: 'Figma', url: 'https://figma.com', img: iconFigma }
]



</script>
<template>
  <section id="about-me" class="bg-medium shadow-primary rounded-xl p-8 text-light" aria-label="About me">
    <h2 class="section_header text-secondary text-shadow-[0px_0px_5px_var(--color-secondary)] font-bold">{{ $t('aboutme.header') }}</h2>
    <div class="content flex flex-col gap-4">
      <p>{{ $t('aboutme.contents') }}</p>
      <div class="tech-stack flex flex-col gap-10">
        <h3 class="font-semibold">Tech stack :</h3>
        <ul class="grid grid-cols-2 grid-rows-2 desktop:grid-cols-4 desktop:grid-rows-1 gap-4 desktop:gap-8 w-full justify-around">
          <li v-for="item in stack">
            <a target="_blank" :href="item.url">
              <img width="48" :src="item.img" alt="" loading="eager">
              <h4>{{ item.name }}</h4>
            </a>
          </li>
        </ul>
        <small class="mx-auto">Icons from: <a class="text-secondary font-medium hover:underline" href="https://www.icons8.com">Icons8.com</a></small>
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
