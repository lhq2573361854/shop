<template>
  <Swiper>
    <SwiperItem v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperImageLoad">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
  import {Swiper,SwiperItem} from "@/components/common/swiper";
  export default {
    name: "HomeSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        isLoad:false
      }
    },
    methods:{
      swiperImageLoad(){
        if(!this.isLoad){
          this.$emit('swiperImageLoad')
          this.isLoad = ! this.isLoad
        }
      }
    }
  }
</script>

<style scoped>

</style>