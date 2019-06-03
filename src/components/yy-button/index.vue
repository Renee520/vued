<template>
  <button @click="handleClick" :type="nativeType" :class="buttonClass" :style="buttonStyle" :disabled="loading.length || disabled">
    <div :class="prefixCls + '__wrap'">
      <i v-if="(icon && icon.length) || (loading && loading !== 'circular')" :class="icon || loadingIcon"></i>
      <yy-loading :color="circularColor" :width="25" :height="25" v-if="loading && loading === 'circular'"></yy-loading>
      <span><slot></slot></span>
    </div>
  </button>
</template>
<script>
import vars from '@/assets/style/var.scss';

const prefixCls = 'yy-button';
export default {
  name: 'yy-button',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    round: {
      type: Number,
      default: 3,
    },
    plain: Boolean,
    block: Boolean,
    size: {
      type: String,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    nativeType: {
      type: String,
      default: 'button',
    },
  },
  data() {
    return {
      prefixCls,
    };
  },
  computed: {
    vars() {
      return vars;
    },
    buttonClass() {
      const className = [this.prefixCls];
      if (this.type !== 'default') {
        className.push(`${this.prefixCls}--${this.type}`);
      }
      if (this.plain) {
        className.push(`${this.prefixCls}--plain`);
      }
      if (this.block) {
        className.push(`${this.prefixCls}--block`);
      }
      if (this.size) {
        className.push(`${this.prefixCls}__size--${this.size}`);
      }
      if (this.disabled) {
        className.push(`${this.prefixCls}--disabled`);
      }
      return className;
    },
    buttonStyle() {
      return `border-radius: ${this.round}px`;
    },
    circularColor() {
      let color = '';
      if (this.type && this.type !== 'default') {
        color = vars.whiteColor;
        if (this.plain) {
          color = vars[`${this.type}Color`];
        }
      }
      return color;
    },
    loadingIcon() {
      const icons = ['spin4', 'spin5', 'spin6'];
      if (icons.indexOf(this.loading) >= 0) {
        return `yy-icon-${this.loading} animate-spin`;
      }
      return '';
    },
  },
  methods: {
    handleClick(e) {
      if (!this.disabled || !this.loading) {
        this.$emit('click', e);
      }
    },
  },
};
</script>
