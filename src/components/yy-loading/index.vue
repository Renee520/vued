<template>
  <div class="yy-loading" :style="`width: ${width}px;height: ${height}px;`">
    <div v-if="mode === 'circular'" class="yy-loading__circular animate-spin">
      <svg viewBox="25 25 50 50">
        <circle :style="color ? `stroke: ${color}` : ''" cx="50" cy="50" r="20" fill="none"></circle>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: 'yy-loading',
  props: {
    mode: {
      type: String,
      default: 'circular',
    },
    width: {
      type: Number,
      default: 20,
    },
    height: {
      type: Number,
      default: 20,
    },
    color: String,
  },
};
</script>
