<script setup lang="ts">
import './style.css'
import AboutMe from './components/AboutMe.vue';
import ContactMe from './components/ContactMe.vue';
import HeroSection from './components/HeroSection.vue';
import Navbar from './components/Navbar.vue';
import Portfolio from './components/Portfolio.vue';


</script>

<template>
  <Navbar />
  <main
    class="flex flex-col gap-20 w-screen desktop:max-w-[1200px] px-2 desktop:px-4 items-center mx-auto desktop:mt-4 mb-2">
    <HeroSection />
    <AboutMe />
    <Portfolio />
    <ContactMe />
  </main>
</template>

<style scoped></style>
