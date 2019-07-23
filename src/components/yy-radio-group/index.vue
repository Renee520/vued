<template>
  <div :class="prefixCls">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'yy-radio-group';

export default {
  name: 'yy-radio-group',
  props: {
    value: [String, Number],
    border: Boolean,
    inline: Boolean,
    name: String,
    size: {
      type: String,
      default: '',
    },
    disabled: Boolean,
    checkedMode: {
      type: String,
      default: 'checked', // selected checked
    },
  },
  data() {
    return {
      prefixCls,
    };
  },
};
</script>
