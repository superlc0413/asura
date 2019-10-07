import Navibar from "./navibar";
import Footer from "./footer";
import Banner from "./banner";
import Menu from "./menu";

import Showcase from "./showcase";
import Section from "./section";

export default {
  install(Vue, options) {
    Vue.component("AppNavi", Navibar);
    Vue.component("AppFooter", Footer);
    Vue.component("AppBanner", Banner);
    Vue.component("AppMenu", Menu);
    // business widgets
    Vue.component("XShowcase", Showcase);
    Vue.component("XSection", Section);
  }
};
