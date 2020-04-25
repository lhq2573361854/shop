<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    padding: 10px 0;
    box-shadow: 0 10px rgba(100,100,100,0.1);
  }
  .recommend-item{
    flex:1;
    text-align: center;
    font-size: 12px;
  }
  .recommend-item  img{
    width: 81.25%;
    height: 81.25%;
    margin: 5% 0;
  }
</style>