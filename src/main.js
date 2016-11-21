import Vue from 'vue'
import App from './App'
import router from './router/router';



/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
