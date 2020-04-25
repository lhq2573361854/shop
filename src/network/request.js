import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL:'localhost:8080/api/h8',
    timeout:600000
  })
  instance.interceptors.request.use(config =>{
    return config
  })
  instance.interceptors.response.use(res=>{
    return  res.data
  },error => {
    console.log(error)
  })
  return instance(config)
}
