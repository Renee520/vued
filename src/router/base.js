import Icon from '@/views/yy-icon/index.vue';
import Button from '@/views/yy-button.vue';
import Layout from '@/views/yy-layout.vue';

const Router = [
  {
    path: '/base-icon',
    name: 'base-icon',
    component: Icon,
    meta: {
      title: '图标',
      back: true,
    },
  },
  {
    path: '/base-button',
    name: 'base-button',
    component: Button,
    meta: {
      title: '按钮',
      back: true,
    },
  },
  {
    path: '/base-layout',
    name: 'base-layout',
    component: Layout,
    meta: {
      title: 'layout布局',
      back: true,
    },
  },
];

export default Router;
