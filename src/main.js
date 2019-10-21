// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import MintUi from "mint-ui"
import router from "./router";
import App from "./app";
import Widgets from "./widget";

Vue.config.productionTip = false;

Vue.use(MintUi);
Vue.use(Widgets);

window.$X = {
  telNum: "18621337717",
  addr: "上海市虹桥世界中心"
};

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  mounted() {
    const $html = document.querySelector("html");
    if ($html) {
      const screenWidth = document.documentElement.clientWidth;
      const designWidth = 750;
      $html.style.fontSize = `${(screenWidth * 100) / designWidth}px`;
    }
  },
  template: "<App/>"
});
