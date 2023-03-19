import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'



// createApp(App).mount('#app')

// const app = createApp(App)
// app.use(router)
// app.mount('#app')
// new Vue({
//     router,
//     render: h => h(App)
// }).$mount('#app')

createApp(App).use(router).mount('#app')
