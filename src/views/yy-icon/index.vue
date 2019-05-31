<template>
  <div>
    <div class="yy-page" >
      <yy-grid color :col="3" :options="iconData" border></yy-grid>
    </div>
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
