<template>
  <div @click="onGlobalClk" class="wrap">
    <!-- navibar -->
    <app-navi @menuclick="onMenuBtnClk">
      <template slot="telNum">{{telNum}}</template>
    </app-navi>
    <!-- banner -->
    <div class="banner">
      <!-- <img :src="banner" alt=""> -->
    </div>
    <!-- footer -->
    <app-footer>
      <template slot="telNum">{{telNum}}</template>
      <template slot="addr">{{addr}}</template>
    </app-footer>
    <!-- menu body -->
    <app-menu ref="appMenu" :menuItems="menuItems"></app-menu>
  </div>
</template>
<script>
// import banner from '../asset/banner.jpg'

export default {
  data() {
    const { telNum, addr } = window.$X;
    return {
      // banner
      telNum,
      addr,
      menuItems: [
        { name: "页面1", path: "index" },
        { name: "页面2", path: "csqnss" },
        { name: "页面3", path: "news" },
        { name: "页面4", path: "cooperation" }
      ]
    };
  },
  methods: {
    onGlobalClk() {
      this.$refs.appMenu.hide();
    },
    onMenuBtnClk() {
      this.$refs.appMenu.show();
    }
  },
  computed: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss">
</style>


