<script setup lang="ts">
import './style.css'
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutMe from './components/AboutMe.vue';
import Portfolio from './components/Portfolio.vue';
import ContactMe from './components/ContactMe.vue';
</script>

<template>
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
