import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {getCategoryApi} from "@/apis/category.js";


export function useCategory() {
  const router = useRoute();

  const categoryData = ref({})
  const getCategory = async (id=router.params.id) => {
    const res = await getCategoryApi(id)
    categoryData.value = res.result
    console.log( categoryData.value)
  }
  onMounted(() => {
    getCategory()
  })

  onBeforeRouteUpdate((to)=>{
    getCategory(to.params.id)
  })

  return {
    categoryData
  }
}
