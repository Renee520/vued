<template>
  <div :class="prefixCls">
   <yy-aside v-model="openAside" :placement="'right'">
     <div slot="aside">
       <div @click="openAside = false;">关闭</div>
     </div>
      <div @click="openAside = true;">打开打开打开打开打开打开</div>
   </yy-aside>
  </div>
</template>
<script>
const prefixCls = 'yy-home';
export default {
  data() {
    return {
      prefixCls,
      openAside: false,
    };
  },
  watch: {
  },
};
</script>
