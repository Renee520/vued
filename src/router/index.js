import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/yy-home.vue';
import navRouter from './navRouter';

import baseRouters from './base';
import formRouters from './form';
import showRouters from './show';
import navRouters from './nav';
import store from '@/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/show',
      children: [
        ...navRouter,
        ...baseRouters,
        ...formRouters,
        ...showRouters,
        ...navRouters,
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!store.state.login && to.name !== 'show') {
    next({ path: '/show' });
  } else {
    let { prevRouters } = store.state;
    // 处理导航组件
    // const isNav = navRouter.filter(item => item.name === to.name);
    const idx = prevRouters.indexOf(to.name);
    if (idx < 0) {
      prevRouters.push(to.name);
      store.dispatch('setTransitionName', 'slide-left');
    } else {
      let currRouters = prevRouters.slice(0, idx + 1);
      if (!currRouters.length) {
        [currRouters] = prevRouters;
      }
      prevRouters = currRouters;
      store.dispatch('setTransitionName', 'slide-right');
    }
    store.commit('PREV_ROUTERS', prevRouters);
    next();
  }
});

export default router;
