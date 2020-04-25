import Vue from 'vue'
import VueRouter  from 'vue-router'
//import Index from "@/components/Index";
const Home = ()=> import('@/views/home/Home')
// import Car from "@/components/car/Car";
const Cart = ()=>import('@/views/cart/Cart')
// import Menu from "@/components/menu/Menu_Me";
const Category = ()=> import('@/views/category/Category')
// import User from "@/components/user/User";
const Profile = ()=> import('@/views/profile/Profile')

const Detail = () => import('@/views/detail/Detail')
Vue.use(VueRouter)

const routes =[
  {
    path: '',
    redirect:'/home'
  },{
    path: '/home',
    component: Home
  },{
    path: '/profile',
    component: Profile
  },{
    path: '/cart',
    component: Cart
  },{
    path: '/category',
    component: Category
  },{
    path: '/detail/:iid',
    component: Detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history',
})
//前置钩子(fallback)函数hook
// router.beforeEach((to,from,next)=>{
//   document.title = to.meta.title
//   console.log(to)
//   next()
// });

export default router