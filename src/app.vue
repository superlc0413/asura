<template>
  <div id="app">
    <router-view />
    <!-- footer -->
    <app-footer>
      <template slot="telNum">{{telNum}}</template>
      <template slot="addr">{{addr}}</template>
    </app-footer>
    <!-- menu body -->
    <app-menu ref="appMenu" class="dark"></app-menu>
  </div>
</template>


<script>
export default {
  name: "App",
  data() {
    return {
      telNum: "18621337717",
      addr: "上海市虹桥世界中心"
    };
  },
  methods: {
    onGlobalClk() {
      this.$refs.appMenu.hide();
    },
    onMenuBtnClk() {
      this.$refs.appMenu.toggle();
    }
  }
};
</script>

<style lang="scss">
@import "./common/base.scss";
body {
  background: #efefef;
}
#app {
  padding-top: 1.2rem;
  .app-navi {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0 0 5px #999;
  }
  .app-menu {
    z-index: 1001;
  }
}
</style>

