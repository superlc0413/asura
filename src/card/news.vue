<template>
  <div class="wrap">
    <!-- banner -->
    <div class="banner">
      <img :src="banner" alt />
    </div>
    <!-- news -->
    <ul class="news-list">
      <li v-for="news in newsList" :key="news.id">
        <div class="wrap">
          <img :src="news.poster" alt class="poster" />
          <div class="title">{{news.title}}</div>
          <div class="desc">{{news.desc}}</div>
          <div class="date-row ibox">
            <div class="date">{{news.date}}</div>
            <div class="right">查看详情&gt;&gt;</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import newsList from "../news";
import banner from "../asset/banner3.jpg";

export default {
  data() {
    return {
      banner,
      newsList
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
.news-list {
  li {
    background: #fff;
    padding: 0.3rem 0;
    margin-top: 0.35rem;
    &:first-child {
      margin-top: 0;
    }
    > .wrap {
      width: 6.9rem;
      margin: 0 auto;
      .poster {
        display: block;
        width: 100%;
      }
      .title {
        font-size: 0.48rem;
        color: #000;
        line-height: 0.62rem;
        margin-top: 0.3rem;
      }
      .desc {
        font-size: 0.26rem;
        color: #000;
        line-height: 0.5rem;
        text-align: justify;
        margin-top: 0.4rem;
      }
      .date-row {
        margin-top: 0.38rem;
        .date {
          font-size: 0.26rem;
          line-height: 1;
          color: #000;
        }
        .right {
          font-size: 0.26rem;
          line-height: 1;
          color: #000;
          cursor: pointer;
        }
      }
    }
  }
}
.app-footer {
  margin-top: 0.3rem;
}
</style>


