<template>
  <div :class="[
    prefixCls,
    asideClass,
  ]" v-transfer-dom>
  <div :class="{'yy-aside-body': showMode === 'push'}" :style="styleFormat">
    <slot></slot>
  </div>
    <div :class="[
        'yy-mask',
        'yy-mask--black',
        {'yy-mask--open': openAside}
      ]" @click="openAside = false"></div>
    <div :class="[
      `${prefixCls}-wrap`,
      {'yy-aside-wrap--open': openAside}
    ]" :style="`left: ${placement === 'left' ? slideWidth : 'auto'};right: ${placement === 'right' ? slideWidth : 'auto'};width: ${asideWidth};`">
      <slot name="aside"></slot>
    </div>
  </div>
</template>
<script>
import TransferDom from '@/directives/transfer-dom';

const prefixCls = 'yy-aside';
export default {
  name: 'yy-aside',
  props: {
    width: {
      type: [Number, String],
      default: 200,
    },
    value: Boolean,
    placement: {
      type: String,
      default: 'left',
      validator: value => ['left', 'right'].indexOf(value) >= 0,
    },
    showMode: {
      type: String,
      default: 'overlay',
      validator: value => ['push', 'overlay'].indexOf(value) >= 0,
    },
    asideClass: {
      type: String,
      default: '',
    },
  },
  directives: {
    TransferDom,
  },
  data() {
    return {
      prefixCls,
      openAside: false,
      asideWidth: '0px',
      slideWidth: '0px',
      showAside: false,
    };
  },
  created() {
    this.widthFormat();
  },
  mounted() {
  },
  methods: {
    widthFormat() {
      if (typeof this.width === 'number') {
        this.asideWidth = `${this.width}px`;
        this.slideWidth = `-${this.width}px`;
      } else {
        this.asideWidth = this.width;
        this.slideWidth = -this.width;
      }
    },
  },
  computed: {
    styleFormat() {
      if (this.showMode === 'push' && this.openAside) {
        const w = this.placement === 'left' ? this.asideWidth : `-${this.asideWidth}`;
        return `transform: translate3d(${w}, 0px, 0px);`;
      }
      if (this.showMode === 'push' && !this.openAside) {
        return 'transform: translate3d(0px, 0px, 0px);';
      }
      return '';
    },
  },
  watch: {
    value(val) {
      this.openAside = val;
    },
    openAside(val) {
      if (!val) {
        this.$emit('input', val);
        this.widthFormat();
      } else {
        this.slideWidth = '0px';
      }
    },
  },
};
</script>
