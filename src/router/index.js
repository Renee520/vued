import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/yy-home.vue';
import Base from '@/views/yy-base.vue';
import baseRouters from './base';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'base',
          name: 'base',
          component: Base,
        },
      ],
    },
    ...baseRouters,
  ],
});
