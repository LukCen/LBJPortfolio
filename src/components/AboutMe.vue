<template>
  <section id="about-me" class="w-full bg-medium shadow-primary rounded-xl p-8 text-light" aria-label="About me">
    <h2 class="text-secondary font-bold">About me</h2>
    <div class="content flex flex-col gap-8">
      <p>I specialize in front-end develoment of websites and web apps, focusing on delivering elegant, scalable and
        performant designs, fully compliant with modern web development practices.</p>
      <div class="tech-stack flex flex-col gap-10">
        <h3>Tech stack I work with :</h3>
        <ul class="grid grid-cols-2 grid-rows-2 desktop:grid-cols-4 desktop:grid-rows-1 gap-5 w-full justify-around">
          <li><img width="48" src="/icons/vue-js.svg" alt="Vue.js official logo"><a target="_blank"
              href="https://vuejs.org/">
              <h4>Vue.js</h4>
              <span>Front-end implementation</span>
            </a>
          </li>
          <li><img width="48" src="/icons/vite.svg" alt="Vite official logo"><a target="_blank"
              href="https://vite.dev/">
              <h4>Vite</h4><span>Build tool & bundler</span>
            </a></li>
          <li><img width="48" src="/icons/typescript.svg" alt="TypeScript official logo"><a target="_blank"
              href="https://www.typescriptlang.org/">
              <h4>TypeScript</h4><span>Type checking and error prevention</span>
            </a></li>
          <li><img width="48" src="/icons/tailwindcss.svg" alt="Tailwind official logo"><a target="_blank"
              href="https://tailwindcss.com/">
              <h4>Tailwind CSS</h4>
              <span>Quick and modular CSS styling</span>
            </a></li>
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
  @apply cursor-pointer hover:text-primary duration-150 flex flex-col items-center;
}
.tech-stack li:hover img {
  @apply animate-wiggle;
}
.tech-stack li a {
  @apply w-full block text-center;
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
