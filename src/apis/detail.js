import httpInstance from "@/utils/http.js";

export const getDetailApi = (id) => {
  return httpInstance({
    url: `/goods`,
    params: {
      id
    }
  })
}
export const fetchHotGoodsApi =({id,type,limit=3})=> {
  return httpInstance({
    url: `/goods/hot`,
    params: {
      id,
      type,
      limit
    }
  })
}
