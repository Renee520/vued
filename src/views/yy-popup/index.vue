<template>
  <div class="yy-page">
    <div class="yy-box">
      <div class="yy-box--gray">
        <p>placement: 弹出方向 [left, right, bottom]</p>
        <p>width: placement为left或right，表示弹出宽度；为bottom时表示底部弹出高度</p>
        <p>showMode: 弹出方式 [push, overlay] push表示popup中内容会随之移动，只限于placement为left或right时</p>
        <p>popupClass: popup自定义class</p>
        <p>zIndex: z-index值，多个popup时需要动态设置</p>
      </div>
    </div>
    <div class="yy-box">
      <div class="yy-box--gray">
        <p>使用的公用方法</p>
        <pre>{{method}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-button type="primary" @click="showPopup('left')">左边弹出</yy-button>
      <yy-button type="primary" @click="showPopup('right')">右边弹出</yy-button>
      <yy-button type="primary" @click="showPopup('bottom')">下边弹出</yy-button>
      <yy-popup v-model="popup.left" :z-index="popup.leftIdx" @on-close="onClose('left')"></yy-popup>
      <yy-popup v-model="popup.right" placement="right" :z-index="popup.rightIdx" @on-close="onClose('right')"></yy-popup>
      <yy-popup v-model="popup.bottom" placement="bottom" :z-index="popup.bottomIdx" @on-close="onClose('bottom')"></yy-popup>
      <div class="yy-box--gray">
        <pre>{{base}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-button type="primary" @click="showPopup('width')">设置宽度</yy-button>
      <yy-button type="primary" @click="showPopup('push')">设置push模式</yy-button>
      <yy-popup v-model="popup.width" :width="200" :z-index="popup.widthIdx" @on-close="onClose('width')"></yy-popup>
      <yy-popup v-model="popup.push" :z-index="popup.pushIdx" show-mode="push" @on-close="onClose('push')">
        <div class="yy-text--primary" style="position:absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">push模式下，此处内容将随之左右移动</div>
      </yy-popup>
      <div class="yy-box--gray">
        <pre>{{width}}</pre>
      </div>
    </div>
    <div class="yy-box">
      <yy-button type="primary" @click="showPopup('auto')">自定义picker</yy-button>
      <yy-button type="primary" @click="showPopup('checkbox')">自定义复选</yy-button>
      <p>单选结果：{{radio}}</p>
      <p>复选结果：{{checkbox}}</p>
      <yy-popup v-model="popup.auto" :z-index="popup.autoIdx" placement="bottom" @on-close="onClose('auto')">
        <template slot="popup">
          <yy-cell title="单选1" @click.native="handleClick('1')">
            <yy-radio slot="right-icon" is-link label="1" size="large" checked-mode="selected" v-model="radio"></yy-radio>
          </yy-cell>
          <yy-cell title="单选2"  @click="handleClick('2')">
            <yy-radio slot="right-icon" is-link label="2"  size="large" checked-mode="selected" v-model="radio"></yy-radio>
          </yy-cell>
          <yy-cell title="单选3"  @click="handleClick('3')">
            <yy-radio slot="right-icon" is-link label="3"  size="large" checked-mode="selected" v-model="radio"></yy-radio>
          </yy-cell>
        </template>
      </yy-popup>
      <yy-popup v-model="popup.checkbox" :z-index="popup.checkboxIdx" placement="bottom" @on-close="onClose('checkbox')">
        <template slot="popup">
          <div class="yy-float" style="border-bottom: 1px solid #eee;padding: 10px;">
            <div class="yy-float--left yy-text--info" @click="popup.checkbox = false">取消</div>
            <div class="yy-float--right yy-text--primary" @click="popup.checkbox = false">确认</div>
          </div>
          <yy-cell title="复选1" @click="checkboxClick(0)">
          <yy-checkbox slot="right-icon" is-link size="large" v-model="checkbox[0]"></yy-checkbox>
          </yy-cell>
          <yy-cell title="复选2"  @click="checkboxClick(1)">
          <yy-checkbox slot="right-icon" is-link  size="large" v-model="checkbox[1]"></yy-checkbox>
          </yy-cell>
          <yy-cell title="复选3"  @click="checkboxClick(2)">
          <yy-checkbox slot="right-icon" is-link  size="large" v-model="checkbox[2]"></yy-checkbox>
          </yy-cell>
        </template>
      </yy-popup>
      <div class="yy-box--gray">
        <pre>{{auto}}</pre>
      </div>
    </div>
  </div>
</template>
<script>
import {
  base,
  method,
  width,
  auto,
} from './code';

export default {
  data() {
    return {
      base,
      method,
      width,
      auto,
      radio: '',
      checkbox: [true, true, true],
      popup: {
        left: false,
        leftIdx: 0,
        right: false,
        rightIdx: 0,
        bottom: false,
        bottomIdx: 0,
        width: false,
        widthIdx: 0,
        push: false,
        pushIdx: 0,
        auto: false,
        autoIdx: 0,
        checkbox: false,
        checkboxIdx: 0,
      },
    };
  },
  methods: {
    showPopup(key) {
      this.popup[key] = true;
      this.popup[`${key}Idx`] = 2;
    },
    onClose(key) {
      this.popup[`${key}Idx`] = 0;
    },
    handleClick(value) {
      this.radio = value;
      setTimeout(() => {
        this.popup.auto = false;
      }, 100);
    },
    checkboxClick(val) {
      this.checkbox[val] = !this.checkbox[val];
      this.checkbox.splice();
    },
  },
  created() {
  },
};
</script>
