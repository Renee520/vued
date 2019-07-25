/* eslint-disable */

const base =
`<yy-checkbox v-model="checkbox1">复选</yy-checkbox>
<yy-checkbox v-model="checkbox1">复选</yy-checkbox>
<p>选中的值：{{checkbox1}}</p>`;

const inline = 
`<yy-checkbox inline v-model="checkbox2">复选1</yy-checkbox>
<yy-checkbox disabled inline v-model="checkbox3">复选2</yy-checkbox>
<yy-checkbox disabled inline v-model="checkbox4">复选3</yy-checkbox>`;

const border = 
`<yy-checkbox border inline v-model="checkbox5">复选1</yy-checkbox>
<yy-checkbox border disabled inline v-model="checkbox6">复选2</yy-checkbox>
<yy-checkbox border disabled inline v-model="checkbox7">复选3</yy-checkbox>`;

const size = 
`<yy-checkbox inline border size="mini" v-model="checkbox8">复选1</yy-checkbox>
<yy-checkbox inline border v-model="checkbox9">复选2</yy-checkbox>
<yy-checkbox inline border size="large" v-model="checkbox10">复选3</yy-checkbox>`;

const cell = 
`<yy-cell title="复选1" @click="handleClick('checkbox11')">
<yy-checkbox slot="right-icon" is-link size="large" v-model="checkbox11"></yy-checkbox>
</yy-cell>
<yy-cell title="复选2"  @click="handleClick('checkbox12')">
<yy-checkbox slot="right-icon" is-link  size="large" v-model="checkbox12"></yy-checkbox>
</yy-cell>
<yy-cell title="复选3"  @click="handleClick('checkbox13')">
<yy-checkbox slot="right-icon" is-link  size="large" v-model="checkbox13"></yy-checkbox>
</yy-cell>

methods: {
  handleClick(key) {
    this[key] = !this[key];
  },
},
`;

const groupSize = 
`<yy-checkbox-group v-model="checkboxGroup1"  size="mini" inline>
  <yy-checkbox label="1">复选1</yy-checkbox>
  <yy-checkbox label="2">复选2</yy-checkbox>
  <yy-checkbox label="3">复选3</yy-checkbox>
</yy-checkbox-group>
<p>{{checkboxGroup1}}</p>`;

const groupDisabled = 
`<yy-checkbox-group v-model="checkboxGroup2" inline disabled>
  <yy-checkbox label="1">复选1</yy-checkbox>
  <yy-checkbox label="2">复选2</yy-checkbox>
  <yy-checkbox label="3">复选3</yy-checkbox>
</yy-checkbox-group>`;

const groupBorder = 
`<yy-checkbox-group v-model="checkboxGroup3" inline border>
  <yy-checkbox label="1">复选1</yy-checkbox>
  <yy-checkbox label="2">复选2</yy-checkbox>
  <yy-checkbox label="3">复选3</yy-checkbox>
</yy-checkbox-group>
<p>{{checkboxGroup3}}</p>`;

export {
  base,
  inline,
  border,
  size,
  cell,
  groupSize,
  groupDisabled,
  groupBorder,
};
