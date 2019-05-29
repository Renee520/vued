/* eslint-disable */

// Thanks to: https://github.com/airyland/vux/blob/v2/src/directives/transfer-dom/index.js

export default {
  bind: function (el, { value }) {
    let onClickOutside = value
    el.handler = function (e) {
      if (el && !el.contains(e.target)) {
        onClickOutside(e)
      }
    }
    document.addEventListener('click', el.handler, true)
  },
  unbind: function (el) {
    document.removeEventListener('click', el.handler, true)
    el.handler = null
  }
}