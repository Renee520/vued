<template>
<div :class="[
  prefixCls,
  {'yy-dialog--show': showDialog}
]" v-transfer-dom>
  <div :class="[
    'yy-mask',
    'yy-mask--black',
    {'yy-mask--open': showDialog}
  ]" @click="closeDialog"></div>
  <div :class="prefixCls + '__body'" ref="dialog">
    <div :class="prefixCls + '__title'">标题</div>
    <div :class="prefixCls + '__content'">内容内容内容内容内容内容内容内容内容内容</div>
    <div :class="prefixCls + '__handle'">
      <div :class="prefixCls + '__cancel'">取消</div>
      <div :class="prefixCls + '__confirm yy-text--primary'">确认</div>
    </div>
  </div>
</div>
</template>
<script>
import TransferDom from '@/directives/transfer-dom';
import { setTimeout } from 'timers';

const prefixCls = 'yy-dialog';
export default {
  name: 'yy-dialog',
  directives: { TransferDom },
  props: {
    title: String,
    content: String,
    confirm: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      prefixCls,
      showDialog: false,
    };
  },
  created() {
    setTimeout(() => {
      this.showDialog = true;
    }, 1000);
  },
  methods: {
    
  },
  computed: {
  },
};
</script>
