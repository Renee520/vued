<template>
  <div :class="prefixCls">
    基础组件
    <router-link to="/base-icon">icon</router-link>
  </div>
</template>
<script>
const prefixCls = 'yy-base';
export default {
  data() {
    return {
      prefixCls,
    };
  },
};
</script>
