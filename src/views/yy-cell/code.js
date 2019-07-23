/* eslint-disable */

const base =
`<yy-cell-group title="基本用法">
  <yy-cell title="标题" value="内容">
  </yy-cell>
  <yy-cell title="标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题"></yy-cell>
  <yy-cell value="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"></yy-cell>
  <yy-cell title="标题" value="自定义icon">
    <i class="yy-icon-cog yy-text--gray" slot="right-icon"></i>
  </yy-cell>
</yy-cell-group>`;

const icon = 
`<yy-cell-group title="左侧图标">
<yy-cell title="标题" value="内容" icon="yy-icon-list-bullet"></yy-cell>
<yy-cell title="标题" value="内容" icon="yy-icon-spin4 animate-spin"></yy-cell>
</yy-cell-group>`;

const link = 
`<yy-cell-group title="跳转">
  <yy-cell title="标题" @click="handleClick" is-link value="url页面跳转" url="https://www.baidu.com"></yy-cell>
  <yy-cell title="标题" @click="handleClick" is-link value="to vue-router跳转" to="base-button"></yy-cell>
  <yy-cell title="标题" @click="handleClick" is-link value="只设置is-link"></yy-cell>
</yy-cell-group>`;

export {
  base,
  icon,
  link,
};
