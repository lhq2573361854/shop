<template>
  <div class="detail">
    <detail-nav-bar @itemNavClick="itemNavClick" ref="detailNavCurr"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goodsInfo" ></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" ></detail-goods-info>
      <detail-param-info :paramInfo="itemParams" ref="param"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
      <goods :goods="recommends" ref="recommend"></goods>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <BackTop @click.native="backClick" v-show="backTop"/>
    <toast :message="message" :show="showMessage" ></toast>
  </div>
</template>

<script>
  import {getDetail,Good,getCommend} from "@/network/detail";
  import {itemListenerMixin,backTopMinix} from "@/common/mixin";

  import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
  import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
  import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
  import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
  import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
  import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";
  import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
  import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";

  import Scroll from "@/components/common/scroll/Scroll";
  import Goods from "@/components/content/goods/Goods";
  import {debounce} from "@/common/utils";
  import Toast from "@/components/common/toast/Toast";
  import {mapActions} from 'vuex'

  export default {
    name: "Detail",
    data(){
      return{
        iid:null,
        topImages:[],
        goodsInfo:{},
        shopInfo:{},
        detailInfo:{},
        itemParams:{},
        commentInfo:{},
        recommends:[],
        themeTopYs:[],
        getThemeY:null,
        currentIndex:-1,
        message:'',
        showMessage:false
      }
    },
    mixins:[itemListenerMixin,backTopMinix],
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      Scroll,
      Goods,
      Toast
    },
    created(){
      this.iid = this.$route.params.iid
      getDetail(this.iid).then(res=>{
        const data =  res.result
        this.topImages = data.itemInfo.topImages
        this.goodsInfo = new Good(data.itemInfo,data.columns,data.shopInfo.services)
        this.shopInfo = data.shopInfo
        this.detailInfo= data.detailInfo
        this.itemParams = data.itemParams
        if (data.rate && data.rate.cRate !== 0) this.commentInfo = data.rate.list[0]
        this.getThemeY = debounce(()=>{
          this.themeTopYs = []
          this.themeTopYs.push(0)
          this.$refs.param && this.themeTopYs.push(this.$refs.param.$el.offsetTop)
          this.$refs.comment &&this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
          this.$refs.recommend && this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
          this.themeTopYs.push(0xffffffff)
        })
      })
      getCommend().then(res =>{
        this.recommends = res.data.list
      })
    },
    methods:{
      ...mapActions({
        addToCart1:'addToCart'
      }),
      itemNavClick(index){
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],500)
      },
      scroll(position){
        const  scrollY = -position.y
        for (let  i = 0 ; i < this.themeTopYs.length-1 ; i++) {
          if (this.currentIndex != i && scrollY >= this.themeTopYs[i] && scrollY < this.themeTopYs[i+1] ){
            this.currentIndex = i
            this.$refs.detailNavCurr.currentIndex = i
            console.log(i);
            break;
          }
        }
        this.listenBacktop(position)
      },
      addToCart(){
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goodsInfo.title
        product.desc = this.goodsInfo.desc
        product.price = this.goodsInfo.realPrice
        product.iid = this.iid
        product.checked = false
       this.addToCart1(product).then(res=>{
         // console.log(this.$toast);
         this.$toast.showMessage(res,1000)
       })
      },

    }
  }
</script>

<style scoped>
  .detail{
    position: absolute;
    height: 100vh;
    background-color: #ffffff;
    z-index: 14;
  }
  .content{
    background-color: #ffffff;
    height: calc(100% - 44px);
  }
</style>