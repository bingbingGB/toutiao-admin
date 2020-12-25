import Vue from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'

// 全局样式
import './styles/index.less'
// 加载element 样式
import ElementUI from 'element-ui'

// 注册全局element样式
Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
}).$mount('#app')
