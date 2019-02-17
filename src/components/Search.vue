<template>
  <div class="search">
    <!-- 标题 -->
    <hair-line>
      <template slot="hltitle">搜索</template>
    </hair-line>

    <h3>{{ msg }}</h3>
    
  </div>
</template>

<script>
import Hairline from './Hairline.vue';

export default {
  name: 'search',
  data() {
    return {
      msg: '这里是搜索页...'
    }
  },
  components:{
    'hair-line': Hairline
  }
}
</script>

<style scoped lang="scss">
.iconfont{
  font-size: 24px;
}
</style>
