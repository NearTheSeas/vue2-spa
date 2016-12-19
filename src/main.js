import Vue from 'vue'
import Resource from 'vue-resource'
import NProgress from 'nprogress'
import App from './app'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// Import style sheets
import 'normalize.css/normalize.css'
import 'nprogress/nprogress.css'
import 'font-awesome/css/font-awesome.css'
import './assets/css/base.css'

import './assets/scss/global.scss'

// Use plugins
Vue.use(Resource)
Vue.http.options.emulateJSON = true

// 引入MIUI
Vue.use(MintUI)

// 路由跳转时的动画
// start
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

// end
router.afterEach(route => {
  NProgress.done()
})

// Root app
const app = new Vue({
  name: 'root',
  router: router,
  render: h => h(App)
})

// Mount to #app element
app.$mount('#app')
