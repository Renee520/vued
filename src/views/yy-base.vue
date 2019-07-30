<template>
  <div class="yy-page">
    <yy-grid color :options="options" full-border></yy-grid>
  </div>
</template>
<script>
import navMinxin from '@/mixins/nav';

export default {
  mixins: [navMinxin],
};
</script>
