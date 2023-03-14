<template>
  <div class="navbar text-center">
    <RouterLink class="nav-link nav-link-fade-up" v-for="link in links" :key="link.name" :to="link.path">
      {{ link.name }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router';

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];
</script>

<style scoped></style>