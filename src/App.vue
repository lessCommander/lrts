<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="app-body" />
    </transition>
    <!-- 迷你播放器栏 -->
    <transition name="slidedown" mode="out-in">
      <mini-player class="mp" v-show="mpVisible" @openPopup="openPopup" />
    </transition>
    <!-- 迷你播放器——按钮弹出菜单 -->
    <mt-popup class="popup-wrap" v-model="popupVisible" position="bottom">
      <div class="popup-nav">
        <ul>
          <li>
            <router-link to="/">
              <i class="iconfont icon-warehouse-delivery"></i>
              <p class="txt">首页</p>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="iconfont icon-viewgallery"></i>
              <p class="txt">分类</p>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="iconfont icon-search"></i>
              <p class="txt">搜索</p>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="iconfont icon-account"></i>
              <p class="txt">我的</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="popup-close">
        <i class="iconfont icon-iconfontarrows1" @click="closePopup"></i>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import MiniPlayer from './components/children/MiniPlayer';
import {mapState} from 'vuex';

export default {
  name: 'App',
  data(){
    return {
      popupVisible: false,  //底部弹出菜单
    }
  },
  methods:{
    openPopup(isVisble){
      this.popupVisible = isVisble;
    },
    closePopup(){
      this.popupVisible = false;
    }
  },
  components: {
    'mini-player': MiniPlayer
  },
  computed: {
    ...mapState([
      'mpVisible'
    ])
  }
}
</script>

<style lang="scss">
.app-body{
  margin-bottom: 70px;
}
.popup-wrap{
  width: 95%;
  height: 130px;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
}
.popup-nav{
  margin: 20px 0;
  ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
    li{
      text-align: center;
      font-size: 12px;
      .iconfont{
        color: #333;
        font-size: 28px;
        font-weight: bold;
      }
    }
  }
}
.popup-close{
  text-align: center;
  .iconfont{
    color: #666;
    font-weight: bold;
    font-size: 24px;
  }
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.fade-enter-to, fade-leave{
  opacity: 1;
}
.fade-enter-active, .fade-leave-active{
  transition: opacity .3s;
}
.mp{
  transition: transform .5s;
}
.slidedown-enter, .slidedown-leave-to{
  transform: translateY(-100%);
}
.slidedown-enter-active, .slidedown-leave-active{
  transform: translateY(100%);
}
</style>
