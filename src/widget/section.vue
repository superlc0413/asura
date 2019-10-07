<template>
  <section class="x-section">
    <div class="x-section__wrap">
      <div class="x-section__title">{{mainTitle}}</div>
      <div class="x-section__subtitle" v-if="subTitle">{{subTitle}}</div>
      <slot></slot>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    mainTitle: { type: String, default: "" },
    subTitle: { type: String, default: "" }
  },
  methods: {}
};
</script>
<style lang="scss">
.x-section {
  padding: 0.52rem 0 0.3rem;
  background: #fff;
  margin-top: 0.4rem;
  .x-section__wrap {
    margin: 0 auto;
    width: 6.9rem;
    .x-section__title {
      color: #333;
      font-size: 0.48rem;
      line-height: 1;
      white-space: nowrap;
      text-align: center;
    }
    .x-section__subtitle {
      color: #8590ac;
      font-size: 0.28rem;
      line-height: 0.5rem;
      text-align: center;
      margin-top: 0.25rem;
    }
  }
}
</style>