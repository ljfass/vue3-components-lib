import { defineComponent, openBlock, createElementBlock } from "vue";
import "./style/index.css.js";
const _hoisted_1 = {
  type: "text",
  class: "ljf-input"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "ljf-input" },
  __name: "input",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("input", _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
