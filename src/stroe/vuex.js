import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "@/stroe/mutations";
import getters from "@/stroe/getters";
import actions from "@/stroe/actions";
import moduleA from "@/stroe/modules/moduleA";
Vue.use(Vuex)
const state = {
  cartList:[]
}
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules:{
    moduleA
  }
})
export default store