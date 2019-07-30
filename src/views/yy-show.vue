<template>
  <div class="yy-page">
    <yy-grid color :options="options" full-border></yy-grid>
  </div>
</template>
<script>
import navMixin from '@/mixins/nav';

export default {
  name: 'yy-form',
  mixins: [navMixin],
};
</script>
