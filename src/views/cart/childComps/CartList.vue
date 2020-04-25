<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList" :key="index" :itemInfo="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "@/components/common/scroll/Scroll";
  import CartListItem from "@/views/cart/childComps/CartListItem";
  export default {
    name: "CartList",
    props:{
      cartList:{
        type:Array,
        default(){
          return {}
        }
      }
    },
    activated() {
      this.$refs.scroll.refresh()
    },
    components:{
      Scroll,
      CartListItem
    }
  }
</script>

<style scoped>
  .cart-list{
    height: calc(100% - 49px - 44px );
  }
  .content{
    height: 100%;
    overflow: hidden;
  }
</style>