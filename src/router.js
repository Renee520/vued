import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/yy-home.vue';
import Icon from '@/views/yy-icon.vue';

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
          path: 'icon',
          name: 'icon',
          component: Icon,
        },
      ],
    },
  ],
});
