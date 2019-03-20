import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Layout from '@/views/layout/Layout.vue';
import Meta from 'vue-meta';

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
      meta: { hidden: true },
    },
    {
      path: '/',
      redirect: 'dashboard',
      component: Layout,
      name: 'Dashboard',
      meta: { title: 'Dashboard', icon: 'example' },
      children: [{
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
      }],
    },
    {
      path: '/leads',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Leads',
          component: () => import('@/views/leads/index.vue'),
          meta: { title: 'Leads', icon: 'form' },
        },
      ],
    },
    {
      path: '/source_leads',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Sources',
          component: () => import('@/views/source_leads/index.vue'),
          meta: { title: 'Sources', icon: 'form' },
        },
      ],
    },
    {
      path: '/extractor',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Extractor',
          component: () => import('@/views/extractor/index.vue'),
          meta: { title: 'Extractor', icon: 'form' },
        },
      ],
    },
    {
      path: '/cronjob',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Cron Job',
          component: () => import('@/views/cronjob/index.vue'),
          meta: { title: 'Cron Job', icon: 'form' },
        },
      ],
    },
  ],
});
