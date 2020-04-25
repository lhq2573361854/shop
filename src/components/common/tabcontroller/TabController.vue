<template>
  <div class="tab-control">
    <div v-for="(item,index) in title"  :key="index" @click="itemClick(index)" class="tab-control-item" :class="{active:currentIndex==index}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabController",
    props:{
      title:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex:0
      }
    },
    methods:{
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabConClick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
  }
  .tab-control-item{
    font-size: 15px;
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .tab-control-item span{
    padding: 5px;
  }
  .active{
    color: var(--color-tint);

  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
  }
</style>