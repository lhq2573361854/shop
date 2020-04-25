<template>
  <scroll class="content" ref="scroll"  @scroll="scroll" :probe-type="3">
    <div class="goods">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>3</li>
      <li>3</li>
      <li>3</li>
      <li>1234</li>
      <li>123</li>
      <li>132</li>
      <li>231</li>
      <li>1234</li>
      <li>123</li>
      <li>132</li>
      <li>231</li>
      <li>1234</li>
      <li>123</li>
      <li>132</li>
      <li>231</li>
      <li>132</li>
      <li>123</li>
      <li>132</li>
      <li>231</li>
      <li>1234</li>
      <li>123</li>
      <li>132</li>
      <li>231</li>
      <li>1234</li>
      <li>123</li>
      <li>132</li>
      <li>231</li>
      <li>132</li>
      <li>123</li>
      <li>132</li>
      <li>231</li>
      <li>1234</li>
      <li>123</li>
      <li>132</li>
      <li>231</li>
      <li>1234</li>
      <li>123</li>
      <li>132</li>
      <li>231</li>
      <li>132</li>
      <li>123</li>
      <li>132</li>
      <li>231</li>
      <li>1234</li>
      <li>123</li>
      <li>132</li>
      <li>231</li>
      <li>1234</li>
      <li>123</li>
      <li>132</li>
      <li>231</li>
      <li>132</li>
      <li>123</li>
      <li>132</li>
      <li>231</li>
      <li>1234</li>
      <li>123</li>
      <li>132</li>
      <li>231</li>
      <li>1234</li>
      <li>123</li>
      <li>132</li>
      <li>231</li>
      <li>132</li>
      <li>123</li>
      <li>132</li>
      <li>231</li>
      <li>1234</li>
      <li>123</li>
      <li>132</li>
      <li>231</li>
      <li>1234</li>
      <li>123</li>
      <li>132</li>
      <li>231</li>
      <li>132</li>
      <li>123</li>
      <li>123</li>
      <li>312</li>
      <li>123</li>
      <li>132</li>
    </div>
  </scroll>
</template>

<script>
  import Scroll from "@/components/common/scroll/Scroll";
  export default {
    name: "CategoryGoods",
    props:{
      getCategoryListItem:{
        type:String,
        default:''
      },
      value:{
        type:Number,
        default: 0
      }
    },
    created(){
      this.arr[0] = 0
      for (let i = 1; i < 14; i++) {
        this.arr[i] = this.arr[i-1]+50*i
      }
    },
    components:{
      Scroll
    },
    data(){
      return{
        arr:[],
        goodIndex:0
      }
    },
    methods:{
      scroll(position){
        const  scrollY = -position.y
        for (let  i = 0 ; i < this.arr.length-1 ; i++) {
          if (this.value != i && scrollY >= this.arr[i] && scrollY < this.arr[i+1] ){
            this.$emit('GoodsIndex',i)
            break;
          }
        }
      },
      scrollTo(index){
        this.$refs.scroll.scrollTo(0,-this.arr[index])
      }
    },
    watch:{
      'value':function(newValue){
          this.goodIndex = newValue
      }
    }
  }
</script>

<style scoped>
  .content{
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .goods{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .goods  li{
    list-style-type: none;
    width: 100px;
    height: 50px;
    margin: 10px 0;
    background-color: #a3a3a5;

  }

</style>