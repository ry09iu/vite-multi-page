import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
      ]
    },
  ]
});

export default router;
