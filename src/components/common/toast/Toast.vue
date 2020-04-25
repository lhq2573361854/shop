<template>
  <div v-show="isShowMessage" class="show">
    <div class="toast">{{message}}</div>
  </div>

</template>

<script>
  export default {
    name: "Toast",
    props:{
    },
    data(){
      return {
        message:'',
        isShowMessage:false
      }
    },
    methods:{
      showMessage(message,duration){
        console.log("-----");
        this.message = message
        this.isShowMessage = true
        setTimeout(()=>{
          this.message = ''
          this.isShowMessage = false
        },duration)
      }
    }
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 70px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: rgba(93, 215, 109, 0.88);
    background-color: rgba(224, 224, 179, 0.2);
    border-radius: 30%;
    z-index: 14;
  }
  .show{
    /*transition: dispaly 2s;*/
  }
</style>