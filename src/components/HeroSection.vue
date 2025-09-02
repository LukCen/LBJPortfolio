<script setup lang="ts">
import hero from "/assets/hero-mobile.webp"
import heroTablet from "/assets/hero-tablet.webp"
import heroDesktop from "/assets/hero-desktop.webp"
import hero2k from "/assets/hero-tablet.webp"

</script>

<template>
  <section aria-label="Information about the website"
    class="w-screen min-h-[500px] 2k:min-h-[700px] text-primary overflow-hidden">
    <div class="hero-banner relative">
      <picture>
        <source media="(min-width: 1921px)" :srcset="hero2k" />
        <source media="(min-width: 1201px) and (max-width: 1920px)" :srcset="heroDesktop">
        <source media="(min-width: 650px) and (max-width: 1200px)" :srcset="heroTablet" />
        <img loading="eager" fetchpriority="high" class="w-full h-auto border-1 border-dark" :src="hero" alt="">
      </picture>
      <div
        class="text flex flex-col text-center justify-between absolute bottom-0 h-1/2 tablet:top-0 tablet:h-full tablet:left-0 tablet:w-8/12 tablet:justify-around desktop:h-full desktop:top-0 desktop:left-[100px] desktop:max-w-[800px] px-4 py-4 desktop:py-10 desktop:px-0">
        <h1 class="text-secondary tablet:text-[42px]">Frontend with a passion
        </h1>
        <p class="text-[24px] tablet:text-[22px] desktop:text-[38px]">
          Hey, thanks
          for
          paying me a visit! I'm Łukasz,
          a
          front-end
          developer from Poland.</p>
      </div>
    </div>
  </section>

</template>
<style scoped>
h1 {
  font-family: Changa, Montserrat, sans-serif;
  font-weight: 700;
  text-shadow: 0px 0px 25px var(--color-primary-blue);
}
section {
  box-shadow: 0px 10px 15px -4px var(--color-subtle)
}
</style>
