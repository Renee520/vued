import Radio from '@/views/yy-radio/index.vue';

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
];

export default Router;
