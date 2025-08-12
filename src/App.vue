<script setup lang="ts">
import HeroSection from './components/HeroSection.vue';
import Navbar from './components/Navbar.vue';


</script>

<template>
  <Navbar />
  <main class="flex flex-col gap-10 w-screen desktop:max-w-[1200px] px-4 items-center mx-auto desktop:mt-4">
    <HeroSection />
  </main>
</template>

<style scoped></style>
