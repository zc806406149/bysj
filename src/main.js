import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
import VueParticles from 'vue-particles'
import router from './router'
Vue.use(VueParticles)
