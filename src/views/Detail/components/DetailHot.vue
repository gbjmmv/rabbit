<script setup>
import {fetchHotGoodsApi} from "@/apis/detail.js"
import {onMounted, ref,computed} from 'vue'
import {useRoute} from 'vue-router'


const props = defineProps({
  hotType: {
    type: Number,
  }
})
const route = useRoute()

const HotGoodData = ref([])
const getHotGoodData = async () => {
  const res = await fetchHotGoodsApi({
    id: route.params.id,
    type: props.hotType
  })
  HotGoodData.value = res.result
}


const title = computed(() => {
    if (props.hotType===1){
      return "24小时热榜"
    } else {
      return "周热榜"
    }
  }
)
onMounted(() => {
  getHotGoodData()
})


</script>


<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in HotGoodData" :key="item.id">
      <img :src="item.picture" alt=""/>
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>
