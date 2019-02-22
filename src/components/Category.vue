<template>
    <div class="category">
        <!-- 标题 -->
        <hair-line>
            <template slot="hltitle">分类</template>
        </hair-line>

        <div>
            <category-child
                v-for="(cate, inx) in allCategory"
                :key="inx"
                :title-icon="cate.titleIcon"
                :title-name="cate.titleName"
                :cate-list="cate.cateList"
                :cate-more="cate.cateMore">
            </category-child>
        </div>

        <category-child-other :cate-list="cateOther"></category-child-other>
    </div>
</template>

<script>
import HairLine from '@/components/common/Hairline';
import CategoryChild from '@/components/children/CategoryChild';
import CategoryChildOther from '@/components/children/CategoryChildOther';

export default {
  name: 'category',
  data() {
    return {
      allCategory: [
          {
              titleIcon: 'icon-remen',
              titleName: '热门频道',
              cateList: ['原创', '出版', '节目', '儿童', '精品课', '财经', '历史', '情感', '文学', '脱口秀', '二次元', '相声评书', '娱乐', '成功', '外语', '生活', '音乐', '曲艺戏曲', '健康'],
              cateMore: ''
          },
          {
              titleIcon: 'icon-huatong',
              titleName: '主播电台',
              cateList: ['情感', '脱口秀', '亲子', '音乐', '人文历史', '娱乐'],
              cateMore: '更多'
          },
          {
              titleIcon: 'icon-ertong',
              titleName: '儿童',
              cateList: ['故事', '文学', '卡通动画', '国学诗词', '趣味百科', '亲子育儿'],
              cateMore: '更多'
          },
          {
              titleIcon: 'icon-weibiaoti--',
              titleName: '人文',
              cateList: ['心里百科', '科学科普', '人物传记', '纪实传奇', '哲学宗教', '文艺文化'],
              cateMore: '更多'
          },
          {
              titleIcon: 'icon-shu',
              titleName: '有声小说',
              cateList: ['玄幻奇幻', '现代言情', '都市传说', '穿越架空', '恐怖灵异', '古代言情'],
              cateMore: '更多'
          },
          {
              titleIcon: 'icon-64',
              titleName: '财经',
              cateList: ['投资理财', '股市', '商业智慧', '管理营销', '创业'],
              cateMore: '更多'
          },
          {
              titleIcon: 'icon-shanzi',
              titleName: '曲艺戏曲',
              cateList: ['曲艺名家', '豫剧', '京剧', '河南坠子', '黄梅戏', '戏曲百花园'],
              cateMore: '更多'
          },
          {
              titleIcon: 'icon-jiachang_shujia',
              titleName: '文学',
              cateList: ['影视文学', '名家名著', '推理小说', '古典文学', '探险小说', '外国文学'],
              cateMore: '更多'
          },
          {
              titleIcon: 'icon-emotion',
              titleName: '相声评书',
              cateList: ['单田芳', '评书精选', '相声公社', '袁阔城', '刘宝瑞', '连丽如'],
              cateMore: '更多'
          },
          {
              titleIcon: 'icon-yingwen',
              titleName: '外语',
              cateList: ['口语交流', '培训教程', '小语种', '听力训练', '英语小说', '考试专栏'],
              cateMore: '更多'
          },
          {
              titleIcon: 'icon-jiankang',
              titleName: '健康',
              cateList: ['中医养生', '女性养生', '健康课堂', '疾病预防', '饮食药膳', '医学药典'],
              cateMore: '更多'
          }
      ],
      cateOther: [
          {name: '生活', icon: 'icon-qunzi'},
          {name: '成功', icon: 'icon-huojian'},
          {name: '历史', icon: 'icon-lishi'}
      ]
    }
  },
  components:{
    HairLine,
    CategoryChild,
    CategoryChildOther
  }
}
</script>

<style scoped lang="scss">
.category{
    background-color: #f6f6f6;
}
</style>
