import httpInstance from "@/utils/http.js";





export const getCheckInfoApi = () => {
  return httpInstance({
    url: '/member/order/pre',
  })

}

export const createOrderApi = (data) => {
  return httpInstance({
    url: '/member/order',
    method: 'POST',
    data
  })

}
