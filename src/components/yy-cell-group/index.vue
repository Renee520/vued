<template>
  <div :class="prefixCls">
    <div :class="prefixCls + '__title'">{{title}}</div>
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'yy-cell-group';

export default {
  name: 'yy-cell-group',
  props: {
    title: String,
  },
  data() {
    return {
      prefixCls,
    };
  },
};
</script>
