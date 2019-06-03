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
    </div>
    <div class="yy-box">
      <yy-column :gutter="10" style="height: 100px;">
        <yy-col class="yy-button--success" :span="12">
          <span>column span:12</span>
        </yy-col>
        <yy-col class="yy-button--success" :span="12">
          <span>column span:12</span>
        </yy-col>
      </yy-column>
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
    </div>
    <div class="yy-box">
      <yy-column :gutter="10" style="height: 200px;">
        <yy-col :offset="12" class="yy-button--primary" :span="12">
          <span>column span:12</span>
        </yy-col>
      </yy-column>
    </div>
  </div>
</template>
<script>
export default {
  // data() {
  //   return {},
  // },
};
</script>
