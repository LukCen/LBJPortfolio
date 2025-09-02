<template>
  <section id="about-me" class="w-full bg-medium shadow-primary rounded-xl p-8 text-light" aria-label="About me">
    <h2 class="section_header text-secondary text-shadow-[0px_0px_5px_var(--color-secondary)] font-bold">About me</h2>
    <div class="content flex flex-col gap-4">
      <p>I specialize in front-end develoment of websites and web apps, focusing on delivering elegant, scalable and
        performant designs, fully compliant with modern web development practices. I'm always eager to learn new tools
        and concepts, from programming to prototyping, and I'm always looking for ways to write better, cleaner code
        that is
        easier to maintain and extend.</p>
      <div class="tech-stack flex flex-col gap-10">
        <h3 class="font-semibold">My tech stack :</h3>
        <ul class="grid grid-cols-2 grid-rows-2 desktop:grid-cols-4 desktop:grid-rows-1 gap-5 w-full justify-around">
          <li><a target="_blank" href="https://vuejs.org/">
              <img width="48" src="/icons/vue-js.svg" alt="Vue.js official logo" loading="eager">
              <h4>Vue.js</h4>
              <span>Front-end implementation</span>
            </a>
          </li>
          <li><a target="_blank" href="https://vite.dev/">
              <img width="48" src="/icons/vite.svg" alt="Vite official logo" loading="eager">
              <h4>Vite</h4>
              <span>Build tool & bundler</span>
            </a></li>
          <li><a target="_blank" href="https://www.typescriptlang.org/">
              <img width="48" src="/icons/typescript.svg" alt="TypeScript official logo" loading="eager">
              <h4>TypeScript</h4>
              <span>Type checking and error prevention</span>
            </a></li>
          <li><a target="_blank" href="https://tailwindcss.com/">
              <img width="48" src="/icons/tailwindcss.svg" alt="Tailwind official logo" loading="eager">
              <h4>Tailwind CSS</h4>
              <span>Quick and modular CSS styling</span>
            </a></li>
        </ul>
        <h3 class="font-semibold">Additional tools :</h3>
        <ul class="grid grid-cols-2 grid-rows-2 desktop:grid-cols-4 desktop:grid-rows-1 gap-5 w-full justify-around">
          <li>
            <a target="_blank" href="https://nodejs.org/">
              <img src="/icons/nodejs.svg" width="48" alt="Node.js official logo" loading="eager">
              <h4>Node.js</h4>
              <span>Backend integrations and features</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://vercel.com">
              <img width="48" src="/icons/vercel.webp" alt="Vercel official logo" loading="eager">
              <h4>Vercel</h4>
              <span>Hosting and deployment</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com">
              <img width="48" src="/icons/github.svg" alt="" loading="eager">
              <h4>GitHub</h4>
              <span>Version control</span>
            </a>
          </li>
          <li>
            <a href="https://www.figma.com/">
              <img width="48" src="/icons/figma.svg" alt="Figma official logo">
              <h4>Figma</h4>
              <span>Prototyping and basic asset editing</span>
            </a>
          </li>
        </ul>
        <small>Icons from: <a class="text-primary font-medium hover:underline"
            href="https://www.icons8.com">Icons8.com</a></small>
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
