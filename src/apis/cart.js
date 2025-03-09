import httpInstance from "@/utils/http.js";



export const insertCartAPI = ({skuId,count}) => {
  return httpInstance({
    url: '/member/cart',
    method: 'post',
    data:{
      skuId,
      count
    }
  })
}

export const findNewCartListAPI = () => {
  return httpInstance({
    url: '/member/cart',
  })
}

export const delCartAPI = (ids) => {
  return httpInstance({
    url: '/member/cart',
    method: 'delete',
    data:{
      ids//数组
    }

  })
}


export const mergeCartAPI = (data) => {
  return httpInstance({
    url: '/member/cart/merge',
    method: 'POST',
    data
  })
}
