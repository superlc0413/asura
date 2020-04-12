<template>
  <div class="wrap">
    <!-- banner -->
    <div class="banner">
      <img :src="banner" alt />
    </div>
    <!-- tabs -->
    <ul class="subnavi">
      <li
        v-for="item in subNaviItems"
        :key="item.id"
        :class="{active:activeModule === item.id}"
        @click="toSubModule(item.id)"
      >{{item.label}}</li>
    </ul>

    <!-- brand brief -->
    <div class="sub-module" id="brand-brief">
      <div class="title">品牌简介</div>
      <div class="wrap">
        <img class="poster" :src="photo7" alt />
        <div
          class="desc"
        >“CS全脑双师”是由千望集团教育综合体创始人罗汀泰创立，CS全脑双师倡导共享优质课程，让教育无边界理念CS全脑双师以优质的在线课程，先进的教育技术，互联网 教育的模式向外界发声，致力于发展全国连锁品牌，为教育机构提供优质的教研资源与学习帮助。一步一个脚印感知世界的变化，延展通识教育的边界，搭建一个自由、天真、活泼、勇敢、勤奋、团结、好学习、好实践等的成长环境为基础，CS全脑双师将持续致力于全国优质教育。</div>
        <ul class="list ibox">
          <li>
            <div class="cap_cn">品牌愿景</div>
            <div class="cap_en">Brand Vision</div>
            <div class="desc">共享优质课程 让教育无边界</div>
          </li>
          <li>
            <div class="cap_cn">品牌使命</div>
            <div class="cap_en">Brand Mission</div>
            <div class="desc">对孩子负责，对家长负责，对品牌负责，让教育回归教育</div>
          </li>
          <li>
            <div class="cap_cn">核心价值观</div>
            <div class="cap_en">Core Values</div>
            <div class="desc">守先师、守初心；重教研、重科技；谋发展、可持续；</div>
          </li>
          <li>
            <div class="cap_cn">发展策略</div>
            <div class="cap_en">Dev Strategies</div>
            <div class="desc">打造教育良心品牌，共建全国教育流量池，受益祖国花朵</div>
          </li>
        </ul>
      </div>
    </div>

    <!-- dev history -->
    <!-- <div id="dev-history"></div> -->

    <!-- ceo words -->
    <div id="ceo-words">
      <div class="wrap">
        <div class="title">总裁寄言</div>
        <div class="h-line line1"></div>
        <div class="subtitle">起点领先别人一步，成就超越别人一生</div>
        <div class="h-line line2"></div>
        <div
          class="desc"
        >主营项目发展愿景与使命指出CS全脑双师是以“高效，省时，精准”为核心，打破现有市场布局，融合国内优质内容，将优质学习资源通过互联网输送全国各地的一家教育科技公司。让教育无边界，让学生真正的享受优质教学内容。</div>
        <img class="ceo" :src="img_ltt3" alt />
      </div>
    </div>

    <!-- honor achieve -->
    <div class="sub-module" id="honor-achieve">
      <div class="title">荣誉成绩</div>
      <div class="wrap">
        <div
          class="desc"
        >“cs全脑双师”以专业的教学理念，科学的教研实践和有趣的学习方式吸引了广大的教育企业与之合作，并且“CS全脑双师”针对学生记忆能力薄弱的教育环节延伸出更多容易记忆的学习方法：千人千面智能算法，个性化记忆逻辑，让孩子学习更简单更轻松。同时大数据云端处理，让学生学勤考核全方面进步。</div>
        <div class="subtitle">品牌力量</div>
        <div
          class="desc"
        >“cs全脑双师”全方位支持您，统一品牌运营管理、技术授权和权威信任指导，从前期办学招生引流都有一套成熟的流程说明，为您引荐成功列子校区，教您规划管理，定期还会有一定的各校方交流会，让您更具信心，同时更具经验。提供高品质的教学，高质量设备让您更具品牌优势让您无忧发。</div>
      </div>
    </div>

    <!-- dev scale -->
    <div class="sub-module" id="dev-scale">
      <div class="title">发展规模</div>
      <div class="wrap">
        <div
          class="desc"
        >作为一个新型全脑速记研究教育机构，现已在上海、河北、山东、内蒙古等全国多个省份地区成功创立多家合作机构以及行业交流会，让全脑新型教育遍布全国，拥有大量教育名师资源。</div>
        <img class="poster" :src="photo8" alt />
        <div class="subtitle">学习环境优异，教育遍布全国，软件服务优势</div>
      </div>
    </div>
  </div>
</template>
<script>
import banner from "../asset/banner2.jpg";
import photo7 from "../asset/photo7.jpg";
import photo8 from "../asset/photo8.jpg";
import img_ltt3 from "../asset/ltt3.jpg";
import gauss1 from "../asset/gauss1.jpg";
import gauss2 from "../asset/gauss2.jpg";
import gauss3 from "../asset/gauss3.jpg";
import gauss4 from "../asset/gauss4.jpg";

export default {
  data() {
    return {
      banner,
      photo7,
      photo8,
      img_ltt3,
      gauss1,
      gauss2,
      gauss3,
      gauss4,
      subNaviItems: [
        { label: "品牌简介", id: "brand-brief" },
        // { label: "发展历程", id: "dev-history" },
        { label: "总裁寄言", id: "ceo-words" },
        { label: "荣誉成绩", id: "honor-achieve" },
        { label: "发展规模", id: "dev-scale" }
      ],
      activeModule: "brand-brief"
    };
  },
  methods: {
    toSubModule(moduleId) {
      // 判断当前模块是否存在
      const $curModule = document.querySelector(`#${this.activeModule}`);
      if (!$curModule) {
        this.activeModule = this.subNaviItems[0].id;
        return;
      }
      // 判断新的目标模块是否存在
      const $module = document.querySelector(`#${moduleId}`);
      if (!$module) {
        return;
      }

      document.documentElement.scrollTop = $module.offsetTop;
      this.activeModule = moduleId;
    }
  },
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
.subnavi {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  height: 1rem;
  li {
    font-size: 0.28rem;
    color: #000;
    cursor: pointer;
    &.active {
      color: #77bc28;
    }
  }
}

.sub-module {
  background: #fff;
  margin-top: 0.4rem;
  padding: 0.4rem 0 0.3rem;
  > .title {
    font-size: 0.48rem;
    color: #000;
    text-align: center;
    font-weight: bold;
    line-height: 1;
  }
  > .wrap {
    width: 6.9rem;
    margin: 0 auto;
  }
}

#brand-brief {
  .wrap {
    width: 6.9rem;
    margin: 0.24rem auto 0;
    .poster {
      display: block;
      width: 100%;
      margin-top: 0.24rem;
    }
    .desc {
      font-size: 0.27rem;
      line-height: 0.4rem;
      color: #333;
      text-align: justify;
      margin-top: 0.22rem;
    }
    .list {
      white-space: normal;
      margin-left: -0.32rem;
      li {
        width: 3.29rem;
        height: 5.39rem;
        padding: 0.92rem 0.2rem 0 0.3rem;
        margin-top: 0.32rem;
        margin-left: 0.32rem;
        .cap_cn {
          color: #fff;
          font-size: 0.4rem;
          line-height: 1;
          text-align: left;
        }
        .cap_en {
          color: #fff;
          font-size: 0.4rem;
          line-height: 1;
          text-align: left;
          margin-top: 0.5rem;
        }
        .desc {
          color: #fff;
          font-size: 0.28rem;
          line-height: 0.5rem;
          text-align: left;
          margin-top: 0.24rem;
        }
        &:nth-child(1) {
          background: url(../asset/gauss1.jpg) no-repeat center;
        }
        &:nth-child(2) {
          background: url(../asset/gauss2.jpg) no-repeat center;
        }
        &:nth-child(3) {
          background: url(../asset/gauss3.jpg) no-repeat center;
        }
        &:nth-child(4) {
          background: url(../asset/gauss4.jpg) no-repeat center;
        }
      }
    }
  }
}

#ceo-words {
  background: #cfd8e7;
  padding-top: 0.52rem;
  margin-top: 0.4rem;
  > .wrap {
    width: 6.9rem;
    margin: 0 auto;
    .title {
      font-size: 0.44rem;
      color: #333;
      line-height: 1;
      font-weight: bold;
    }
    .h-line {
      background: #77bc28;
    }
    .line1 {
      width: 5.5rem;
      margin-top: 0.34rem;
    }
    .subtitle {
      font-size: 0.36rem;
      color: #000;
      line-height: 1;
      margin-top: 0.34rem;
    }
    .line2 {
      width: 0.58rem;
      margin-top: 0.34rem;
    }
    .desc {
      font-size: 0.28rem;
      color: #000;
      line-height: 0.45rem;
      margin-top: 0.25rem;
    }
    .ceo {
      display: block;
      height: 6.02rem;
      margin: 0.3rem auto 0;
    }
  }
}

#honor-achieve {
  .desc {
    font-size: 0.26rem;
    line-height: 0.5rem;
    color: #333;
    margin-top: 0.43rem;
    &:first-child {
      margin-top: 0.48rem;
    }
  }
  .subtitle {
    font-size: 0.36rem;
    color: #000;
    line-height: 1;
    margin-top: 0.42rem;
  }
}

#dev-scale {
  .wrap {
    .desc {
      font-size: 0.28rem;
      color: #929199;
      line-height: 0.5rem;
      text-align: left;
      margin-top: 0.49rem;
    }
    .poster {
      display: block;
      width: 100%;
      margin-top: 0.25rem;
    }
    .subtitle {
      font-size: 0.28rem;
      color: #000;
      line-height: 1;
      text-align: center;
      margin-top: 0.3rem;
    }
  }
}
.app-footer {
  margin-top: 0.3rem;
}
</style>


