<template>
  <div class="home">
    <!-- 标题 -->
    <hair-line hlurl="search">
      <template slot="hlicon">
        <i class="iconfont icon-sousuo"></i>
      </template>
      <template slot="hltitle">懒人听书</template>
    </hair-line>
    <!-- 主体内容 -->
    <div class="home-body">
      <!-- 轮播图 -->
      <div class="swipe-wrap">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"
                v-for="(img, inx) in imgs" 
                :key="inx"
            >
              <img :src="img.url" alt="jpg">
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <!-- 主页导航 -->
      <ul class="nav-list block-bottom">
        <li class="nav-list-item"
            v-for="(icon, inx) in icons"
            :key="inx"
        >
          <router-link :to="icon.to">
            <i class="iconfont" :class="icon.iconClass"></i>
            <p class="name">{{icon.name}}</p>
          </router-link>
        </li>
      </ul>
      
      <!-- 小编推荐 -->
      <horizontal-banner
        class="block-bottom"
        title="小编推荐"
        :hb-more-to="hbMoreTo1"
        :hb-books="hbBooks1"
      ></horizontal-banner>

      <!-- 有声小说 -->
      <vertical-banner
        class="block-bottom"
        title="有声小说"
        :vb-more-to="vbMoreTo1"
        :vb-books="vbBooks1"
      ></vertical-banner>

      <!-- 脱口秀 -->
      <horizontal-banner
        class="block-bottom"
        title="脱口秀"
        :hb-more-to="hbMoreTo2"
        :hb-books="hbBooks2"
      ></horizontal-banner>

      <!-- 文学 -->
      <vertical-banner
        class="block-bottom"
        title="文学"
        :vb-more-to="vbMoreTo2"
        :vb-books="vbBooks2"
      ></vertical-banner>

      <!-- 相声评书 -->
      <vertical-banner
        class="block-bottom"
        title="相声评书"
        :vb-more-to="vbMoreTo3"
        :vb-books="vbBooks3"
      ></vertical-banner>

      <!-- 情感 -->
      <horizontal-banner
        class="block-bottom"
        title="情感"
        :hb-more-to="hbMoreTo3"
        :hb-books="hbBooks3"
      ></horizontal-banner>

      <!-- 人文 -->
      <vertical-banner
        class="block-bottom"
        title="人文"
        :vb-more-to="vbMoreTo4"
        :vb-books="vbBooks4"
      ></vertical-banner>

      <!-- 成功 -->
      <vertical-banner
        class="block-bottom"
        title="成功"
        :vb-more-to="vbMoreTo5"
        :vb-books="vbBooks5"
      ></vertical-banner>

      <!-- 底部 -->
      <div class="brand-footer">&copy;懒人听书 粤ICP备13061962号-6</div>
    </div>
    <!-- 返回顶部 -->
    <scroll-top></scroll-top>
  </div>
</template>

<script>
// @ is an alias to /src
import Hairline from '@/components/common/Hairline'
import HorizontalBanner from '@/components/children/HorizontalBanner';
import VerticalBanner from '@/components/children/VerticalBanner';
import ScrollTop from '@/components/children/ScrollTop';
import Swiper from 'swiper';

export default {
  name: 'home',
  data() {
    return {
      imgs: [{
          url: require('../assets/images/slider1.jpg')
        },
        {
          url: require('../assets/images/slider2.jpg')
        },
        {
          url: require('../assets/images/slider3.jpg')
        },
        {
          url: require('../assets/images/slider4.jpg')
        }
      ],
      icons: [
        {
          iconClass: 'icon-tianmaopaidui',
          to: '/boutique',
          name: '精品'
        },
        {
          iconClass: 'icon-fenlei',
          to: '/category',
          name: '分类'
        },
        {
          iconClass: 'icon-paixing',
          to: '/',
          name: '排行榜'
        },
        {
          iconClass: 'icon-zuanshi',
          to: '/',
          name: '会员'
        },
        {
          iconClass: 'icon-kefuyouxian',
          to: '/',
          name: '主播'
        }
      ],
      hbMoreTo1: '/',
      hbBooks1: [
        {
          url: require('../assets/images/recommend1.jpg'),
          name: '奶泡泡学古诗：小学...'
        },
        {
          url: require('../assets/images/recommend2.jpg'),
          name: '静心：弘一法师的人...'
        },
        {
          url: require('../assets/images/recommend3.jpg'),
          name: '妖道至尊'
        },
        {
          url: require('../assets/images/recommend4.jpg'),
          name: '别让情绪失控害了你'
        }
      ],
      vbMoreTo1: '/',
      vbBooks1: [
        {
          url: require('../assets/images/soundstory1.jpg'),
          name: '凌天剑尊',
          desc: '会炼器，能炼丹，懂音律，会做菜。麻麻说，出来混，必须啥都会！',
          author: '一杯香茗',
          playnum: '127.0万播放'
        },
        {
          url: require('../assets/images/soundstory2.jpg'),
          name: '最强医仙混都市',
          desc: '他是最强医仙，混迹都市，风生水起。他是最强男人，花都逍遥，群芳来袭。',
          author: '西君',
          playnum: '133.9万播放'
        },
        {
          url: require('../assets/images/soundstory3.jpg'),
          name: '王爷求你休了我：妃常闹腾',
          desc: '她向来人不犯我我不犯人，可南阳王的美妾们一个个抢着被她玩弄鼓掌之间……',
          author: '叶笙罗',
          playnum: '16.5万播放'
        },
      ],
      hbMoreTo2: '/',
      hbBooks2: [
        {
          url: require('../assets/images/talkshow1.jpg'),
          name: '迈克尔老吴讲礼仪'
        },
        {
          url: require('../assets/images/talkshow2.jpg'),
          name: '飞碟一分钟 第三季'
        },
        {
          url: require('../assets/images/talkshow3.jpg'),
          name: '笑谈职场之汉高祖刘...'
        },
        {
          url: require('../assets/images/talkshow4.jpg'),
          name: '老咸菜逗你“丸”'
        }
      ],
      vbMoreTo2: '/',
      vbBooks2: [
        {
          url: require('../assets/images/literary1.jpg'),
          name: '北大教授陈晓明讲《白鹿原》',
          desc: '北京大学中文系著名教授陈晓明，为你详尽解析这部充满魅力的伟大之作《白鹿原》。',
          author: '琳琅智库',
          playnum: '2.3万播放'
        },
        {
          url: require('../assets/images/literary2.jpg'),
          name: '入梦师',
          desc: '白天，梦境潜伏在你的意识深处，黑夜，它将开启另一个庞杂的世界。',
          author: '西风',
          playnum: '11.8万播放'
        },
        {
          url: require('../assets/images/literary3.jpg'),
          name: '苗疆蛊事（多人小说剧）',
          desc: '上亿点击经典恐怖小说首部多播精配版，带你身临其境进入神奇的苗疆世界。',
          author: '任景行',
          playnum: '2504.9万播放'
        },
      ],
      vbMoreTo3: '/',
      vbBooks3: [
        {
          url: require('../assets/images/crosstalk1.jpg'),
          name: '李庆丰文化评书：金瓶梅',
          desc: '“四大奇书”之一，百余期精彩的故事，还原原汁原味的金瓶梅。',
          author: '李庆丰',
          playnum: '206.4万播放'
        },
        {
          url: require('../assets/images/crosstalk2.jpg'),
          name: '乌盆记',
          desc: '堪称中国历史上极恐怖的罪案之一，已经过去近990年，至今说起依然令闻者毛骨悚然。',
          author: '田占义',
          playnum: '43.3万播放'
        },
        {
          url: require('../assets/images/crosstalk3.jpg'),
          name: '相宝',
          desc: '寻宝藏宝类匠心巨制有声作品，集收藏、穿越、都市为一体的优秀网络作品！',
          author: '刘大明白',
          playnum: '83.0万播放'
        },
      ],
      hbMoreTo3: '/',
      hbBooks3: [
        {
          url: require('../assets/images/emotion1.jpg'),
          name: '白尔慢生活'
        },
        {
          url: require('../assets/images/emotion2.jpg'),
          name: '亲爱的你'
        },
        {
          url: require('../assets/images/emotion3.jpg'),
          name: '素色光年'
        },
        {
          url: require('../assets/images/emotion4.jpg'),
          name: '走出抑郁，学会自我...'
        }
      ],
      vbMoreTo4: '/',
      vbBooks4: [
        {
          url: require('../assets/images/humanities1.jpg'),
          name: '走出抑郁症：一个抑郁症患者的成...',
          desc: '一个抑郁症患者的成功自救，在挣扎中寻求救赎，在绝望中找回真我。',
          author: '江南',
          playnum: '206.4万播放'
        },
        {
          url: require('../assets/images/humanities2.jpg'),
          name: '人类简史（新版）：从动物到上帝',
          desc: '尤瓦尔·赫拉利经典人类学作品！比尔·盖茨、扎克伯格、奥巴马、丹尼尔·卡尼曼热荐！',
          author: '骆新',
          playnum: '497.1万播放'
        },
        {
          url: require('../assets/images/humanities3.jpg'),
          name: '烟花易冷：三毛与荷西',
          desc: '三毛与荷西轰轰烈烈的姐弟恋，撒哈拉大沙漠的美丽和忧伤。',
          author: '信然之声',
          playnum: '40.6万播放'
        },
      ],
      vbMoreTo5: '/',
      vbBooks5: [
        {
          url: require('../assets/images/humanities1.jpg'),
          name: '五分钟打动人心：高情商沟通课',
          desc: '20年潜心研究与实践，为你破解沟通误区，轻松向别人推销你的观点和产品。',
          author: '少聪',
          playnum: '69.9万播放'
        },
        {
          url: require('../assets/images/humanities2.jpg'),
          name: '反本能：如何对抗你的习以为常',
          desc: '若想改变，就要反本能！一本颠覆之书！知乎大神、畅销书《精进》作者采铜激赏推荐！',
          author: '播音松实',
          playnum: '92.5万播放'
        },
        {
          url: require('../assets/images/humanities3.jpg'),
          name: '14节实用口才实战课，受人欢迎...',
          desc: '14节课帮你提升魅力好口才！不说套路，只讲干货，用最短的时间，学最实用的口才。',
          author: '干货杨',
          playnum: '10.2万播放'
        },
      ]
    }
  },
  methods:{
    autoSlide(){
      let swiper = new Swiper('.swiper-container', {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
          type: 'bullets'
        }
      });
    }
  },
  components: {
    'hair-line': Hairline,
    'horizontal-banner': HorizontalBanner,
    'vertical-banner': VerticalBanner,
    'scroll-top': ScrollTop
  },
  mounted() {
    this.$nextTick(function () {
        this.autoSlide();
    });
  },
  beforeRouteLeave(to,from,next){
    if(to.name === 'search'){  //隐藏首页底部mini播放器栏
      this.$store.commit('toggleMp', false);
    }
    next();
  }
}
</script>

<style lang="scss" scoped>
.home{
  background-color: #eee;
}
.iconfont {
  font-size: 24px;
}
.swipe-wrap{
  height: 174px;
  .swiper-container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
.nav-list{
  height: 81px;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  .nav-list-item{
    padding: 5px;
    width: 20%;
    justify-content: space-between;
    text-align: center;
    .icon-tianmaopaidui{
      color: #FFA42F;
    }
    .iconfont-fenlei{
      color: #FB8585;
    }
    .icon-paixing{
      color: #9894F6;
    }
    .icon-zuanshi{
      color: #F4BB14;
    }
    .icon-kefuyouxian{
      color: #5BC697;
    }
    p{
      font-size: 12px;
      color: #333;
    }
  }
}
/*每块区域中间空隙*/
.block-bottom{
  margin-bottom: 8px;
}
/*底部*/
.brand-footer{
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  text-align: center;
  font-size: 14px;
  color: #999;
}
</style>

