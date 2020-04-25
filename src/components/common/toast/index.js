import Toast from "@/components/common/toast/Toast";

const obj = {}

obj.install = function(Vue){
  let toastContructor = Vue.extend(Toast);
  let toast = new toastContructor();
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast

}
export default obj