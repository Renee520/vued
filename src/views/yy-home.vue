<template>
  <div :class="prefixCls">
   <yy-popup v-model="openPopup" show-mode="push" :placement="'right'" :width="200">
     <div slot="popup">
       <div :class="[
        'yy-list',
        'yy-list--isLink',
        {'yy-list--selected': currNav.name === nav.name}
       ]" v-for="(nav, i) in navRouter" :key="i" @click="go2link(nav)">
        {{nav.meta.title}}
       </div>
     </div>
      <yy-header
        :left-arrow="leftArrow"
        :left-text="leftArrow ? '返回' : ''"
        :title="currNav.title"
        @click-left="handleClickLeft"
        >
        <span v-if="!leftArrow" @click="openPopup = true" slot="right" ><i class="yy-icon-th-list"></i></span>
      </yy-header>
      <transition :name="transitionName">
        <router-view />
      </transition>
   </yy-popup>
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
      openPopup: false,
      leftArrow: false,
      leftText: '',
      title: '',
      currNav: {},
      navRouter,
    };
  },
  methods: {
    go2link(nav) {
      this.$router.push({
        name: nav.name,
      });
      this.openPopup = false;
    },
    handleClickLeft() {
      this.$router.back();
    },
  },
  watch: {
    $route(to) {
      this.currNav = {
        name: to.name,
        title: to.meta.title || '',
      };
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
    this.currNav = this.$route.meta.title ? { name: this.$route.name, title: this.$route.meta.title } : {};
    this.leftArrow = this.$route.meta.back || false;
  },
};
</script>
