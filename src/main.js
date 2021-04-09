import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$globalVar = 10

app.config.globalProperties.$foo = () => {
    app.config.globalProperties.$globalVar += 10
    console.log("reached here")
}

app.mount("#app")



