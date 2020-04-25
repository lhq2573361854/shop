let actions = {
  addToCart(context,payload){
    return new Promise((resolve)=>{
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct){
        context.commit('addCartCount',oldProduct)
        resolve('数量加一')
      } else{
        context.commit('addToCart',payload)
        resolve('添加商品')
      }

    })


  }
}
export default actions