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
        :hb-more-to="hbMoreTo"
        :hb-books="hbBooks"
      ></horizontal-banner>

      <!-- 有声小说 -->
      <vertical-banner
        class="block-bottom"
        title="有声小说"
        :vb-more-to="vbMoreTo"
        :vb-books="vbBooks"
      ></vertical-banner>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hairline from '@/components/Hairline'
import HorizontalBanner from '@/components/children/HorizontalBanner';
import VerticalBanner from '@/components/children/VerticalBanner';
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
          to: '/',
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
      hbMoreTo: '/',
      hbBooks: [
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
      vbMoreTo: '/',
      vbBooks: [
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
      ]
    }
  },
  components: {
    'hair-line': Hairline,
    'horizontal-banner': HorizontalBanner,
    'vertical-banner': VerticalBanner
  },
  mounted() {
    new Swiper('.swiper-container', {
      autoplay:true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      }
    })
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
</style>

