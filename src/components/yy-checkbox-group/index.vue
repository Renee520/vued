<template>
  <div :class="prefixCls" @changeValue="changeValue">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'yy-checked-group';

export default {
  name: 'yy-checkbox-group',
  props: {
    value: Array,
    border: Boolean,
    inline: Boolean,
    name: String,
    size: {
      type: String,
      default: '',
    },
    disabled: Boolean,
  },
  data() {
    return {
      prefixCls,
      model: [],
    };
  },
  created() {
    this.model = this.value;
  },
  methods: {
    changeValue(checked, label) {
      console.log('========', checked, label);
    },
  },
  watch: {
    value(val) {
      console.log(val);
    },
  },
};
</script>
