/* eslint-disable */
const title =
`this.$dialog.alert({
  title: '要上天',
  msg: '确定上天?',
});

this.$dialog.alert({
  msg: '确定上天确定上天确定上天确定上天确定上天确定上天确定上天确定上天确定上天确定上天确定上天?',
});`;

const alert =
`this.$dialog.alert({
  msg: '确定上天?',
}).then(
  () => {
    that.$toast.success('已上天');
  }
);

this.$dialog.confirm({
  msg: '确定上天?',
}).then(
  () => {
    that.$toast.success('已上天');
  },
  () => {
    that.$toast.error('上天失败');
  },
);`;

const style =
`this.$dialog({
  title: '不一样的标题',
  msg: '不一样的上天',
  titleAlign: 'left',
  titleColor: 'green',
  msgAlign: 'left',
  msgColor: '#044e04',
});`;

const component =
` <yy-dialog v-model="show" title="标题" :msg="'组件调用'"></yy-dialog>

<yy-dialog v-model="showAuto" title="标题" type="confirm" titleAlign="left" @cancel="handleCancel">
  <div slot="msg">
    <p class="yy-text--primary">自定义内容</p>
    <img style="width: 100%;" src="../../assets/imgs/test.jpg" alt="">
  </div>
</yy-dialog>`;
export {
  title,
  alert,
  style,
  component,
};
