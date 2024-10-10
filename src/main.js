import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./route";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

createApp(App).use(ElementPlus).use(Antd).use(router).mount("#app");
