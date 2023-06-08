import "./assets/main.css";
import { Button } from "@yuntulib/components";
// import { Input } from "@yuntulib/components";
// import YuntuUi from "@yuntulib/components";
// import "@yuntulib/components/es/style.css";
// import "@yuntulib/components/lib/";
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(Button).mount("#app");
