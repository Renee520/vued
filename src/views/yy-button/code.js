/* eslint-disable */

const base = 
`<yy-button>默认按钮</yy-button>
<yy-button type="primary">primary按钮</yy-button>
<yy-button type="error">error按钮</yy-button>
<yy-button type="warning">warning按钮</yy-button>
<yy-button type="info">info按钮</yy-button>
<yy-button type="success">success按钮</yy-button>`;

const round = 
`<yy-button type="success" :round="20">设置圆形大小</yy-button>
<yy-button type="primary" :round="0">设置圆形大小</yy-button>`;

const plain = 
`<yy-button type="error" plain>plain按钮</yy-button>
<yy-button type="success" plain :round="20">plain圆形</yy-button>`;

const block = 
`<yy-button type="info" block>block按钮</yy-button>`;

const size = 
`<yy-button type="primary" size="large">large按钮</yy-button>
<yy-button type="primary">default按钮</yy-button>
<yy-button type="primary" size="mini">mini按钮</yy-button>`;

const disabled = 
`<yy-button type="error" disabled>禁用按钮</yy-button>
<yy-button type="error" disabled plain>禁用按钮</yy-button>`;

const icon = 
`<yy-button type="primary" icon="yy-icon-venus">图标按钮</yy-button>
<yy-button type="primary" icon="yy-icon-spin4 animate-spin">图标按钮</yy-button>
<yy-button type="primary" icon="yy-icon-edit"></yy-button>`;

const loading = 
`<yy-button type="warning" loading="spin4">spin4</yy-button>
<yy-button type="warning" loading="spin5">spin5</yy-button>
<yy-button type="warning" loading="spin6">spin6</yy-button>
<yy-button type="warning" loading="circular">loading按钮</yy-button>`;

const click = 
`<yy-button type="primary" @click.native="handleClick1">click</yy-button>
<yy-button type="primary" loading="circular" @click="handleClick1">click</yy-button>
<yy-button type="primary" disabled @click="handleClick1">click</yy-button>`;

export {
  base,
  round,
  plain,
  size,
  block,
  disabled,
  icon,
  loading,
  click,
};
