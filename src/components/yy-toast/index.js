// import Toast from './index.vue';
import Vue from 'vue';
import VueToast from './toast';

function getdefaultOptions() {
  return {
    duration: 2000,
    msg: '',
    icon: '',
    showMask: true,
    type: '',
    closed: false,
  };
}

const queue = [];
const ToastConstructor = Vue.extend(VueToast);
ToastConstructor.prototype.close = function close() {
  if (this.showToast) {
    this.showToast = false;
  }
};

function createToast() {
  if (!queue.length) {
    const toast = new ToastConstructor({
      el: document.createElement('div'),
    });
    queue.push(toast);
  }
  return queue[queue.length - 1];
}

function Toast(params, type = '') {
  let op = params;
  if (typeof params === 'string') {
    op = {
      msg: params,
    };
  }
  const currOptions = getdefaultOptions();
  Object.assign(currOptions, op);
  if (type) {
    currOptions.type = type;
    currOptions.icon = '';
  } else {
    currOptions.type = '';
  }

  const toast = createToast();
  clearTimeout(toast.timer);
  Object.assign(toast, currOptions);
  toast.closed = false;
  document.body.appendChild(toast.$el);
  Vue.nextTick(() => {
    setTimeout(() => {
      toast.showToast = true;
    }, 10);
  });
  if (currOptions.duration) {
    toast.timer = setTimeout(() => {
      toast.close();
    }, currOptions.duration);
  }
  return toast;
}
['success', 'error', 'loading'].forEach((item) => {
  Toast[item] = params => Toast(params, item);
});

// Toast.install = () => {
//   Vue.use(VueToast);
// };
Vue.prototype.$toast = Toast;

export default Toast;
