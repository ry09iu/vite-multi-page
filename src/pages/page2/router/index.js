import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Page',
      redirect: '/page2',
      children: [
        {
          path: '/page2',
          name: 'page2',
          component: () => import('../views/Page2.vue')
        },
      ]
    },
  ]
});

export default router;
