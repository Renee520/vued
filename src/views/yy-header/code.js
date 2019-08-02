/* eslint-disable */
const base =
`<yy-header
  :left-arrow="true"
  :left-text="'返回'"
  :title="'标题'"
  :fixed="false"
  >
  <span slot="right">
    文字
  </span>
</yy-header>`;

const leftTo =
`<yy-header
  :left-to="'/form-checkbox'"
  :left-text="'复选框'"
  :title="'左边路由左边路由左边路由左边路由左边路由左边路由'"
  :fixed="false"
  >
  <span slot="right">
    <i class="yy-icon-mail-alt"></i>
  </span>
</yy-header>`;

const leftClick =
`<yy-header
  :left-text="'返回'"
  :title="'左边点击'"
  :fixed="false"
  @click-left="handleLeftClick"
  >
  <span slot="right">
    <i class="yy-icon-mail-alt"></i>
  </span>
</yy-header>`;

const auto =
`<yy-header
  :left-text="'返回'"
  :fixed="false"
  :title="'样式'"
  bg-color="#000"
  text-color="#fff"
  :height="40"
  >
  <span slot="right">
    <i class="yy-icon-chat-empty"></i>
  </span>
</yy-header>`;

export {
  base,
  leftTo,
  leftClick,
  auto,
};
