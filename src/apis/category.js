import httpInstance from "@/utils/http.js";

export const getCategoryApi = (id) => {
  return httpInstance({
    url: '/category',
    params: {
      id
    }
  })

}

export const getCategoryFilterAPI = (id) => {
  return httpInstance({
    url:'/category/sub/filter',
    params:{
      id
    }
  })
}

export const getSubCategoryAPI = (data) => {
  return httpInstance({
    url:'/category/goods/temporary',
    method:'POST',
    data

  })
}
