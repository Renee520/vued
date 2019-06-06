<template>
  <div class="yy-page">
    <div class="yy-box">
      <yy-button>默认按钮</yy-button>
      <yy-button type="primary">primary按钮</yy-button>
      <yy-button type="error">error按钮</yy-button>
    </div>
    <div class="yy-box">
      <yy-button type="warning">warning按钮</yy-button>
      <yy-button type="info">info按钮</yy-button>
      <yy-button type="success">success按钮</yy-button>
      <div class="yy-box--gray">
        <strong class="yy-text--primary">按钮类型：type（primary，error，warning，info，success）</strong>
        <pre>{{ base }}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-button type="success" :round="20">设置圆形大小</yy-button>
      <yy-button type="primary" :round="0">设置圆形大小</yy-button>
      <div class="yy-box--gray">
        <strong class="yy-text--primary">圆形按钮：round（数字类型，默认为3,设置为0即为方形按钮）</strong>
        <pre>{{ round }}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-button type="error" plain>plain按钮</yy-button>
      <yy-button type="success" plain :round="20">plain圆形</yy-button>
      <div class="yy-box--gray">
        <pre>{{ plain }}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-button type="info" block>block按钮</yy-button>
      <div class="yy-box--gray">
        <pre>{{ block }}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-button type="primary" size="large">large按钮</yy-button>
      <yy-button type="primary">default按钮</yy-button>
      <yy-button type="primary" size="mini">mini按钮</yy-button>
      <div class="yy-box--gray">
        <strong class="yy-text--primary">大小：size（large，mini）</strong>
        <pre>{{ size }}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-button type="error" disabled>禁用按钮</yy-button>
      <yy-button type="error" disabled plain>禁用按钮</yy-button>
      <div class="yy-box--gray">
        <strong class="yy-text--primary">禁用：disabled</strong>
        <pre>{{ disabled }}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-button type="primary" icon="yy-icon-venus">图标按钮</yy-button>
      <yy-button type="primary" icon="yy-icon-spin4 animate-spin">图标按钮</yy-button>
      <yy-button type="primary" icon="yy-icon-edit"></yy-button>
      <div class="yy-box--gray">
        <strong class="yy-text--primary">图标：icon（传图标的类名即可）</strong>
        <pre>{{ icon }}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-button type="warning" loading="spin4">spin4</yy-button>
      <yy-button type="warning" loading="spin5">spin5</yy-button>
      <yy-button type="warning" loading="spin6">spin6</yy-button>
    </div>
    <div class="yy-box">
      <yy-button type="warning" loading="circular">loading按钮</yy-button>
      <div class="yy-box--gray">
        <strong class="yy-text--primary">加载：loading目前可传值 spin4， spin5， spin6， circular</strong>
        <pre>{{ loading }}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-button type="primary" @click.native="handleClick1">click</yy-button>
      <yy-button type="primary" loading="circular" @click="handleClick1">click</yy-button>
      <yy-button type="primary" disabled @click="handleClick1">click</yy-button>
      <div class="yy-box--gray">
        <strong class="yy-text--primary">disabled、loading无法获取点击事件</strong>
        <pre>{{ click }}</pre>
      </div>
    </div>
  </div>
</template>
<script>
import {
  base,
  round,
  plain,
  size,
  block,
  disabled,
  icon,
  loading,
  click,
} from './code';

export default {
  data() {
    return {
      base,
      round,
      plain,
      size,
      block,
      disabled,
      icon,
      loading,
      click,
    };
  },
  methods: {
    handleClick1(e) {
      console.log('click', e);
    },
  },
};
</script>
