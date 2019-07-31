<template>
  <div class="yy-page">
    <div class="yy-box">
      <div class="yy-box--gray">
        <p>title: 标题</p>
        <p>msg: 内容</p>
        <p>confirm: {text: 确定按钮标题, color, fontSize}  cancel: {text: 取消按钮标题，color, fontSize}</p>
        <p>type： 类型 [alert, confirm] 默认alert</p>
        <p>titleAlign： 标题对齐方式 [left, right, center] 默认center</p>
        <p>titleColor 标题颜色</p>
        <p>msgAlign 内容对齐方式 [left, right, center] 默认center</p>
        <p>msgColor 内容字体颜色</p>
        <p>@cancel 取消时触发事件</p>
        <p>@comfirm 确认时触发事件</p>
      </div>
    </div>
    <div class="yy-box">
      <yy-button type="primary" @click="showDialog('title')">有标题</yy-button>
      <yy-button type="primary" @click="showDialog('noTitle')">无标题</yy-button>
      <div class="yy-box--gray">
        <pre>{{title}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-button type="primary" @click="showDialog('alert')">alert</yy-button>
      <yy-button type="primary" @click="showDialog('confirm')">confirm</yy-button>
      <div class="yy-box--gray">
        <pre>{{alert}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-button type="primary" @click="showDialog('titleStyle')">修改样式</yy-button>
      <div class="yy-box--gray">
        <pre>{{style}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-button type="primary" @click="showDialog('show')">组件调用</yy-button>
      <yy-button type="primary" @click="showDialog('auto')">自定义内容</yy-button>
      <yy-dialog v-model="show" title="标题" :msg="'组件调用'"></yy-dialog>
      <yy-dialog v-model="showAuto" title="标题" type="confirm" titleAlign="left" @cancel="handleCancel">
        <div slot="msg">
          <p class="yy-text--primary">自定义内容</p>
          <img style="width: 100%;" src="../../assets/imgs/test.jpg" alt="">
        </div>
      </yy-dialog>
      <div class="yy-box--gray">
        <pre>{{component}}</pre>
      </div>
    </div>
  </div>
</template>
<script>
import {
  title,
  alert,
  style,
  component,
} from './code';

export default {
  data() {
    return {
      title,
      alert,
      style,
      component,
      show: false,
      showAuto: false,
    };
  },
  methods: {
    showDialog(type) {
      const that = this;
      switch (type) {
        case 'title': this.$dialog.alert({
          title: '要上天',
          msg: '确定上天?',
        });
          break;
        case 'noTitle': this.$dialog.alert({
          msg: '确定上天确定上天确定上天确定上天确定上天确定上天确定上天确定上天确定上天确定上天确定上天?',
        });
          break;
        case 'alert': this.$dialog.alert({
          msg: '确定上天?',
        }).then(
          () => {
            that.$toast.success('已上天');
          },
        );
          break;
        case 'confirm': this.$dialog.confirm({
          msg: '确定上天?',
        }).then(
          () => {
            that.$toast.success('已上天');
          },
          () => {
            that.$toast.error('上天失败');
          },
        );
          break;
        case 'titleStyle': this.$dialog({
          title: '不一样的标题',
          msg: '不一样的上天',
          titleAlign: 'left',
          titleColor: 'green',
          msgAlign: 'left',
          msgColor: '#044e04',
        });
          break;
        case 'show': this.show = true;
          break;
        case 'auto': this.showAuto = true;
          break;
        default: break;
      }
    },
    handleCancel() {
      console.log('取消');
    },
  },
  created() {
  },
};
</script>
