<template id="catt">
    <div class="category-child">
        <div class="cate-area-wrap">
            <div class="cate-header">
                <span class="cate-title">
                    <i class="iconfont" :class="titleIcon"></i>
                    <span>{{titleName}}</span>
                </span>
                <span class="cate-more">{{cateMore}}</span>
            </div>
            <div class="cate-body">
                <ul class="cate-list">
                    <li class="cate-list-item"
                        v-for="(item, inx) in cateList"
                        :key="inx"
                    >
                        {{item}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
import Hairline from '@/components/common/Hairline'

export default {
  name: 'category-child',
  props: {
      titleIcon: {
          type: String,
          default: 'icon-huatong' 
      },
      titleName: {
          type: String,
          default: '分类'
      },
      cateList: {
          type: Array,
          required: true
      },
      cateMore: {
          type: String,
          default: ''
      }
  }
}
</script>

<style scoped lang="scss">
.category-child{
    padding: 10px 15px 15px;
    background-color: #fff;
    margin-bottom: 10px;
}
.cate-area-wrap{
    .cate-header{
        height: 30px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        .cate-title{
            display: flex;
            align-items: center;
            .iconfont{
                color: #F39C11;
                font-size: 24px;
            }
            span{
                margin-left: 10px;
            }
        }
        .cate-more{
            font-size: 14px;
            color: #F39C11;
        }
    }
    .cate-body{
        .cate-list{
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            .cate-list-item{
                width: 33.33333%;
                line-height: 35px;
                text-align: center;
                border-right: 3px solid #fff;
                border-bottom: 3px solid #fff;
                box-sizing: border-box;
                font-size: 14px;
                color: #666;
                background-color: #f6f6f6;
            }
        }
    }
}
</style>
