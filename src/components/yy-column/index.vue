<template>
  <div :class="prefixCls" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'yy-column';
export default {
  name: 'yy-column',
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      prefixCls,
    };
  },
  computed: {
    rowStyle() {
      let style = '';
      if (this.gutter && this.gutter > 0) {
        style += `margin: -${this.gutter / 2}px auto;`;
      }
      return style;
    },
  },
};
</script>
