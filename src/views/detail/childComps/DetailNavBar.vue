<template>
  <div class="detail-nar-bar">
    <nav-bar>
      <div slot="left" class="back" @click="back">
        <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in title " :key="index" @click="itemClick(index)" class="title-item"  :class="{active:currentIndex == index}">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";

  export default {
    name: "DetailNavBar",
    data(){
      return{
        title:['商品','参数','评论','推荐'],
        currentIndex: 0,
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index
        this.$emit('itemNavClick',index)
      },
      back(){
        this.$router.go(-1)
      }
    },
    components:{
     NavBar,
   },
  }
</script>

<style scoped>
  .detail-nar-bar{
    position: relative;
    z-index: 7;
    background-color: #fff;
  }
  .title{
    display: flex;
    /*justify-content: space-around;*/
    padding: 0 10px;

  }
  .title-item{
    font-size: 13px;
    flex: 1;
  }
  .active{
    color:var(--color-tint);
  }
  .back > img{
    margin-top: 10px;
  }
</style>