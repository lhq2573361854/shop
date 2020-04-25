<template>
  <div class="perfect">
    <one-slot>
      <div class="perfect-item">
        <i class="el-icon-set-up"></i>
        <span>123123123123</span>
      </div>
      <div class="perfect-item">
        <i class="el-icon-set-up"></i>
        <span>123123123123</span>
      </div>
      <div class="perfect-item">
        <i class="el-icon-set-up"></i>
        <span>123123123123</span>
      </div>
      <div class="perfect-item">
      <i class="el-icon-set-up"></i>
        <span>123123123123</span>
      </div>
      <div class="perfect-item">
        <i class="el-icon-set-up"></i>
        <span>123123123123</span>
      </div>
      <div class="perfect-item">
        <i class="el-icon-set-up"></i>
        <span>123123123123</span>
      </div>
      <div class="perfect-item">
        <i class="el-icon-set-up"></i>
        <span>123123123123</span>
      </div>
      <div class="perfect-item">
        <i class="el-icon-set-up"></i>
        <span>123123123123</span>
      </div>


    </one-slot>
  </div>
</template>

<script>
  import OneSlot from "@/components/common/oneslot/OneSlot";
  export default {
    name: "profect",
    components:{
      OneSlot
    }
  }
</script>

<style scoped>
  .perfect{
    margin-top: 30px;
    font-size: 26px;
  }
  .perfect-item{
    background-color: #cccccc;
    height: 40px;
    border-bottom: 1px solid lavender;
  }

  .perfect-item i{
    position: absolute;
    left: 12px;
    line-height: 40px;
  }
  .perfect-item span{
    display: inline-block;
    position: absolute;
    right: 12px;
    font-size: 20px;
    line-height: 40px;
  }
</style>