<template>
  <div :class="prefixCls">
   <yy-aside v-model="openAside" :placement="'right'">
     <div slot="aside">
       <div class="yy-list" @click="go2link('/base')">
        基础组件
       </div>
     </div>
      <div class="page-home">
        <yy-header
          left-arrow
          left-text="返回"
          title="首页首页首页首页首页首页首页首页首页首页首页首页首页首页首页首页"
          @click-left="handleClickLeft"
          >
          <i slot="right" class="yy-icon-th-list"></i>
        </yy-header>
        <!-- <div @click="openAside = true;">打开</div> -->
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
  methods: {
    go2link(path) {
      this.$router.push({
        path,
      });
      this.openAside = false;
    },
    handleClickLeft() {
      console.log('click left');
    },
    handleClickRight() {
      console.log('click right');
    },
  },
  watch: {
  },
};
</script>
