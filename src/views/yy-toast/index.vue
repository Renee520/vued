<template>
  <div class="yy-page">
    <div class="yy-box">
      <yy-button type="primary" @click="showToast('text1')">短文本</yy-button>
      <yy-button type="primary" @click="showToast('text2')">长文本</yy-button>
      <div class="yy-box--gray">
        <pre>{{text}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-button type="primary" @click="showToast('img')">图片</yy-button>
      <yy-button type="primary" @click="showToast('icon')">icon</yy-button>
      <div class="yy-box--gray">
        <pre>{{icon}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-button type="primary" @click="showToast('success')">success</yy-button>
      <yy-button type="primary" @click="showToast('error')">error</yy-button>
      <yy-button type="primary" @click="showToast('loading')">loading</yy-button>
      <div class="yy-box--gray">
        <pre>{{success}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-button type="primary" @click="showToast('duration')">设置显示时间</yy-button>
      <yy-button type="primary" @click="showToast('showMask')">可点击body元素</yy-button>
      <div class="yy-box--gray">
        <pre>{{duration}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-button type="primary" @click="showToast('create')">创建实例</yy-button>
      <div class="yy-box--gray">
        <pre>{{instance}}</pre>
      </div>
    </div>
  </div>
</template>
<script>
import {
  text,
  icon,
  success,
  duration,
  instance,
} from './code';

export default {
  data() {
    return {
      msg: '这是一段',
      time: 0,
      toast: null,
      timer: null,
      text,
      icon,
      success,
      duration,
      instance,
    };
  },
  methods: {
    showToast(type) {
      switch (type) {
        case 'text1': this.$toast('短文本');
          break;
        case 'text2': this.$toast('这是一段长文本，这是一段长文本，这是一段长文本');
          break;
        case 'img': this.$toast({
          icon: '../../assets/logo.png',
          msg: '一张图片',
        });
          break;
        case 'icon': this.$toast({
          icon: 'yy-icon-heart',
          msg: '图标类名',
        });
          break;
        case 'success': this.$toast.success({
          msg: '加载成功',
        });
          break;
        case 'error': this.$toast.error('加载失败');
          break;
        case 'loading': this.$toast.loading('正在加载');
          break;
        case 'duration': this.$toast({
          icon: 'yy-icon-heart',
          msg: '5s后消失',
          duration: 5000,
        });
          break;
        case 'showMask': this.$toast({
          icon: '../../assets/logo.png',
          msg: '点击其他按钮',
          showMask: false,
        });
          break;
        case 'create': this.toast = this.$toast.loading({
          msg: `已加载${this.time}秒`,
          duration: 0,
        });
          this.timer = setInterval(() => {
            this.time += 1;
            this.toast.msg = `已加载${this.time}秒`;
            if (this.time >= 5) {
              clearInterval(this.timer);
              this.toast.close();
            }
          }, 1000);
          break;
        default: break;
      }
    },
  },
  created() {
  },
};
</script>
