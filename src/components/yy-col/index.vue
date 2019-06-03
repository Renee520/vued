<template>
  <div :class="className" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
import { integer } from '@/utils/validate';

const prefixCls = 'yy-col';
export default {
  name: 'yy-col',
  props: {
    offset: {
      type: Number,
      default: 0,
    },
    span: {
      type: Number,
      default: 24,
    },
  },
  data() {
    return {
      prefixCls,
      maxLen: 24,
    };
  },
  computed: {
    gutter() {
      const parent = this.$parent;
      if (parent && parent.$options && (parent.$options.name === 'yy-row' || parent.$options.name === 'yy-column')) {
        return parent.gutter;
      }
      return 0;
    },
    className() {
      const className = [this.prefixCls];
      if (integer(this.span) && this.span <= this.maxLen) {
        className.push(`${this.prefixCls}--${this.span}`);
      }
      if (integer(this.offset) && this.offset < this.maxLen) {
        className.push(`${this.prefixCls}-offset--${this.offset}`);
      }
      return className;
    },
    colStyle() {
      let style = '';
      if (this.gutter && this.gutter > 0 && this.$parent.$options.name === 'yy-row') {
        style += `padding-left: ${this.gutter / 2}px;padding-right: ${this.gutter / 2}px;`;
      }
      if (this.gutter && this.gutter > 0 && this.$parent.$options.name === 'yy-column') {
        style += `padding-top: ${this.gutter / 2}px;padding-bottom: ${this.gutter / 2}px;`;
      }
      return style;
    },
  },
  mounted() {
  },
};
</script>
