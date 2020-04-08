import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import storeData from './store'

Vue.use(Vuex)
const store = new Vuex.Store(storeData)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
