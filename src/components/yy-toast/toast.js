import TransferDom from '@/directives/transfer-dom';

const prefixCls = 'yy-toast';
export default {
  name: 'yy-toast',
  directives: { TransferDom },
  props: {
    msg: String,
  },
  data() {
    return {
      prefixCls,
      showToast: false,
    };
  },
  created() {
  },
  render() {
    const that = this;
    return [
      <div class={[
        prefixCls,
        { 'yy-toast--show': that.showToast },
      ]} v-transfer-dom>
        <div class={[
          'yy-mask',
          'yy-mask--transparent',
        ]}></div>
        <div class={[
          `${prefixCls}__body`,
          `${prefixCls}__text`,
        ]}>
          <p>{ that.msg }</p>
        </div>
      </div>,
    ];
  },
  methods: {
  },
};
