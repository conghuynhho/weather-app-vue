import Vue from 'vue'
import WeatherApp from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(WeatherApp),
}).$mount('#app')
