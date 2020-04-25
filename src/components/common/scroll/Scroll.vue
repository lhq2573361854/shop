<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data(){
      return{
        scroll:null
      }
    },
    props:{
      probeType:{
        type:Number,
        default(){
          return 0
        }
      },
      pullUpLoad:{
        type:Boolean,
        default(){
          return false
        }
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probeType,
        pullUpLoad: this.pullUpLoad
      });

      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
      })
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
    },
    methods:{
      scrollTo(x,y,time){
        // console.log("x= " + x,"y= "+y,this.scroll)
        this.scroll &&  this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll && this.scroll && this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll && this.scroll &&  this.scroll.refresh()
        // console.log('refresh')
      },
      getScrollY(){
        return this.scroll.y
      }
    }

  }
</script>

<style scoped>

</style>