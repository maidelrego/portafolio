<template>
  <div class="grid grid-nogutter mt-8">
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
      <section>
        <span class="text-2xl text-primary font-bold mb-3">HEY! I AM</span>
        <div class="block text-6xl font-bold mb-1">Maydel Rego !</div>
        <TypeWriter :data="['Fullstack Developer.', 'Frontend Developer.', 'Backend Developer.']" />
        <p class="mt-0 mb-4 text-700 line-height-3">Full Stack Web Developer and effective team player that exceeds client
          and customer expectations in performance based environments. Very passionate about developing apps, with a focus
          on mobile-first design and development. Excited to leverage skills in the future as part of a fast-paced,
          quality-driven team in order to build better experiences on the web.</p>
        <Button label="Resume" type="button" class="mr-3 p-button-raised"></Button>
      </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden">
      <img :src="me" alt="Image" class="md:ml-auto block md:h-full meImg"
        style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
    </div>
  </div>

  <!-- <div class="grid">
    <div class="col-6">
      <div class="intro mt-8">
        <span class="subheader">Hello! I am</span>
        <h1 class="name">Maydel Rego !</h1>
      </div>
    </div>
    <div class="col-6">
      
    </div>
  </div> -->
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import me from '@/assets/images/me.jpg'
import TypeWriter from '@/components/TypeWriter.vue';
</script>

<style scoped>
.meImg {
  width: 85%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.subheader {
  font-size: 1.5rem;
  font-weight: 400;
  color: #7aa9dd;
  text-transform: uppercase;
}

.name {
  font-size: 4rem;
  color: #222222;
  font-family: "Poppins", sans-serif;
  color: #222222;
  font-weight: 800;
  line-height: 1.5;
}</style>