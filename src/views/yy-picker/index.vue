<template>
  <div class="yy-page" ref="page">
    <div class="yy-box">
      <div class="yy-box--gray">
        <p>数据中为字符串</p>
        <p><pre>{{stringData}}</pre></p>
        <p><pre>{{base}}</pre></p>
      </div>
      <yy-picker :options="options" @change="onChange"></yy-picker>
    </div>
    <div class="yy-box">
      <div class="yy-box--gray">
        <p>数据中为对象，键值为test，value</p>
        <p><pre>{{objData}}</pre></p>
        <p><pre>{{keyValue}}</pre></p>
      </div>
      <yy-picker :options="options1"  @change="onChange"></yy-picker>
    </div>
    <div class="yy-box">
      <div class="yy-box--gray">
        <p>多列</p>
        <p><pre>{{listData}}</pre></p>
        <p><pre>{{list}}</pre></p>
      </div>
      <yy-picker :options="options2"  @change="onChangeObj"></yy-picker>
    </div>
    <div class="yy-box">
      <div class="yy-box--gray">
        <p>change， 返回当前滑动dom：picker，下标：idx，值：value</p>
        <p><pre>{{click}}</pre></p>
      </div>
    </div>
  </div>
</template>
<script>
import {
  optionData,
  stringData,
  objData,
  listData,
  base,
  keyValue,
  list,
  click,
} from './code';

const objArr = {
  1: [
    {
      text: '1-1',
      value: '1-1',
    },
    {
      text: '1-2',
      value: '1-2',
    },
  ],
  2: ['2-1', '2-2', '2-3', '2-4'],
  3: ['3-1', '3-2', '3-3', '3-4'],
};
export default {
  data() {
    return {
      optionData,
      stringData,
      objData,
      listData,
      base,
      keyValue,
      list,
      click,
      options: ['杭州', '宁波', '温州', '嘉兴', '湖州', '湖州'],
      options1: [
        {
          text: '1',
          value: 1,
        },
        {
          text: '200',
          value: 2,
        },
        {
          text: '3',
          value: 3,
        },
        {
          text: '4',
          value: 4,
        },
        {
          text: '5',
          value: 5,
        },
        {
          text: '6',
          value: 6,
        },
        {
          text: '7',
          value: 7,
        },
      ],
      options2: [
        {
          values: Object.keys(objArr),
        },
        {
          values: objArr[1],
        },
      ],
    };
  },
  methods: {
    onChange({ picker }) {
      console.log(picker);
    },
    onChangeObj({ idx, value, picker }) {
      console.log(idx, value, picker);
      for (let i = 1; i < this.options2.length; i += 1) {
        this.options2[i].values = objArr[value[i - 1]];
      }
    },
  },
  created() {
    console.log(this.options2);
  },
  mounted() {
  },
};
</script>
