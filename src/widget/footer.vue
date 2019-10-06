<template>
  <div class="app-footer">
    <img class="app-footer__logo" :src="logo2" alt />
    <div class="app-footer__sitemap app-footer__txt">站点地图</div>
    <!-- 联系方式行 -->
    <div class="app-footer__tel flex">
      <img class="app-footer__telicon" :src="tel2" alt />
      <div class="app-footer__txt">
        <slot name="telNum"></slot>
      </div>
    </div>
    <!-- 地址行 -->
    <div class="app-footer__addr flex">
      <div class="app-footer__txt">地址：</div>
      <div class="app-footer__txt">
        <slot name="addr"></slot>
      </div>
    </div>
    <!-- unkown -->
    <ul class="app-footer__unkown flex">
      <li>专业指导</li>
      <li>统一管理</li>
      <li>服务支持</li>
      <li>辅导详情</li>
    </ul>
  </div>
</template>
<script>
import logo2 from "@/asset/logo2.png";
import tel2 from "@/asset/tel2.png";

export default {
  data() {
    return {
      logo2,
      tel2
    };
  },
  methods: {}
};
</script>
<style lang="scss">
.app-footer {
  width: 100%;
  padding: 0.6rem 0.32rem 0.35rem;
  background: #333333;
  .app-footer__txt,
  .app-footer__unkown > li {
    font-size: 0.28rem;
    color: #fff;
    line-height: 1;
  }
  .app-footer__logo {
    height: 0.58rem;
    display: block;
    margin: 0 auto 0;
  }
  .app-footer__sitemap {
    margin-top: 0.56rem;
  }
  .app-footer__tel {
    margin-top: 0.37rem;
    .app-footer__telicon {
      height: 0.3rem;
      margin-right: 0.28rem;
    }
  }
  .app-footer__addr {
    margin-top: 0.19rem;
  }
  .app-footer__unkown {
    margin-top: 0.87rem;
    justify-content: space-between;
  }
}
</style>