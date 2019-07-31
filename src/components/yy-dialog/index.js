// import Dialog from './dialog';
import Vue from 'vue';
import VueDialog from './dialog';

let instance;
function getdefaultOptions() {
  return {
    msgAlign: 'center',
    msgColor: '',
    titleAlign: 'center',
    titleColor: '',
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
    type: 'alert',
    value: false,
    removeRender: true,
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

function Dialog(params, type) {
  return new Promise((resolve, reject) => {
    let op = params;
    if (typeof params === 'string') {
      op = {
        msg: params,
      };
    }
    const currOptions = getdefaultOptions();
    if (type) {
      currOptions.type = type;
    }
    createDialog();
    Object.assign(instance, currOptions, op, { resolve, reject });
    document.body.appendChild(instance.$el);
    Vue.nextTick(function show() {
      setTimeout(() => {
        instance.showDialog = true;
      });
    });
  });
}
Dialog.alert = params => Dialog(params, 'alert');
Dialog.confirm = params => Dialog(params, 'confirm');

Vue.component(VueDialog.name, VueDialog);
Vue.use(VueDialog);
Vue.prototype.$dialog = Dialog;

export default Dialog;
