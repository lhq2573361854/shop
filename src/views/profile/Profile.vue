<template>
  <div id="profile">
    <nav-bar class="nav-bar"><div slot="center">我的</div></nav-bar>
    <login></login>
    <order></order>
    <profect></profect>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import Login from "@/views/profile/login/Login";
  import Order from "@/views/profile/order/Order";
  import Profect from "@/views/profile/perfect/Profect";
  export default {
    name: "Profile",
    components: {
      NavBar,
      Login,
      Order,
      Profect
    }
  }
</script>

<style scoped>
  .nav-bar{
    width: 100%;
    background-color: var(--color-tint);
  }
</style>
