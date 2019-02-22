<template>
  <div class="search">
    <!-- 标题 -->
    <hair-line>
      <template slot="hltitle">搜索</template>
    </hair-line>

    <!-- 搜索栏 -->
    <div class="search-wrap">
      <div class="search-input-box">
        <div class="search-input-wrap">
          <input
            type="text"
            class="search-input"
            placeholder="书名/节目/主播"
            v-model="searchText"
            @input="searchRes=false"
          >
          <i class="iconfont icon-sousuo search-icon"></i>
          <span class="search-cancel" v-show="searchVal!=''" @click="cancelSearch">&times;</span>
        </div>
        <span class="search-btn active" v-if="searchVal!=''" @click="searchRes=true">搜索</span>
        <router-link class="search-btn" to="/" v-else>取消</router-link>
      </div>
    </div>

    <!-- 内容 -->
    <transition>
      <div class="found-wrap" v-if="searchRes">
        <mt-navbar v-model="selected">
          <mt-tab-item id="found1">全部</mt-tab-item>
          <mt-tab-item id="found2">书籍</mt-tab-item>
          <mt-tab-item id="found3">节目</mt-tab-item>
          <mt-tab-item id="found4">主播</mt-tab-item>
        </mt-navbar>
        <div class="found-body">
          <div class="found-body-wrap">
            <img src="../assets/images/nosearch.png" alt="没找到图片">
            <div class="found-txt1">没有找到，居然没有</div>
            <div class="found-txt2">建议您：缩短关键词 或 更换关键词</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Hairline from '@/components/common/Hairline';

export default {
  name: 'search',
  data() {
    return {
      searchText: '',
      selected: 'found1',
      searchRes: false //搜索结果显示
    }
  },
  methods:{
    cancelSearch(){
      this.searchText = '';
      this.selected = 'found1';
      this.searchRes = false;
    }
  },
  computed:{
    searchVal(){
      return this.searchText.trim();
    }
  },
  components:{
    'hair-line': Hairline
  },
  beforeRouteLeave(to,from,next){
    if(to.name === 'home'){  //显示首页底部mini播放器栏
      this.$store.commit('toggleMp', true);
    }
    next();
  }
}
</script>

<style scoped lang="scss">
.iconfont {
  font-size: 24px;
}

.search-wrap {
  padding: 12px 15px;
  border-bottom: 1px solid #eee;

  .search-input-box {
    height: 30px;
    line-height: 30px;

    .search-input-wrap {
      float: left;
      width: 85%;
      height: 30px;
      box-sizing: border-box;
      border-radius: 20px;
      background-color: #eee;
      padding-left: 35px;
      position: relative;

      .search-input {
        border-style: none;
        outline: none;
        font-size: 16px;
        background-color: #eee;
        width: 85%;
      }

      .search-icon {
        position: absolute;
        left: 10px;
        top: 0;
        font-size: 18px;
        color: #999;
      }

      .search-cancel {
        width: 18px;
        height: 18px;
        line-height: 18px;
        position: absolute;
        right: 10px;
        top: 6px;
        text-align: center;
        border-radius: 50%;
        color: #eee;
        background-color: #bbb;
      }
    }

    .search-btn {
      float: right;
      width: 15%;
      line-height: 30px;
      text-align: center;
      font-size: 16px;
    }

    .search-btn.active {
      color: #F6A811;
    }
  }
}

::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #999;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #999;
}

.found-body-wrap {
  margin-top: 20%;
  text-align: center;
  color: #999;

  .found-txt1 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .found-txt2 {
    font-size: 14px;
  }
}

.v-enter, .v-leave-to{
  opacity: 0;
}
.v-enter-active, .v-leave-active{
  transition: opacity .5s;
}

</style>
