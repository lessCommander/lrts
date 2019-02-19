<template>
  <div class="verti-banner">
    <banner-title :title="title" :more-to="vbMoreTo"></banner-title>
    <div class="vb-body">
        <ul class="vb-list">
            <li class="vb-list-item"
                v-for="(book, inx) in vbBooks"
                :key="inx"
            >
                <a href="#" class="vb-list-item-a">
                    <img :src="book.url" alt="jpg">
                    <div class="bookother-wrap">
                        <h4>{{book.name}}</h4>
                        <p class="desc">{{book.desc}}</p>
                        <div class="author-wrap">
                            <span class="autor">
                                <i class="iconfont icon-huatong"></i>
                                {{book.author}}
                            </span>
                            <span class="playnum">{{book.playnum}}</span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import BannerTitle from '@/components/common/BannerTitle';

export default {
    name: 'VertiBanner',
    components: {
        'banner-title': BannerTitle
    },
    props: {
        'title': {type: String},
        'vbMoreTo': {type: String, default: '/'},
        'vbBooks': {
            type: Array,
            default: []
        }
    }
}
</script>

<style scoped lang="scss">
.verti-banner {
    background-color: #fff;
    overflow: hidden;

    .vb-body {
        width: 100%;
        margin-bottom: 10px;

        .vb-list {
            width: 100%;
            margin-left: 10px;
        }
    }
}

.vb-list-item {
    width: 95%;
    margin-bottom: 15px;

    .vb-list-item-a {
        width: 100%;
        display: flex;
        justify-content: space-around;
        img{
            flex-grow: 1;
        }
    }
}

.bookother-wrap {
    padding: 5px 10px;

    h4 {
        color: #333;
        font-weight: normal;
    }

    .desc {
        margin: 10px 0;
        font-size: 13px;
        color: #777;
    }

    .author-wrap {
        color: #aaa;
        font-size: 12px;

        .iconfont {
            font-size: 10px;
            padding: 1px;
            color: #fff;
            background-color: #ddd;
            border-radius: 50%;
        }

        .autor {
            float: left;
        }

        .playnum {
            float: right;
            font-size: 9px;
            padding: 1px;
            border: 1px solid #aaa;

        }
    }
}
</style>
