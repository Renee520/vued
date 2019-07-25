import Toast from '@/views/yy-toast/index.vue';

const Router = [
  {
    path: '/show-toast',
    name: 'show-toast',
    component: Toast,
    meta: {
      title: 'Toast',
      back: true,
    },
  },
];

export default Router;
