import Vue from 'vue'
import App from './App'
import router from './router/router';
import Mint from 'mint-ui';
Vue.use(Mint);

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
