// 封装用户相关的函数

import httpInstance from "@/utils/http.js";

export const loginAPI = ({account,password}) => {
  return httpInstance({
    url: "/login",
    method: "POST",
    data: {
      account,
      password
    }
  })
}

export const getLikeListAPI = ({ limit = 4 }) => {
  return httpInstance({
    url:'/goods/relevant',
    params: {
      limit
    }
  })
}
