<template>
  <div>
    <nav-bar class="nav-bar"><div slot="center">分类</div></nav-bar>
    <div class="category-wrapper">
      <category-bar :category-list="categoryList"
                    @categoryBarItemClick="categoryBarItemClick"
                    ref="categoryBar"
      ></category-bar>
      <category-goods  :getCategoryListItem="getCategoryListItem"
                       @GoodsIndex="GoodsIndex"
                       v-model="currentIndex"
                       ref="categoryGoods"
      ></category-goods>
    </div>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import CategoryBar from "@/components/common/categorybar/CategoryBar";
  import CategoryGoods from "@/components/common/categorybar/CategoryGoods";

  export default {
    name: "Category",
    data() {
      return {
        categoryList:['好货推荐','食品饮料','数码周边','智能生活','好货推荐','食品饮料','数码周边','智能生活','食品饮料','数码周边','智能生活','食品饮料','数码周边','智能生活'],
        currentIndex:0
      }
    },
    methods:{
      /**
       * 获取滚动式的index并更新
       * @param index
       * @constructor
       */
      GoodsIndex(index){
        this.currentIndex = index
        this.$refs.categoryBar.activeIndex = index
      },
      /**
       * CategoryBar点击时事件
       * @param index
       */
      categoryBarItemClick(index){
        this.currentIndex = index
        this.$refs.categoryGoods.scrollTo(index)
      },
    },
    computed:{
      getCategoryListItem(){
        return this.categoryList[this.currentIndex]
      }
    },
    components:{
      NavBar,
      CategoryBar,
      CategoryGoods,
    },
  }
</script>

<style scoped>
  .nav-bar{
    position: relative;
    z-index: 14;
    background-color: var(--color-tint);
  }
  .category-wrapper{
    display: flex;
    position: absolute;
    top: 44px;
    bottom: 47px;
    width: 100%;
  }
</style>
