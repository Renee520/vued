import Base from '@/views/yy-base.vue';
import Form from '@/views/yy-form.vue';
import Nav from '@/views/yy-nav.vue';
import Show from '@/views/yy-show.vue';

export default [
  {
    path: 'base',
    name: 'base',
    component: Base,
    meta: {
      title: '基础组件',
    },
  },
  {
    path: 'form',
    name: 'form',
    component: Form,
    meta: {
      title: '表单组件',
    },
  },
  {
    path: 'nav',
    name: 'nav',
    component: Nav,
    meta: {
      title: '导航组件',
    },
  },
  {
    path: 'show',
    name: 'show',
    component: Show,
    meta: {
      title: '展示组件',
    },
  },
  // {
  //   path: 'nav',
  //   name: 'nav',
  //   component: Nav,
  //   meta: {
  //     title: '其他组件',
  //   },
  // },
];
