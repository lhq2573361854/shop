<template>
  <div id="home">
    <nav-bar  class="home_nav" ><div slot="center">首页</div></nav-bar>
    <tab-controller class="tab-controller-fixed" v-show="isFxiedCon" ref="homeSwiper" @tabConClick="tabConClick" :title="['流行','新款','精选']"></tab-controller>
    <scroll class="content" ref="scroll" @pullingUp="showMore" :probeType="3" :pull-up-load="true" @scroll="contentScroll">
      <home-swiper  class="home_swiper"  :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <feature></feature>
      <tab-controller  class="tab-controller" ref="homeSwiper" @tabConClick="tabConClick" :title="['流行','新款','精选']"></tab-controller>
      <Goods :goods="ShowGoods"></Goods>
    </scroll>
    <BackTop @click.native="backClick" v-show="backTop"/>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";

  import HomeRecommend from "@/views/home/childComps/HomeRecommend";
  import HomeSwiper from "@/views/home/childComps/HomeSwiper";
  import Feature from "@/views/home/childComps/Feature";
  import TabController from "@/components/common/tabcontroller/TabController";
  import Goods from "@/components/content/goods/Goods";
  import Scroll from "@/components/common/scroll/Scroll";

  import {itemListenerMixin,backTopMinix} from '@/common/mixin'
  import {getHomeMutidata,getHomeGoods} from "@/network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      TabController,
      Feature,
      Goods,
      Scroll
    },
    data() {
      return {
        result:null,
        banners:[],
        recommends:[],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType:'pop',
        isFxiedCon:false,
        tabConoffsetTop:0,
        scrollY:0,
        itemImgListener:null,
        newRefresh:null
      }
    },
    created(){
      this.getHomeMutidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('sell')
      this.getHomeGoods('new')
    },
    computed: {
      ShowGoods(){
        return this.goods[this.currentType].list
      },
    },
    mixins:[itemListenerMixin,backTopMinix],
    mounted(){
      // console.log('mouted')
      // this.newRefresh = debounce(this.$refs.scroll.refresh)
      // this.itemImgListener = ()=>{
      //   this.newRefresh()
      // }
      // this.$bus.$on('ItemImageLoad',this.itemImgListener)
    },
    activated(){
      // console.log("开始执行1")
      this.$refs.scroll.scrollTo(0,this.scrollY)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.scrollY = this.$refs.scroll.getScrollY()
      // console.log("开始执行2")
      this.$bus.$off('ItemImageLoad',this.itemImgListener)
    },
    methods: {
      getHomeMutidata(){
        getHomeMutidata().then(res=>{
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1

          this.$refs.scroll.finishPullUp()
        })
      },
      tabConClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
      },
      contentScroll(position){
        // console.log("kaishi gundong "+ position.y+' -- ' +this.tabConoffsetTop)
        this.listenBacktop(position)
        if(position.y < -this.tabConoffsetTop )
          this.isFxiedCon = true
        else
          this.isFxiedCon = false
      },
      showMore(){
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad(){
        this.tabConoffsetTop = this.$refs.homeSwiper.$el.offsetTop
      }
    }
  }
</script>

<style scoped>
  #home{
    height: 100vh;
    position: relative;
  }
  .home_nav{
    background-color: var(--color-tint);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index:2
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 47px;
    left: 0;
    right: 0;
    touch-action:none
  }
  .tab-controller-fixed{
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index:7;
    background-color: #ffffff;
  }
</style>
