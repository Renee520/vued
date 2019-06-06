<template>
  <div class="yy-page yy-layout">
    <div class="yy-box">
      <yy-row>
        <yy-col v-for="i in 6"  :span="4" :key="i" :class="[
          {'yy-button--primary': i % 2 === 0 },
          {'yy-button--warning': i % 2 !== 0 },
        ]">
          <span>col</span>
        </yy-col>
      </yy-row>
      <div class="yy-box--gray">
        <pre>{{base}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-row :gutter="20">
        <yy-col v-for="i in 4" :span="6" :key="i" :class="[
          {'yy-button--primary': i % 2 === 0 },
          {'yy-button--warning': i % 2 !== 0 },
        ]">
          <span>col</span>
        </yy-col>
      </yy-row>
      <div class="yy-box--gray">
        <strong class="yy-text--primary">间隔：gutter</strong>
        <pre>{{gutter}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-row :gutter="10">
        <yy-col class="yy-button--primary" :span="4">
          <span>span: 4</span>
        </yy-col>
        <yy-col class="yy-button--primary" :span="14">
          <span>span: 14</span>
        </yy-col>
        <yy-col class="yy-button--primary" :span="6">
          <span>span: 6</span>
        </yy-col>
      </yy-row>
      <div class="yy-box--gray">
        <strong class="yy-text--primary">col大小：span（1-24，默认24）</strong>
        <pre>{{span}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-row :gutter="10">
        <yy-col :offset="6" class="yy-button--primary" :span="14">
          <span>span: 14 offset: 6</span>
        </yy-col>
        <yy-col class="yy-button--primary" :span="4">
          <span>span: 4</span>
        </yy-col>
      </yy-row>
      <div class="yy-box--gray">
        <strong class="yy-text--primary">靠左距离：offset（0-24，默认0）</strong>
        <pre>{{offset}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-column style="height: 100px;">
        <yy-col class="yy-button--success" :span="12">
          <span>column span:12</span>
        </yy-col>
        <yy-col class="yy-button--warning" :span="12">
          <span>column span:12</span>
        </yy-col>
      </yy-column>
      <div class="yy-box--gray">
        <pre>{{columnBase}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-column :gutter="10" style="height: 200px;">
        <yy-col class="yy-button--info" :span="8">
          <span>column span:8</span>
        </yy-col>
        <yy-col class="yy-button--info" :span="16">
          <span>column span:16</span>
        </yy-col>
      </yy-column>
      <div class="yy-box--gray">
        <pre>{{columeSpan}}</pre>
      </div>
    </div>
  </div>
</template>
<script>
import {
  base,
  gutter,
  span,
  offset,
  columnBase,
  columeSpan,
} from './code';

export default {
  data() {
    return {
      base,
      gutter,
      span,
      offset,
      columnBase,
      columeSpan,
    };
  },
};
</script>
