import TransferDom from '@/directives/transfer-dom';

const prefixCls = 'yy-toast';
export default {
  name: 'yy-toast',
  directives: { TransferDom },
  props: {
    msg: String,
    icon: String,
    showMask: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      prefixCls,
      showToast: false,
      isImgUrl: false,
      imgUrl: '',
      type: '',
    };
  },
  created() {
  },
  render() {
    this.init();
    const that = this;
    const content = [];
    if (that.icon && that.isImgUrl) {
      content.push(
        <div>
          <img src={ that.imgUrl } />
        </div>,
      );
    }
    if (that.icon && !that.isImgUrl && !that.type) {
      content.push(
        <i class={ that.icon }></i>,
      );
    }
    if (that.type === 'success' && !that.icon) {
      content.push(
        <i class="yy-icon-ok"></i>,
      );
    }
    if (that.type === 'error' && !that.icon) {
      content.push(
        <i class="yy-icon-cancel-1"></i>,
      );
    }
    if (that.type === 'loading' && !that.icon) {
      content.push(
        <yy-loading color="#fff" width={ 32 } height={ 32 }></yy-loading>,
      );
    }
    content.push(
      <p>{ that.msg }</p>,
    );

    function mask() {
      if (that.showMask) {
        return <div class={[
          'yy-mask',
          { 'yy-mask--transparent': that.showToast },
        ]}></div>;
      }
      return '';
    }
    return [
      <div class={[
        prefixCls,
        { 'yy-toast--show': that.showToast },
      ]} v-transfer-dom>
        { mask() }
        <div class={[
          `${prefixCls}__body`,
          { 'yy-toast__text': !that.icon && !that.type },
          { 'yy-toast__icon': that.icon || that.type },
        ]}>
          { content }
        </div>
      </div>,
    ];
  },
  methods: {
    init() {
      if (this.icon && this.icon.indexOf('/') >= 0) {
        this.isImgUrl = true;
        if (this.icon.indexOf('http') === 0) {
          this.imgUrl = this.icon;
        } else {
          import('../../assets/logo.png').then(
            (res) => {
              this.imgUrl = res.default;
            },
            (err) => {
              console.error(err);
            },
          );
        }
      } else {
        this.isImgUrl = false;
      }
    },
  },
};
