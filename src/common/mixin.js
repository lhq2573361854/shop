import {debounce} from "@/common/utils";
import BackTop from "@/components/content/backTop/BackTop";

export const itemListenerMixin = {
  data(){
    return{
      itemImgListener:null,
      newRefresh:null
    }
  },
  mounted(){
    this.newRefresh = debounce(this.$refs.scroll.refresh)
    this.itemImgListener = ()=>{
      this.newRefresh()
      this.getThemeY && this.getThemeY()
    }
    this.$bus.$on('ItemImageLoad',this.itemImgListener)
  },
  deactivated(){
    this.$bus.$off('ItemImageLoad',this.itemImgListener)
  },
}

export const backTopMinix = {
  data(){
    return{
      backTop:false,
    }
  },
  components:{
    BackTop,
  },
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    listenBacktop(position){
      this.backTop =  position.y < -1000;
    }
  }
}
