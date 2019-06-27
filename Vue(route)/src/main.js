// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import hell from './hell'
import router from './router'    //引入路由器


Vue.component("app-hell",hell)


Vue.config.productionTip = false           //阻止启动产生消息，也就是报错，一般关闭阻止

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App },
  template: '<App/>',
  router,
})
