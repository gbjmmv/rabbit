import httpInstance from "@/utils/http.js";

export function getBannerApi(params={}) {
  const {distributionSite = '1'} = params;
  return httpInstance({
    url: '/home/banner',
    params:{
      distributionSite
    }
  })
}



export function getNewApi() {
  return httpInstance({
    url: '/home/new',
  })
}

export function getHotApi() {
  return httpInstance({
    url: '/home/hot',
  })
}

export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}
