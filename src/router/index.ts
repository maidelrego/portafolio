import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('@/pages/HomePage.vue')
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: () => import('@/pages/AboutPage.vue')
    },
    {
      path: '/resume',
      name: 'ResumePage',
      component: () => import('@/pages/ResumePage.vue')
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: () => import('@/pages/ContactPage.vue')
    }
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.hash) {
        return { el: to.hash }
      } else {
        return { top: 0 }
      }
    }
  }
})

export default router
