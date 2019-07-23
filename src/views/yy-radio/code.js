/* eslint-disable */

const base =
`<yy-radio label="1" v-model="radio1">单选11</yy-radio>
<yy-radio label="2" v-model="radio1">单选2</yy-radio>
<p>选中的值：{{radio1}}</p>`;

const inline = 
`<yy-radio label="1" inline v-model="radio2">单选1</yy-radio>
<yy-radio label="2" inline v-model="radio2">单选2</yy-radio>
<yy-radio label="3" disabled inline v-model="radio2">单选3</yy-radio>
<yy-radio label="4" disabled inline v-model="radio2">单选4</yy-radio>`;

const border = 
`<yy-radio label="1" border inline v-model="radio3">单选1</yy-radio>
<yy-radio label="2" border disabled inline v-model="radio3">单选2</yy-radio>
<yy-radio label="3" border disabled inline v-model="radio3">单选3</yy-radio>`;

const mode = 
`<yy-radio label="1" checked-mode="selected" v-model="radio4">单选1</yy-radio>
<yy-radio label="2" checked-mode="selected" v-model="radio4">单选2</yy-radio>
<yy-radio label="3" disabled checked-mode="selected" v-model="radio4">单选3</yy-radio>`;

const size = 
`<yy-radio label="1" inline border size="mini" checked-mode="selected" v-model="radio6">单选1</yy-radio>
<yy-radio label="2"  inline border checked-mode="selected" v-model="radio6">单选2</yy-radio>
<yy-radio label="3"  inline border size="large" checked-mode="selected" v-model="radio6">单选3</yy-radio>`;

const cell = 
`<yy-cell title="单选1" @click="handleClick('1')">
<yy-radio slot="right-icon" is-link label="1" size="large" checked-mode="selected" v-model="radio7"></yy-radio>
</yy-cell>
<yy-cell title="单选2"  @click="handleClick('2')">
<yy-radio slot="right-icon" is-link label="2"  size="large" checked-mode="selected" v-model="radio7"></yy-radio>
</yy-cell>
<yy-cell title="单选31"  @click="handleClick('3')">
<yy-radio slot="right-icon" is-link label="3"  size="large" checked-mode="selected" v-model="radio7"></yy-radio>
</yy-cell>`;

const groupSize = 
`<yy-radio-group v-model="radioGroup1" checked-mode="selected" size="mini" inline>
<yy-radio label="1">单选1</yy-radio>
<yy-radio label="2">单选2</yy-radio>
<yy-radio label="3">单选3</yy-radio>
</yy-radio-group>`;

const groupDisabled = 
`<yy-radio-group v-model="radioGroup2" inline disabled>
<yy-radio label="1">单选1</yy-radio>
<yy-radio label="2">单选2</yy-radio>
<yy-radio label="3">单选3</yy-radio>
</yy-radio-group>`;

const groupBorder = 
`<yy-radio-group v-model="radioGroup3" inline border>
<yy-radio label="1">单选1</yy-radio>
<yy-radio label="2">单选2</yy-radio>
<yy-radio label="3">单选3</yy-radio>
</yy-radio-group>`;

export {
  base,
  inline,
  border,
  mode,
  size,
  cell,
  groupSize,
  groupDisabled,
  groupBorder,
};
