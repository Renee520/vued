<template>
  <div>
    <yy-grid class="yy-page" color :col="3" :options="iconData" full-border></yy-grid>
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
