<template>
  <div class="hori-banner">
    <banner-title :title="title" :more-to="hbMoreTo"></banner-title>
    <div class="hb-body">
        <ul class="hb-list">
            <li class="hb-list-item"
                v-for="(book, inx) in hbBooks"
                :key="inx"
            >
                <a href="#">
                    <img :src="book.url" alt="jpg">
                    <p>{{book.name}}</p>
                </a>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import BannerTitle from '@/components/common/BannerTitle';

export default {
    name: 'HoriBanner',
    components: {
        'banner-title': BannerTitle
    },
    props: {
        'title': {type: String},
        'hbMoreTo': {type: String, default: '/'},
        'hbBooks': {
            type: Array,
            default: []
        }
    }
}
</script>

<style scoped lang="scss">
.hori-banner{
    background-color: #fff;
    overflow: hidden;
    .hb-body{
        width: 100%;
        margin-bottom: 10px;
        .hb-list{
            width: 100%;
            display: flex;
            justify-content: space-around;
            .hb-list-item{
                width: 76px;
                a{
                    color: #666;
                    font-size: 14px;
                }
            }
            
        }
    }
}
</style>
