import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/stroe/vuex";
import Toast from "@/components/common/toast";
import fastclick from 'fastclick'
import lozyload from 'vue-lazyload'

Vue.config.productionTip = false

fastclick.attach(document.body)

Vue.use(Toast)
Vue.use(lozyload,{
  loading:require('@/assets/img/common/placeholder.png')
})//图片的懒加载
Vue.prototype.$bus = new Vue()


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
