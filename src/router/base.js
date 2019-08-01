import Icon from '@/views/yy-icon/index.vue';
import Button from '@/views/yy-button/index.vue';
import Layout from '@/views/yy-layout/index.vue';
import Cell from '@/views/yy-cell/index.vue';
import Grid from '@/views/yy-grid/index.vue';

const Router = [
  {
    path: '/base-icon',
    name: 'base-icon',
    component: Icon,
    meta: {
      title: '图标',
      back: true,
      icon: 'yy-icon-cancel-circled',
    },
  },
  {
    path: '/base-button',
    name: 'base-button',
    component: Button,
    meta: {
      title: '按钮',
      back: true,
      icon: 'yy-icon-iphone-home',
    },
  },
  {
    path: '/base-layout',
    name: 'base-layout',
    component: Layout,
    meta: {
      title: 'layout布局',
      back: true,
      icon: 'yy-icon-layout',
    },
  },
  {
    path: '/base-cell',
    name: 'base-cell',
    component: Cell,
    meta: {
      title: 'cell',
      back: true,
      icon: 'yy-icon-menu',
    },
  },
  {
    path: '/base-grid',
    name: 'base-grid',
    component: Grid,
    meta: {
      title: '网格',
      back: true,
      icon: 'yy-icon-th-large',
    },
  },
];

export default Router;
