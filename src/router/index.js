// createRouter, createWebHistory创建路由实例

import {createRouter, createWebHistory} from 'vue-router'

import login from "@/views/login/index.vue"
import layout from "@/views/layout/index.vue"
import home from "@/views/home/index.vue"
import category from "@/views/category/index.vue"
import SubCategory from"@/views/SubCategory/index.vue"
import Detail from "@/views/Detail/index.vue"
import cartList from "@/views/cartList/index.vue"
import CheckOut from"@/views/CheckOut/index.vue"
import Pay from "@/views/Pay/index.vue"
import Member from '@/views/Member/index.vue'
import MemberInfo from '@/Member/components/UserInfo.vue'
import MemberOrder from '@/Member/components/UserOrder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 配置path and component
  routes: [
    {
      path: "/",
      component: layout,
      children: [
        {
          path: "",
          component: home,
        },
        {
          path: "category/:id",
          component: category,
        },
        {
          path: "category/sub/:id",
          component: SubCategory,
        },
        {
          path: "detail/:id",
          component: Detail,
        },
        {
          path: "cartList",
          component: cartList,
        },
        {
          path: "checkout",
          component: CheckOut,
        },
        {
          path: "pay",
          component: Pay,
        },
        {
          path: "member",
          component: Member,
          children: [
            {
              path: 'user',
              component: MemberInfo
            },
            {
              path: 'order',
              component: MemberOrder
            }
          ]
        },

      ]
    },
    {
      path: "/login",
      component: login,
    },

  ],
  scrollBehavior: () => {
    return {
      top:0
    }
  },
})

export default router
