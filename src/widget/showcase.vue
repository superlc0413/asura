<template>
  <div class="x-showcase">
    <img class="x-showcase__illustration" :src="img" alt />
    <div class="x-showcase__content">
      <div class="x-showcase__caption">{{caption}}</div>
      <div class="x-showcase__desc">{{desc}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    img: {
      type: String,
      default: ""
    },
    caption: {
      type: String,
      default: "尚无标题"
    },
    desc: {
      type: String,
      default: "尚无描述"
    }
  },
  methods: {},
  computed: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss">
.x-showcase {
  width: 6.9rem;
  margin: 0 auto;
  // border: 1px solid #fff;
  border-radius: 0.08rem;
  overflow: hidden;
  .x-showcase__illustration {
    display: block;
    width: 100%;
  }
  .x-showcase__content {
    padding: 0.64rem 0;
    background: #fff;
    .x-showcase__caption {
      font-size: 0.4rem;
      line-height: 1;
      text-align: center;
    }
    .x-showcase__desc {
      font-size: 0.28rem;
      line-height: 1;
      margin-top: 0.36rem;
      text-align: center;
    }
  }
}
</style>


