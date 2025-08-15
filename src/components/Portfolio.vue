<template>
  <section id="portfolio" class="w-full flex flex-col p-2 gap-5 bg-midnight shadow-primary overflow-hidden rounded-xl">
    <h2 class="text-secondary text-shadow-[0px_0px_20px_var(--color-secondary)] font-bold">Example projects</h2>
    <div aria-label="Portfolio item - WhisperNews" class="flex flex-col min-h-fit w-fit p-4 gap-4 bg-medium rounded-xl"
      href="">
      <img src="/assets/whispernews_desktop.webp" alt="Screenshot of the project">
      <div class="text_content flex flex-col gap-5">
        <h3 class="text-secondary font-bold text-shadow-[0px_0px_5px_var(--color-secondary)]">WhisperNews</h3>
        <p class="description">An example main page for a news website, based on a FrontendMentor challenge. I expanded
          it by adding a footer and additional content section, so it looks more filled.</p>
        <div class="links flex gap-10">
          <a class="px-6 py-2 flex justify-center items-center bg-secondary font-bold text-medium hover:shadow-secondary duration-150 rounded-md"
            href="https://github.com/LukCen/WhisperNews">Check the repo</a>
          <a class="px-6 py-2 flex justify-center items-center bg-primary font-bold text-medium hover:shadow-primary duration-150 rounded-md"
            href="https://whispernews-six.vercel.app/">See in
            action</a>
        </div>
      </div>
    </div>
  </section>
</template>
