import Navibar from "./navibar";
import Footer from "./footer";
import Banner from "./banner";
import Menu from "./menu";

export default {
  install(Vue, options) {
    Vue.component("AppNavi", Navibar);
    Vue.component("AppFooter", Footer);
    Vue.component("AppBanner", Banner);
    Vue.component("AppMenu", Menu);
  }
};