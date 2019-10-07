// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import router from "./router";
import App from "./app";
import Widgets from "./widget";

Vue.config.productionTip = false;

Vue.use(Widgets);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  mounted() {
    const $html = document.querySelector("html");
    if ($html) {
      const scrWidth = document.documentElement.clientWidth;
      $html.style.fontSize = `${scrWidth / 7.5}px`;
    }
  },
  template: "<App/>"
});
