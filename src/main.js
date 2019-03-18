import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import uploader from 'vue-simple-uploader'
Vue.config.productionTip = false
Vue.use(uploader)
$(".div").text("服务器未响应或未连接服务器 \n 无资源");
new Vue({
  router,
  store,
  render(createElement) {
    return createElement(App)
  }
}).$mount('#app')
