import Dialog from '@/views/yy-dialog/index.vue';
import Toast from '@/views/yy-toast/index.vue';
import Popup from '@/views/yy-popup/index.vue';

const Router = [
  {
    path: '/show-toast',
    name: 'show-toast',
    component: Toast,
    meta: {
      title: 'Toast',
      back: true,
      icon: 'yy-icon-comment-empty',
    },
  },
  {
    path: '/show-dialog',
    name: 'show-dialog',
    component: Dialog,
    meta: {
      title: 'Dialog',
      back: true,
      icon: 'yy-icon-doc-text-inv',
    },
  },
  {
    path: '/show-popup',
    name: 'show-popup',
    component: Popup,
    meta: {
      title: 'Popup',
      back: true,
      icon: 'yy-icon-up-open-big',
    },
  },
];

export default Router;
