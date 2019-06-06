<template>
  <div :class="prefixCls">
    <div :class="prefixCls + '__title'">{{title}}</div>
    <div :class="prefixCls + '__content'">{{value}}</div>
  </div>
</template>
<script>
const prefixCls = 'yy-cell';
export default {
  name: 'yy-cell',
  porps: {
    title: String,
    value: String,
  },
  data() {
    return {
      prefixCls,
    };
  },
  mounted() {
    console.log(this.$slots['right-icon'][0]);
  },
};
</script>
