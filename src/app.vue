<template>
  <div @click="onGlobalClk" id="app">
    <!-- navibar -->
    <app-navi @menuclick="onMenuBtnClk">
      <template slot="telNum">{{telNum}}</template>
    </app-navi>
    <!-- router-view -->
    <router-view />
    <!-- footer -->
    <app-footer>
      <template slot="telNum">{{telNum}}</template>
      <template slot="addr">{{addr}}</template>
    </app-footer>
    <!-- menu body -->
    <app-menu ref="appMenu"></app-menu>
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
      this.$refs.appMenu.show();
    }
  }
};
</script>

<style lang="scss">
@import "./common/base.scss";
body {
  background: #efefef;
}
</style>

