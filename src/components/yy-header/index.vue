<template>
  <div :class="prefixCls" :style="styleFormat">
    <div :class="`${prefixCls}__prev yy-float`" @click="handleClick('left')">
      <div v-if="leftArrow" :class="`${prefixCls}__prev-icon yy-float--left`">
        <i class="yy-icon-left-open-big"></i>
      </div>
      <div v-if="leftText && leftText.length" :class="`${prefixCls}__prev-text yy-float--left`">{{leftText}}</div>
    </div>
    <div :class="`${prefixCls}__title`">{{title}}</div>
    <div :class="`${prefixCls}__next yy-float`" >
      <slot name="right" class="yy-float--right"></slot>
    </div>
  </div>
</template>
<script>
import vars from '@/assets/style/var.scss';

const prefixCls = 'yy-header';
export default {
  name: 'yy-header',
  props: {
    title: String,
    leftText: String,
    leftTo: String,
    leftArrow: {
      type: Boolean,
      default: false,
    },
    bgColor: String,
    textColor: String,
    height: Number,
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
    styleFormat() {
      const height = this.height ? `${this.height}px` : this.vars.headerHeight;
      const bgColor = this.bgColor ? this.bgColor : this.vars.primaryColor;
      return `height: ${height};line-height: ${height};background-color: ${bgColor};`;
    },
  },
  methods: {
    handleClick() {
      if (this.leftTo && this.leftTo.length) {
        this.$router.push({
          path: this.leftTo,
        });
      } else {
        this.$emit('click-left');
      }
    },
  },
};
</script>
