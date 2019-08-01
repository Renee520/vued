
import TransferDom from '@/directives/transfer-dom';

const prefixCls = 'yy-dialog';
export default {
  name: 'yy-dialog',
  directives: { TransferDom },
  props: {
    title: String,
    msg: String,
    confirm: {
      type: Object,
      default() {
        return {
          text: '确定',
          color: '',
        };
      },
    },
    cancel: {
      type: Object,
      default() {
        return {
          text: '取消',
          color: '',
        };
      },
    },
    value: Boolean,
    type: {
      type: String,
      default: 'alert',
    },
    titleAlign: {
      type: String,
      default: 'center',
      validator: value => ['left', 'right', 'center'].indexOf(value) >= 0,
    },
    msgAlign: {
      type: String,
      default: 'center',
      validator: value => ['left', 'right', 'center'].indexOf(value) >= 0,
    },
    msgColor: String,
    titleColor: String,
  },
  data() {
    return {
      prefixCls,
      showDialog: false,
      removeRender: false,
    };
  },
  created() {
  },
  render() {
    const that = this;
    let content = null;
    let title = null;
    let handle = null;
    // title
    if (this.title) {
      title = <div style={ this.titleStyle } class={`${prefixCls}__title`}>{this.title}</div>;
    }
    // content
    if (that.msg && !this.$slots.msg) {
      const msg = that.msg.replace(/\n/g, '<br />');
      console.log(msg);
      content = <div style={ this.msgStyle } class={`${prefixCls}__content`} domPropsInnerHTML={msg}></div>;
    }
    if (this.$slots.msg) {
      content = this.$slots.msg;
    }
    // handle
    if (this.type === 'alert') {
      handle = <div class={`${prefixCls}__handle`}>
        <yy-button plain block type="primary"onclick={() => {
          that.confirmDialog();
        }} style={ that.confirmStyle }>{ this.confirm.text }</yy-button>
      </div>;
    }
    if (this.type === 'confirm') {
      handle = <div class={`${prefixCls}__handle`}>
        <yy-button class={`${prefixCls}__cancel`} plain block type="info"onclick={() => {
          that.closeDialog();
        }} style={ that.cancelStyle }>{ this.cancel.text }</yy-button>
        <yy-button plain block type="primary"onclick={() => {
          that.confirmDialog();
        }} style={ that.confirmStyle }>{ this.confirm.text }</yy-button>
    </div>;
    }
    return [
      <div class={[
        prefixCls,
        { 'yy-dialog--show': that.showDialog },
      ]} v-transfer-dom>
        <div class={[
          'yy-mask',
          'yy-mask--black',
          { 'yy-mask--open': that.showDialog },
        ]} onclick={() => {
          that.closeDialog();
        }}></div>
        <div class={`${prefixCls}__body`} ref="dialog" style={ that.bodyStyle }>
          {title}
          {content}
          {handle}
        </div>
      </div>,
    ];
  },
  methods: {
    closeDialog(action = 'cancel') {
      this.showDialog = false;
      if (this.removeRender) {
        const dialogEle = this.$refs.dialog;
        dialogEle.addEventListener('transitionend', () => {
          if (dialogEle.parentNode) {
            dialogEle.parentNode.remove();
          }
        });
      }
      this.$emit(action);
      // this.callback && this.callback(action);
      if (this.callback) {
        this.callback(action);
      }
    },
    confirmDialog() {
      this.closeDialog('confirm');
    },
  },
  computed: {
    titleStyle() {
      let style = `text-align: ${this.titleAlign};`;
      if (this.titleColor) {
        style += `color: ${this.titleColor};`;
      }
      return style;
    },
    msgStyle() {
      let style = `text-align: ${this.msgAlign};`;
      if (this.msgColor) {
        style += `color: ${this.msgColor};`;
      }
      return style;
    },
    bodyStyle() {
      if (!this.showDialog) {
        return 'z-index:-1;';
      }
      return '';
    },
    confirmStyle() {
      let style = '';
      if (this.confirm.color) {
        style += `color: ${this.confirm.color};`;
      }
      if (this.confirm.fontSize) {
        style += `font-size: ${this.confirm.fontSize};`;
      }
      return style;
    },
    cancelStyle() {
      let style = '';
      if (this.cancel.color) {
        style += `color: ${this.cancel.color};`;
      }
      if (this.cancel.fontSize) {
        style += `font-size: ${this.cancel.fontSize};`;
      }
      return style;
    },
  },
  watch: {
    value(val) {
      this.showDialog = val;
    },
    showDialog(val) {
      this.$emit('input', val);
    },
  },
};
