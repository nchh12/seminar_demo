import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$globalVar = 10

Vue.prototype.$foo = () => {
    Vue.prototype.$globalVar += 10
    console.log("reached here")
}

new Vue({
  render: h => h(App),
}).$mount('#app')


