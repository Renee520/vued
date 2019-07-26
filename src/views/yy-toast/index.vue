<template>
  <div class="yy-page">
    <yy-button type="primary" @click="showToast">打开</yy-button>
  </div>
</template>
<script>

export default {
  data() {
    return {
      msg: '这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字',
    };
  },
  methods: {
    showToast() {
      this.$toast(this.msg);
    },
  },
  created() {
  },
};
</script>
