import Vue from "vue";
import Router from "vue-router";
import Index from "@/card/index";
import Csqnss from "@/card/csqnss";
import News from "@/card/news";
import Cooperation from "@/card/cooperation";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "default",
      component: Index,
      meta: { ch: "首页" }
    },
    {
      path: "/index",
      name: "index",
      component: Index,
      meta: { ch: "首页" }
    },
    {
      path: "/csqnss",
      name: "csqnss",
      component: Csqnss,
      meta: { ch: "CS全脑双师" }
    },
    {
      path: "/news",
      name: "news",
      component: News,
      meta: { ch: "企业咨询" }
    },
    {
      path: "/cooperation",
      name: "cooperation",
      component: Cooperation,
      meta: { ch: "合作服务" }
    }
  ]
});
