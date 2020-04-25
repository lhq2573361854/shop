let mutations = {
  addToCart(state,payload){
    payload.count = 1
    state.cartList.push(payload)
  },
  addCartCount(state,payload){
    payload.count++
  }
}
export default mutations