<template>
  <div class="wrap">
    <!-- banner -->
    <div class="banner">
      <img :src="banner" alt />
    </div>
  </div>
</template>
<script>
import banner from "../asset/banner4.jpg";

export default {
  data() {
    return {
      banner,
    };
  },
  methods: {},
  computed: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss">
body {
  background: #efefef;
}
.banner {
  img {
    display: block;
    width: 100%;
  }
}
.showcases {
  margin-top: 0.35rem;
  .x-showcase {
    margin-top: 0.3rem;
    &:first-child {
      margin-top: 0;
    }
  }
}
.app-footer {
  margin-top: 0.3rem;
}
</style>


