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
      <ul class="nav-list">
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
      <div>小编推荐</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hairline from '@/components/Hairline.vue'
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
      ]
    }
  },
  components: {
    'hair-line': Hairline
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
  margin-bottom: 8px;
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

</style>

