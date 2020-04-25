<template>
  <div id="login">
    <one-slot>
      <div class="login-wrapper">
        <div class="login-img"></div>
        <div class="login-text" @click="login_check">登录/注册></div>
      </div>
    </one-slot>
  </div>
</template>

<script>
  import OneSlot from "@/components/common/oneslot/OneSlot";
  export default {
    name: "Login",
    components:{
      OneSlot
    },
    methods:{
      login_check(){
        console.log(123)
      }
    }
  }
</script>

<style scoped>
  .login-wrapper{
    display: flex;
    border-bottom: 1px solid #a3a3a5;
    padding:  5px 0 5px 10px ;
  }
  .login-img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #a3a3a5;
  }
  .login-text{
    align-items: center;
    margin-left: 20px;
    margin-top: 20px;
  }
</style>