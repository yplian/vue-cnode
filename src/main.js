import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
// 引入element-ui
import ElementUI from 'element-ui';
// 引入 Tool
import Tool from './utils'
// 引入 http
import api from './http'
// import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/element-variables.scss'
// 字体图标文字
import './assets/font/iconfont.css'
// markdown css
import 'github-markdown-css'
// 自定义公共样式
import './assets/css/base.css'

Vue.config.productionTip = false

// 配置组件默认大小，弹窗z-index
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
// Vue.use(ElementUI)
Vue.use(api)

// 处理刷新后vuex状态
if (Tool.localItem('userKey')) {
  store.dispatch('setUserInfo', JSON.parse(Tool.localItem('userKey')));
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
