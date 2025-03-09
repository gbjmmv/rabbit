<template>
  <view class="container">
    <view>!!!!!</view>
    <view class="layout">
      <view class="box" v-for="(item,index) in catInfo" :key="item.id">
        <view class="pic">
          <image lazy-load :src="item.url" mode='widthFix' @click="preview(index)"></image>
        </view>
        <view class="text">{{ item.content }}</view>
        <view class="authorText">---author:{{ item.author }}</view>
      </view>
    </view>
  </view>
</template>

<script setup>
import {
  onReachBottom,
  onPullDownRefresh
} from '@dcloudio/uni-app'

const catInfo = ref([])
const preview = (index) => {
  let urls = catInfo.value.map((item) => {
    return item.url
  })

  uni.previewImage({
    urls: urls,
    current: index
  })
}

const getCatPic = (option) => {
  uni.request({
    url: 'https://tea.qingnian8.com/tools/petShow',
    method: 'GET',
    data: {
      size: 10
    },
    success: res => {
      if (option === 1) {
        catInfo.value = [...catInfo.value, ...res.data.data]
      } else {
        catInfo.value = res.data.data
        uni.stopPullDownRefresh()
      }

    }
  });
}


onReachBottom(() => {
  getCatPic(1)
})


onPullDownRefresh(() => {
  getCatPic(0)
})
</script>

<style lang='scss' scoped>
.container {
  .layout {
    padding: 50rpx;

    .box {

      margin-bottom: 100rpx;
      box-shadow: 0 20rpx 50rpx rgba(0, 0, 0, 0.5);
      border: 1px solid black;
      border-radius: 5%;
      overflow: hidden;

      .authorText {
        padding: 10px 20px;
        text-align: right;
      };
      .pic {
        image {
          width: 100%
        }
      };
      .text {
        padding: 10px 20px
      }
    }
  }
}
</style>
