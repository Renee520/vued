<template>
  <div class="yy-page">
    <div class="yy-box">
      <yy-radio label="1" v-model="radio1">单选1</yy-radio>
      <yy-radio label="2" v-model="radio1">单选2</yy-radio>
      <p>选中的值：{{radio1}}</p>
      <div class="yy-box--gray">
        <pre>{{base}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-radio label="1" inline v-model="radio2">单选1</yy-radio>
      <yy-radio label="2" inline v-model="radio2">单选2</yy-radio>
      <yy-radio label="3" disabled inline v-model="radio2">单选3</yy-radio>
      <yy-radio label="4" disabled inline v-model="radio2">单选4</yy-radio>
      <div class="yy-box--gray">
        <pre>{{inline}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-radio label="1" border inline v-model="radio3">单选1</yy-radio>
      <yy-radio label="2" border disabled inline v-model="radio3">单选2</yy-radio>
      <yy-radio label="3" border disabled inline v-model="radio3">单选3</yy-radio>
      <div class="yy-box--gray">
        <pre>{{border}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-radio label="1" checked-mode="selected" v-model="radio4">单选1</yy-radio>
      <yy-radio label="2" checked-mode="selected" v-model="radio4">单选2</yy-radio>
      <yy-radio label="3" disabled checked-mode="selected" v-model="radio4">单选3</yy-radio>
      <div class="yy-box--gray">
        <pre>{{mode}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-radio label="1" inline border checked-mode="selected" v-model="radio5">单选1</yy-radio>
      <yy-radio label="2"  inline border checked-mode="selected" v-model="radio5">单选2</yy-radio>
      <yy-radio label="3"  inline border disabled checked-mode="selected" v-model="radio5">单选3</yy-radio>
      <div class="yy-box--gray">
        <pre>{{mode}}</pre>
      </div>
    </div>

    <div class="yy-box">
      <yy-radio label="1" inline border size="mini" checked-mode="selected" v-model="radio6">单选1</yy-radio>
      <yy-radio label="2"  inline border checked-mode="selected" v-model="radio6">单选2</yy-radio>
      <yy-radio label="3"  inline border size="large" checked-mode="selected" v-model="radio6">单选3</yy-radio>
      <div class="yy-box--gray">
        <pre>{{size}}</pre>
      </div>
    </div>

    <div class="yy-box">
     <yy-cell title="单选1" @click="handleClick('1')">
       <yy-radio slot="right-icon" is-link label="1" size="large" checked-mode="selected" v-model="radio7"></yy-radio>
     </yy-cell>
     <yy-cell title="单选2"  @click="handleClick('2')">
       <yy-radio slot="right-icon" is-link label="2"  size="large" checked-mode="selected" v-model="radio7"></yy-radio>
     </yy-cell>
     <yy-cell title="单选3"  @click="handleClick('3')">
       <yy-radio slot="right-icon" is-link label="3"  size="large" checked-mode="selected" v-model="radio7"></yy-radio>
     </yy-cell>
      <div class="yy-box--gray">
        <pre>{{cell}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-radio-group v-model="radioGroup1" checked-mode="selected" size="mini" inline>
        <yy-radio label="1">单选1</yy-radio>
        <yy-radio label="2">单选2</yy-radio>
        <yy-radio label="3">单选3</yy-radio>
      </yy-radio-group>
      <div class="yy-box--gray">
        <pre>{{groupSize}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-radio-group v-model="radioGroup2" inline disabled>
        <yy-radio label="1">单选1</yy-radio>
        <yy-radio label="2">单选2</yy-radio>
        <yy-radio label="3">单选3</yy-radio>
      </yy-radio-group>
      <div class="yy-box--gray">
        <pre>{{groupDisabled}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-radio-group v-model="radioGroup3" inline border>
        <yy-radio label="1">单选1</yy-radio>
        <yy-radio label="2">单选2</yy-radio>
        <yy-radio label="3">单选3</yy-radio>
      </yy-radio-group>
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
  mode,
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
      mode,
      size,
      cell,
      groupSize,
      groupDisabled,
      groupBorder,
      radio1: '1',
      radio2: '3',
      radio3: '3',
      radio4: '3',
      radio5: '3',
      radio6: '3',
      radio7: '',
      radioGroup1: '1',
      radioGroup2: '1',
      radioGroup3: '',
    };
  },
  methods: {
    handleClick(val) {
      this.radio7 = val;
    },
  },
  created() {
  },
};
</script>
