<template>
  <div class="wrap">
    <!-- banner -->
    <div class="banner">
      <img :src="banner" alt />
    </div>

    <!-- cschina -->
    <x-section class="cschina" main-title="CS全脑双师在中国" sub-title="CS全脑双师已在全国多地区合作加盟，形成强大口碑效应及品牌影响">
      <ul class="list">
        <li class="ibox">
          <div class="num">1</div>
          <div class="desc">提出新式教育记忆方法的品牌</div>
        </li>
        <li class="ibox">
          <div class="num">2</div>
          <div class="desc">拥有强大团队核心技术</div>
        </li>
        <li class="ibox">
          <div class="num">3</div>
          <div class="desc">全国多个省份遍布加盟校区营地</div>
        </li>
        <li class="ibox">
          <div class="num">4</div>
          <div class="desc">将实现在100个城市建立校区</div>
        </li>
        <li class="ibox">
          <div class="num">5</div>
          <div class="desc">百城千校计划进行中</div>
        </li>
      </ul>
    </x-section>

    <!-- csfeature -->
    <x-section class="csfeatures" main-title="CS全脑双师特色" sub-title="实现了学科与综合素质培养完美融合，让孩子能全面学习快速提升">
      <div class="block1 ibox">
        <img class="poster" :src="photo15" alt />
        <div class="text">
          <div class="title">精品课程体验</div>
          <div
            class="desc"
          >CS全脑双师拥有自主研发课程系统,学习系统人工智能服务，拥有多版本课程，让您学习无忧，智能辅助运行，合理分析您的学习成效，更有多种学习方法，让您的学习可乐，学的轻松。</div>
        </div>
      </div>
      <div class="block2">
        <div class="text">
          <div class="title">专业师资队伍</div>
          <div
            class="desc"
          >让去上课的孩子得到更好的照顾，课后拥有更好的辅导，专业师资队伍的培养体系。CS全脑双师为培养孩子学习而来，传播先进教育理念，提供优质教学资源，为全国各地校输送人才。</div>
        </div>
        <img class="poster" :src="photo16" alt />
      </div>
      <div class="block3">
        <div class="title">运维服务支持</div>
        <div class="desc desc1">六大指导：选址指导 法务指导 招聘指导 开业指导 运营指导 管理指导；</div>
        <div class="desc">六大统一；形象统一 教学统一 配送统一 服务统一 管理统一 运营统一;</div>
        <div class="desc">六大支持:网站宣传 品牌设计 品牌宣传 专家讲座 区域保护 运营培训；</div>
        <div class="desc">六大培训:师资培训 运营培训 产品培训 管理培训 服务培训 文化培训；</div>
      </div>
    </x-section>

    <!-- cschain -->
    <x-section class="cschain" main-title="全国连锁“CS全脑双师”">
      <img class="poster" :src="img010" alt />
    </x-section>

    <!-- cshelpyou -->
    <x-section class="cshelpyou" main-title="CS全脑双师帮您">
      <ul class="list ibox">
        <li>
          <div class="title">
            <div class="ch">前期筹建</div>
            <div class="en">Preparation</div>
          </div>
          <div class="subtitle">市场评估</div>
          <div class="subtitle">团队组建</div>
          <div class="subtitle">选址指导</div>
        </li>
        <li>
          <div class="title">
            <div class="ch">开始办学</div>
            <div class="en">Start a school</div>
          </div>
          <div class="subtitle">师资培训</div>
          <div class="subtitle">招生引流</div>
          <div class="subtitle">入校帮带</div>
        </li>
        <li>
          <div class="title">
            <div class="ch">运营管理</div>
            <div class="en">Operations management</div>
          </div>
          <div class="subtitle">运营策略</div>
          <div class="subtitle">交流经验</div>
          <div class="subtitle">人工智能系统</div>
        </li>
      </ul>
    </x-section>

    <!-- csadvantage -->
    <x-section class="csadvantage" main-title="CS全脑双师优势">
      <ul class="list ibox">
        <li>
          <div class="title">品牌研发团队</div>
          <div class="desc">千人千面算法，AI智能口语矫正</div>
        </li>
        <li>
          <div class="title">品质保障</div>
          <div class="desc">全方位保障，助力零投资风险</div>
        </li>
        <li>
          <div class="title">招生稳</div>
          <div class="desc">行业独家招生团队，全国各地宣传招生</div>
        </li>
        <li>
          <div class="title">体系全</div>
          <div class="desc">线上线下全程跟踪辅导助力孩子未来，助力教育未来</div>
        </li>
      </ul>
    </x-section>

    <!-- op-guarentee -->
    <x-section class="op-guarentee" main-title="运营保障">
      <ul class="parts ibox">
        <li class="part-l">
          <div class="title">开业前重点支持</div>
          <div class="desc">投资预算、收益分析、开业调研、校区选址、装修施工设计、校区设备采购、招聘老师</div>
        </li>
        <li class="part-r">
          <div class="title">开业后重点支持</div>
          <div class="desc">广告宣传支持、校区活动方案支持、课程产品教材支持、软件系统服务支持、招生引流支持、校区运营方案支持</div>
        </li>
      </ul>
    </x-section>

    <!-- coop-condition -->
    <x-section class="coop-condition" main-title="合作条件">
      <dl class="list">
        <dt></dt>
        <dd>有良好的商业信誉和契约精神，有较强的服务意识</dd>
        <dt></dt>
        <dd>认同CS全脑双师的经营与教育理念，热爱教育事业</dd>
        <dt></dt>
        <dd>具备一定金额的投资实力</dd>
        <dt></dt>
        <dd>熟悉当地市场，对当地相关资源具备操作及调控能力</dd>
        <dt></dt>
        <dd>有一定市场经营能力或管理能力</dd>
      </dl>
    </x-section>

    <!-- jion steps -->
    <div class="join-steps">
      <div class="wrap">
        <div class="title">加盟流程</div>
        <div class="desc">实现了学科与综合素质培养完美结合，让孩子前面学习，快速提升</div>
        <ul class="list">
          <li>
            <div class="num">01</div>
            <div class="desc">沟通咨询，对品牌进行初步了解</div>
          </li>
          <li>
            <div class="num">02</div>
            <div class="desc">实地考察，了解行业及运营情况</div>
          </li>
          <li>
            <div class="num">03</div>
            <div class="desc">签订加盟协议</div>
          </li>
          <li>
            <div class="num">04</div>
            <div class="desc">总部对签约市场及门店选址进行指导</div>
          </li>
          <li>
            <div class="num">05</div>
            <div class="desc">顺利开业，合作共赢</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import banner from "../asset/banner4.jpg";
import photo15 from "../asset/photo15.jpg";
import photo16 from "../asset/photo16.jpg";
import img010 from "../asset/img010.jpg";

export default {
  data() {
    return {
      banner,
      photo15,
      photo16,
      img010
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
.cschina {
  .list {
    margin-top: 0.45rem;
    li {
      background: #ebebeb;
      height: 1.2rem;
      width: 100%;
      padding: 0 0.32rem;
      margin-top: 0.25rem;
      &:first-child {
        margin-top: 0;
      }
      .num {
        font-size: 0.76rem;
        line-height: 1;
      }
      .desc {
        font-size: 0.24rem;
        color: #000;
        line-height: 1;
        margin-left: 0.46rem;
      }
      &:nth-child(1) {
        .num {
          color: #deb2eb;
        }
      }
      &:nth-child(2) {
        .num {
          color: #b2d1eb;
        }
      }
      &:nth-child(3) {
        .num {
          color: #afeae4;
        }
      }
      &:nth-child(4) {
        .num {
          color: #fd7c7e;
        }
      }
      &:nth-child(5) {
        .num {
          color: #fad771;
        }
      }
    }
  }
}

.csfeatures {
  .block1 {
    height: 6.34rem;
    margin-top: 0.45rem;
    .poster {
      width: 50%;
      height: 100%;
    }
    .text {
      width: 50%;
      height: 100%;
      background: #fff;
      padding: 0.44rem 0.22rem 0;
      border: solid #7abb2d;
      border-width: 1px 1px 1px;
      .title {
        font-size: 0.36rem;
        color: #000;
        line-height: 1;
        font-weight: bold;
        text-align: center;
      }
      .desc {
        font-size: 0.28rem;
        color: #000;
        line-height: 0.5rem;
        text-align: justify;
        margin-top: 0.69rem;
      }
    }
  }
  .block2 {
    .text {
      background: #fff;
      padding: 0.88rem 0.26rem;
      border: solid #7abb2d;
      border-width: 0 1px 1px;
      .title {
        font-size: 0.36rem;
        color: #000;
        line-height: 1;
        font-weight: bold;
        text-align: center;
      }
      .desc {
        font-size: 0.28rem;
        color: #000;
        line-height: 0.5rem;
        text-align: justify;
        margin-top: 0.79rem;
      }
    }
    .poster {
      border: solid #7abb2d;
      border-width: 0 1px 1px 1px;
      display: block;
      width: 100%;
    }
  }
  .block3 {
    width: 100%;
    height: 7.27rem;
    background: url(../asset/photo17.jpg) no-repeat center;
    background-size: 100% 100%;
    padding: 1rem 0.76rem 0;
    border: solid #7abb2d;
    border-width: 0 1px 1px 1px;
    .title {
      font-size: 0.36rem;
      color: #fff;
      line-height: 1;
      font-weight: bold;
      text-align: center;
    }
    .desc {
      font-size: 0.28rem;
      color: #fff;
      line-height: 0.5rem;
      margin-top: 0.1rem;
      &.desc1 {
        margin-top: 0.79rem;
      }
    }
  }
}

.cschain {
  .poster {
    display: block;
    width: 100%;
    margin-top: 0.45rem;
  }
}

.cshelpyou {
  .list {
    text-align: center;
    margin-top: 0.45rem;
    li {
      width: 2.18rem;
      height: 5.89rem;
      background: #fff;
      border: 0.04rem solid #7abb2d;
      padding-top: 0.75rem;
      margin-left: 0.17rem;
      &:first-child {
        margin-left: 0;
      }
      .title {
        background: #7abb2d;
        width: 2.1rem;
        height: 2.1rem;
        border-radius: 1.05rem;
        padding-top: 0.5rem;
        .ch {
          font-size: 0.36rem;
          color: #fff;
          line-height: 1;
        }
        .en {
          font-size: 0.24rem;
          color: #fff;
          line-height: 0.3rem;
          margin-top: 0.2rem;
        }
      }
      .subtitle {
        font-size: 0.28rem;
        line-height: 1;
        text-align: center;
        margin-top: 0.44rem;
      }
    }
  }
}

.csadvantage {
  .list {
    white-space: normal;
    margin: -0.85rem 0 0 -1.3rem;
    li {
      width: 2.75rem;
      height: 2.75rem;
      border-radius: 0.08rem;
      background: #77bc28;
      padding: 0.4rem 0.15rem 0;
      margin: 1.3rem 0 0 1.3rem;
      .title {
        font-size: 0.36rem;
        color: #fff;
        font-weight: bold;
        line-height: 1;
        text-align: center;
      }
      .desc {
        font-size: 0.24rem;
        color: #fff;
        line-height: 0.5rem;
        text-align: justify;
        margin-top: 0.3rem;
      }
    }
  }
}

.op-guarentee {
  .parts {
    margin-top: 0.45rem;
    li {
      width: 3.39rem;
      height: 6.02rem;
      padding: 0.69rem 0 0;
      border: 0.04rem solid #7abb2d;
      .title {
        font-size: 0.36rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        font-weight: bold;
      }
      .desc {
        font-size: 0.24rem;
        line-height: 0.5rem;
        padding: 0 0.14rem;
        text-align: justify;
        margin-top: 0.5rem;
      }
      &.part-l {
        background: #fff;
        .title {
          color: #fff;
          background: #7abb2d;
        }
        .desc {
          color: #000;
        }
      }
      &.part-r {
        background: #7abb2d;
        margin-left: 0.07rem;
        .title {
          color: #7abb2d;
          background: #fff;
        }
        .desc {
          color: #fff;
        }
      }
    }
  }
}

.coop-condition {
  .list {
    margin-top: 0.45rem;
    dt {
      width: 0.66rem;
      height: 0.09rem;
      background: #77bc28;
      margin-top: 0.4rem;
      &:first-child {
        margin-top: 0;
      }
    }
    dd {
      font-size: 0.36rem;
      color: #333;
      line-height: 0.5rem;
      text-align: justify;
      margin-top: 0.34rem;
    }
  }
}

.join-steps {
  margin-top: 0.3rem;
  background: url(../asset/photo18.jpg) no-repeat center;
  background-size: 100% 100%;
  padding: 0.5rem 0 0.35rem;
  > .wrap {
    width: 6.9rem;
    margin: 0 auto;
    > .title {
      color: #fff;
      font-size: 0.52rem;
      text-align: center;
      line-height: 1;
    }
    > .desc {
      color: #fff;
      font-size: 0.24rem;
      line-height: 0.44rem;
      text-align: center;
      margin-top: 0.4rem;
    }
    .list {
      margin-top: 0.45rem;
      li {
        background: #fff;
        width: 100%;
        height: 1.76rem;
        border: 2px solid #77bc28;
        padding-top: 0.5rem;
        margin-top: 0.2rem;
        &:first-child {
          margin-top: 0;
        }
        .num {
          font-size: 0.38rem;
          color: #89b834;
          text-align: center;
          line-height: 1;
        }
        .desc {
          font-size: 0.26rem;
          color: #89b834;
          text-align: center;
          line-height: 1;
          margin-top: 0.2rem;
        }
      }
    }
  }
}

.app-footer {
  margin-top: 0.3rem;
}
</style>


