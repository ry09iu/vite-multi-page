import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Page',
      redirect: '/page1',
      children: [
        {
          path: '/page1',
          name: 'Page1',
          component: () => import('../views/Page1.vue')
        },
        {
          path: '/page2',
          name: 'Page2',
          component: () => import('../views/Page2.vue')
        }
      ]
    },
  ]
});

export default router;
