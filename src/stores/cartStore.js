import {defineStore} from 'pinia'
import {ref, computed} from 'vue'
import {useUserStore} from './user'
import {insertCartAPI, findNewCartListAPI, delCartAPI} from "@/apis/cart.js";

export const useCartStore = defineStore('cart', () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token) // 判断是否登录

    // 定义state
    const cartList = ref([])
    // 定义action

    //获取购物车
    const updateCartList = async () => {
      const res = await findNewCartListAPI()
      cartList.value = res.result
    }

    const clearCart = () =>{
      cartList.value = []
    }


    const addCart = async (goods) => {
      const {skuId, count} = goods
      console.log(userStore.userInfo.token)
      if (isLogin.value) {
        console.log("登录")
        await insertCartAPI({skuId, count})
        await updateCartList()
      } else {
        console.log("未登录")
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
          item.count++
        } else {
          cartList.value.push(goods)
        }
      }

    }

    const deleteCart = async (skuId) => {
      if (isLogin) {
        await delCartAPI([skuId])
        await updateCartList()
      } else {
        const idx = cartList.value.findIndex((item) => skuId === item.skuId)
        cartList.value.splice(idx, 1)
      }
    }


    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find((item) => skuId === item.skuId)
      item.selected = selected
    }

    const allCheck = (selected) => {
      cartList.value.forEach(item => item.selected = selected)
    }

    //已选择的数量
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))


    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))


    //全选

    const isAll = computed(() => cartList.value.every((item) => item.selected))


    return {
      cartList,
      allCount,
      allPrice,
      isAll,
      selectedCount,
      selectedPrice,
      addCart,
      deleteCart,
      singleCheck,
      allCheck,
      clearCart,
      updateCartList
    }
  },

  {
    persist: true,
  })
