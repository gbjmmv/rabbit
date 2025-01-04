<script setup>
import HomeBanner from '@/views/home/compenents/HomeBanner.vue'
import HomeNew from '@/views/home/compenents/HomeNew.vue'
import HomeHot from '@/views/home/compenents/HomeHot.vue'
import HomeProduct from '@/views/home/compenents/HomeProduct.vue'
import HomeCategory from '@/views/home/compenents/HomeCategory.vue'

</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />

</template>
