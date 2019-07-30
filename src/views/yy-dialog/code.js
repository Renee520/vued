/* eslint-disable */

const text =
`this.$toast('短文本');
this.$toast('这是一段长文本，这是一段长文本，这是一段长文本');`;

const icon =
`this.$toast({
  icon: '../../assets/logo.png',
  msg: '一张图片',
});

this.$toast({
  icon: 'yy-icon-heart',
  msg: '图标类名',
});`;

const success =
`this.$toast.success({
  msg: '加载成功',
});

this.$toast.error('加载失败');

this.$toast.loading('正在加载');`;

const duration =
`duration：设置时间，默认时间2000ms
this.$toast({
  icon: 'yy-icon-heart',
  msg: '5s后消失',
  duration: 5000,
});

showMask：是否需要透明背景，默认true，则不可点击其他元素
this.$toast({
  icon: '../../assets/logo.png',
  msg: '点击其他按钮',
  showMask: false,
});`;

const instance =
`this.toast = this.$toast.loading({
  msg: '已加载'+ this.time +'秒',
  duration: 0,
});
this.timer = setInterval(() => {
  this.time += 1;
  this.toast.msg =' 已加载'+ this.time +'秒';
  if (this.time >= 5) {
    clearInterval(this.timer);
    this.toast.close();
  }
}, 1000);`

export {
  text,
  icon,
  success,
  duration,
  instance,
};
