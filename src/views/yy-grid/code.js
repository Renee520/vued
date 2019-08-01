/* eslint-disable */

const optionData =
`options: [
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
],`;

const base =
`<yy-grid :col="4" :options="options"></yy-grid>`;
const color =
`<yy-grid color :options="colorOptions"></yy-grid>`;
const border =
`<yy-grid border :options="options"></yy-grid>`;
const fullBorder =
`<yy-grid fullBorder :options="options"></yy-grid>`;
const click =
`<yy-grid @grid-click="handleClick" fullBorder :options="options"></yy-grid>

handleClick(option) {
  let msg = '';
  for (const item in option) {
    if (Object.prototype.hasOwnProperty.call(option, item)) {
      msg += item: option[item]\n;
    }
  }
  this.$dialog({
    msg,
    msgAlign: 'left',
  });
},
`;


export {
  optionData,
  base,
  color,
  border,
  fullBorder,
  click,
};
