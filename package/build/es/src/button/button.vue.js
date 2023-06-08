import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
import "./style/index.css.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "ljf-button" },
  __name: "button",
  props: {
    type: {}
  },
  setup(__props) {
    const buttonProps = __props;
    const buttonStyle = computed(() => {
      return { [`ljf-button--${buttonProps.type}`]: buttonProps.type };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["ljf-button", buttonStyle.value])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
