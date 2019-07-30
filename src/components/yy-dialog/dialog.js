
const prefixCls = 'yy-dialog';
export default {
  name: 'yy-toast',
  props: {
    title: String,
    content: String,
    confirm: {
      type: Object,
      default: () => {},
    },
    cancel: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      prefixCls,
      showDialog: false,
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
      title = <div class={`${prefixCls}__title`}>{this.title}</div>;
    }
    // content
    if (that.msg && !this.$slots.content) {
      content = <div class={`${prefixCls}__content`}>{that.msg}</div>;
    }
    if (this.$slots.content) {
      content = <slot name="content"></slot>;
    }
    // handle
    handle = <div class={`${prefixCls}__handle`}>
    <div class={`${prefixCls}__cancel`} onclick={() => {
      that.closeDialog();
    }}>取消</div>
    <div class={`${prefixCls}__confirm yy-text--primary`} onclick={() => {
      that.confirmDialog();
    }}>确认</div>
  </div>;
    return [
      <div class={[
        prefixCls,
        { 'yy-dialog--show': that.showDialog },
      ]}>
        <div class={[
          'yy-mask',
          'yy-mask--black',
          { 'yy-mask--open': that.showDialog },
        ]} onclick={() => {
          that.closeDialog();
        }}></div>
        <div class={`${prefixCls}__body`} ref="dialog">
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
      const dialogEle = this.$refs.dialog;
      dialogEle.addEventListener('transitionend', () => {
        if (dialogEle.parentNode) {
          dialogEle.parentNode.remove();
        }
      });
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
};
