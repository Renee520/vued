<template>
  <div :class="[
    prefixCls,
    {'yy-checked--inline': parent.inline || inline},
    {'yy-checked--disabled': parent.disabled || disabled},
    {'yy-checked--checked': model },
    {'yy-checked--border': (parent.border || border) && (parent.inline || inline)},
    {'yy-checked--mini': parent.size === 'mini' || size === 'mini'},
    {'yy-checked--large': parent.size === 'large' || size === 'large'},
  ]">
    <input
      type="checkbox"
      :value="label"
      :name="parent.name || name"
      v-model="model"
      :disabled="parent.disabled || disabled">
    <span :class="[
      prefixCls + '__icon',
      prefixCls + '__icon--square',
      prefixCls + '__icon--selected',
    ]"></span>
    <label>
      <slot></slot>
    </label>
  </div>
</template>
<script>
const prefixCls = 'yy-checked';
export default {
  name: 'yy-checkbox',
  props: {
    inline: Boolean, // 是否内联
    size: {
      type: String,
      default: '', // mini '' large，只有在border时有用
    },
    disabled: Boolean, // 禁用
    border: Boolean, // 边框
    label: String,
    name: String,
    value: Boolean,
  },
  data() {
    return {
      prefixCls,
      parent: {},
    };
  },
  created() {
    const parent = this.$parent;
    if (parent.$options && parent.$options.name === 'yy-checkbox-group') {
      this.parent = parent;
    }
  },
  mounted() {
  },
  methods: {
  },
  computed: {
    model: {
      get() {
        if (this.parent.$root) {
          return this.parent.value.indexOf(this.label) >= 0;
          // this.$parent.$emit('changeValue', val, this.label);
        }
        return this.value;
      },
      set(val) {
        if (this.parent.$root) {
          const { value } = this.parent;
          const idx = value.indexOf(this.label);
          if (!val && idx >= 0) {
            // 删掉label
            value.splice(idx, 1);
          }
          if (val && idx < 0) {
            value.push(this.label);
          }
          this.$parent.$emit('input', value);
        } else {
          this.$emit('input', val);
        }
      },
    },
  },
};
</script>
