import Radio from '@/views/yy-radio/index.vue';
import Checkbox from '@/views/yy-checkbox/index.vue';

const Router = [
  {
    path: '/form-radio',
    name: 'form-radio',
    component: Radio,
    meta: {
      title: '单选',
      back: true,
    },
  },
  {
    path: '/form-checkbox',
    name: 'form-checkbox',
    component: Checkbox,
    meta: {
      title: '复选',
      back: true,
    },
  },
];

export default Router;
