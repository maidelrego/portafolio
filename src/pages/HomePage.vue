<template>
    <div id="home" class="grid grid-nogutter mt-8">
      <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
          <span class="text-2xl text-primary font-bold mb-3">HEY! I AM</span>
          <div class="block text-6xl font-bold mb-1">Maydel Rego</div>
          <TypeWriter :data="['Fullstack Developer.', 'Frontend Developer.', 'Backend Developer.']" />
          <p class="mt-0 mb-4 text-700 line-height-3">Full Stack Web Developer and effective team player that exceeds
            client
            and customer expectations in performance based environments. Very passionate about developing apps, with a
            focus
            on mobile-first design and development. Excited to leverage skills in the future as part of a fast-paced,
            quality-driven team in order to build better experiences on the web.</p>
            <font-awesome-icon class="socialMediaIcons mr-3" icon="fa-brands fa-linkedin" style="color: #0077b5" />
            <font-awesome-icon class="socialMediaIcons" icon="fa-brands fa-github" style="color: #222222"/>
        </section>
      </div>
      <div class="col-12 md:col-6">
        <img :src="me" alt="Image" class="md:ml-auto block md:h-30rem lg:h-full meImg"
          style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
      </div>
    </div>
</template>

<script setup lang="ts">
import me from '@/assets/images/me.jpg'
import TypeWriter from '@/components/TypeWriter.vue';
</script>

<style scoped>
.meImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.socialMediaIcons {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>