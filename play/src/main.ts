import "./assets/main.css";
import { Button } from "@yuntulib/components";
import { Input } from "@yuntulib/components";
import YuntuUi from "@yuntulib/components";
// console.log("YuntuUi: ", YuntuUi);
// import "@yuntulib/components/es/src/button/style/index.css";
// import "@yuntulib/components/lib/";
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(YuntuUi).mount("#app");
// createApp(App).use(YuntuUi).mount("#app");
