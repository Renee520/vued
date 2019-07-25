<template>
  <div class="yy-page">
    <div class="yy-box">
      <yy-checkbox v-model="checkbox1">复选</yy-checkbox>
      <yy-checkbox v-model="checkbox1">复选</yy-checkbox>
      <p>选中的值：{{checkbox1}}</p>
      <div class="yy-box--gray">
        <pre>{{base}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-checkbox inline v-model="checkbox2">复选1</yy-checkbox>
      <yy-checkbox disabled inline v-model="checkbox3">复选2</yy-checkbox>
      <yy-checkbox disabled inline v-model="checkbox4">复选3</yy-checkbox>
      <div class="yy-box--gray">
        <pre>{{inline}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-checkbox border inline v-model="checkbox5">复选1</yy-checkbox>
      <yy-checkbox border disabled inline v-model="checkbox6">复选2</yy-checkbox>
      <yy-checkbox border disabled inline v-model="checkbox7">复选3</yy-checkbox>
      <div class="yy-box--gray">
        <pre>{{border}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-checkbox inline border size="mini" v-model="checkbox8">复选1</yy-checkbox>
      <yy-checkbox inline border v-model="checkbox9">复选2</yy-checkbox>
      <yy-checkbox inline border size="large" v-model="checkbox10">复选3</yy-checkbox>
      <div class="yy-box--gray">
        <pre>{{size}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <h3 class="yy-text--primary">结合cell组件使用</h3>
    </div>
    <div class="yy-box">
     <yy-cell title="复选1" @click="handleClick('checkbox11')">
       <yy-checkbox slot="right-icon" is-link size="large" v-model="checkbox11"></yy-checkbox>
     </yy-cell>
     <yy-cell title="复选2"  @click="handleClick('checkbox12')">
       <yy-checkbox slot="right-icon" is-link  size="large" v-model="checkbox12"></yy-checkbox>
     </yy-cell>
     <yy-cell title="复选3"  @click="handleClick('checkbox13')">
       <yy-checkbox slot="right-icon" is-link  size="large" v-model="checkbox13"></yy-checkbox>
     </yy-cell>
      <div class="yy-box--gray">
        <pre>{{cell}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <h3 class="yy-text--primary">复选框组，model使用数组</h3>
    </div>
    <div class="yy-box">
      <yy-checkbox-group v-model="checkboxGroup1"  size="mini" inline>
        <yy-checkbox label="1">复选1</yy-checkbox>
        <yy-checkbox label="2">复选2</yy-checkbox>
        <yy-checkbox label="3">复选3</yy-checkbox>
      </yy-checkbox-group>
      <p>{{checkboxGroup1}}</p>
      <div class="yy-box--gray">
        <pre>{{groupSize}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-checkbox-group v-model="checkboxGroup2" inline disabled>
        <yy-checkbox label="1">复选1</yy-checkbox>
        <yy-checkbox label="2">复选2</yy-checkbox>
        <yy-checkbox label="3">复选3</yy-checkbox>
      </yy-checkbox-group>
      <div class="yy-box--gray">
        <pre>{{groupDisabled}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-checkbox-group v-model="checkboxGroup3" inline border>
        <yy-checkbox label="1">复选1</yy-checkbox>
        <yy-checkbox label="2">复选2</yy-checkbox>
        <yy-checkbox label="3">复选3</yy-checkbox>
      </yy-checkbox-group>
      <p>{{checkboxGroup3}}</p>
      <div class="yy-box--gray">
        <pre>{{groupBorder}}</pre>
      </div>
    </div>
  </div>
</template>
<script>
import {
  base,
  inline,
  border,
  size,
  cell,
  groupSize,
  groupDisabled,
  groupBorder,
} from './code';

export default {
  data() {
    return {
      base,
      inline,
      border,
      size,
      cell,
      groupSize,
      groupDisabled,
      groupBorder,
      checkbox1: true,
      checkbox2: false,
      checkbox3: false,
      checkbox4: true,
      checkbox5: false,
      checkbox6: false,
      checkbox7: true,
      checkbox8: false,
      checkbox9: false,
      checkbox10: true,
      checkbox11: false,
      checkbox12: false,
      checkbox13: true,
      radio4: '3',
      radio5: '3',
      radio6: '3',
      radio7: '',
      checkboxGroup1: ['1'],
      checkboxGroup2: ['1'],
      checkboxGroup3: [],
    };
  },
  methods: {
    handleClick(key) {
      this[key] = !this[key];
    },
  },
  created() {
  },
};
</script>
