<template>
  <div class="hairline">
    <div class="hairline-left">
      <router-link :to="hlurl">
        <slot name="hlicon">
          <i class="iconfont icon-zuojiantou"></i>
        </slot>
      </router-link>
    </div>
    <div class="hairline-title">
      <slot name="hltitle">懒人听书</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hairline',
  props: {
    hlurl: {
      type: String,
      default: '/'
    }
  }
}
</script>


<style lang="scss" scoped>
.hairline{
  height: 44px;
  line-height: 44px;
  background-color: #fff;
  position: relative;
  .hairline-left{
    height: 100%;
    width: 44px;
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
    a{
      display: inline-block;
    }
    .iconfont{
      font-size: 24px;
    }
  }
  .hairline-title{
      text-align: center;
      font-size: 18px;
    }
}
</style>

