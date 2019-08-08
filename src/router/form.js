import Radio from '@/views/yy-radio/index.vue';
import Checkbox from '@/views/yy-checkbox/index.vue';
import Picker from '@/views/yy-picker/index.vue';

const Router = [
  {
    path: '/form-radio',
    name: 'form-radio',
    component: Radio,
    meta: {
      title: '单选',
      back: true,
      icon: 'yy-icon-dot-circled',
    },
  },
  {
    path: '/form-checkbox',
    name: 'form-checkbox',
    component: Checkbox,
    meta: {
      title: '复选',
      back: true,
      icon: 'yy-icon-ok-circle',
    },
  },
  {
    path: '/form-picker',
    name: 'form-picker',
    component: Picker,
    meta: {
      title: 'Picker',
      back: true,
      icon: 'yy-icon-mail-alt',
    },
  },
];

export default Router;
