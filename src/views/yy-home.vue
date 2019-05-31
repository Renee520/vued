<template>
  <div :class="prefixCls">
   <yy-aside v-model="openAside" :placement="'right'">
     <div slot="aside">
       <div class="yy-list" v-for="(nav, i) in navRouter" :key="i" @click="go2link(nav)">
        {{nav.meta.title}}
       </div>
     </div>
      <div class="yy-home">
        <yy-header
          :left-arrow="leftArrow"
          :left-text="leftArrow ? '返回' : ''"
          :title="title"
          @click-left="handleClickLeft"
          >
          <span v-if="!leftArrow" @click="openAside = true" slot="right" ><i class="yy-icon-th-list"></i></span>
        </yy-header>
        <transition :name="transitionName">
          <router-view />
        </transition>
      </div>
   </yy-aside>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import navRouter from '@/router/navRouter';

const prefixCls = 'yy-home';
export default {
  data() {
    return {
      prefixCls,
      openAside: false,
      leftArrow: false,
      leftText: '',
      title: '',
      navRouter,
    };
  },
  methods: {
    go2link(nav) {
      this.$router.push({
        name: nav.name,
      });
      this.openAside = false;
    },
    handleClickLeft() {
      this.$router.back();
    },
  },
  watch: {
    $route(to) {
      this.title = to.meta.title || '';
      this.leftArrow = to.meta.back || false;
    },
  },
  computed: {
    ...mapGetters([
      'transitionName',
    ]),
  },
  created() {
    this.title = this.$route.meta.title || '';
    this.leftArrow = this.$route.meta.back || false;
  },
};
</script>
