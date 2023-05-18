import { createRouter, createWebHistory } from 'vue-router'
import LayoutDefult from '../layouts/AppLayoutDefault.vue'
import LayoutA from '../layouts/AppLayoutPink.vue'
import LayoutB from '../layouts/AppLayoutBlue.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    meta: { layout: LayoutDefult },
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/Home.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Test.vue'),
      meta: { layout: LayoutA }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;