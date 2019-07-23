<template>
  <div :class="[
    prefixCls,
    {'yy-radio--inline': parent.inline || inline},
    {'yy-radio--disabled': parent.disabled || disabled},
    {'yy-radio--checked': model === label && model},
    {'yy-radio--border': (parent.border || border) && (parent.inline || inline)},
    {'yy-radio--mini': parent.size === 'mini' || size === 'mini'},
    {'yy-radio--large': parent.size === 'large' || size === 'large'},
  ]">
    <input
      type="radio"
      :value="label"
      :name="parent.name || name"
      v-model="model"
      :disabled="parent.disabled || disabled">
    <span :class="[
      prefixCls + '__icon',
      {'yy-radio__icon--checked': currCheckedMode === 'checked'},
      {'yy-radio__icon--selected': currCheckedMode === 'selected'}
    ]"></span>
    <label>
      <slot></slot>
    </label>
  </div>
</template>
<script>
const prefixCls = 'yy-radio';
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
    console.log(this.parent);
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
        if (this.parent.checkedMode) {
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
    }
  },
  watch: {
    model(val) {
      this.$emit('change', val);
    },
  },
};
</script>
