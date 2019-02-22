<template id="catt">
    <div class="category-other">
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
                        <div class="cate-item-wrap">
                            <i class="iconfont" :class="item.icon"></i>
                            <p>{{item.name}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
import Hairline from '@/components/common/Hairline'

export default {
  name: 'category-other',
  props: {
      titleIcon: {
          type: String,
          default: 'icon-viewgallery' 
      },
      titleName: {
          type: String,
          default: '其他分类'
      },
      cateList: {
          type: Array,
          default: ['生活', '成功', '历史']
      },
      cateMore: {
          type: String,
          default: ''
      },
      cateOtherIcon: {
          type: String,
          default: 'icon-viewgallery'
      }
  }
}
</script>

<style scoped lang="scss">
.category-other{
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
            height: 74px;
            .cate-list-item{
                float: left;
                width: 84px;
                height: 74px;
                text-align: center;
                border-right: 3px solid #fff;
                border-bottom: 3px solid #fff;
                box-sizing: border-box;
                font-size: 14px;
                color: #666;
                background-color: #f6f6f6;
                .cate-item-wrap{
                    margin-top: 10px;
                }
                .iconfont{
                    font-size: 28px;
                }
            }
        }
    }
}
</style>
