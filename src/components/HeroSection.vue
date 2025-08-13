<template>
  <section aria-label="Information about the website"
    class="text-neon desktop:shadow-primary rounded-2xl overflow-hidden">
    <div class="hero-banner relative">
      <picture>
        <source media="(min-width: 1200px)" srcset="/assets/hero_bg_desktop.webp">
        <img class="w-full h-auto border-1 border-dark aspect-[7/16] desktop:aspect-[12/7]"
          src="/assets/hero_bg_mobile.webp" alt="">
      </picture>
      <h1 class="absolute top-0 left-1/2 w-3/4 -translate-x-1/2 ">Łukasz Cena -
        developer
        with a
        mission
      </h1>
      <p
        class="absolute right-[20px] bottom-[35px] max-w-full w-3/5 desktop:max-w-[500px] text-[24px] desktop:text-[42px]">
        Hey, thanks
        for
        paying me a visit! I'm Łukasz,
        a
        front-end
        developer from Poland.</p>
    </div>
  </section>

</template>
<style scoped>
h1 {
  font-family: Changa, Lato, sans-serif;
  font-weight: 700;
  text-shadow: 0px 0px 25px var(--color-neon-blue);
}
</style>
