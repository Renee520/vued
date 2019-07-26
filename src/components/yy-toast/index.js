// import Toast from './index.vue';
import Vue from 'vue';
import VueToast from './toast';

let options = {
  duration: 2000,
  title: '',
  msg: '',
  type: 'text',
};

const ToastConstructor = Vue.extend(VueToast);
ToastConstructor.prototype.close = function close() {
  this.showToast = false;
  console.log(this);
  this.$el.addEventListener('transitionend', (e) => {
    if (e.target.parentNode) {
      e.target.parentNode.remove();
      // e.target.parentNode.removeChild(this);
    }
  });
};

function createToast() {
  return new ToastConstructor({
    el: document.createElement('div'),
  });
}

function Toast(params) {
  let op = params;
  if (typeof params === 'string') {
    op = {
      msg: params,
    };
  }
  options = Object.assign(options, op);

  const toast = createToast();
  clearTimeout(toast.timer);
  toast.msg = options.msg;
  document.body.appendChild(toast.$el);
  Vue.nextTick(function show() {
    setTimeout(() => {
      toast.showToast = true;
    }, 10);
  });
  toast.timer = setTimeout(() => {
    toast.close();
  }, options.duration);
}

// Toast.install = () => {
//   Vue.use(VueToast);
// };
Vue.prototype.$toast = Toast;

export default Toast;
