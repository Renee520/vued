<template>
<div :class="[
  prefixCls,
  {'yy-toast--show': showToast}
]" v-transfer-dom>
  <div :class="[
    'yy-mask',
    'yy-mask--transparent',
  ]"></div>
  <div :class="[
    prefixCls + '__body',
    prefixCls + '__icon',
  ]">
  <!-- <img :src="require('../../assets/logo.png')" alt=""> -->
    <div v-if="isImgUrl">
      <img :src="imgUrl" alt="">
    </div>
    <i v-else :class="icon"></i>
    <p>{{msg}}</p>
  </div>
</div>
</template>
<script>
import TransferDom from '@/directives/transfer-dom';

const prefixCls = 'yy-toast';
export default {
  name: 'yy-toast',
  directives: { TransferDom },
  props: {
    msg: String,
    icon: String,
  },
  data() {
    return {
      prefixCls,
      showToast: false,
      isImgUrl: false,
      imgUrl: '',
    };
  },
  created() {
    if (this.icon && this.icon.indexOf('/') >= 0) {
      this.isImgUrl = true;
      import('../../assets/logo.png').then(
        (res) => {
          console.log(res);
          this.imgUrl = res.default;
        },
        (err) => {
          console.error(err);
        },
      );
    } else {
      this.isImgUrl = false;
    }
    setTimeout(() => {
      this.showToast = true;
    });
  },
  methods: {
  },
  computed: {
  },
};
</script>
