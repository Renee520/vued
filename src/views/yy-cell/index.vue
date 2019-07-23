<template>
  <div class="yy-page yy-page--reach">
    <div class="yy-box">
      <yy-cell-group title="基本用法">
        <yy-cell title="标题" value="内容">
        </yy-cell>
        <yy-cell title="标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题"></yy-cell>
        <yy-cell value="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"></yy-cell>
        <yy-cell title="标题" value="自定义icon">
          <i class="yy-icon-cog yy-text--gray" slot="right-icon"></i>
        </yy-cell>
      </yy-cell-group>
      <div class="yy-box--gray">
        <pre>{{base}}</pre>
      </div>
    </div>

    <div class="yy-box">
      <yy-cell-group title="左侧图标">
        <yy-cell title="标题" value="内容" icon="yy-icon-list-bullet"></yy-cell>
        <yy-cell title="标题" value="内容" icon="yy-icon-spin4 animate-spin"></yy-cell>
      </yy-cell-group>
      <div class="yy-box--gray">
        <pre>{{icon}}</pre>
      </div>
    </div>

    <div class="yy-box">
      <yy-cell-group title="跳转">
        <yy-cell title="标题" @click="handleClick" is-link value="url页面跳转" url="https://www.baidu.com"></yy-cell>
        <yy-cell title="标题" @click="handleClick" is-link value="to vue-router跳转" to="base-button"></yy-cell>
        <yy-cell title="标题" @click="handleClick" is-link value="只设置is-link"></yy-cell>
      </yy-cell-group>
      <div class="yy-box--gray">
        <pre>{{link}}</pre>
      </div>
    </div>
  </div>
</template>
<script>
import {
  base,
  icon,
  link,
} from './code';

export default {
  data() {
    return {
      base,
      icon,
      link,
    };
  },
  methods: {
    handleClick() {
      window.alert('没有设置url或to，触发click事件');
    },
  },
  created() {
  },
};
</script>
