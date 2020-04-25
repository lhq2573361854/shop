<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import Vue from 'vue';
  import ElementUI from 'element-ui';
  import MainTabBar from "@/components/content/mainTabbar/MainTabBar";
  import 'element-ui/lib/theme-chalk/index.css'
  Vue.use(ElementUI);
  export default {
    name: 'App',
    data(){
      return {
      }
    },
    methods:{
    },
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
