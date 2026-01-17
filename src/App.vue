<template>
  <div class="bg-gray-100">
    <section class="py-10 md:py-16">
      <div class="container max-w-screen-xl mx-auto px-4">
        <nav class="flex items-center justify-between mb-10">
          <img src="/myLogo.png" alt="Logo" class="h-24 w-auto" />

          <button
            @click="downloadCV"
            class="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500"
          >
            Get my CV
          </button>
        </nav>

        <div class="text-center">
          <div class="flex justify-center mb-16">
            <img
              src="/me_optimized.jpg"
              alt="Maydel Rego"
              class="rounded-full ring-4 ring-gray-200 shadow-xl"
              style="width: 256px; height: 256px; object-fit: cover;"
              loading="eager"
            />
          </div>

          <h6 class="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">Maydel Rego</h6>

          <h1 class="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
            Full Stack Developer
          </h1>

          <p class="font-normal text-gray-600 text-md md:text-xl mb-16">
            I have a passion for software. I enjoy creating tools that make life easier for people.
          </p>

          <a
            href="mailto:maidelrego@yahoo.com?subject=Inquiry%20from%20Portfolio"
            target="_blank"
            rel="noopener"
            class="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>

    <section class="py-10 md:py-16">
      <div class="container max-w-screen-xl mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-y-10 lg:gap-x-20">
          <div class="mb-10 lg:mb-0 lg:w-1/3">
            <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Portfolio</h1>

            <p class="font-normal text-gray-500 text-xs md:text-base">
              I have brought here my biggest and favorite works <br />
              as a professional.
            </p>
          </div>

          <div class="flex-1 space-y-24">
            <div
              v-for="project in projectsList"
              :key="project.id"
              class="flex space-x-6 bg-white p-6 rounded-md"
            >
              <h1 class="font-normal text-gray-700 text-3xl md:text-4xl">0{{ project.id }}</h1>

              <span class="w-28 h-0.5 bg-gray-300 mt-5"></span>

              <div>
                <h1 class="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                  {{ project.title }}
                </h1>

                <p class="font-normal text-gray-500 text-sm md:text-base">
                  {{ project.description }}
                </p>

                <button
                  v-if="project.url"
                  class="p-2 bg-gray-50 mt-5 font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500"
                  @click="() => goToProject(project.url)"
                >
                  Go to project
                  <Icon icon="mingcute:arrow-right-fill" class="inline-block ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 md:py-16">
      <div class="container max-w-screen-xl mx-auto px-4">
        <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Education</h1>
        <p class="font-normal text-gray-500 text-xs md:text-base mb-20">
          Below is a summary of the places I studied
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- KU Coding Bootcamp -->
          <div class="bg-gray-50 px-8 py-10 rounded-md">
            <h4 class="font-medium text-gray-700 text-lg mb-4">
              KU Coding Bootcamp, Overland Park, KS
            </h4>
            <p class="font-normal text-gray-500 text-md mb-4">
              A 24-week intensive program focused on gaining technical programming skills in HTML5,
              CSS3, JavaScript, jQuery, Bootstrap, Firebase, Node.js, MySQL, MongoDB, Express,
              Handlebars.js & ReactJS.
            </p>
          </div>

          <!-- IT Technician Certification -->
          <div class="bg-gray-50 px-8 py-10 rounded-md">
            <h4 class="font-medium text-gray-700 text-lg mb-4">IT Technician, Havana, Cuba</h4>
            <p class="font-normal text-gray-500 text-md mb-4">
              Diploma in IT maintenance and support, covering hardware setup, Windows and Linux
              system administration, and network troubleshooting.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 md:py-16">
      <div class="container max-w-screen-xl mx-auto px-4">
        <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Experience</h1>

        <p class="font-normal text-gray-500 text-xs md:text-base mb-10">
          Below is a summary of the places I worked
        </p>

        <div class="flex flex-col lg:flex-row justify-between bg-white p-8 rounded-md">
          <div class="space-y-8 md:space-y-16 mb-16 md:mb-0">
            <h6 class="font-medium text-gray-400 text-base uppercase">Company</h6>

            <p class="font-semibold text-gray-600 text-base">
              Pres Group Realty<span class="font-normal text-gray-300">/ California</span>
            </p>
          </div>

          <div class="space-y-8 md:space-y-16 mb-16 md:mb-0">
            <h6 class="font-medium text-gray-400 text-base uppercase">Position</h6>

            <p class="font-normal text-gray-400 text-base">Full Stack Developer</p>
          </div>

          <div class="space-y-8 md:space-y-16">
            <h6 class="font-medium text-gray-400 text-base uppercase">Year</h6>

            <p class="font-normal text-gray-400 text-base">2020-Present</p>
          </div>
        </div>
      </div>
    </section>

    <footer class="py-10 md:py-16 bg-white">
      <div class="container max-w-screen-xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
          <!-- Contact Info -->
          <div>
            <h6 class="font-semibold mb-3">Contact</h6>
            <ul class="space-y-2">
              <li class="flex items-center">
                <Icon icon="mdi:account" class="w-5 h-5 mr-2" />Maydel Rego
              </li>
              <li class="flex items-center">
                <Icon icon="mdi:phone" class="w-5 h-5 mr-2" />203-275-7091
              </li>
              <li class="flex items-center">
                <Icon icon="mdi:email" class="w-5 h-5 mr-2" />maydelregodeveloper@gmail.com
              </li>
              <li class="flex items-center">
                <Icon icon="mdi:map-marker" class="w-5 h-5 mr-2" />Kansas City, MO 64114
              </li>
            </ul>
          </div>

          <!-- Professional Summary -->
          <div>
            <h6 class="font-semibold mb-3">Summary</h6>
            <p class="text-sm md:text-base leading-relaxed">
              Full Stack Software Engineer with over 5 years of experience designing, developing,
              and deploying scalable web applications. Skilled in modern JavaScript frameworks,
              RESTful APIs, and database architecture.
            </p>
          </div>

          <!-- Social Links -->
          <div>
            <h6 class="font-semibold mb-3">Connect</h6>
            <div class="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/maydel-rego-3a12b3191/"
                target="_blank"
                class="hover:text-gray-900"
              >
                <Icon icon="mdi:linkedin" class="w-6 h-6" />
              </a>
              <a href="https://github.com/maidelrego" target="_blank" class="hover:text-gray-900">
                <Icon icon="mdi:github" class="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <p class="text-center text-gray-500 mt-10 text-sm">
          &copy; 2025 Maydel Rego. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const projectsList = ref([
  {
    id: 1,
    title: 'PresGroup Realty',
    url: '',
    description: `
      A comprehensive real estate platform built with Vue.js and Vuetify, featuring automated  
      SendGrid email workflows, TinyMCE rich-text editing, and Vuex state management.  
      Integrated Google Analytics with Chart.js dashboards for real-time user insights and data-driven optimizations
    `,
  },
  {
    id: 2,
    title: 'Lexa Quest',
    url: 'https://lexaquest.online',
    description: `
      A gamified chore & reward app for families, built with Nuxt3, Vue 3, Pinia & NestJS.
      Features dynamic task engines, parent and child passcode flows, Cloudinary avatar uploads,
      and real-time analytics to track engagement
    `,
  },
  {
    id: 3,
    title: "Kay's Barbershop",
    url: 'https://kaythebarber.com',
    description: `
    A full-stack booking & CRM platform using Nuxt 3, PrimeVue, Tailwind CSS,  
    and a NestJS/PostgreSQL backend. Includes Stripe no-show fees, Chart.js analytics,  
    and a secure admin dashboard for portfolio & service management`,
  },
  {
    id: 4,
    title: "Yoly's Delights",
    url: 'https://www.yolysdelights.com',
    description: `A modern Next.js 15 e-commerce platform for Cuban pastries with React 19, Redux Toolkit,  
      TanStack Query, and Tailwind CSS. Features Stripe checkout, SendGrid automation,  
      and Strapi CMS for content management with optimized server-state caching`,
  },
  {
    id: 5,
    title: 'TourneyForge',
    url: 'https://e-sports-tournaments-react-client.vercel.app',
    description: `A React-based e-sports tournament management platform with a Node.js backend.  
      Features include user authentication, team management, and real-time match updates.  
      Built with React, Redux, and Tailwind CSS for a responsive UI`,
  },
])

const goToProject = (url: string) => {
  window.open(url, '_blank')
}

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = '/cv.pdf' // Adjust the path to your CV file
  link.download = 'Maydel_Rego_CV.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>
