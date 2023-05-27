import { createRouter, createWebHistory } from 'vue-router'
import LayoutDefult from '../layouts/AppLayoutDefault.vue'
// import LayoutA from '../layouts/AppLayoutPink.vue'
import LayoutB from '../layouts/AppLayoutBlue.vue'

import BookFinish from '../components/book-finish/BookFinish.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    meta: { layout: LayoutDefult },
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/Home.vue')
  },
  {
    path: '/route',
    name: 'Route',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Route.vue'),
      meta: { layout: LayoutB }
  },
  {
    path: '/travel_route',
    name: 'TravelRoute',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/TravelRoute.vue'),
      meta: { layout: LayoutDefult }
  },
  {
    path: '/my_travel',
    name: 'MyTravel',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/MyTravel.vue'),
      meta: { layout: LayoutDefult },
  },
  {
    path: '/book/:id',
    name: 'MyTravelBook',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyTravelBook.vue'),
    meta: { layout: LayoutDefult },
    children: [
      {
        path: 'finish',
        name: 'BookFinish',
        component: () =>
          import(/* webpackChunkName: "about" */ '../components/book-finish/BookFinish.vue'),
          meta: { layout: LayoutDefult },
      },
    ]
  },
  {
    path: '/cart/:id',
    name: 'BookCart',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/MyTravelCart.vue'),
    meta: { layout: LayoutDefult },
    children: [
      {
        path: 'finish',
        name: 'CartFinish',
        component: () =>
          import(/* webpackChunkName: "about" */ '../components/cart-finish/CartFinish.vue'),
          meta: { layout: LayoutDefult },
      },
    ]
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
    meta: { layout: LayoutB },
    children: [
      {
        path: 'trips',
        name: 'ProfileTrips',
        component: () =>
          import(/* webpackChunkName: "about" */ '../components/profile-trips/ProfileTrips.vue'),
          meta: { layout: LayoutDefult },
      },
    ]
  },
  {
    path: '/test',
    name: 'Test',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Test.vue'),
      meta: { layout: LayoutB }
  },
  {
    path: '/chat',
    name: 'ChatGpt',
    props: { default: 'Hello', sidebar: false },
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ChatGpt.vue'),
      meta: { layout: LayoutB }
  },
];

const router = createRouter({
  history: createWebHistory('sk1fy.github.io/'),
  routes
});

export default router;