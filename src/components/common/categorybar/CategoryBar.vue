<template>
  <div class="category-bar">
    <Scroll class="scroll-left" >
      <li v-for="(item,index) in categoryList" :key="index"
          :class="{active:index == activeIndex }"
          @click="categoryBarItemClick(index)">{{item}}
      </li>
    </Scroll>
  </div>
</template>

<script>
  import Scroll from "@/components/common/scroll/Scroll";
  export default {
    name: "CategoryBar",
    props:{
      categoryList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Scroll
    },
    methods:{
      categoryBarItemClick(index){
        this.activeIndex = index
        this.$emit('categoryBarItemClick',index)
      },

    },
    data(){
      return{
        activeIndex:0
      }
    },
  }
</script>

<style scoped>
  .scroll-left{
    overflow: hidden;
    height: 100%;
  }
  .category-bar{
    text-align: center;
    width: 30%;
    display: flex;
    flex-direction: column ;
    align-items: center;
    height: 100%;
  }
  .category-bar  li{
    width: 100%;
    list-style-type: none;
    height: 40px;
    line-height: 40px;
    margin-top: 10px;
  }
  .category-bar  li:after{
    content: ' ';
    display: block;
    height: 1px;
    border-bottom: 1px solid #a3a3a5;
  }
  .active{
    background-color: #f13e3a;
  }
</style>