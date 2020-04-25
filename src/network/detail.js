import {request} from "@/network/request"
export function getDetail(iid){
  return  request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getCommend(){
  return  request({
    url:'/recommend',
  })
}
export class Good {
  constructor(itemInfo,columns,service) {
    this.desc = itemInfo.desc;
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = service
    this.discountBgColor = itemInfo.discountBgColor
    this.newPrice = itemInfo.price
    this.title = itemInfo.title
    this.realPrice = itemInfo.lowNowPrice
    this.checked = false
  }
}