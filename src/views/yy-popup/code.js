/* eslint-disable */
const base =
`<yy-popup v-model="popup.left" :z-index="popup.leftIdx" @on-close="onClose('left')"></yy-popup>
<yy-popup v-model="popup.right" placement="right" :z-index="popup.rightIdx" @on-close="onClose('right')"></yy-popup>
<yy-popup v-model="popup.bottom" placement="bottom" :z-index="popup.bottomIdx" @on-close="onClose('bottom')"></yy-popup>`;

const method =
`showPopup(key) {
  this.popup[key] = true;
  this.popup[key + 'Idx'] = 2;
},
onClose(key) {
  this.popup[key + 'Idx'] = 0;
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
},`

const width =
`<yy-popup v-model="popup.width" :width="200" :z-index="popup.widthIdx" @on-close="onClose('width')"></yy-popup>
<yy-popup v-model="popup.push" :z-index="popup.pushIdx" show-mode="push" @on-close="onClose('push')">
  <div class="yy-text--primary" style="position:absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">push模式下，此处内容将随之左右移动</div>
</yy-popup>`;

const auto =
`<p>单选结果：{{radio}}</p>
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
</yy-popup>`;
export {
  base,
  method,
  width,
  auto,
};
