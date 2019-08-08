<template>
  <div class="yy-page" ref="page">
    <yy-picker :options="options"></yy-picker>
  </div>
</template>
<script>
import {
} from './code';

export default {
  data() {
    return {
      options: ['杭州', '宁波', '温州', '嘉兴', '湖州', '湖州'],
    };
  },
  methods: {
  },
  created() {
  },
  mounted() {
  },
};
</script>
