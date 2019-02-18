<template>
  <div class="banner-title">
    <div class="hb-header">
        <div class="hb-header-title">
            {{title}}
        </div>
        <div class="hb-header-more">
            <router-link :to="MoreTo">更多</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'BannerTitle',
    props: ['title', 'MoreTo']
}
</script>

<style scoped lang="scss">
.banner-title{
    background-color: #fff;
    overflow: hidden;
    .hb-header{
        height: 42px;
        box-sizing: border-box;
        padding-right: 10px;
        margin-top: 10px;
        overflow: hidden;
        .hb-header-title{
            float: left;
            border-left: 3px solid #F39C11;
            padding-left: 7px;
            font-weight: bold;
            font-size: 16px;
        }
        .hb-header-more{
            float: right;
            a{
                color: #999;
                font-size: 14px;
            }
        }
    }
}
</style>
