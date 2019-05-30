<template>
  <div id="app">
    <transition @afterLeave="clearTransition">
      <router-view/>
    </transition>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
  name: 'vued',
  data() {
    return {
    };
  },
  created() {
    this.$store.dispatch('setLogin', true);
  },
  computed: {
    // ...mapGetters([
    //   'transitionName',
    // ]),
    transitionName() {
      return this.$store.state.transitionName;
    },
  },
  methods: {
    clearTransition() {
      this.$store.dispatch('setTransitionName', '');
    },
  },
  watch: {
    transitionName(val) {
      console.log(val);
    },
  },
};
</script>
<style lang="scss">
@import '~@/assets/style/index';
</style>
