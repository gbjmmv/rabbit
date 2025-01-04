<script setup>
import LayoutNav from './components/layoutNav.vue'
import LayoutHeader from './components/layoutHeader.vue'
import LayoutFooter from './components/layoutFooter.vue'
import LayoutFixed from './components/layoutFixed.vue'
// 触发
import {useCategoryStore} from "@/stores/category.js";
import {onMounted} from "vue";

const CategoryStore = useCategoryStore()

onMounted(() => {
  CategoryStore.getCategory()
})

</script>

<template>

  <LayoutFixed/>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>
