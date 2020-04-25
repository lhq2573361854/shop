<template>
  <div class="profile_order">
    <one-slot>
      <div class="order_text">
        <span>我的订单</span>
        <span>查看全部订单</span>
      </div>
      <div class="order_icon">
        <i class="el-icon-s-finance">
          <div>未付款</div>
        </i>
        <i class="el-icon-s-claim">
          <div>待付款</div>
        </i>
        <i class="el-icon-shopping-cart-1">
          <div>已付款</div>
        </i>
        <i class="el-icon-s-comment">
          <div>评论</div>
        </i>
        <i class="el-icon-receiving">
          <div>售后</div>
        </i>
      </div>
    </one-slot>
  </div>
</template>

<script>
  import OneSlot from "@/components/common/oneslot/OneSlot";
  export default {
    name: "Order",
    components:{
      OneSlot
    }
  }
</script>

<style scoped>
  .profile_order{
    width: 95%;
    height: 90px;
    background-color: #d4d2d2;
    margin: 10px auto 0 auto;
    border-radius: 25px;
  }
  .order_text{
    width: 90%;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    border-bottom: 1px solid #666666;
  }
  .order_text span{
    margin-top: 10px;
    font-size: 15px;
  }
  .order_icon{
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
  .order_icon  i{
    margin-top: 5px;
    display: block;
    font-size: 30px;
  }
  .order_icon  i div{
    margin-top: 5px;
    font-size: 14px;
  }
</style>