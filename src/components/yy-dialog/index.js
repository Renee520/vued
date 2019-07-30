// import Dialog from './index.vue';
import Vue from 'vue';
import VueDialog from './dialog';

let instance;
function getdefaultOptions() {
  return {
    confirm: {
      text: '确认',
    },
    cancel: {
      text: '取消',
    },
    msg: '没有内容',
    callback: (action) => {
      instance[action === 'confirm' ? 'resolve' : 'reject'](action);
    },
  };
}

const DialogConstructor = Vue.extend(VueDialog);
// DialogConstructor.prototype.close = function close() {
//   if (this.showDialog) {
//     this.showDialog = false;
//     this.$el.addEventListener('transitionend', (e) => {
//       if (e.target.parentNode) {
//         e.target.parentNode.remove();
//         // e.target.parentNode.removeChild(this);
//       }
//     });
//   }
// };

function createDialog() {
  instance = new DialogConstructor({
    el: document.createElement('div'),
  });
  return instance;
}

function Dialog(params) {
  return new Promise((resolve, reject) => {
    let op = params;
    if (typeof params === 'string') {
      op = {
        msg: params,
      };
    }
    const currOptions = getdefaultOptions();
    Object.assign(currOptions, op, { resolve, reject });
    const dialog = createDialog();
    Object.assign(dialog, currOptions);
    console.log(dialog);
    document.body.appendChild(dialog.$el);
    Vue.nextTick(function show() {
      setTimeout(() => {
        dialog.showDialog = true;
      });
    });
  });
}
// ['success', 'error', 'loading'].forEach((item) => {
//   Dialog[item] = params => Dialog(params, item);
// });

// Dialog.install = () => {
//   Vue.use(VueDialog);
// };
Vue.prototype.$dialog = Dialog;

export default Dialog;
