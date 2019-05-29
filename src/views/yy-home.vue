<template>
  <div :class="prefixCls">
   <yy-aside v-test v-model="openAside" :placement="'right'">
     <div slot="aside">
       <div class="yy-list">
         <router-link to="/icon">icon</router-link>
       </div>
     </div>
      <div class="page-home">
        <div @click="openAside = true;">打开</div>
        <router-view />
      </div>
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
  directives: {
    test: {
      inserted: (el) => {
        console.log('000000001', el.parentNode);
      },
    },
  },
};
</script>
