<template>
  <div class="yy-row" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'yy-row';
export default {
  name: 'yy-row',
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
        style += `margin: auto -${this.gutter / 2}px;`;
      }
      return style;
    },
  },
};
</script>
