<template>
  <div>
    <div class="icon-selector" :class="{'active': checked}"  @click="selectItem">
      <img src="../../../assets/img/cart/tick.svg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        checked:this.value
      }
    },
    methods: {
      selectItem: function () {
        // console.log("this.value = "+this.value);
        this.$emit('checkBtnClick')
      }
    },
    watch: {
      value: function (newValue) {

        this.checked = newValue
        // console.log("newValue= "+newValue+"  "+"oldValue = "+oldValue)
        // console.log(this.checked)
      }
    }
  }
</script>

<style scoped>
  .icon-selector {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }
  .active {
    background-color: #ff8198;
    border-color: #ff8198;
  }
</style>