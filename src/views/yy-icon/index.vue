<template>
  <div class="yy-page" >
    <div class="yy-box--gray">
      旋转icon需添加class：animate-spin，如 'y-icon-spin4 animate-spin'
    </div>
    <yy-grid color :col="3" :options="iconData" border></yy-grid>
  </div>
</template>

<script>
import iconData from './data';

const prefixCls = 'yy-icon';
export default {
  data() {
    return {
      prefixCls,
      iconData,
    };
  },
  methods: {
    handleClickBack() {
      this.$router.back();
    },
  },
};
</script>
