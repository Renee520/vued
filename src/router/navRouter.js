import Base from '@/views/yy-base.vue';
import Form from '@/views/yy-form.vue';

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
];
