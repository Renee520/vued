<template>
  <div :class="prefixCls">
    <div :class="prefixCls + '__content'"
      @touchstart="touchstart"
    >
      <ul>
        <li :class="prefixCls + '__item'">选项1</li>
        <li :class="prefixCls + '__item'">选项2</li>
        <li :class="prefixCls + '__item'">选项3</li>
        <li :class="prefixCls + '__item'">选项4</li>
        <li :class="prefixCls + '__item'">选项4</li>
      </ul>
    </div>
    <div :class="prefixCls + '__mask'"></div>
    <div :class="prefixCls + '--selected'"></div>
  </div>
</template>
<script>
const prefixCls = 'yy-picker';
export default {
  name: 'yy-picker',
  props: {
  },
  data() {
    return {
      prefixCls,
    };
  },
  created() {
  },
  methods: {
    touchstart(e) {
      console.log(e);
    },
  },
  computed: {
  },
};
</script>
