import Header from '@/views/yy-header/index.vue';

const Router = [
  {
    path: '/nav-header',
    name: 'nav-header',
    component: Header,
    meta: {
      title: 'Header',
      back: true,
      icon: 'yy-icon-left-open-big',
    },
  },
];

export default Router;
