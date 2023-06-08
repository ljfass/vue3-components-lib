"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const button_vue_vue_type_script_setup_true_lang = require("./button.vue.js");
const withInstall = (comp) => {
  comp.install = (app) => {
    const name = comp.name;
    console.log("name: ", name);
    app.component(name, comp);
  };
  return comp;
};
const Button = withInstall(button_vue_vue_type_script_setup_true_lang);
exports.Button = Button;
exports.default = Button;
