<template>
  <div class="yy-page">
    <yy-grid color :options="options" full-border></yy-grid>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          to: 'base-icon',
          text: 'ICON',
          icon: 'yy-icon-cancel-circled',
        },
        {
          to: 'base-button',
          text: '按钮',
          icon: 'yy-icon-iphone-home',
        },
      ],
    };
  },
};
</script>
