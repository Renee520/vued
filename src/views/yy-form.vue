<template>
  <div class="yy-page">
    <yy-grid color :options="options" full-border></yy-grid>
  </div>
</template>
<script>
export default {
  name: 'yy-form',
  methods: {
  },
  data() {
    return {
      options: [
        {
          to: 'form-radio',
          text: 'radio',
          icon: 'yy-icon-ok-circle',
        },
      ],
    };
  },
};
</script>
