<template>
  <div class="main">
    <!-- banner -->
    <div class="banner">
      <img :src="banner" alt />
    </div>

    <!-- showcases -->
    <section class="showcases">
      <x-showcase
        v-for="item in showcases"
        :key="item.id"
        :img="item.img"
        :caption="item.caption"
        :desc="item.desc"
      ></x-showcase>
    </section>

    <!-- schools -->
    <section class="schools">
      <div class="wrap">
        <div class="title">全国战略布局</div>
        <div class="line1 h-line bg-green"></div>
        <div class="subtitle green">两年将布局百城千校</div>
        <div class="line2 h-line"></div>
        <div class="text1">
          CS全脑双师全国遍地开花，已形成强大口碑效应
          及巨大品牌影响
        </div>
        <div class="text2">
          CS全脑双师是国内一家提出陪伴式教育理念的全国连锁机构，
          致力于打造中国具温度感和社会责任感的高端教育品牌，两
          年将在全国完成“百城千校”的布局。
        </div>
        <ul class="school-data ibox">
          <li>
            <div class="caption">1.5</div>
            <div class="desc">融资超1.5亿元</div>
          </li>
          <li>
            <div class="caption">100</div>
            <div class="desc">目前全国直营+加盟</div>
          </li>
          <li>
            <div class="caption">1500</div>
            <div class="desc">目前已有师资团队</div>
          </li>
          <li>
            <div class="caption">1000</div>
            <div class="desc">学校数，两年百城千校</div>
          </li>
        </ul>
      </div>
    </section>

    <!-- 4 pro professions  -->
    <x-section class="professions" main-title="四大专业升级，用心铸造" sub-title="CS全脑双师传授的不仅是知识，更是比同龄人更高的起点">
      <img class="poster" :src="img001" alt />
      <ul class="pros">
        <li>
          <div class="img"></div>
          <div class="caption">真正同步</div>
          <div class="desc">真正同步中国小学学...</div>
        </li>
        <li>
          <div class="img"></div>
          <div class="caption">智能口语矫正</div>
          <div class="desc">让口语能力在阅读中...</div>
        </li>
        <li>
          <div class="img"></div>
          <div class="caption">见证学习成效</div>
          <div class="desc">人工智能大数据统筹...</div>
        </li>
        <li>
          <div class="img"></div>
          <div class="caption">各大竞赛</div>
          <div class="desc">人工智能大数据统筹...</div>
        </li>
      </ul>
    </x-section>

    <!-- unknown poster1 -->
    <section class="poster1">
      <img :src="photo5" alt />
    </section>

    <!-- quality lessons -->
    <x-section class="quality-lessons" main-title="精品课程体系" sub-title="CS全脑双师传授的不仅是知识，更是比同龄人更高的起点">
      <div class="content">
        <div class="inner">
          <div class="title">CS全脑双师教育</div>
          <div class="subtitle">课程简介</div>
          <div
            class="desc"
          >CS全脑双师英语专注于母语式英语学习，遵循语言学习规律，采用学练结合、双师培优通过语言和情景相对应教学方式，让孩子感知、理解并真正运用英语，通过口语矫正等方式培养孩子的语言能力、逻辑思维...</div>
          <div class="subtitle">主设课程</div>
          <ul class="lessons">
            <li>单词速记</li>
            <li>双师培优</li>
            <li>口语矫正</li>
            <li>全脑思维</li>
          </ul>
        </div>
      </div>
    </x-section>
    <!-- lesson feature -->
    <div class="lesson-feature">
      <div class="wrap">
        <div class="imgs ibox">
          <img :src="img002" alt />
          <img :src="img003" alt />
          <img :src="img004" alt />
          <img :src="img005" alt />
          <img :src="img006" alt />
          <img :src="img007" alt />
        </div>
        <div class="showmore">了解更多</div>
      </div>
    </div>

    <!-- jion in -->
    <div class="join-in">
      <div class="title">加盟流程</div>
      <div class="subtitle">实现了学科与综合素质培养完美结合，让孩子全面学习，快速提升</div>
      <ul class="content">
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

    <!-- originator -->
    <x-section class="originator" main-title="CS全脑双师创始人" sub-title="中国影响力商业精英汇聚，CS全脑双师发展势如破竹">
      <div class="character">
        <img class="ceo" :src="imt_ltt" alt />
        <div class="info">
          <div class="name">罗汀泰</div>
          <div class="desc">CS全脑双师首席产品官</div>
          <div class="desc">千望集团教育综合体创始人</div>
          <div class="desc">联合落地招生系统执行官</div>
        </div>
      </div>
      <ul class="values">
        <li>
          <div class="caption">愿景</div>
          <div class="desc">共享优质课程，让教育无边界</div>
        </li>
        <li>
          <div class="caption">价值观</div>
          <div class="desc">守先师，守初心；重教研，重科技；谋发展，可持续；</div>
        </li>
        <li>
          <div class="caption">教育理念</div>
          <div class="desc">对孩子负责，对家长负责，对品牌负责，让教育回归教育</div>
        </li>
      </ul>
    </x-section>
    <!-- news -->
    <x-section class="news" main-title="品牌资讯" sub-title="爱的成长是一点一滴的累计，教育的力量是一代一代的传承">
      <img class="poster" :src="photo6" alt />
      <ul class="list">
        <li>
          <div class="title">CS全脑双师致力于服务教育，打造优质品牌</div>
          <div class="desc">CS全脑双师总结了教育孩子的方法：1让孩子养成良好的习惯，所谓好习惯就是教孩子遵守规则。2让孩子多...</div>
        </li>
        <li>
          <div class="title">CS全脑双师：给孩子一个好的学习方法</div>
          <div class="desc">CS全脑双师针对学生记忆能力薄弱的教育环节，在CS全脑双师教育的基础上延伸出更多新式方便容易记忆的学习方...</div>
        </li>
        <li>
          <div class="title">CS全脑双师新品发布会在上海成功举办</div>
          <div class="desc">8月1日由赛软(上海)科技有限公司发起的新产品“CS全脑双师”新闻发布会在上海虹桥世界中心成功举办，来自...</div>
        </li>
      </ul>
      <div class="more" @click="goToNews">更多新闻 &gt;&gt;</div>
    </x-section>

    <!-- results -->
    <x-section
      class="results"
      main-title="企业成绩"
      sub-title="始终坚持高于行业标准，打造一站式课后学习中心，化解家长的教育难题，赢得社会的广泛认可"
    >
      <ul class="list">
        <li>
          <img :src="img008" alt />
          <div class="caption">全国教育加盟品牌</div>
        </li>
        <li>
          <img :src="img009" alt />
          <div class="caption">影响之大，教育之广</div>
        </li>
      </ul>
    </x-section>
  </div>
</template>
<script>
import banner from "../asset/banner1.jpg";
import photo1 from "../asset/photo1.jpg";
import photo2 from "../asset/photo2.jpg";
import photo3 from "../asset/photo3.jpg";
import photo5 from "../asset/photo5.jpg";
import photo6 from "../asset/photo6.jpg";
import img001 from "../asset/img001.jpg";
import img002 from "../asset/img002.jpg";
import img003 from "../asset/img003.jpg";
import img004 from "../asset/img004.jpg";
import img005 from "../asset/img005.jpg";
import img006 from "../asset/img006.jpg";
import img007 from "../asset/img007.jpg";
import img008 from "../asset/img008.jpg";
import img009 from "../asset/img009.jpg";
import imt_ltt from "../asset/ltt.jpg";

export default {
  data() {
    return {
      banner,
      showcases: [
        {
          id: "01",
          img: photo1,
          caption: "专业师资队伍",
          desc: "全面满足孩子的学习成长所需"
        },
        {
          id: "02",
          img: photo2,
          caption: "专业师资队伍",
          desc: "成功提升每一个孩子的学习能力"
        },
        {
          id: "03",
          img: photo3,
          caption: "专业师资队伍",
          desc: "用心呵护每一个孩子的成长阶段"
        }
      ],
      img001,
      img002,
      img003,
      img004,
      img005,
      img006,
      img007,
      img008,
      img009,
      photo5,
      photo6,
      imt_ltt
    };
  },
  methods: {
    goToNews() {
      location.hash = `#/news`;
    }
  },
  computed: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss">
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
.schools {
  background: url(../asset/photo4.jpg) no-repeat center;
  background-size: 100% 100%;
  margin-top: 0.4rem;
  padding: 0.55rem 0 0.35rem;
  > .wrap {
    width: 6.9rem;
    margin: 0 auto;
    .title {
      font-size: 0.48rem;
      color: #fff;
      line-height: 1;
    }
    .line1 {
      width: 4.76rem;
      margin-top: 0.26rem;
    }
    .subtitle {
      font-size: 0.46rem;
      line-height: 1;
      margin-top: 0.23rem;
      font-weight: bold;
    }
    .line2 {
      width: 0.36rem;
      background: #fff;
      margin-top: 0.26rem;
    }
    .text1 {
      font-size: 0.3rem;
      line-height: 0.54rem;
      text-align: justify;
      color: #fff;
      margin-top: 0.13rem;
    }
    .text2 {
      font-size: 0.24rem;
      line-height: 0.36rem;
      text-align: justify;
      color: #fff;
      margin-top: 0.3rem;
    }

    .school-data {
      width: 100%;
      background: #fff;
      border-radius: 0.18rem;
      margin-top: 0.4rem;
      padding: 0.29rem 0;
      li {
        width: 25%;
        padding: 0 0.06rem;
        border-left: 1px solid #eaeaea;
        &:first-child {
          border-left: none;
        }
        .caption {
          font-size: 0.38rem;
          font-weight: bold;
          color: #666;
          text-align: center;
        }
        .desc {
          font-size: 0.24rem;
          color: #000;
          text-align: center;
        }
      }
    }
  }
}

.professions {
  .poster {
    display: block;
    width: 100%;
    margin-top: 0.22rem;
  }
  .pros {
    margin-top: 0.2rem;
    font-size: 0;
    li {
      width: 50%;
      display: inline-block;
      padding: 0.75rem 0 0.66rem;
      .img {
        display: block;
        margin: 0 auto 0;
        border-radius: 0.08rem;
        border: 1px solid #fff;
        width: 1.4rem;
        height: 1.1rem;
      }
      .caption {
        font-size: 0.36rem;
        color: #fff;
        line-height: 1;
        white-space: nowrap;
        text-align: center;
        margin-top: 0.38rem;
      }
      .desc {
        font-size: 0.26rem;
        color: #fff;
        line-height: 1;
        white-space: nowrap;
        text-align: center;
        margin-top: 0.35rem;
      }
      &:nth-child(1) {
        background: #fea30b;
      }
      &:nth-child(2) {
        background: #0971e8;
      }
      &:nth-child(3) {
        background: #f44e57;
      }
      &:nth-child(4) {
        background: #77bc28;
      }
    }
  }
}

.poster1 {
  // margin-top: 0.2rem;
  img {
    display: block;
    width: 100%;
  }
}

.quality-lessons {
  .content {
    background: #f6f6f6;
    width: 6.9rem;
    padding: 0.28rem 0.3rem;
    border-radius: 0.08rem;
    margin-top: 0.2rem;
    .inner {
      border-radius: 0.08rem;
      background: #fff;
      padding: 0.3rem 0.22rem 0.2rem;
      .title {
        font-size: 0.36rem;
        color: #549d00;
        font-weight: bold;
      }
      .subtitle {
        font-size: 0.3rem;
        color: #333;
        margin-top: 0.4rem;
      }
      .desc {
        font-size: 0.26rem;
        line-height: 0.36rem;
        margin-top: 0.3rem;
      }
      .lessons {
        display: flex;
        margin-top: 0.24rem;
        li {
          font-size: 0.24rem;
          width: 1.55rem;
          height: 0.68rem;
          line-height: 0.68rem;
          border-radius: 0.08rem;
          color: #fff;
          background: #7abb29;
          text-align: center;
          margin-left: 0.32rem;
          &:first-child {
            margin-left: 0;
          }
        }
      }
    }
  }
}

.lesson-feature {
  margin-top: 0.3rem;
  .wrap {
    width: 6.9rem;
    margin: 0 auto;
    .imgs {
      white-space: normal;
      margin-top: -0.18rem;
      margin-left: -0.18rem;
      img {
        width: 2.18rem;
        height: 2.18rem;
        border: 1px solid #fff;
        border-radius: 0.08rem;
        margin-left: 0.18rem;
        margin-top: 0.18rem;
      }
    }
    .showmore {
      font-size: 0.28rem;
      color: #7ea94d;
      background: #fff;
      width: 2.99rem;
      height: 0.79rem;
      line-height: 0.79rem;
      border: 1px solid #94a078;
      border-radius: 0.08rem;
      text-align: center;
      margin: 0.55rem auto 0;
    }
  }
}

.join-in {
  background: #84c920;
  padding: 0.94rem 0.62rem 0.2rem;
  margin-top: 0.55rem;
  .title {
    color: #fff;
    font-size: 0.48rem;
    line-height: 1;
    white-space: nowrap;
    text-align: center;
  }
  .subtitle {
    color: #fff;
    font-size: 0.26rem;
    line-height: 0.52rem;
    text-align: center;
    margin-top: 0.24rem;
  }
  .content {
    margin-top: 0.63rem;
    li {
      background: #fff;
      padding: 0.5rem 0;
      margin-top: 0.2rem;
      :first-child {
        margin-top: 0;
      }
      .num {
        font-size: 0.38rem;
        color: #77bc28;
        text-align: center;
        line-height: 1;
      }
      .desc {
        font-size: 0.26rem;
        color: #77bc28;
        text-align: center;
        line-height: 1;
        margin-top: 0.22rem;
      }
    }
  }
}

.originator {
  .character {
    margin-top: 0.2rem;
    img {
      display: block;
      width: 6.9rem;
    }
    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 0.3rem 0.25rem 0.2rem;
      background: rgba(119, 188, 40, 0.8);
      .name {
        color: #fff;
        font-size: 0.48rem;
        text-align: center;
        line-height: 1;
      }
      .desc {
        color: #fff;
        font-size: 0.3rem;
        text-align: left;
        line-height: 1;
        margin-top: 0.2rem;
        &:first-child {
          margin-top: 0.25rem;
        }
      }
    }
  }
  .values {
    width: 6.9rem;
    li {
      background: #e8eaf7;
      height: 2.4rem;
      padding: 0.36rem 0.25rem 0;
      margin-top: 0.4rem;
      &:first-child {
        margin-top: 0.44rem;
      }
      .caption {
        font-size: 0.4rem;
        color: #77bc28;
        line-height: 1;
        text-indent: 2;
      }
      .desc {
        font-size: 0.3rem;
        color: #000;
        line-height: 0.52rem;
        margin-top: 0.19rem;
      }
    }
  }
}

.news {
  .poster {
    width: 100%;
    margin-top: 0.2rem;
  }
  .list {
    margin-top: 0.3rem;
    li {
      background: #e8eaf7;
      padding: 0.3rem 0.25rem 0.18rem;
      margin-top: 0.3rem;
      .title {
        font-size: 0.3rem;
        color: #000;
        line-height: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .desc {
        font-size: 0.24rem;
        color: #010101;
        line-height: 0.44rem;
        margin-top: 0.22rem;
      }
      &:first-child {
        background: #77bc28;
        margin-top: none;
        .title {
          color: #fff;
        }
        .desc {
          color: #fff;
        }
      }
    }
  }
  .more {
    font-size: 0.27rem;
    color: #6998c6;
    line-height: 1;
    text-align: center;
    margin-top: 0.25rem;
  }
}
.results {
  .list {
    display: flex;
    justify-content: space-between;
    margin-top: 0.2rem;
    li {
      width: 3.22rem;
      img {
        display: block;
        width: 100%;
        border: 1px solid #eee;
      }
      .caption {
        font-size: 0.26rem;
        color: #000;
        line-height: 1;
        white-space: nowrap;
        text-align: center;
        margin-top: 0.24rem;
      }
    }
  }
}

.app-footer {
  margin-top: 0.3rem;
}
</style>


