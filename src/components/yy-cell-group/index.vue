<template>
  <div>
    <div :class="prefixCls + '__title'">{{title}}</div>
    <div :class="prefixCls">
      <slot></slot>
    </div>
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
