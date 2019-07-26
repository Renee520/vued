<template>
<div :class="[
  prefixCls,
  {'yy-toast--show': showToast}
]" v-if="msg" v-transfer-dom>
  <div :class="[
    'yy-mask',
    'yy-mask--transparent',
  ]"></div>
  <div :class="[
    prefixCls + '__body',
    prefixCls + '__text',
  ]">
    <!-- <div class=""></div> -->
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
  },
  data() {
    return {
      prefixCls,
      showToast: false,
    };
  },
  created() {
  },
  methods: {
  },
};
</script>
