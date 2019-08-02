<template>
  <div class="yy-page">
    <div class="yy-box">
      <div class="yy-box--gray">
        <p>title: 居中标题</p>
        <p>left-text: 左边文字</p>
        <p>left-to: 左边路由</p>
        <p>leftArrow: 左边是否显示返回图标 默认false</p>
        <p>fixed: 是否悬浮在顶部 默认true</p>
        <p>bg-color: 背景颜色</p>
        <p>text-color: 文字颜色</p>
        <p>height: 高度 Number</p>
        <p>slot=right：右边自定义</p>
        <p>@click-left：点击左边触发，仅当没有设置left-to时可用</p>
      </div>
    </div>
    <div class="yy-box">
      <yy-header
        :left-arrow="true"
        :left-text="'返回'"
        :title="'标题'"
        :fixed="false"
        >
        <span slot="right">
          文字
        </span>
      </yy-header>
      <div class="yy-box--gray">
        <pre>{{base}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-header
        :left-to="'/form-checkbox'"
        :left-text="'复选框'"
        :title="'左边路由左边路由左边路由左边路由左边路由左边路由'"
        :fixed="false"
        >
        <span slot="right">
          <i class="yy-icon-mail-alt"></i>
        </span>
      </yy-header>
      <div class="yy-box--gray">
        <pre>{{leftTo}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-header
        :left-text="'返回'"
        :title="'左边点击'"
        :fixed="false"
        @click-left="handleLeftClick"
        >
        <span slot="right">
          <i class="yy-icon-mail-alt"></i>
        </span>
      </yy-header>
      <div class="yy-box--gray">
        <pre>{{leftClick}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-header
        :left-text="'返回'"
        :fixed="false"
        :title="'样式'"
        bg-color="#000"
        text-color="#fff"
        :height="40"
        >
        <span slot="right">
          <i class="yy-icon-chat-empty"></i>
        </span>
      </yy-header>
      <div class="yy-box--gray">
        <pre>{{auto}}</pre>
      </div>
    </div>
  </div>
</template>
<script>
import {
  base,
  leftTo,
  leftClick,
  auto,
} from './code';

export default {
  data() {
    return {
      base,
      leftTo,
      leftClick,
      auto,
    };
  },
  methods: {
    handleLeftClick() {
      this.$toast({
        msg: '点击左边触发',
        duration: 2000,
      });
    },
  },
  created() {
  },
};
</script>
