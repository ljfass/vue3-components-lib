"use strict";
const vue = require("vue");
require("./style/index.css");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "ljf-button" },
  __name: "button",
  props: {
    type: {}
  },
  setup(__props) {
    const buttonProps = __props;
    const buttonStyle = vue.computed(() => {
      return { [`ljf-button--${buttonProps.type}`]: buttonProps.type };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        class: vue.normalizeClass(["ljf-button", buttonStyle.value])
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
module.exports = _sfc_main;
