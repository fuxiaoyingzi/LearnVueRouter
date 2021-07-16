import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import toast from "./components/toast";

Vue.config.productionTip = false;

//安装toast插件
Vue.use(toast);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
