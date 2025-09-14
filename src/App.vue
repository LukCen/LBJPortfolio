<script setup lang="ts">
import './style.css'
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutMe from './components/AboutMe.vue';
import Portfolio from './components/Portfolio.vue';
import ContactMe from './components/ContactMe.vue';
</script>

<template>
  <!-- <Navbar />
  <main class="flex flex-col gap-20 w-screen desktop:max-w-[1200px] px-2 desktop:px-4 items-center mx-auto mb-2">
    <HeroSection />
    <AboutMe />
    <Portfolio />
    <ContactMe />
  </main> -->
  <div class="layout">
    <Navbar class="full" />
    <HeroSection class="full" />
    <main class="content flex flex-col gap-10 mt-10">
      <AboutMe />
      <Portfolio />
      <ContactMe />
    </main>
  </div>
</template>
