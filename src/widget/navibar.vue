<template>
  <div class="app-navi">
    <div class="app-navi__wrap ibox">
      <!-- left part -->
      <img class="app-navi__logo" :src="logo1" alt />
      <!-- right part -->
      <div class="right ibox">
        <img class="app-navi__tel" :src="tel1" alt />
        <div class="app-navi__telnum green">
          <slot name="telNum"></slot>
        </div>
        <img class="app-navi__menu" @click.stop="$emit('menuclick')" :src="menu1" alt />
      </div>
    </div>
  </div>
</template>
<script>
import logo1 from "@/asset/logo1.jpg";
import tel1 from "@/asset/tel1.png";
import menu1 from "@/asset/menu1.png";

export default {
  data() {
    return {
      logo1,
      tel1,
      menu1
    };
  },
  methods: {}
};
</script>
<style lang="scss">
@import url(../common/base.scss);

.app-navi {
  background: #fff;
  padding: 0 15px;
  .app-navi__wrap {
    height: 1.35rem;
    .app-navi__logo {
      height: 0.6rem;
      margin-right: 0.08rem;
    }
    .app-navi__tel {
      height: 0.28rem;
    }
    .app-navi__telnum {
      font-size: 0.26rem;
      margin-right: 0.17rem;
    }
    .app-navi__menu {
      height: 0.45rem;
      cursor: pointer;
    }
  }
}
</style>