import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

App.config.globalProperties.$globalVar = 10
