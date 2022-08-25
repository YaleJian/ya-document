import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/markdown',
      name: 'markdown',
      component: () => import('../views/MarkdownView.vue')
    },
  ]
})

export default router
