<template>
  <div class="boutique">
    <!-- 标题 -->
    <hair-line>
      <!-- <template slot="hlicon">
        <i class="iconfont icon-zuojiantou"></i>
      </template> -->
      <template slot="hltitle">付费精品</template>
    </hair-line>

    <h3>{{ msg }}</h3>
    
  </div>
</template>

<script>
import Hairline from './Hairline.vue';

export default {
  name: 'Boutique',
  data() {
    return {
      msg: 'boutique...'
    }
  },
  components:{
    'hair-line': Hairline
  }
}
</script>

<style scoped lang="scss">

</style>
