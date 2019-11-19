/* eslint-disable */

const optionData =
`const objArr = {
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
`;
const objData = `
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
`;
const stringData = `
options: ['杭州', '宁波', '温州', '嘉兴', '湖州', '湖州'],
`;
const listData = `
options2: [
  {
    values: Object.keys(objArr),
  },
  {
    values: objArr[1],
  },
],`;

const base =
`<yy-picker :options="options" @change="onChange"></yy-picker>`;
const keyValue =
`<yy-picker :options="options1"  @change="onChange"></yy-picker>`;
const list =
`<yy-picker :options="options2"  @change="onChangeObj"></yy-picker>`;
const click =
`onChange({ picker, idx, value }) {
  console.log(picker, idx, value);
},
onChangeObj({ idx, value }) {
  console.log(idx, value);
  for (let i = 1; i < this.options2.length; i += 1) {
    this.options2[i].values = objArr[value[i - 1]];
  }
},
`;


export {
  optionData,
  stringData,
  objData,
  listData,
  base,
  keyValue,
  list,
  click,
};
