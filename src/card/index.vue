<template>
  <div class="wrap">
    <!-- navibar -->
    <app-navi>
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
      addr
    };
  },
  methods: {},
  computed: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss">
</style>


