<template>
  <div v-if="options.length" :class="[
    prefixCls,
    {'yy-grid-border': border},
    {'yy-grid-border--full': fullBorder},
  ]">
    <div @click="handleClick(option)"  v-for="(option, i) in options" :key="i" :class="`${prefixCls}-${col}`">
      <div :class="`${prefixCls}__img`">
        <img v-if="option.img" :src="option.img" alt="" />
        <i :style="`color: ${option.color || 'inherit'}`" v-if="option.icon" :class="option.icon"></i>
      </div>
      <div :style="`color: ${option.color || 'inherit'}`" :class="`${prefixCls}__text`">{{option.text}}</div>
    </div>
  </div>
</template>
<script>
import { getRandomRGB } from '@/utils/util';

const prefixCls = 'yy-grid';
export default {
  name: 'yy-grid',
  props: {
    color: Boolean,
    border: Boolean,
    fullBorder: Boolean,
    col: {
      type: Number,
      default: 3,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      prefixCls,
    };
  },
  computed: {
  },
  methods: {
    handleClick(option) {
      if (option.to && option.to.length) {
        console.log(option);
        this.$router.push({
          name: option.to,
        });
      } else {
        this.$emit('grid-click', option);
      }
    },
  },
  created() {
    if (this.color) {
      this.options.forEach((option) => {
        if (!option.color || !option.color.length) {
          const rgb = getRandomRGB();
          option.color = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
        }
      });
    }
  },
};
</script>
