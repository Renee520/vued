<template>
  <div :class="[
    prefixCls,
    {'yy-checked--inline': parent.inline || inline},
    {'yy-checked--disabled': parent.disabled || disabled},
    {'yy-checked--checked': model === label && model},
    {'yy-checked--border': (parent.border || border) && (parent.inline || inline)},
    {'yy-checked--mini': parent.size === 'mini' || size === 'mini'},
    {'yy-checked--large': parent.size === 'large' || size === 'large'},
  ]">
    <input
      type="radio"
      :value="label"
      :name="parent.name || name"
      v-model="model"
      :disabled="parent.disabled || disabled">
    <span :class="[
      prefixCls + '__icon',
      {'yy-checked__icon--checked': currCheckedMode === 'checked'},
      {'yy-checked__icon--selected': currCheckedMode === 'selected'}
    ]"></span>
    <label>
      <slot></slot>
    </label>
  </div>
</template>
<script>
const prefixCls = 'yy-checked';
export default {
  name: 'yy-radio',
  props: {
    inline: Boolean, // 是否内联
    size: {
      type: String,
      default: '', // mini '' large，只有在border时有用
    },
    checkedMode: {
      type: String,
      default: 'checked', // selected checked
    },
    disabled: Boolean, // 禁用
    border: Boolean, // 边框
    label: String,
    name: String,
    value: [String, Number],
  },
  data() {
    return {
      prefixCls,
      parent: {},
    };
  },
  created() {
    const parent = this.$parent;
    if (parent.$options && parent.$options.name === 'yy-radio-group') {
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
        return this.parent.value || this.value;
      },
      set(val) {
        if (this.parent.$root) {
          this.$parent.$emit('input', val);
        } else {
          this.$emit('input', val);
        }
      },
    },
    currCheckedMode() {
      if (this.parent.checkedMode) {
        return this.parent.checkedMode;
      }
      return this.checkedMode;
    },
  },
  watch: {
    model(val) {
      this.$emit('change', val);
    },
  },
};
</script>
