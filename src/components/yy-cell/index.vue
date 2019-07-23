<template>
  <div :class="[
    prefixCls,
    {'yy-cell--isLink': isLink}
  ]" @click="handleClick">
    <i v-if="icon" :class="prefixCls + '__icon--left ' + prefixCls + '__icon ' + icon"></i>
    <div :class="prefixCls + '__title'">{{title}}</div>
    <div :class="prefixCls + '__content'">
      <span class="yy-text--gray">{{value}}</span>
    </div>
    <i v-if="!rightIcon" :class="prefixCls + '__icon yy-icon-right-open-big yy-text--gray'"></i>
    <slot name="right-icon" :class="prefixCls + '__icon'"></slot>
  </div>
</template>
<script>
const prefixCls = 'yy-cell';
export default {
  name: 'yy-cell',
  props: {
    title: String,
    value: String,
    icon: String,
    isLink: {
      type: Boolean,
      default: false,
    },
    url: String,
    to: String,
  },
  data() {
    return {
      prefixCls,
      rightIcon: null,
    };
  },
  created() {
    if (this.$slots['right-icon'] && this.$slots['right-icon'][0]) {
      [this.rightIcon] = this.$slots['right-icon'];
    }
  },
  mounted() {
  },
  methods: {
    handleClick($event) {
      if (this.isLink && (this.url || this.to)) {
        if (this.url) {
          window.location.href = this.url;
        }
        if (this.to) {
          this.$router.push({
            path: this.to,
          });
        }
      } else {
        this.$emit('click', $event);
      }
    },
  },
};
</script>
