<template>
  <div class="yy-page">
    <div class="yy-box">
      <yy-button type="primary" @click="showDialog">打开</yy-button>
    </div>
  </div>
</template>
<script>
import {
} from './code';

export default {
  data() {
    return {
    };
  },
  methods: {
    showDialog() {
      const that = this;
      this.$dialog({
        msg: '确定上天?',
      }).then(
        () => {
          that.$toast.success('已上天');
        },
        () => {
          that.$toast.error('上天失败');
        },
      );
    },
  },
  created() {
  },
};
</script>
