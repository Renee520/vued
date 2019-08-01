<template>
  <div class="yy-page">
    <div class="yy-box">
      <div class="yy-box--gray">
        <p>color: 设置为true时，可随机生成颜色</p>
        <p>border: 边框</p>
        <p>fullBorder: 边框，没有填完整一行将也会有边框</p>
        <p>col: 每行的网格格式，[1-6]</p>
        <p>options: 网格中内容 object {color, img, text, icon, to}</p>
        <p>@grid-click: 点击触发事件，返回点击网格参数</p>
      </div>
    </div>
    <div class="yy-box">
      <div class="yy-box--gray">
        <pre>{{optionData}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-grid :col="4" :options="options"></yy-grid>
      <div class="yy-box--gray">
        <pre>{{base}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-grid color :options="colorOptions"></yy-grid>
      <div class="yy-box--gray">
        <pre>{{color}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-grid border :options="options"></yy-grid>
      <div class="yy-box--gray">
        <pre>{{border}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-grid fullBorder :options="options"></yy-grid>
      <div class="yy-box--gray">
        <pre>{{fullBorder}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <p>点击</p>
      <yy-grid @grid-click="handleClick" fullBorder :options="options"></yy-grid>
      <div class="yy-box--gray">
        <pre>{{click}}</pre>
      </div>
    </div>
  </div>
</template>
<script>
import {
  optionData,
  base,
  color,
  border,
  fullBorder,
  click,
} from './code';

export default {
  data() {
    return {
      optionData,
      base,
      color,
      border,
      fullBorder,
      click,
      options: [
        {
          img: require('../../assets/logo.png'),
          text: '图片',
        },
        {
          color: 'green',
          icon: 'yy-icon-folder-open',
          text: '绿色',
        },
        {
          icon: 'yy-icon-folder-open',
          text: '图标',
        },
        {
          icon: 'yy-icon-ok',
          to: 'base-icon',
          text: '路由name',
        },
      ],
      colorOptions: [
        {
          icon: 'yy-icon-folder-open',
          text: '图标',
        },
        {
          icon: 'yy-icon-ok',
          to: 'base-icon',
          text: '路由name',
        },
      ],
    };
  },
  methods: {
    handleClick(option) {
      let msg = '';
      for (const item in option) {
        if (Object.prototype.hasOwnProperty.call(option, item)) {
          msg += `${item}: ${option[item]}\n`;
        }
      }
      this.$dialog({
        msg,
        msgAlign: 'left',
      });
    },
  },
  created() {
  },
};
</script>
