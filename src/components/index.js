// 把所有组件都全局化注册
import imageView from '@/components/ImageView/index.vue'
import Sku from '@/components/XtxSku/index.vue'
export const componentPlugin = {
  install(app) {
    app.component('ImageView', imageView);
    app.component('Sku', Sku);
  }
}
