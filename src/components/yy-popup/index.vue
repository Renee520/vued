<template>
  <div :class="[
    prefixCls,
    popupClass,
  ]" v-transfer-dom :style="style">
  <div :class="{'yy-popup-body': showMode === 'push'}" :style="styleFormat">
    <slot></slot>
  </div>
    <div :class="[
        'yy-mask',
        'yy-mask--black',
        {'yy-mask--open': openPopup}
      ]" @click="close"></div>
    <div :class="[
      `${prefixCls}-wrap`,
      {'yy-popup-wrap--open': openPopup}
    ]" :style="wrapStyle" ref="popupContent">
      <slot name="popup"></slot>
    </div>
  </div>
</template>
<script>
import TransferDom from '@/directives/transfer-dom';

const prefixCls = 'yy-popup';
export default {
  name: 'yy-popup',
  props: {
    width: {
      type: [Number, String],
      default: 'auto',
    },
    value: Boolean,
    placement: {
      type: String,
      default: 'left',
      validator: value => ['left', 'right', 'bottom'].indexOf(value) >= 0,
    },
    showMode: {
      type: String,
      default: 'overlay',
      validator: value => ['push', 'overlay'].indexOf(value) >= 0,
    },
    popupClass: {
      type: String,
      default: '',
    },
    zIndex: {
      type: Number,
      default: 1,
    },
  },
  directives: {
    TransferDom,
  },
  data() {
    return {
      prefixCls,
      openPopup: false,
      popupWidth: '0px',
      slideWidth: '0px',
      showPopup: false,
      readyDom: false,
      defaultWidth: 100,
    };
  },
  created() {
    this.widthFormat();
  },
  mounted() {
    this.getWidth();
  },
  methods: {
    widthFormat() {
      if (typeof this.width === 'number') {
        this.popupWidth = `${this.width}px`;
        this.slideWidth = `-${this.width}px`;
      } else {
        this.popupWidth = this.width;
        this.slideWidth = -this.width;
        this.getWidth();
      }
    },
    close() {
      this.openPopup = false;
      const that = this;
      let end = false;
      this.$el.lastChild.addEventListener('transitionend', (e) => {
        if (e.target === this.$el.lastChild && !end) {
          end = true;
          that.$emit('on-close');
        }
      });
    },
    getWidth() {
      this.$nextTick(() => {
        this.readyDom = true;
        if (this.width === 'auto') {
          if (this.placement === 'bottom') {
            this.popupWidth = `${this.$refs.popupContent.clientHeight || this.defaultWidth}px`;
            this.slideWidth = `-${this.$refs.popupContent.clientHeight || this.defaultWidth}px`;
          } else {
            this.popupWidth = `${this.$refs.popupContent.clientWidth || this.defaultWidth}px`;
            this.slideWidth = `-${this.$refs.popupContent.clientWidth || this.defaultWidth}px`;
          }
        }
      });
    },
  },
  computed: {
    wrapStyle() {
      let style = this.readyDom ? '' : 'opacity: 0;';
      if (this.placement === 'left') {
        style += `left: ${this.slideWidth};right: auto; width: ${this.popupWidth};`;
      }
      if (this.placement === 'right') {
        style += `right: ${this.slideWidth};left: auto; width: ${this.popupWidth};`;
      }
      if (this.placement === 'bottom') {
        style += `left: auto; height: ${this.popupWidth};width: 100%;top:auto;bottom: ${this.slideWidth};`;
      }
      return style;
    },
    style() {
      return `z-index: ${this.zIndex};`;
    },
    styleFormat() {
      if (this.showMode === 'push' && this.openPopup && this.placement !== 'bottom') {
        const w = this.placement === 'left' ? this.popupWidth : `-${this.popupWidth}`;
        return `transform: translate3d(${w}, 0px, 0px);`;
      }
      if (this.showMode === 'push' && !this.openPopup && this.placement !== 'bottom') {
        return 'transform: translate3d(0px, 0px, 0px);';
      }
      return '';
    },
  },
  watch: {
    value(val) {
      this.openPopup = val;
    },
    openPopup(val) {
      if (!val) {
        this.$emit('input', val);
        this.widthFormat();
        this.close();
      } else {
        this.slideWidth = '0px';
      }
    },
  },
};
</script>
